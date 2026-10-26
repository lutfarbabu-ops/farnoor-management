'use strict';
// General and executive public holidays, excluding regional/optional holidays.
// MOPA annual notification 09-11-2025 and additional order 08-03-2026:
// https://mopa.gov.bd/pages/public-holiday/২০২৬-খ্রিষ্টাব্দের-ছুটির-তালিকার-প্রজ্ঞাপন-2df487-694139b2a31054345f0e6346
// https://mopa.gov.bd/pages/go-ultimates/69ad3e37f681a7e2728823e8
const warningGovernmentHolidays={2026:new Set(['02-04','02-21','03-17','03-18','03-19','03-20','03-21','03-22','03-23','03-26','04-14','05-01','05-26','05-27','05-28','05-29','05-30','05-31','06-26','08-05','08-26','09-04','10-20','10-21','12-16','12-25'].map(day=>'2026-'+day))};
const warningAddressKeys={village:'address-15-0',postOffice:'address-15-1',policeStation:'address-15-2',district:'address-15-3',presentVillage:'address-16-0',presentPostOffice:'address-16-1',presentPoliceStation:'address-16-2',presentDistrict:'address-16-3'};
const warningLetterDateKeys=['firstLetter','secondLetter','thirdLetter'];
function warningInputDate(value){
 const raw=String(value??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)).trim();
 const parts=/^\d{4}-\d{2}-\d{2}$/.test(raw)?raw.split('-').reverse().map(Number):normalizeDate(raw).split('/').map(Number);
 const [day,month,year]=parts,date=new Date(Date.UTC(year,month-1,day));
 if(date.getUTCFullYear()!==year||date.getUTCMonth()!==month-1||date.getUTCDate()!==day)throw Error('সঠিক তারিখ লিখুন।');
 return date;
}
function warningInputDateText(date){return String(date.getUTCDate()).padStart(2,'0')+'/'+String(date.getUTCMonth()+1).padStart(2,'0')+'/'+date.getUTCFullYear();}
function warningInputCompany(value){return /UNIT\s*-?\s*2/i.test(value||'')?'FARNOOR GARMENTS LTD. UNIT-2':'FARNOOR GARMENTS LTD';}
function warningInputExtraHolidays(){
 const dates=new Set();
 for(const row of state.records['hr-holiday-schedule']||[]){
  const d=row.hrDetails||{};try{
   const from=warningInputDate(d.date||d.Date||row.date),to=d.date_end_year&&d.date_end_month&&d.date_end_day?warningInputDate(d.date_end_day+'/'+d.date_end_month+'/'+d.date_end_year):from;
   for(let day=new Date(from),i=0;day<=to&&i<366;i++,day.setUTCDate(day.getUTCDate()+1))dates.add(day.toISOString().slice(0,10));
  }catch{}
 }
 return dates;
}
function warningInputWorkingDate(from,days,company,extra=new Set()){
 const date=new Date(from);date.setUTCDate(date.getUTCDate()+days);
 for(let i=0;i<366;i++,date.setUTCDate(date.getUTCDate()+1)){
  const holidays=warningGovernmentHolidays[date.getUTCFullYear()];
  if(!holidays)throw Error(date.getUTCFullYear()+' সালের সরকারি ছুটির তালিকা যুক্ত করা প্রয়োজন।');
  if(date.getUTCDay()!==(/UNIT-2/.test(warningInputCompany(company))?5:0)&&!holidays.has(date.toISOString().slice(0,10))&&!extra.has(date.toISOString().slice(0,10)))return date;
 }
 throw Error('খোলা দিনের তারিখ নির্ধারণ করা যায়নি।');
}
function warningInputLetterDates(absence,company,extra=new Set()){
 const first=warningInputWorkingDate(warningInputDate(absence),10,company,extra),second=warningInputWorkingDate(first,10,company,extra),third=warningInputWorkingDate(second,7,company,extra);
 return {firstLetter:warningInputDateText(first),secondLetter:warningInputDateText(second),thirdLetter:warningInputDateText(third)};
}
warningBenefitFields.splice(0,warningBenefitFields.length,...[
 ['cardNo','কার্ড নং'],['name','নাম'],['designation','পদবী'],['section','সেকশন'],['absenceDate','অনুপস্থিতির তারিখ'],['firstLetter','১ম চিঠি'],['secondLetter','২য় চিঠি'],['thirdLetter','৩য় চিঠি'],['fatherName','পিতার নাম'],
 ['village','স্থায়ী গ্রামঃ'],['postOffice','স্থায়ী পোঃ'],['policeStation','স্থায়ী থানাঃ'],['district','স্থায়ী জেলাঃ'],['presentVillage','বর্তমান গ্রামঃ'],['presentPostOffice','বর্তমান পোঃ'],['presentPoliceStation','বর্তমান থানাঃ'],['presentDistrict','বর্তমান জেলাঃ'],['company','কোম্পানি'],['presentAddress','বর্তমান ঠিকানা (পুরোনো)']
]);
const warningInputPage=DEPARTMENTS.find(d=>d.id==='admin')?.pages.find(p=>p.id==='admin-warning-new-entry');if(warningInputPage)warningInputPage.name='New Input';
function warningInputChoiceValues(key){
 const addressKey=warningAddressKeys[key],values=addressKey?[...(personalEntryOptions[addressKey]||[]),...personalCardRows('').map(row=>row.personalEntry?.[addressKey])]:warningBenefitChoices[key]||[];
 return [...new Set(values.map(value=>String(value??'').trim()).filter(Boolean))];
}
let warningChoiceInput=null,warningChoiceIndex=-1;
function warningInputCloseChoices(){if(!warningChoiceInput)return;const wrap=warningChoiceInput.closest('.warning-choice-wrap');wrap.querySelector('[role=listbox]').hidden=true;warningChoiceInput.setAttribute('aria-expanded','false');warningChoiceInput=null;}
function warningInputShowChoices(input,all=false){
 warningInputCloseChoices();const query=input.value.trim().toLocaleLowerCase(),values=warningInputChoiceValues(input.dataset.warningBenefit).filter(value=>all||!query||value.toLocaleLowerCase().includes(query));
 const list=input.parentElement.querySelector('[role=listbox]');list.innerHTML=values.map(value=>'<button type="button" role="option" aria-selected="false" data-warning-choice-value="'+esc(value)+'">'+esc(value)+'</button>').join('');list.hidden=!values.length;input.setAttribute('aria-expanded',String(!!values.length));warningChoiceInput=input;warningChoiceIndex=-1;
}
function warningInputChoose(value){if(!warningChoiceInput)return;const input=warningChoiceInput;input.value=value;warningBenefitDraft[input.dataset.warningBenefit]=value;warningInputCloseChoices();input.focus();}
function warningInputSyncDates(){
 const status=document.getElementById('warning-letter-date-status');
 if(!warningBenefitDraft.absenceDate){for(const key of warningLetterDateKeys){warningBenefitDraft[key]='';const input=document.getElementById('warning-benefit-'+key);if(input)input.value='';}if(status)status.textContent='';return true;}
 try{
  const dates=warningInputLetterDates(warningBenefitDraft.absenceDate,warningBenefitDraft.company,warningInputExtraHolidays());
  Object.assign(warningBenefitDraft,dates);for(const [key,value]of Object.entries(dates)){const input=document.getElementById('warning-benefit-'+key);if(input)input.value=value;}if(status)status.textContent='';return true;
 }catch(error){if(status)status.textContent=error.message;return false;}
}
renderWarningBenefitEntry=function(){
 warningChoiceInput=null;warningBenefitDraft.company=warningInputCompany(warningBenefitDraft.company||warningHomeCompany);
 const field=(key,label,group='')=>{const choice=!!warningAddressKeys[key]||!!warningBenefitChoices[key],date=key==='absenceDate'||warningLetterDateKeys.includes(key),aria=group?group+' '+label:label;return '<div class="warning-benefit-row"><label for="warning-benefit-'+key+'">'+label+'</label><div class="warning-choice-wrap"><input id="warning-benefit-'+key+'" aria-label="'+aria+'" data-warning-benefit="'+key+'" value="'+esc(warningBenefitDraft[key]||'')+'" maxlength="500" autocomplete="off" '+(date?'placeholder="DD/MM/YYYY" ':'')+(warningLetterDateKeys.includes(key)?'readonly ':'')+(choice?'role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="warning-options-'+key+'" data-warning-choice="true"':'')+'>'+(choice?'<button type="button" data-warning-choice-toggle="'+key+'" aria-label="'+aria+' তালিকা দেখুন">▾</button><div class="warning-choice-list" id="warning-options-'+key+'" role="listbox" hidden></div>':'')+'</div></div>';};
 const group=(title,keys)=>'<h4>'+title+':</h4>'+keys.map((key,i)=>field(key,['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'][i],title)).join('');
 $('#main').innerHTML='<div class="page-heading"><h2>Warning Letter — New Input</h2></div><section class="panel warning-input-panel"><form id="warningBenefitForm" class="warning-benefit-form" aria-label="Warning Letter New Input"><label class="warning-company">কোম্পানি<select id="warning-benefit-company" data-warning-benefit="company" aria-label="কোম্পানি">'+['FARNOOR GARMENTS LTD','FARNOOR GARMENTS LTD. UNIT-2'].map(company=>'<option'+(company===warningBenefitDraft.company?' selected':'')+'>'+company+'</option>').join('')+'</select></label>'+warningBenefitFields.slice(0,9).map(([key,label])=>field(key,label)).join('')+'<p id="warning-letter-date-status" role="status"></p>'+group('স্থায়ী ঠিকানা',['village','postOffice','policeStation','district'])+group('বর্তমান ঠিকানা',['presentVillage','presentPostOffice','presentPoliceStation','presentDistrict'])+(warningBenefitDraft.presentAddress&&!['presentVillage','presentPostOffice','presentPoliceStation','presentDistrict'].some(key=>warningBenefitDraft[key])?'<p class="warning-legacy-address">পুরোনো বর্তমান ঠিকানা: '+esc(warningBenefitDraft.presentAddress)+'</p>':'')+'<div class="warning-input-save"><button type="submit" id="warningBenefitSave" class="primary" data-page-action-required="edit" '+(warningBenefitBusy?'disabled':'')+'>'+(warningBenefitBusy?'Saving…':'Save')+'</button></div></form></section>';
 warningHrLastCard=warningHrKey(warningBenefitDraft.cardNo);warningInputSyncDates();if(typeof applyActionControls==='function')applyActionControls();
};
const warningInputPreviousSave=saveWarningBenefit;
saveWarningBenefit=async function(){
 const form=document.getElementById('warningBenefitForm');if(!form)return;
 for(const input of form.querySelectorAll('[data-warning-benefit]'))warningBenefitDraft[input.dataset.warningBenefit]=input.value.trim();
 if(warningBenefitDraft.absenceDate&&!warningInputSyncDates()){
  const original=warningBenefitId&&warningBenefitRows().find(row=>row.id===warningBenefitId)?.warningBenefitEntry;
  let unchanged=false;try{unchanged=!!original&&warningInputDateText(warningInputDate(original.absenceDate))===warningInputDateText(warningInputDate(warningBenefitDraft.absenceDate))&&warningInputCompany(original.company)===warningInputCompany(warningBenefitDraft.company)&&warningLetterDateKeys.every(key=>String(original[key]||'')===String(warningBenefitDraft[key]||''));}catch{}
  if(!unchanged){toast(document.getElementById('warning-letter-date-status').textContent);return;}
 }
 const parts=['presentVillage','presentPostOffice','presentPoliceStation','presentDistrict'].map((key,i)=>warningBenefitDraft[key]?['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'][i]+' '+warningBenefitDraft[key]:'').filter(Boolean);if(parts.length){const address=parts.join(', ');if(warningBenefitDraft.presentAddress&&warningBenefitDraft.presentAddress!==address&&!warningBenefitDraft.legacyPresentAddress)warningBenefitDraft.legacyPresentAddress=warningBenefitDraft.presentAddress;warningBenefitDraft.presentAddress=address;}
 return warningInputPreviousSave();
};
document.getElementById('main').addEventListener('input',event=>{
 const input=event.target;if(activePage!=='admin-warning-new-entry')return;
 if(input.dataset.warningBenefit==='cardNo'){const status=document.getElementById('warning-letter-date-status');if(status)status.textContent='';}
 if(input.dataset.warningChoice)warningInputShowChoices(input);
 if(input.dataset.warningBenefit==='absenceDate'){input.setCustomValidity('');for(const key of warningLetterDateKeys){warningBenefitDraft[key]='';document.getElementById('warning-benefit-'+key).value='';}try{warningInputDate(input.value);warningInputSyncDates();}catch{}}
});
document.getElementById('main').addEventListener('change',event=>{if(event.target.dataset.warningBenefit==='company'){warningBenefitDraft.company=event.target.value;warningHomeCompany=event.target.value;warningInputSyncDates();}});
document.getElementById('main').addEventListener('focusin',event=>{if(event.target.dataset.warningChoice)warningInputShowChoices(event.target);else if(!event.target.closest('.warning-choice-wrap'))warningInputCloseChoices();});
document.getElementById('main').addEventListener('focusout',event=>{if(event.target.dataset.warningBenefit==='absenceDate')warningInputSyncDates();if(event.target.dataset.warningChoice)setTimeout(()=>{if(warningChoiceInput===event.target&&!event.target.parentElement.contains(document.activeElement))warningInputCloseChoices();},0);});
document.getElementById('main').addEventListener('pointerdown',event=>{const option=event.target.closest('[data-warning-choice-value]');if(option){event.preventDefault();warningInputChoose(option.dataset.warningChoiceValue);}});
document.getElementById('main').addEventListener('click',event=>{const toggle=event.target.closest('[data-warning-choice-toggle]');if(toggle){const input=document.getElementById('warning-benefit-'+toggle.dataset.warningChoiceToggle),open=input.getAttribute('aria-expanded')==='true';input.focus();if(open)warningInputCloseChoices();else warningInputShowChoices(input,true);}});
document.getElementById('main').addEventListener('keydown',event=>{
 if(!event.target.dataset.warningChoice)return;
 if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();warningInputCloseChoices();return;}
 if(!warningChoiceInput||!['ArrowDown','ArrowUp','Enter'].includes(event.key))return;
 const options=[...event.target.parentElement.querySelectorAll('[role=option]')];if(!options.length)return;
 event.preventDefault();event.stopImmediatePropagation();
 if(event.key==='Enter'){warningInputChoose(options[Math.max(0,warningChoiceIndex)].dataset.warningChoiceValue);return;}
 warningChoiceIndex=warningChoiceIndex<0?(event.key==='ArrowDown'?0:options.length-1):(warningChoiceIndex+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;
 options.forEach((option,i)=>option.setAttribute('aria-selected',String(i===warningChoiceIndex)));options[warningChoiceIndex].scrollIntoView({block:'nearest'});
},true);
