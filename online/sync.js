'use strict';
let dataSavedState=null,dataStartupRetries=0;
let dataRevision=0,dataReady=false,dataSaving=false,dataChanged=false,dataLoadInFlight=false,dataForceAfterLoad=false,dataCached=false,dataCacheUserId=FarnoorAPI.sessionUserId();
const dataStatus=text=>{for(const selector of ['#saveStatus','#entrySaveStatus']){const node=$(selector);if(node)node.textContent=text;}};
async function dataRequest(options={}){const {route='/api/workspace',...requestOptions}=options;const startup=route==='/api/workspace'&&!requestOptions.method?FarnoorAPI.takeWorkspaceStartup?.():null;const started=startup?await startup:null;if(started?.error)throw started.error;const response=started?.response||await FarnoorAPI.request(route,{...requestOptions,credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json'}});if(response.status===401){sessionActive=false;if(!dataReady&&!dataCached){FarnoorAPI.go('login.html');}const error=Error('Your session expired. Copy your unsaved entries and log in again.');error.status=401;throw error;}let body=await response.json();if(response.ok&&body.unchanged){const cached=started?.cached;if(!cached||cached.userId!==FarnoorAPI.sessionUserId()||cached.revision!==body.revision||body.access?.role!=='super_admin')throw Error('Cached data could not be verified. Refresh to retry.');body={revision:body.revision,access:body.access,state:{...cached.state,profile:body.profile}};}if(!response.ok){const error=Error(body.error||'Server unavailable.');error.status=response.status;throw error;}return body;}
function cacheLock(locked){$('#main').inert=locked;for(const selector of ['#superAdminButton','#profileButton','#backup','#restoreButton'])$(selector).disabled=locked;$('#workspaceRefreshNotice').hidden=!locked;}
async function warmWorkspace(){try{if(!dataCacheUserId)return;const cached=await FarnoorWorkspaceCache.read(dataCacheUserId);if(!cached||dataReady)return;const response=await FarnoorAPI.request('/api/auth/status');if(!response.ok)return;const auth=await response.json();if(!auth.authenticated||auth.user?.role!=='super_admin'||auth.user.id!==dataCacheUserId||dataReady||dataSaving)return;state=cached.state;dataRevision=cached.revision;dataCached=true;sessionActive=true;FarnoorAccess.apply(cached.access);$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();renderOverview();cacheLock(true);dataStatus('Checking latest saved data…');}catch{/* Online load remains the source of truth. */}}
async function loadData(force=false){
 if(dataSaving)return;
 if(dataLoadInFlight){dataForceAfterLoad=dataForceAfterLoad||force;return;}
 dataLoadInFlight=true;$('#dataLoadingMessage').hidden=true;$('#retryData').hidden=true;
 try{
  const body=await dataRequest();
  if(dataSaving)return;
  // A slow read started before a save must never replace its newer result.
  if(dataReady&&body.revision<dataRevision)return;
  const permissionsChanged=FarnoorAccess.apply(body.access);
  if(dataReady&&!force&&!permissionsChanged&&body.revision===dataRevision){dataStatus('Saved online');return;}
  const readOnly=!document.querySelector('dialog[open]')&&(!activePage||activePage.endsWith('-report'));
  if(dataReady&&!force&&!permissionsChanged&&!readOnly){dataChanged=true;dataStatus('New data available · Refresh');return;}
  dataStartupRetries=0;state=validateState(body.state);dataSavedState=structuredClone(state);dataRevision=body.revision;dataReady=true;dataCached=false;dataChanged=false;sessionActive=true;cacheLock(false);void FarnoorWorkspaceCache.write(dataCacheUserId,body);
  window.FarnoorPresence?.heartbeat();$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();
  if(adminView)renderAdminView();else if(activePage)renderPage();else renderOverview();dataStatus('Saved online');
 }catch(error){if(dataCached)$('#workspaceRefreshNotice').textContent='Latest data is unavailable. Showing previous data; saving is disabled. Use Refresh data to retry.';dataStatus('Connection unavailable');$('#dataLoadingMessage').textContent=error.name==='TimeoutError'||error.name==='AbortError'?'সংযোগে সময় বেশি লাগছে। Retry চাপুন।':error.message;$('#dataLoadingMessage').hidden=false;$('#retryData').hidden=false;toast(error.message);if(!dataReady&&![401,403].includes(error.status)&&dataStartupRetries<3){dataStartupRetries++;if(dataCached)$('#workspaceRefreshNotice').textContent='সর্বশেষ ডাটা আনা হচ্ছে—সংযোগ আবার চেষ্টা চলছে। ডাটা আসা পর্যন্ত Save বন্ধ থাকবে।';setTimeout(()=>void loadData(true),Math.min(1500*2**(dataStartupRetries-1),6000));}}
 finally{dataLoadInFlight=false;if(dataForceAfterLoad){dataForceAfterLoad=false;void loadData(true);}}
}
// A changed workspace must not block an untouched Personal file. Rebase only
// this record after an authenticated read, then keep the server revision guard.
function personalSaveCanonical(value){if(Array.isArray(value))return value.map(personalSaveCanonical);if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(key=>[key,personalSaveCanonical(value[key])]));return value;}
function personalSaveSame(a,b){return JSON.stringify(personalSaveCanonical(a))===JSON.stringify(personalSaveCanonical(b));}
function personalSaveKind(row){return ['maternityBenefit','serviceBenefit','warningBenefit'].find(key=>row?.[key]===true)||'personalFile';}
function personalSaveCard(row){return String(row?.personalEntry?.['field-0']||row?.reference||'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)).trim().toLowerCase();}
function personalSaveConflict(message){const error=Error(message);error.status=409;return error;}
function personalSavePrepareRebase(body,file,original,minimumRevision){
 if(!body?.state?.records||!body.access||!Number.isSafeInteger(body.revision)||body.revision<minimumRevision)throw Error('সর্বশেষ ডাটা যাচাই করা যায়নি। লেখা রাখা আছে—আবার Save চাপুন।');
 const latest=validateState(body.state),rows=(latest.records['admin-documents']||[]).slice(),current=rows.find(row=>row.id===file.id),kind=personalSaveKind(file);
 if(current&&(!current.personalFile||personalSaveKind(current)!==kind||current.deletedAt))throw personalSaveConflict('এই ফাইলটি বদলে গেছে। আপনার লেখা রাখা আছে; সর্বশেষ ফাইলের সঙ্গে মিলিয়ে নিন।');
 if(!personalSaveSame(current,file)){
  if(original&&!personalSaveSame(current,original))throw personalSaveConflict('এই একই ফাইল অন্য জায়গা থেকে পরিবর্তন বা ডিলিট করা হয়েছে। আপনার লেখা রাখা আছে; সর্বশেষ ফাইলের সঙ্গে মিলিয়ে নিন।');
  if(!original&&current)throw personalSaveConflict('এই ফাইল ইতিমধ্যে সেভ হয়েছে। আপনার লেখা রাখা আছে; সেভ করা ফাইলটি মিলিয়ে নিন।');
  if(!original&&!current&&rows.some(row=>row.personalFile&&!row.deletedAt&&personalSaveKind(row)===kind&&personalSaveCard(row)===personalSaveCard(file)))throw personalSaveConflict('এই কার্ড নম্বরে অন্য জায়গা থেকে একটি ফাইল সেভ হয়েছে। আপনার লেখা রাখা আছে; আগে সেই ফাইলটি মিলিয়ে নিন।');
 }
 if(current)rows[rows.indexOf(current)]=structuredClone(file);else rows.unshift(structuredClone(file));
 return {...latest,records:{...latest.records,'admin-documents':rows}};
}
// Scoped Personal saves are validated by the server; the ordinary fast path
// still makes one request and never walks unrelated employee records.
async function commit(next,saveOptions={}){
 if(!dataReady){toast('Wait for saved data to load.');return false;}
 if(dataSaving){toast('A save is already in progress.');return false;}
 const personalRecord=saveOptions.personalFile;
 if(dataChanged&&!personalRecord){toast('Another window changed the data. Copy unsaved inputs, then Refresh and review before saving.');return false;}
 const original=personalRecord?(dataSavedState||state).records['admin-documents']?.find(row=>row.id===personalRecord.id):undefined;
 const baseline=original?structuredClone(original):undefined;
 let expectedRevision=dataRevision,rebased=false;
 dataSaving=true;$('#workspace').inert=true;dataStatus('Saving…');
 try{
  const scopedPersonal=!!personalRecord||!!saveOptions.serviceBenefitDelete;
  let changes=[],compact=false;
  if(!scopedPersonal&&!saveOptions.hourlyOutput&&!saveOptions.hourlyDelete){validateState(next);changes=workspaceChanges(dataSavedState||state,next);if(!changes.length){dataStatus('Already saved');return true;}compact=changes.length<=5000&&JSON.stringify(changes).length<JSON.stringify(next).length*.75;}
  const rebase=async()=>{
   dataStatus('সর্বশেষ ডাটা মিলিয়ে সেভ হচ্ছে…');
   const body=await dataRequest();
   const prepared=personalSavePrepareRebase(body,personalRecord,baseline,dataRevision);
   FarnoorAccess.apply(body.access);
   if(!FarnoorAccess.canAction('admin-documents','edit')){const error=Error('বর্তমানে এই ফাইল সেভের অনুমতি নেই। আপনার লেখা রাখা আছে।');error.status=403;throw error;}
   next=prepared;expectedRevision=body.revision;rebased=true;
  };
  if(personalRecord&&dataChanged)await rebase();
  const request=()=>saveOptions.hourlyDelete?{route:'/api/hourly-output/delete',method:'POST',payload:{id:saveOptions.hourlyDelete,revision:expectedRevision,accessRevision:accessInfo.revision}}:saveOptions.hourlyOutput?{route:'/api/hourly-output/save',method:'POST',payload:{file:saveOptions.hourlyOutput,order:next.records.output.map(row=>row.id),revision:expectedRevision,accessRevision:accessInfo.revision}}:saveOptions.serviceBenefitDelete?{route:'/api/service-benefit/delete',method:'POST',payload:{id:saveOptions.serviceBenefitDelete,revision:expectedRevision,accessRevision:accessInfo.revision}}:saveOptions.employeeFile?{route:'/api/employee/save',method:'POST',payload:{file:saveOptions.employeeFile,original:saveOptions.employeeOriginal,revision:expectedRevision,accessRevision:accessInfo.revision}}:personalRecord?{route:'/api/personal/save',method:'POST',payload:{file:personalRecord,revision:expectedRevision,accessRevision:accessInfo.revision}}:saveOptions.orderFile?{route:'/api/order/save',method:'POST',payload:{file:saveOptions.orderFile,revision:expectedRevision,accessRevision:accessInfo.revision}}:saveOptions.emailGroup?{route:'/api/admin/email/save',method:'POST',payload:{group:saveOptions.emailGroup,contacts:next.emailContacts[saveOptions.emailGroup],revision:expectedRevision}}:saveOptions.storeFile?{route:'/api/store/save',method:'POST',payload:{file:saveOptions.storeFile,revision:expectedRevision,accessRevision:accessInfo.revision}}:saveOptions.bookingFile?{route:'/api/booking/save',method:'POST',payload:{file:saveOptions.bookingFile,revision:expectedRevision,accessRevision:accessInfo.revision}}:compact?{route:'/api/workspace/changes',method:'POST',payload:{changes,revision:expectedRevision,accessRevision:accessInfo.revision}}:{method:'PUT',payload:{state:next,revision:expectedRevision,accessRevision:accessInfo.revision}};
  let result;
  try{result=await dataRequest(request());}
  catch(error){if(!personalRecord||error.status!==409||rebased)throw error;await rebase();result=await dataRequest(request());}
  if(saveOptions.hourlyOutput&&result.savedId!==saveOptions.hourlyOutput.id)throw Error('Save was not confirmed. Your input is retained.');
  if(saveOptions.hourlyDelete&&result.deletedId!==saveOptions.hourlyDelete)throw Error('Delete was not confirmed. Refresh and retry.');
  if(saveOptions.serviceBenefitDelete&&result.deletedId!==saveOptions.serviceBenefitDelete)throw Error('Delete was not confirmed. Refresh and retry.');
  state=next;
  dataSavedState=saveOptions.hourlyDelete&&dataSavedState?{...dataSavedState,records:{...dataSavedState.records,output:structuredClone(next.records.output)}}:rebased?structuredClone(next):scopedPersonal&&dataSavedState?{...dataSavedState,records:{...dataSavedState.records,'admin-documents':structuredClone(next.records['admin-documents']||[])}}:structuredClone(next);
  dataRevision=result.revision;dataChanged=false;
  void FarnoorWorkspaceCache.write(dataCacheUserId,{state,access:accessInfo,revision:dataRevision});renderProfile();dataStatus('Saved online');return true;
 }catch(error){
  if(error.status===409){dataChanged=true;dataStatus('ডাটা পরিবর্তিত হয়েছে · লেখা রাখা আছে');}else dataStatus('Not saved · Retry');
  toast(error.message+(personalRecord?' আপনার লেখা রাখা আছে।':' Your input is retained.'));return false;
 }finally{dataSaving=false;$('#workspace').inert=false;}
}
$('#logout').onclick=async()=>{try{const response=await FarnoorAPI.request('/api/auth/logout',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({presenceId:window.FarnoorPresence?.id})});if(!response.ok)throw Error();sessionActive=false;await FarnoorWorkspaceCache.clear();FarnoorAPI.go('login.html');}catch{toast('Could not log out. Please try again.');}};
$('#refreshData').onclick=()=>{if(accessInfo.role!=='super_admin')return toast('Super Admin access is required.');if(confirm('Refresh saved data? Copy any unsaved inputs first.'))loadData(true);};
$('#retryData').onclick=()=>loadData(true);
setInterval(()=>{if(!document.hidden&&(dataReady||dataCached)&&!dataSaving)loadData();},120000);
// Startup cache is used only after a fresh server revision and access check.
loadData(true);

