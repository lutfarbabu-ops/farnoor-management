'use strict';
// Maternity dates are suggestions on source-field changes, never save-time overrides.
if(!maternityEntryExtraFields.some(([key])=>key==='company'))maternityEntryExtraFields.push(['company','Company']);
function maternityScheduleCompany(value){return /UNIT\s*-?\s*2/i.test(value||'')?'FARNOOR GARMENTS LTD. UNIT-2':'FARNOOR GARMENTS LTD';}
function maternityScheduleDay(value){return new Date(maternityEntryDateISO(value)+'T00:00:00Z');}
function maternityScheduleText(date){return date.toISOString().slice(0,10).split('-').reverse().join('/');}
function maternityScheduleShift(date,days){const copy=new Date(date);copy.setUTCDate(copy.getUTCDate()+days);return copy;}
function maternityScheduleWorkingDay(date,direction,company){
 const extra=typeof warningInputExtraHolidays==='function'?warningInputExtraHolidays():new Set();
 const weekly=/UNIT-2/.test(maternityScheduleCompany(company))?5:0;
 for(let i=0;i<366;i++,date=maternityScheduleShift(date,direction)){
  const holidays=typeof warningGovernmentHolidays!=='undefined'?warningGovernmentHolidays[date.getUTCFullYear()]:null;
  if(!holidays)throw Error(date.getUTCFullYear()+' সালের সরকারি ছুটির তালিকা নেই। সংশ্লিষ্ট তারিখ হাতে লিখুন।');
  if(date.getUTCDay()!==weekly&&!holidays.has(date.toISOString().slice(0,10))&&!extra.has(date.toISOString().slice(0,10)))return date;
 }
 throw Error('খোলা দিনের তারিখ পাওয়া যায়নি।');
}
function maternityScheduleCalculate(edd,company,manualStart){
 const values=manualStart?{mlTo:'',firstVoucherDate:''}:{mlFrom:'',mlTo:'',firstVoucherDate:'',secondVoucherDate:''},warnings=[];const attempt=fn=>{try{fn();}catch(error){warnings.push(error.message);}};
 const expected=edd?maternityScheduleDay(edd):null;
 if(expected){
  const base=maternityScheduleShift(expected,-60),month=new Date(Date.UTC(base.getUTCFullYear(),base.getUTCMonth()-1,1));
  values.lastMonth=String(month.getUTCMonth()+1).padStart(2,'0')+'/'+month.getUTCFullYear();
  if(!manualStart)attempt(()=>{values.mlFrom=maternityScheduleText(maternityScheduleWorkingDay(base,-1,company));});
  attempt(()=>{values.secondVoucherDate=maternityScheduleText(maternityScheduleWorkingDay(maternityScheduleShift(expected,3),1,company));});
 }
 const start=manualStart||values.mlFrom;
 if(start){
  attempt(()=>{values.mlTo=maternityScheduleText(maternityScheduleWorkingDay(maternityScheduleShift(maternityScheduleDay(start),120),1,company));});
  attempt(()=>{values.firstVoucherDate=maternityScheduleText(maternityScheduleWorkingDay(maternityScheduleShift(maternityScheduleDay(start),-3),-1,company));});
 }
 return {values,warnings:[...new Set(warnings)]};
}
maternityPrepareEntry=function(entry){
 for(const key of maternityEntryDateKeys)if(entry[key])entry[key]=maternityEntryDate(entry[key]);
 for(const [from,to]of [['calculationFrom','calculationTo'],['mlFrom','mlTo']])if(entry[from]&&entry[to]&&maternityEntryDateISO(entry[from])>maternityEntryDateISO(entry[to]))throw Error('শুরুর তারিখ শেষের তারিখের পরে হতে পারবে না।');
 if(entry.lastMonth){const m=/^(\d{1,2})\/(\d{4})$/.exec(entry.lastMonth);if(!m||+m[1]<1||+m[1]>12)throw Error('Last Month লিখুন MM/YYYY হিসাবে।');entry.lastMonth=m[1].padStart(2,'0')+'/'+m[2];}
 entry.company=maternityScheduleCompany(entry.company);
 entry.calculationMonth=[entry.calculationFrom||'',entry.calculationTo||''].join(' to ');
 entry.periodML=[entry.mlFrom||'',entry.mlTo||''].join(' to ');
 entry.payment=entry.firstVoucherDate||'';
};
maternityEntryView=function(entry){
 const values={...entry};
 for(const [legacy,from,to]of [['calculationMonth','calculationFrom','calculationTo'],['periodML','mlFrom','mlTo']])if(!values[from]&&values[legacy]){const pair=maternityCalculationPeriod(values[legacy]);values[from]=maternityEntryDateISO(pair[0])?maternityEntryDate(pair[0]):'';values[to]=maternityEntryDateISO(pair[1])?maternityEntryDate(pair[1]):'';}
 if(!values.firstVoucherDate&&values.payment&&maternityEntryDateISO(values.payment))values.firstVoucherDate=maternityEntryDate(values.payment);
 if(!maternityBenefitId){values.paymentMode||='Cash';values.daysDividedBy||='26';}
 values.company=maternityScheduleCompany(values.company||maternityCompanyChoice);
 return values;
};
function maternityScheduleStatus(message){const node=document.getElementById('maternityScheduleStatus');if(node)node.textContent=message;}
function maternityScheduleApply(source){
 try{
  const draft=maternityBenefitDraft;if(!draft.eddDate&&source!=='mlFrom')return;
  const result=maternityScheduleCalculate(draft.eddDate,draft.company,source==='mlFrom'?draft.mlFrom:null);
  for(const [key,value]of Object.entries(result.values)){draft[key]=value;const input=document.getElementById('maternity-benefit-'+key);if(input){input.value=value;input.dataset.scheduleSource=value;}}
  maternityScheduleStatus(result.warnings.join(' '));
 }catch(error){maternityScheduleStatus(error.message);}
}
const maternitySchedulePreviousRender=renderMaternityBenefitEntry;
renderMaternityBenefitEntry=function(...args){
 const result=maternitySchedulePreviousRender.apply(this,args);if(activePage!=='admin-maternity-new-entry')return result;
 const form=document.getElementById('maternityBenefitForm');if(!form)return result;
 const company=document.createElement('div');company.className='maternity-entry-field';company.innerHTML='<label for="maternity-benefit-company">Company</label><select id="maternity-benefit-company" data-maternity-benefit="company">'+['FARNOOR GARMENTS LTD','FARNOOR GARMENTS LTD. UNIT-2'].map(value=>'<option'+(value===maternityBenefitDraft.company?' selected':'')+'>'+esc(value)+'</option>').join('')+'</select>';form.prepend(company);
 const status=document.createElement('p');status.id='maternityScheduleStatus';status.className='maternity-entry-full';status.setAttribute('role','status');form.querySelector('.maternity-entry-save')?.before(status);
 for(const input of form.querySelectorAll('[data-maternity-benefit]')){
  input.readOnly=false;
  input.dataset.scheduleSource=input.value;
  if(!maternityEntryDateKeys.includes(input.dataset.maternityBenefit))continue;
  if(input.type==='date'){const date=input.value;input.type='text';input.value=date?maternityEntryDate(date):'';}
  input.dataset.scheduleSource=input.value;
  input.placeholder='DD/MM/YYYY';input.inputMode='numeric';input.maxLength=10;
  const wrap=document.createElement('div');wrap.className='maternity-schedule-date';input.before(wrap);wrap.append(input);
  const picker=document.createElement('input');picker.type='date';picker.tabIndex=-1;picker.className='maternity-schedule-picker';picker.setAttribute('aria-label',input.getAttribute('aria-label')+' calendar');
  const button=document.createElement('button');button.type='button';button.textContent='▦';button.setAttribute('aria-label','Calendar: '+input.getAttribute('aria-label'));button.onclick=()=>{picker.value=maternityEntryDateISO(input.value);if(picker.showPicker)picker.showPicker();else picker.click();};
  picker.onchange=()=>{input.value=picker.value?maternityEntryDate(picker.value):'';input.dispatchEvent(new Event('input',{bubbles:true}));};wrap.append(button,picker);
 }
 return result;
};
function maternityScheduleInput(event){
 if(activePage!=='admin-maternity-new-entry')return;const input=event.target,key=input.dataset.maternityBenefit;
 if(!maternityEntryDateKeys.includes(key)&&key!=='company')return;
 event.stopImmediatePropagation();maternityBenefitDraft[key]=input.value;
 if(key==='company'){if(input.dataset.scheduleSource!==input.value){input.dataset.scheduleSource=input.value;maternityCompanyChoice=input.value;maternityScheduleApply('company');}return;}
 input.setCustomValidity('');if(!input.value.trim())return;
 try{if(!/\d{4}$/.test(input.value)&&event.type==='input')return;const value=maternityEntryDate(input.value);maternityBenefitDraft[key]=value;if(event.type!=='input')input.value=value;if((key==='eddDate'||key==='mlFrom')&&input.dataset.scheduleSource!==value){input.dataset.scheduleSource=value;maternityScheduleApply(key);}}
 catch(error){if(event.type!=='input')input.setCustomValidity(error.message);}
}
document.getElementById('main').addEventListener('input',maternityScheduleInput,true);
document.getElementById('main').addEventListener('change',maternityScheduleInput,true);
document.getElementById('main').addEventListener('focusout',maternityScheduleInput,true);
const maternityScheduleStyle=document.createElement('style');maternityScheduleStyle.textContent='.maternity-schedule-date{display:flex;position:relative;min-width:0;align-items:center;gap:4px}.maternity-schedule-date>input:first-child{flex:1;min-width:0}.maternity-schedule-date>button{padding:5px 9px}.maternity-schedule-picker{position:absolute!important;opacity:0!important;width:1px!important;height:1px!important;padding:0!important;bottom:0;right:0;pointer-events:none}#maternity-benefit-company{width:100%;padding:8px;border:1px solid #b8cde0;border-radius:6px}#maternityScheduleStatus{color:#a1361a;font-size:13px}';document.head.append(maternityScheduleStyle);
