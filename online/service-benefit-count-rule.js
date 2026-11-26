'use strict';
let serviceBenefitUse360DayStartRule=false;
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
const servicePrintRenderWithRule=renderServiceBenefitPrint;
renderServiceBenefitPrint=function(...args){
 servicePrintRenderWithRule.apply(this,args);
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
 control.title='Right-click to apply the 360-day start-year rule.';
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
document.getElementById('main').addEventListener('contextmenu',toggleServiceBenefit360Rule);
const serviceBenefitRuleStyle=document.createElement('style');
serviceBenefitRuleStyle.textContent='#servicePrintCountRule{box-sizing:border-box;width:42px;min-width:42px;height:42px;min-height:42px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:1px solid #95bbd2;border-radius:9px;background:#eff7ff;color:#164c78;font-weight:700;cursor:pointer}#servicePrintCountRule[aria-checked=true]{background:#e0f5e8;border-color:#15936b;color:#116244}#servicePrintCountRule span{box-sizing:border-box;width:17px;height:17px;border:1px solid currentColor;border-radius:4px;display:inline-flex;align-items:center;justify-content:center}';
document.head.append(serviceBenefitRuleStyle);