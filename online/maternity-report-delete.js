'use strict';
let maternityReportDeleteObserver=null;
function maternityReportCanDelete(){return accessInfo.role==='super_admin'&&FarnoorAccess.canAction('admin-documents','edit');}
async function maternityReportDeleteRecord(id){
 if(!dataReady){toast('Wait for saved data to load.');return false;}
 if(dataSaving){toast('A save is already in progress.');return false;}
 if(dataChanged){toast('Data changed. Refresh and review before deleting.');return false;}
 if(!maternityReportCanDelete()){toast('Super Admin permission is required.');return false;}
 if(!maternityBenefitRows().some(row=>row.id===id))return true;
 dataSaving=true;$('#workspace').inert=true;dataStatus('Deleting…');
 try{
  const revision=dataRevision;
  const result=await dataRequest({route:'/api/maternity-benefit/delete',method:'POST',payload:{id,revision,accessRevision:accessInfo.revision}});
  if(result.deletedId!==id||!Number.isSafeInteger(result.revision)||result.revision<revision||result.revision>revision+1)throw Error('Delete was not confirmed. Refresh and retry.');
  // Apply only the confirmed deletion; unrelated form data is never replaced.
  state={...state,records:{...state.records,'admin-documents':(state.records['admin-documents']||[]).filter(row=>row.id!==id)}};
  if(dataSavedState)dataSavedState={...dataSavedState,records:{...dataSavedState.records,'admin-documents':(dataSavedState.records['admin-documents']||[]).filter(row=>row.id!==id)}};
  dataRevision=result.revision;dataChanged=false;
  void FarnoorWorkspaceCache.write(dataCacheUserId,{state,access:accessInfo,revision:dataRevision});dataStatus('Saved online');return true;
 }catch(error){if(error.status===409)dataChanged=true;dataStatus('Not deleted · Retry');toast(error.message);return false;}
 finally{dataSaving=false;$('#workspace').inert=false;}
}
function maternityReportAlignDelete(){
 const table=document.getElementById('maternityBenefitReport'),rail=document.getElementById('maternityReportDeleteRail');if(!table||!rail)return;
 const bounds=rail.getBoundingClientRect();for(const button of rail.querySelectorAll('[data-maternity-report-delete]')){const row=[...table.tBodies[0].rows].find(row=>row.dataset.maternityRow===button.dataset.maternityReportDelete);if(row)button.style.top=(row.getBoundingClientRect().top-bounds.top+(row.offsetHeight-button.offsetHeight)/2)+'px';}
}
const maternityReportDeletePreviousRender=renderMaternityBenefitReport;
renderMaternityBenefitReport=function(...args){
 maternityReportDeleteObserver?.disconnect();const result=maternityReportDeletePreviousRender.apply(this,args);
 const table=document.getElementById('maternityBenefitReport'),panel=table?.closest('.panel');if(!table||!panel||!maternityReportCanDelete()){document.getElementById('maternityReportDeleteDialog')?.remove();return result;}
 const rows=maternityBenefitRows();[...table.tBodies[0].rows].forEach((tr,index)=>{if(rows[index])tr.dataset.maternityRow=rows[index].id;});
 const layout=document.createElement('div');layout.className='maternity-report-layout';panel.before(layout);layout.append(panel);
 const rail=document.createElement('div');rail.id='maternityReportDeleteRail';rail.className='maternity-report-delete-rail no-print';rail.setAttribute('aria-label','Delete Maternity entries');rail.innerHTML=rows.map(row=>'<button type="button" class="danger" data-page-action-required="edit" data-maternity-report-delete="'+esc(row.id)+'" '+(!maternityReportCanDelete()?'disabled':'')+'>🗑 Delete</button>').join('');layout.append(rail);
 maternityReportDeleteObserver=new ResizeObserver(maternityReportAlignDelete);maternityReportDeleteObserver.observe(table);requestAnimationFrame(maternityReportAlignDelete);return result;
};
function maternityReportConfirmDelete(id,trigger){
 if(!maternityReportCanDelete())return toast('Super Admin permission is required.');const row=maternityBenefitRows().find(row=>row.id===id);if(!row)return;
 document.getElementById('maternityReportDeleteDialog')?.remove();const dialog=document.createElement('dialog');dialog.id='maternityReportDeleteDialog';dialog.innerHTML='<h3>Delete this entry?</h3><p>'+esc(row.reference)+' · '+esc(row.name)+'</p><p role="alert"></p><div class="dialog-actions"><button type="button" class="danger" data-maternity-confirm-delete>Delete</button><button type="button" data-maternity-cancel-delete autofocus>Cancel</button></div>';
 let busy=false;const close=()=>{if(busy)return;dialog.close();dialog.remove();if(trigger?.isConnected)trigger.focus();};dialog.querySelector('[data-maternity-cancel-delete]').onclick=close;dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 dialog.querySelector('[data-maternity-confirm-delete]').onclick=async()=>{
  if(busy||!maternityReportCanDelete())return;const current=maternityBenefitRows().find(row=>row.id===id);if(!current){close();renderMaternityBenefitReport();return;}
  busy=true;dialog.querySelectorAll('button').forEach(button=>button.disabled=true);dialog.querySelector('[data-maternity-confirm-delete]').textContent='Deleting…';
  try{if(await maternityReportDeleteRecord(id)){if(maternityBenefitId===id){maternityBenefitId=null;maternityBenefitPending=null;maternityBenefitDraft={};}busy=false;close();if(activePage==='admin-maternity-entry-report')renderMaternityBenefitReport();toast('Maternity entry deleted.');}else dialog.querySelector('[role="alert"]').textContent='Delete failed. The entry is unchanged. Please try again.';}
  catch(error){dialog.querySelector('[role="alert"]').textContent=error.message;}
  finally{busy=false;if(dialog.isConnected){dialog.querySelectorAll('button').forEach(button=>button.disabled=false);dialog.querySelector('[data-maternity-confirm-delete]').textContent='Delete';}}
 };
 document.body.append(dialog);dialog.showModal();dialog.querySelector('[data-maternity-cancel-delete]').focus();
}
document.getElementById('main').addEventListener('click',event=>{if(activePage!=='admin-maternity-entry-report')return;const button=event.target.closest('[data-maternity-report-delete]');if(button)maternityReportConfirmDelete(button.dataset.maternityReportDelete,button);});
window.addEventListener('resize',maternityReportAlignDelete);
const maternityReportDeleteStyle=document.createElement('style');maternityReportDeleteStyle.textContent='.maternity-report-layout{display:grid;grid-template-columns:minmax(0,1fr) 80px;gap:8px}.maternity-report-layout>.panel{margin:0;min-width:0}.maternity-report-delete-rail{position:relative}.maternity-report-delete-rail button{position:absolute;left:0;padding:6px 8px;font-size:11px;white-space:nowrap;background:#bd2638;color:white;border:0;border-radius:5px}#maternityReportDeleteDialog{width:min(420px,90vw);border:0;border-radius:12px;padding:24px}#maternityReportDeleteDialog::backdrop{background:#12324c99}#maternityReportDeleteDialog .dialog-actions{display:flex;justify-content:flex-end;gap:9px}#maternityReportDeleteDialog [role=alert]{color:#b42335}@media print{.maternity-report-layout{display:block}.maternity-report-delete-rail{display:none!important}}';document.head.append(maternityReportDeleteStyle);
