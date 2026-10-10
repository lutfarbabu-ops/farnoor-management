'use strict';
let dataRevision=0,dataReady=false,dataSaving=false,dataChanged=false,dataLoadInFlight=false,dataForceAfterLoad=false;
const dataStatus=text=>{const node=$('#saveStatus');if(node)node.textContent=text;};
async function dataRequest(options={}){const response=await FarnoorAPI.request('/api/workspace',{...options,credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json'}});if(response.status===401){sessionActive=false;FarnoorAPI.go('login.html');throw Error('Please log in.');}const body=await response.json();if(!response.ok){const error=Error(body.error||'Server unavailable.');error.status=response.status;throw error;}return body;}
async function loadData(force=false){
 if(dataSaving)return;
 if(dataLoadInFlight){dataForceAfterLoad=dataForceAfterLoad||force;return;}
 dataLoadInFlight=true;
 try{
  const body=await dataRequest();
  // A slow read started before a save must never replace its newer result.
  if(body.revision<dataRevision)return;
  const permissionsChanged=FarnoorAccess.apply(body.access);
  if(dataReady&&!force&&!permissionsChanged&&body.revision===dataRevision){dataStatus('Saved online');return;}
  const readOnly=!document.querySelector('dialog[open]')&&(!activePage||activePage.endsWith('-report'));
  if(dataReady&&!force&&!permissionsChanged&&!readOnly){dataChanged=true;dataStatus('New data available · Refresh');return;}
  state=validateState(body.state);dataRevision=body.revision;dataReady=true;dataChanged=false;sessionActive=true;
  window.FarnoorPresence?.heartbeat();$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();
  if(adminView)renderAdminView();else if(activePage)renderPage();else renderOverview();dataStatus('Saved online');
 }catch(error){dataStatus('Connection unavailable');$('#dataLoadingMessage').textContent=error.message;toast(error.message);}
 finally{dataLoadInFlight=false;if(dataForceAfterLoad){dataForceAfterLoad=false;void loadData(true);}}
}
async function commit(next){if(!dataReady){toast('Wait for saved data to load.');return false;}if(dataSaving){toast('A save is already in progress.');return false;}if(dataChanged){toast('Another window changed the data. Copy unsaved inputs, then Refresh and review before saving.');return false;}dataSaving=true;$('#workspace').inert=true;dataStatus('Saving…');try{validateState(next);const result=await dataRequest({method:'PUT',payload:{state:next,revision:dataRevision,accessRevision:accessInfo.revision}});state=next;dataRevision=result.revision;renderProfile();dataStatus('Saved online');return true;}catch(error){if(error.status===409){dataChanged=true;dataStatus('New data available · Refresh');}else dataStatus('Not saved · Retry');toast(error.message+' Your input is retained.');return false;}finally{dataSaving=false;$('#workspace').inert=false;}}
$('#logout').onclick=async()=>{try{const response=await FarnoorAPI.request('/api/auth/logout',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({presenceId:window.FarnoorPresence?.id})});if(!response.ok)throw Error();sessionActive=false;FarnoorAPI.go('login.html');}catch{toast('Could not log out. Please try again.');}};
$('#refreshData').onclick=()=>{if(confirm('Refresh saved data? Copy any unsaved inputs first.'))loadData(true);};
$('#retryData').onclick=()=>loadData(true);
setInterval(()=>{if(!document.hidden&&dataReady&&!dataSaving)loadData();},120000);
loadData(true);
