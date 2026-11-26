'use strict';
(async function warmAuthorizedMemberCache(){
 try{
  const userId=dataCacheUserId;
  if(!userId||dataReady||dataSaving)return;
  const candidate=await FarnoorWorkspaceCache.read(userId);
  if(!candidate||candidate.access?.role==='super_admin'||dataReady||dataSaving)return;
  const response=await FarnoorAPI.request('/api/auth/status');
  if(!response.ok)return;
  const auth=await response.json();
  if(!auth.authenticated||auth.user?.id!==userId||!auth.access||dataReady||dataSaving)return;
  const cached=await FarnoorWorkspaceCache.read(userId,auth.access);
  if(!cached||dataReady||dataSaving)return;
  state=cached.state;
  dataRevision=cached.revision;
  dataCached=true;
  sessionActive=true;
  FarnoorAccess.apply(auth.access);
  $('#workspace').inert=false;
  $('#dataLoading').hidden=true;
  renderProfile();
  renderOverview();
  cacheLock(true);
  dataStatus('Checking latest saved data…');
 }catch{/* Online workspace loading remains authoritative. */}
})();