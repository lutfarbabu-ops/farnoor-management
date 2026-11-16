'use strict';
(()=>{
 const baseRender=renderServiceBenefitPrint;
 renderServiceBenefitPrint=function(...args){
  baseRender.apply(this,args);
  if(accessInfo?.role!=='super_admin'||!servicePrintReady||!servicePrintRecordId)return;
  const form=document.getElementById('serviceBenefitPrintForm');
  if(!form||form.querySelector('[data-service-print-edit]'))return;
  const button=document.createElement('button');
  button.type='button';
  button.className='primary';
  button.dataset.servicePrintEdit='';
  button.setAttribute('aria-label','Edit this Service Benefit record');
  button.textContent='✎ Edit';
  const printButton=form.querySelector('[data-page-action="print"]');
  if(printButton)printButton.before(button);else form.append(button);
 };
 document.getElementById('main').addEventListener('click',event=>{
  const button=event.target.closest('[data-service-print-edit]');
  if(!button)return;
  if(accessInfo?.role!=='super_admin')return toast('Super Admin access is required.');
  const row=serviceBenefitRows().find(item=>item.id===servicePrintRecordId);
  if(!row)return toast('The saved Service Benefit record could not be found.');
  serviceBenefitId=row.id;
  serviceBenefitPending=null;
  serviceBenefitDraft={...(row.serviceBenefitEntry||{})};
  serviceProfileLastValues={};
  goPage('admin-service-new-entry');
 });
})();
