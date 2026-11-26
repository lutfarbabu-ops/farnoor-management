'use strict';
(()=>{
 const lazyGroups=new Set();
 const largePages=new Set(['employees','hr-leave-entry','payroll','output']);
 const oldGoPage=window.goPage;
 if(typeof oldGoPage!=='function')return;
 async function loadLargePage(pageId){
  if(!largePages.has(pageId)||lazyGroups.has(pageId))return;
  const main=document.querySelector('#main');
  if(main)main.innerHTML='<section class="panel" role="status" style="padding:28px;text-align:center">Loading saved records…</section>';
  try{
   const body=await dataRequest({payload:{lazyStartup:true,includeLargeGroups:[pageId]}});
   if(!body?.state?.records||!Number.isSafeInteger(body.revision))throw Error('Saved records could not be loaded.');
   if(body.revision!==dataRevision){
    dataChanged=true;
    dataStatus('New data available · Refresh');
    throw Error('Saved data changed elsewhere. Refresh before opening this register.');
   }
   const rows=body.state.records[pageId];
   if(!Array.isArray(rows))throw Error('This register was not returned by the server.');
   const next=structuredClone(state);
   next.records={...next.records,[pageId]:rows};
   state=validateState(next);
   if(dataSavedState)dataSavedState=validateState({...structuredClone(dataSavedState),records:{...dataSavedState.records,[pageId]:structuredClone(rows)}});
   lazyGroups.add(pageId);
   const cachedBody={...body,state,loadedLargeGroups:[...lazyGroups]};
   void FarnoorWorkspaceCache.write(dataCacheUserId,cachedBody);
  }catch(error){
   if(main)main.innerHTML='<section class="panel" role="alert" style="padding:28px;color:#8b1e2d">Could not load this register. Use Refresh data, then open it again.</section>';
   toast(error.message||'Could not load saved records.');
   throw error;
  }
 }
 window.goPage=function(id){
  oldGoPage(id);
  if(largePages.has(id))void loadLargePage(id).then(()=>{if(activePage===id)renderPage();}).catch(()=>{});
 };
})();
