'use strict';
const maternityDisplayPreviousCalculation=maternityA4Calculation;
maternityA4Calculation=function(...args){
 return maternityDisplayPreviousCalculation.apply(this,args)
  .replace('<span>Period of calculation for maternity leave benefit :</span>','<span class="mta-period-caption">Period of calculation for<br>maternity leave benefit</span><span class="mta-period-colon">:</span>')
  .replace('<span>Period of M/L :</span>','<span class="mta-period-caption">Period of M/L</span><span class="mta-period-colon">:</span>');
};
// An empty hidden toolbar prevents the legacy observer from recreating Pdf/Print.
const maternityDisplayPreviousActions=applyActionControls;
applyActionControls=function(...args){
 if(activePage==='admin-maternity-entry-report'){
  const main=document.getElementById('main');if(main){
   let toolbar=main.querySelector('.page-action-toolbar');
   if(!toolbar){toolbar=document.createElement('div');toolbar.className='page-action-toolbar no-print';toolbar.hidden=true;main.prepend(toolbar);}
   else{toolbar.hidden=true;if(toolbar.childNodes.length)toolbar.replaceChildren();}
  }
 }
 return maternityDisplayPreviousActions.apply(this,args);
};
const maternityDisplayStyle=document.createElement('style');maternityDisplayStyle.textContent=`
.mta-calculation .mta-details{margin-bottom:3mm}
.mta-calculation .mta-period{display:grid;grid-template-columns:38mm 12px max-content 20px max-content;column-gap:0;row-gap:0;align-items:start;justify-content:start;font-size:10.5pt;line-height:1.25;margin:2.5mm 0}
.mta-calculation .mta-period-caption{white-space:nowrap}
.mta-calculation .mta-period>b{font-weight:700!important;white-space:nowrap}
.mta-calculation .mta-period>span:not(.mta-period-caption):not(.mta-period-colon){text-align:center}
.mta-calculation .mta-calculation-table{margin-top:3mm}
#main:has(#maternityBenefitReport)>.page-action-toolbar{display:none!important}
#maternityBenefitReport{border-collapse:collapse;border:.5px solid #7d929e}
#maternityBenefitReport th,#maternityBenefitReport td{border:.5px solid #8fa4ad!important}
@media screen{
 .maternity-entry-card{padding-top:14px;padding-bottom:14px}
 .maternity-entry-field{padding-top:2px;padding-bottom:2px}
 .maternity-entry-field input{min-height:28px!important;height:28px}
 .maternity-schedule-date>button{min-height:26px}
}
`;document.head.append(maternityDisplayStyle);
