'use strict';
let serviceBenefitUse360DayStartRule=false;
let serviceBenefitPrintHistoryEnabled=false;
function serviceBenefitYearRowsWithStartRule(joining,release,useRule){
 const originalStart=servicePrintDate(joining),end=servicePrintDate(release);
 if(end.key<originalStart.key)throw Error('Release তারিখ যোগদানের তারিখের আগে হতে পারবে না।');
 const rate=servicePrintBenefitRate(originalStart,end),result=[];
 if(rate===0)return result;
 let start={...originalStart};
 if(useRule){
  const remainingDays=Math.floor((Date.UTC(start.year,11,31)-Date.UTC(start.year,start.month-1,start.day))/86400000)+1;
  if(remainingDays<360)start={year:start.year+1,month:1,day:1,key:(start.year+1)*10000+101};
 }
 if(end.key<start.key)return result;
 for(let year=start.year;year<=end.year;year++){
  const first=year===start.year,last=year===end.year;
  let months=last?end.month-1:first?13-start.month:12;
  if(first&&last){
   const monthSpan=end.month-start.month;
   months=monthSpan===0
    ?Math.max(0,(Math.min(end.day,30)-start.day+1)/30)
    :Math.max(0,monthSpan+(end.day<start.day?-1:0)+Math.min(end.day,30)/30);
  }else if(last)months=end.month-1+Math.min(end.day,30)/30;
  months=Number(months.toFixed(2));
  const days=Number((rate/12*months).toFixed(2));
  result.push({year,months,days});
 }
 return result;
}
servicePrintYearRows=function(joining,release){return serviceBenefitYearRowsWithStartRule(joining,release,serviceBenefitUse360DayStartRule);};
function serviceBenefitAdjustRenderedRule(){
 if(!serviceBenefitUse360DayStartRule)return;
 const article=document.querySelector('#serviceBenefitPrintContent .service-benefit-paper');
 const table=article?.querySelector('.service-benefit-year-table');
 if(!article||!table)return;
 const joiningLabel=[...article.querySelectorAll('dt')].find(node=>node.textContent.trim()==='Date Of Joining');
 const dateText=joiningLabel?.nextElementSibling?.textContent||'';
 const dateMatch=dateText.match(/(\d{1,2})[./-](\d{1,2})[./-](\d{4})/);
 if(!dateMatch)return;
 const day=Number(dateMatch[1]),month=Number(dateMatch[2]),year=Number(dateMatch[3]);
 const remainingDays=Math.floor((Date.UTC(year,11,31)-Date.UTC(year,month-1,day))/86400000)+1;
 if(remainingDays>=360)return;
 const body=table.tBodies[0],rows=[...body.rows];
 const joiningYearRow=rows.find(row=>Number(row.cells[1]?.textContent.trim())===year);
 if(!joiningYearRow)return;
 joiningYearRow.remove();
 [...body.rows].forEach((row,index)=>{if(row.cells[0])row.cells[0].textContent=String(index+1).padStart(2,'0');});
 const dataRows=[...body.rows];
 const totalMonths=dataRows.reduce((sum,row)=>sum+(parseFloat(row.cells[2]?.textContent)||0),0);
 const totalDays=dataRows.reduce((sum,row)=>sum+(parseFloat(row.cells[3]?.textContent)||0),0);
 const totalAmount=dataRows.reduce((sum,row)=>sum+(parseFloat((row.cells[4]?.textContent||'').replace(/,/g,''))||0),0);
 const totals=table.tFoot?.rows[0]?.cells;
 if(totals?.length>=4){
  totals[1].textContent=Number(totalMonths.toFixed(2))+' Month';
  totals[2].textContent=Number(totalDays.toFixed(2))+' Days';
  totals[3].textContent=Math.round(totalAmount).toLocaleString('en-US');
 }
}
const servicePrintRenderWithRule=renderServiceBenefitPrint;
renderServiceBenefitPrint=function(...args){
 servicePrintRenderWithRule.apply(this,args);
 serviceBenefitAdjustRenderedRule();
 const history=document.querySelector('#serviceBenefitPrintContent .service-payment-history');
 if(history){
  history.dataset.printEnabled=String(serviceBenefitPrintHistoryEnabled);
  const heading=history.querySelector('h4');
  if(heading&&!heading.querySelector('#servicePaymentHistoryPrintToggle')){
   const toggle=document.createElement('button');
   toggle.type='button';
   toggle.id='servicePaymentHistoryPrintToggle';
   toggle.className='service-payment-history-print-toggle';
   toggle.setAttribute('role','checkbox');
   toggle.setAttribute('aria-checked',String(serviceBenefitPrintHistoryEnabled));
   toggle.setAttribute('aria-label','Include Payment history in print');
   toggle.title='Click to include Payment history in print.';
   toggle.innerHTML='<span aria-hidden="true">'+(serviceBenefitPrintHistoryEnabled?'✓':'')+'</span>';
   heading.append(toggle);
  }
 }
 const form=document.getElementById('serviceBenefitPrintForm');
 if(!form||form.querySelector('#servicePrintCountRule'))return;
 const search=form.querySelector('.service-print-save');
 if(!search)return;
 const control=document.createElement('button');
 control.type='button';
 control.id='servicePrintCountRule';
 control.className='service-print-count-rule';
 control.setAttribute('role','checkbox');
 control.setAttribute('aria-checked',String(serviceBenefitUse360DayStartRule));
 control.setAttribute('aria-label','360-Day Rule');
 control.title='Click or right-click to apply the 360-day start-year rule.';
 control.innerHTML='<span aria-hidden="true">'+(serviceBenefitUse360DayStartRule?'✓':'')+'</span>';
 search.after(control);
};
function toggleServiceBenefit360Rule(event){
 const control=event.target.closest('#servicePrintCountRule');
 if(!control)return false;
 event.preventDefault();
 serviceBenefitUse360DayStartRule=!serviceBenefitUse360DayStartRule;
 renderServiceBenefitPrint();
 return true;
}
document.getElementById('main').addEventListener('click',toggleServiceBenefit360Rule);
document.getElementById('main').addEventListener('contextmenu',toggleServiceBenefit360Rule);
document.getElementById('main').addEventListener('click',event=>{
 const toggle=event.target.closest('#servicePaymentHistoryPrintToggle');
 if(!toggle)return;
 event.preventDefault();
 serviceBenefitPrintHistoryEnabled=!serviceBenefitPrintHistoryEnabled;
 const history=document.querySelector('#serviceBenefitPrintContent .service-payment-history');
 if(history)history.dataset.printEnabled=String(serviceBenefitPrintHistoryEnabled);
 toggle.setAttribute('aria-checked',String(serviceBenefitPrintHistoryEnabled));
 const mark=toggle.querySelector('span');
 if(mark)mark.textContent=serviceBenefitPrintHistoryEnabled?'✓':'';
});
const serviceBenefitRuleStyle=document.createElement('style');
serviceBenefitRuleStyle.textContent='#servicePrintCountRule{box-sizing:border-box;width:42px;min-width:42px;height:42px;min-height:42px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:1px solid #95bbd2;border-radius:9px;background:transparent!important;box-shadow:none!important;color:#164c78;font-weight:700;cursor:pointer}#servicePrintCountRule[aria-checked=true]{background:transparent!important;box-shadow:none!important;border-color:#15936b;color:#116244}#servicePrintCountRule span{box-sizing:border-box;width:17px;height:17px;border:1px solid currentColor;border-radius:4px;display:inline-flex;align-items:center;justify-content:center}';
serviceBenefitRuleStyle.textContent+=`.service-payment-history h4{display:flex;align-items:center;justify-content:space-between;gap:8px}.service-payment-history-print-toggle{box-sizing:border-box;width:27px;height:24px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:1px solid #222;border-radius:2px;background:transparent!important;color:#111;cursor:pointer;vertical-align:middle}.service-payment-history-print-toggle span{width:13px;height:13px;border:1px solid currentColor;display:inline-flex;align-items:center;justify-content:center;font-size:11px;line-height:1}@media print{#servicePaymentHistoryPrintToggle{display:none!important}.service-payment-history:not([data-print-enabled=true]){display:none!important}}`;
document.head.append(serviceBenefitRuleStyle);
const serviceBenefit360RuleObserver=new MutationObserver(()=>serviceBenefitAdjustRenderedRule());
serviceBenefit360RuleObserver.observe(document.getElementById('main'),{childList:true,subtree:true});
