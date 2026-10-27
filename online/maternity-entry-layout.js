'use strict';
const maternityEntryExtraFields=[['paymentMode','Payment Mode'],['bankMobile','bKash No / Bank A/C No'],['smsMobile','Mobile Number (for SMS)'],['calculationFrom','Calculation period from'],['calculationTo','Calculation period to'],['mlFrom','Period of M/L from'],['mlTo','Period of M/L to'],['firstVoucherDate','1st voucher date'],['secondVoucherDate','2nd voucher date']];
const maternityEntryDateKeys=['joiningDate','calculationFrom','calculationTo','mlFrom','mlTo','firstVoucherDate','secondVoucherDate'];
function maternityEntryDate(value){
 const text=String(value||'').trim();if(!text)return '';
 const iso=text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
 return normalizeDate(iso?`${iso[3]}/${iso[2]}/${iso[1]}`:text);
}
function maternityEntryDateISO(value){try{return maternityEntryDate(value).split('/').reverse().join('-');}catch{return '';}}
function maternityEntryShiftDate(value,days){const iso=maternityEntryDateISO(value);if(!iso)return '';const date=new Date(iso+'T00:00:00Z');date.setUTCDate(date.getUTCDate()+days);return maternityEntryDate(date.toISOString().slice(0,10));}
function maternityPrepareEntry(entry){
 for(const key of maternityEntryDateKeys)if(entry[key])entry[key]=maternityEntryDate(entry[key]);
 for(const [from,to]of [['calculationFrom','calculationTo'],['mlFrom','mlTo']])if(entry[from]&&entry[to]&&maternityEntryDateISO(entry[from])>maternityEntryDateISO(entry[to]))throw Error('শুরুর তারিখ শেষের তারিখের পরে হতে পারবে না।');
 if(entry.mlFrom){entry.firstVoucherDate=maternityEntryShiftDate(entry.mlFrom,-2);entry.secondVoucherDate=maternityEntryShiftDate(entry.mlFrom,60);}
 if(entry.calculationFrom||entry.calculationTo){entry.calculationMonth=[entry.calculationFrom||'',entry.calculationTo||''].join(' to ');if(entry.calculationTo)entry.lastMonth=entry.calculationTo.slice(3);}
 if(entry.mlFrom||entry.mlTo)entry.periodML=[entry.mlFrom||'',entry.mlTo||''].join(' to ');
 if(entry.firstVoucherDate)entry.payment=entry.firstVoucherDate;
}
function maternityEntryView(entry){
 const values={...entry};
 for(const [legacy,from,to]of [['calculationMonth','calculationFrom','calculationTo'],['periodML','mlFrom','mlTo']]){
  if(!values[from]&&values[legacy]){const pair=maternityCalculationPeriod(values[legacy]);values[from]=maternityEntryDateISO(pair[0])?maternityEntryDate(pair[0]):'';values[to]=maternityEntryDateISO(pair[1])?maternityEntryDate(pair[1]):'';}
 }
 if(!values.firstVoucherDate&&values.payment&&maternityEntryDateISO(values.payment))values.firstVoucherDate=maternityEntryDate(values.payment);
 if(!maternityBenefitId){if(!values.paymentMode)values.paymentMode='Cash';if(!values.daysDividedBy)values.daysDividedBy='26';}
 if(values.mlFrom){values.firstVoucherDate=maternityEntryShiftDate(values.mlFrom,-2);values.secondVoucherDate=maternityEntryShiftDate(values.mlFrom,60);}
 return values;
}
const maternityEntryPreviousEntry=renderMaternityBenefitEntry;
renderMaternityBenefitEntry=function(){
 if(activePage!=='admin-maternity-new-entry')return maternityEntryPreviousEntry();
 maternityBenefitDraft=maternityEntryView(maternityBenefitDraft);
 const control=(key,{date=false,number=false,auto=false,placeholder='',label=''}={})=>'<input id="maternity-benefit-'+key+'" data-maternity-benefit="'+key+'" aria-label="'+esc(label||key)+'" type="'+(date?'date':number?'number':'text')+'" '+(number?'step="any" min="'+(key==='daysDividedBy'?'1':'0')+'"':'maxlength="500"')+' value="'+esc(date?maternityEntryDateISO(maternityBenefitDraft[key]):number?(maternityCalculationNumber(maternityBenefitDraft[key])??''):maternityBenefitDraft[key]||'')+'" '+(auto?'readonly':'')+' '+(placeholder?'placeholder="'+esc(placeholder)+'"':'')+' '+(maternityBenefitChoices[key]?'list="maternity-entry-options-'+key+'"':'')+' autocomplete="off">';
 const field=(key,label,options={})=>'<div class="maternity-entry-field"><label for="maternity-benefit-'+key+'">'+label+'</label>'+control(key,{...options,label})+'</div>';
 const period=(from,to,label)=>'<div class="maternity-entry-field"><label for="maternity-benefit-'+from+'">'+label+'</label><div class="maternity-entry-period">'+control(from,{date:true,label:label+' from'})+'<span>to</span>'+control(to,{date:true,label:label+' to'})+'</div></div>';
 $('#main').innerHTML='<div class="page-heading"><div><h2>Maternity File — New Entry</h2></div></div><div class="maternity-entry-layout"><section class="maternity-entry-card"><form id="maternityBenefitForm" aria-label="Maternity File New Entry" class="maternity-entry-grid">'+
 field('cardNo','ID/Card No')+field('name','Name')+field('designation','Designation')+field('section','Section')+field('salary','Salary',{number:true})+field('joiningDate','Joining Date',{placeholder:'DD/MM/YYYY'})+
 period('calculationFrom','calculationTo','Calculatin Month')+period('mlFrom','mlTo','Period M/L')+field('lastMonth','Last Month',{placeholder:'MM/YYYY'})+field('daysDividedBy','Days Divided',{number:true})+field('firstVoucherDate','1st Payment',{date:true,auto:true})+field('secondVoucherDate','2nd Payment',{date:true,auto:true})+
 Object.entries(maternityBenefitChoices).map(([key,choices])=>'<datalist id="maternity-entry-options-'+key+'">'+choices.map(value=>'<option value="'+esc(value)+'"></option>').join('')+'</datalist>').join('')+'<div class="maternity-entry-full maternity-entry-save"><button id="maternityBenefitSave" type="submit" class="primary" data-page-action-required="edit" '+(maternityBenefitBusy?'disabled':'')+'>'+(maternityBenefitBusy?'Saving…':'Save')+'</button></div></form></section></div>';
 if(typeof applyActionControls==='function')applyActionControls();
};
document.getElementById('main').addEventListener('input',event=>{
 if(activePage!=='admin-maternity-new-entry'||!event.target.dataset.maternityBenefit)return;
 const key=event.target.dataset.maternityBenefit;
 if(maternityEntryDateKeys.includes(key)&&event.target.type==='date'){maternityBenefitDraft[key]=event.target.value?maternityEntryDate(event.target.value):'';event.target.setCustomValidity('');}
 if(key==='calculationTo'){const value=event.target.value?maternityEntryDate(event.target.value).slice(3):'';maternityBenefitDraft.lastMonth=value;document.getElementById('maternity-benefit-lastMonth').value=value;}
 if(key==='mlFrom')for(const [target,days]of [['firstVoucherDate',-2],['secondVoucherDate',60]]){const value=event.target.value?maternityEntryShiftDate(event.target.value,days):'';maternityBenefitDraft[target]=value;document.getElementById('maternity-benefit-'+target).value=maternityEntryDateISO(value);}
});
