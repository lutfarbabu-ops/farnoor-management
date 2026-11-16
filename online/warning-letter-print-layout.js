'use strict';
(()=>{
 let selectionSaved=false;
 const companyName=value=>/UNIT\s*-?\s*2/i.test(String(value||''))?'ফারনূর গার্মেন্টস লিঃ-ইউনিট-২':'ফারনূর গার্মেন্টস লিঃ';
 const originalHomeRender=renderWarningHome;
 renderWarningHome=function(...args){
  const result=originalHomeRender.apply(this,args);
  const form=document.getElementById('warningHomeSelection');
  if(!form)return result;
  let notice=document.getElementById('warningHomeCompanyNotice');
  if(!notice){
   notice=document.createElement('div');
   notice.id='warningHomeCompanyNotice';
   notice.setAttribute('role','status');
   notice.style.cssText='margin:12px 0 20px;font-size:20px;font-weight:700;color:#12633f';
   form.insertAdjacentElement('afterend',notice);
  }
  notice.hidden=!selectionSaved;
  notice.textContent=selectionSaved?'কোম্পানি: '+companyName(warningHomeCompany):'';
  return result;
 };
 const main=document.getElementById('main');
 main.addEventListener('input',event=>{
  if(event.target.form?.id==='warningHomeSelection'&&event.target.name==='card'){
   selectionSaved=false;
   const notice=document.getElementById('warningHomeCompanyNotice');
   if(notice)notice.hidden=true;
  }
 });
 main.addEventListener('change',event=>{
  if(event.target.form?.id==='warningHomeSelection'&&event.target.name==='company'){
   selectionSaved=false;
   const notice=document.getElementById('warningHomeCompanyNotice');
   if(notice)notice.hidden=true;
  }
 });
 main.addEventListener('submit',event=>{
  if(event.target.id!=='warningHomeSelection')return;
  const row=warningSavedRowForCard(warningHomeCard);
  if(!row)return;
  selectionSaved=true;
  if(activePage==='admin-warning-letter')renderWarningHome();
 });
 const printStyle=document.createElement('style');
 printStyle.textContent=`
 @page warningLetterA4{size:A4 portrait!important;margin:0!important}
 @page warningEnvelope{size:6.25in 3.625in!important;margin:0!important}
 @media print{
  html:has(.warning-doc-paper),body:has(.warning-doc-paper){display:block!important;visibility:visible!important;background:#fff!important;color:#000!important;margin:0!important;padding:0!important;width:auto!important;height:auto!important;overflow:visible!important}
  html:has(.wd-letter),body:has(.wd-letter){page:warningLetterA4!important}
  html:has(.wd-envelope),body:has(.wd-envelope){page:warningEnvelope!important}
  body:has(.warning-doc-paper)>:not(#workspace){display:none!important}
  body:has(.warning-doc-paper) #workspace{display:block!important;visibility:visible!important;width:auto!important;min-height:0!important;margin:0!important;padding:0!important;background:#fff!important}
  body:has(.warning-doc-paper) #workspace>*:not(#main){display:none!important}
  body:has(.warning-doc-paper) #main{display:block!important;visibility:visible!important;width:auto!important;min-height:0!important;margin:0!important;padding:0!important;background:#fff!important}
  body:has(.warning-doc-paper) #main>*:not(.wd-preview){display:none!important}
  body:has(.warning-doc-paper) .wd-preview{display:block!important;visibility:visible!important;width:auto!important;max-width:none!important;min-height:0!important;margin:0!important;padding:0!important;overflow:visible!important;border:0!important;border-radius:0!important;background:#fff!important}
  body:has(.warning-doc-paper) .warning-doc-paper,body:has(.warning-doc-paper) .warning-doc-paper *{visibility:visible!important}
  body:has(.warning-doc-paper) .warning-doc-paper{display:block!important;box-sizing:border-box!important;margin:0!important;background:#fff!important;color:#000!important;box-shadow:none!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;break-inside:avoid!important}
  body:has(.wd-letter) .wd-letter{page:warningLetterA4!important;width:210mm!important;height:297mm!important;min-height:297mm!important}
  body:has(.wd-envelope) .wd-envelope{page:warningEnvelope!important;width:6.25in!important;height:3.625in!important}
 }`;
 document.body.append(printStyle);
})();
