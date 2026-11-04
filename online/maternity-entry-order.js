'use strict';
// Reuse the existing controls so values and input handlers stay intact.
const maternityEntryOrderPreviousRender=renderMaternityBenefitEntry;
renderMaternityBenefitEntry=function(...args){
 const result=maternityEntryOrderPreviousRender.apply(this,args);
 if(activePage==='admin-maternity-new-entry'){
  const edd=document.getElementById('maternity-benefit-eddDate')?.closest('.maternity-entry-field');
  const month=document.getElementById('maternity-benefit-lastMonth')?.closest('.maternity-entry-field');
  if(edd&&month&&edd.nextElementSibling!==month)edd.after(month);
 }
 return result;
};
