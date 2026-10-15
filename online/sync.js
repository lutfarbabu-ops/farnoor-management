'use strict';
let dataSavedState=null;
let dataRevision=0,dataReady=false,dataSaving=false,dataChanged=false,dataLoadInFlight=false,dataForceAfterLoad=false,dataCached=false,dataCacheUserId=FarnoorAPI.sessionUserId();
const dataStatus=text=>{for(const selector of ['#saveStatus','#entrySaveStatus']){const node=$(selector);if(node)node.textContent=text;}};
async function dataRequest(options={}){const {route='/api/workspace',...requestOptions}=options;const startup=route==='/api/workspace'&&!requestOptions.method?FarnoorAPI.takeWorkspaceStartup?.():null;const started=startup?await startup:null;if(started?.error)throw started.error;const response=started?.response||await FarnoorAPI.request(route,{...requestOptions,credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json'}});if(response.status===401){sessionActive=false;if(!dataReady&&!dataCached){FarnoorAPI.go('login.html');}const error=Error('Your session expired. Copy your unsaved entries and log in again.');error.status=401;throw error;}const body=await response.json();if(!response.ok){const error=Error(body.error||'Server unavailable.');error.status=response.status;throw error;}return body;}
function cacheLock(locked){$('#main').inert=locked;for(const selector of ['#superAdminButton','#profileButton','#backup','#restoreButton'])$(selector).disabled=locked;$('#workspaceRefreshNotice').hidden=!locked;}
async function warmWorkspace(){try{if(!dataCacheUserId)return;const cached=await FarnoorWorkspaceCache.read(dataCacheUserId);if(!cached||dataReady)return;const response=await FarnoorAPI.request('/api/auth/status');if(!response.ok)return;const auth=await response.json();if(!auth.authenticated||auth.user?.role!=='super_admin'||auth.user.id!==dataCacheUserId||dataReady||dataSaving)return;state=cached.state;dataRevision=cached.revision;dataCached=true;sessionActive=true;FarnoorAccess.apply(cached.access);$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();renderOverview();cacheLock(true);dataStatus('Checking latest saved data…');}catch{/* Online load remains the source of truth. */}}
async function loadData(force=false){
 if(dataSaving)return;
 if(dataLoadInFlight){dataForceAfterLoad=dataForceAfterLoad||force;return;}
 dataLoadInFlight=true;$('#dataLoadingMessage').hidden=true;$('#retryData').hidden=true;
 try{
  const body=await dataRequest();
  // A slow read started before a save must never replace its newer result.
  if(dataReady&&body.revision<dataRevision)return;
  const permissionsChanged=FarnoorAccess.apply(body.access);
  if(dataReady&&!force&&!permissionsChanged&&body.revision===dataRevision){dataStatus('Saved online');return;}
  const readOnly=!document.querySelector('dialog[open]')&&(!activePage||activePage.endsWith('-report'));
  if(dataReady&&!force&&!permissionsChanged&&!readOnly){dataChanged=true;dataStatus('New data available · Refresh');return;}
  state=validateState(body.state);dataSavedState=structuredClone(state);dataRevision=body.revision;dataReady=true;dataCached=false;dataChanged=false;sessionActive=true;cacheLock(false);void FarnoorWorkspaceCache.write(dataCacheUserId,body);
  window.FarnoorPresence?.heartbeat();$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();
  if(adminView)renderAdminView();else if(activePage)renderPage();else renderOverview();dataStatus('Saved online');
 }catch(error){if(dataCached)$('#workspaceRefreshNotice').textContent='Latest data is unavailable. Showing previous data; saving is disabled. Use Refresh data to retry.';dataStatus('Connection unavailable');$('#dataLoadingMessage').textContent=error.message;toast(error.message);}
 finally{dataLoadInFlight=false;if(dataForceAfterLoad){dataForceAfterLoad=false;void loadData(true);}}
}
async function commit(next,saveOptions={}){if(!dataReady){toast('Wait for saved data to load.');return false;}if(dataSaving){toast('A save is already in progress.');return false;}if(dataChanged){toast('Another window changed the data. Copy unsaved inputs, then Refresh and review before saving.');return false;}dataSaving=true;$('#workspace').inert=true;dataStatus('Saving…');try{validateState(next);const changes=workspaceChanges(dataSavedState||state,next);if(!changes.length){dataStatus('Already saved');return true;}const compact=changes.length<=5000&&JSON.stringify(changes).length<JSON.stringify(next).length*.75;const result=await dataRequest(saveOptions.orderFile?{route:'/api/order/save',method:'POST',payload:{file:saveOptions.orderFile,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.emailGroup?{route:'/api/admin/email/save',method:'POST',payload:{group:saveOptions.emailGroup,contacts:next.emailContacts[saveOptions.emailGroup],revision:dataRevision}}:saveOptions.storeFile?{route:'/api/store/save',method:'POST',payload:{file:saveOptions.storeFile,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.bookingFile?{route:'/api/booking/save',method:'POST',payload:{file:saveOptions.bookingFile,revision:dataRevision,accessRevision:accessInfo.revision}}:compact?{route:'/api/workspace/changes',method:'POST',payload:{changes,revision:dataRevision,accessRevision:accessInfo.revision}}:{method:'PUT',payload:{state:next,revision:dataRevision,accessRevision:accessInfo.revision}});state=next;dataSavedState=structuredClone(next);dataRevision=result.revision;void FarnoorWorkspaceCache.write(dataCacheUserId,{state,access:accessInfo,revision:dataRevision});renderProfile();dataStatus('Saved online');return true;}catch(error){if(error.status===409){dataChanged=true;dataStatus('New data available · Refresh');}else dataStatus('Not saved · Retry');toast(error.message+' Your input is retained.');return false;}finally{dataSaving=false;$('#workspace').inert=false;}}
$('#logout').onclick=async()=>{try{const response=await FarnoorAPI.request('/api/auth/logout',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({presenceId:window.FarnoorPresence?.id})});if(!response.ok)throw Error();sessionActive=false;await FarnoorWorkspaceCache.clear();FarnoorAPI.go('login.html');}catch{toast('Could not log out. Please try again.');}};
$('#refreshData').onclick=()=>{if(confirm('Refresh saved data? Copy any unsaved inputs first.'))loadData(true);};
$('#retryData').onclick=()=>loadData(true);
setInterval(()=>{if(!document.hidden&&dataReady&&!dataSaving)loadData();},120000);
void warmWorkspace();
loadData(true);

