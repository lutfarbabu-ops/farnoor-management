'use strict';

const servicePaymentPage='admin-service-payment';
const servicePaidPage='admin-service-paid';
const servicePaymentMethods=['Cash','Bkash','Bank','DutchBanglaBank PLC'];
const servicePaymentLabels=['1st Payment','2nd Payment','3rd Payment'];
const servicePaymentToday=()=>new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'});
let servicePaymentMode='',servicePaymentSearch='',servicePaymentIds=[],servicePaymentCard='',servicePaymentDraft={},servicePaymentBaseline=null,servicePaymentBusy=false;
let servicePaidRange=null;

pageInfo('admin-service-file').department.pages.push({
 id:servicePaymentPage,name:'Payment',icon:'৳',hidden:true,navigationOnly:true,
 navPath:['Service Benefit'],permissionPage:'admin-documents'
},{
 id:servicePaidPage,name:'Paid',icon:'✓',hidden:true,navigationOnly:true,
 navPath:['Service Benefit'],permissionPage:'admin-documents'
});

function servicePaymentRecord(card){
 return serviceBenefitSearchKey(card)?serviceBenefitResolveExisting({cardNo:card},null):null;
}

function servicePaymentCents(value){
 const number=serviceBenefitSearchKey(value).replaceAll(',','');
 if(!/^\d+(?:\.\d{1,2})?$/.test(number))throw Error('সঠিক টাকার পরিমাণ দিন।');
 const [whole,fraction='']=number.split('.');
 const cents=Number(whole)*100+Number(fraction.padEnd(2,'0'));
 if(!Number.isSafeInteger(cents))throw Error('টাকার পরিমাণ বেশি বড় হয়েছে।');
 return cents;
}

function servicePaymentSummary(row){
 const entry=row.serviceBenefitEntry;
 const history=Array.isArray(row.serviceBenefitPayments)?row.serviceBenefitPayments:[];
 const paid=history.reduce((sum,payment)=>sum+servicePaymentCents(payment.amount),0);
 try{
  const basic=serviceBenefitBasic(entry.salary);
  if(basic===''||Number(basic)<0)throw Error('সঠিক Salary দিন।');
  const years=servicePrintYearRows(entry.joiningDate,entry.release);
  const total=years.reduce((sum,year)=>sum+servicePaymentCents(servicePrintMoney(Number(basic)/30*year.days)),0);
  return {history,total,paid,due:total-paid};
 }catch{
  return {history,total:null,paid,due:null};
 }
}

function servicePaymentMoney(cents){
 return cents===null?'':(cents/100).toLocaleString('en-US',{maximumFractionDigits:2});
}

function servicePaymentStatus(summary){
 if(summary.due===null)return 'Check Input Report';
 if(summary.due<0)return 'Overpaid';
 if(summary.due===0)return 'Payment Complete';
 return summary.paid?'Partial Payment':'Due';
}

function servicePaymentHistory(payments){
 return '<table class="service-payment-table"><thead><tr><th>SL</th><th>Payment Date</th><th>Payment</th><th>Bkash/Bank Ac No</th><th>Amount</th></tr></thead><tbody>'+
  payments.map((payment,index)=>'<tr>'+[index+1,payment.paymentDate,payment.method,payment.account,servicePaymentMoney(servicePaymentCents(payment.amount))].map(value=>'<td>'+esc(value??'')+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
}

const servicePaymentOriginalNavigation=serviceBenefitNavigation;
serviceBenefitNavigation=function(){
 const button='<button type="button" data-service-nav="'+servicePaymentPage+'" aria-pressed="'+(activePage===servicePaymentPage)+'"><span aria-hidden="true">৳</span> Payment</button>';
 const paid='<button type="button" data-service-nav="'+servicePaidPage+'" aria-pressed="'+(activePage===servicePaidPage)+'"><span aria-hidden="true">✓</span> Paid</button>';
 return servicePaymentOriginalNavigation().replace(/<button type="button" data-service-nav="admin-service-entry-report"[^>]*>.*?<\/button>/,report=>button+report+paid);
};

const servicePaymentOriginalPaper=servicePrintBuildPaper;
servicePrintBuildPaper=function(row,company){
 const template=document.createElement('template');
 template.innerHTML=servicePaymentOriginalPaper(row,company);
 const paper=template.content.firstElementChild;
 const details=paper.querySelector('.service-benefit-print-details');
 if(details){
  const salary=[...details.querySelectorAll('dt')].find(label=>label.textContent==='Salary');
  const label=document.createElement('dt'),value=document.createElement('dd');
  label.textContent='Date Of Resign';
  value.innerHTML='<span aria-hidden="true">:</span> <b>'+esc(normalizeDate(row.serviceBenefitEntry.release))+'</b>';
  salary.before(label,value);
  const signatures=paper.querySelector('.service-benefit-signatures');
  const checked=document.createElement('strong');
  checked.textContent='Checked by';
  signatures.lastElementChild.before(checked);
  const payments=servicePaymentSummary(row).history;
  if(payments.length)paper.insertAdjacentHTML('beforeend','<section class="service-payment-history"><h4>Payment history</h4>'+servicePaymentHistory(payments)+'</section>');
 }
 return paper.outerHTML;
};

function servicePaymentCellValues(row){
 const summary=servicePaymentSummary(row),last=summary.history.at(-1);
 return [servicePaymentMoney(summary.total),servicePaymentMoney(summary.due),
  ...servicePaymentLabels.map((_,index)=>servicePaymentMoney(summary.history[index]?servicePaymentCents(summary.history[index].amount):null)),
  last?.date,last?.paymentDate,last?.method,last?.account,servicePaymentStatus(summary)];
}

const servicePaymentOriginalReport=renderServiceBenefitReport;
renderServiceBenefitReport=function(){
 servicePaymentOriginalReport();
 const table=document.getElementById('serviceBenefitReport');
 const rows=new Map(serviceBenefitRows().map(row=>[row.id,row]));
 const headings=['Total','Due',...servicePaymentLabels,'Date','Payment Date','Payment','Bkash/Bank Ac No','Remarks'];
 const header=table.tHead.rows[0];
 for(const label of headings){
  const cell=document.createElement('th');
  cell.textContent=label;
  header.lastElementChild.before(cell);
 }
 for(const tr of table.tBodies[0].rows){
  const row=rows.get(tr.dataset.serviceReportRow);
  if(!row){tr.cells[0].colSpan=header.cells.length;continue;}
  for(const value of servicePaymentCellValues(row)){
   const cell=document.createElement('td');
   cell.textContent=value??'';
   tr.lastElementChild.before(cell);
  }
 }
};

function servicePaymentSearchResults(){
 const rowsById=new Map();
 for(const row of serviceBenefitRows()){
  const id=serviceBenefitSearchKey(row.serviceBenefitEntry?.cardNo||row.reference);
  if(!id||!row.serviceBenefitEntry)continue;
  const previous=rowsById.get(id);
  if(!previous||String(row.updatedAt||row.createdAt||'')>String(previous.updatedAt||previous.createdAt||''))rowsById.set(id,row);
 }
 const rows=(servicePaymentIds.length?servicePaymentIds.map(id=>rowsById.get(id)):Array.from(rowsById.values())).filter(Boolean);
 return servicePaymentResultsTable(rows,summary=>summary.due>0);
}

function servicePaymentResultsTable(rows,includeRow,includeInstallment=()=>true){
 const totals=[0,0,0,0,0];
 const body=rows.map(row=>{
  const summary=servicePaymentSummary(row);
  if(!includeRow(summary))return '';
  const entry=row.serviceBenefitEntry;
  const installments=servicePaymentLabels.map((_,index)=>{
   const payment=summary.history[index];
   return payment&&includeInstallment(payment)?servicePaymentCents(payment.amount):null;
  });
  const amounts=[summary.total,...installments,summary.due];
  amounts.forEach((amount,index)=>{totals[index]+=amount??0;});
  return '<tr>'+[entry.cardNo||row.reference,entry.name,...amounts.map(servicePaymentMoney)].map(value=>'<td>'+esc(value??'')+'</td>').join('')+'</tr>';
 }).join('');
 const headings=['ID NO','NAME','TOTAL',...servicePaymentLabels,'DUE'];
 const footer=body?'<tfoot><tr><th colspan="2" scope="row">Total</th>'+totals.map(amount=>'<td>'+servicePaymentMoney(amount)+'</td>').join('')+'</tr></tfoot>':'';
 return {hasRows:!!body,html:'<div id="servicePaymentResults"><table class="service-payment-table"><thead><tr>'+
  headings.map(label=>'<th>'+label+'</th>').join('')+'</tr></thead><tbody>'+body+'</tbody>'+footer+'</table></div>'};
}

function servicePaidDateKey(value){
 const date=serviceBenefitSearchKey(value);
 const iso=date.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})(?:t|$)/);
 if(iso)return iso[1];
 const local=date.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
 if(!local)return '';
 const [,day,month,year]=local;
 return year+'-'+month.padStart(2,'0')+'-'+day.padStart(2,'0');
}

function servicePaidResults(range){
 const inRange=payment=>{
  if(servicePaymentCents(payment.amount)<=0)return false;
  if(!range)return true;
  const date=servicePaidDateKey(payment.paymentDate||payment.date);
  return date>=range.start&&date<=range.end;
 };
 return servicePaymentResultsTable(serviceBenefitRows().filter(row=>row.serviceBenefitEntry),
  summary=>summary.history.some(inRange),inRange);
}

function renderServicePaid(){
 if(!pagePermission('view',servicePaidPage))return;
 const start=servicePaidRange?.start??'',end=servicePaidRange?.end??'';
 const results=servicePaidResults(servicePaidRange);
 $('#main').innerHTML=serviceBenefitNavigation()+'<div class="service-payment-controls no-print">'+
  '<form id="servicePaidSearchForm"><label>Start Date<input type="date" name="start" value="'+esc(start)+'" required></label>'+
  '<label>End Date<input type="date" name="end" value="'+esc(end)+'" required></label><button type="submit">⌕ Search</button>'+
  '<button type="button" data-service-paid-all aria-pressed="'+(!servicePaidRange)+'">ALL</button></form></div>'+
  (results.hasRows?results.html:'<p role="status">'+(servicePaidRange?'No paid payments found for this date range.':'No paid payments found.')+'</p>');
 applyActionControls();
}

function servicePaymentDraftDue(summary){
 if(summary?.due==null)return null;
 let due=summary.due;
 for(let index=0;index<servicePaymentLabels.length;index++){
  const amount=servicePaymentDraft['amount'+index];
  if(amount)try{
   const saved=summary.history[index];
   due+=(saved?servicePaymentCents(saved.amount):0)-servicePaymentCents(amount);
  }catch{/* Wait for a complete amount. */}
 }
 return due;
}

function servicePaymentEntry(){
 if(servicePaymentMode!=='entry')return '';
 const record=servicePaymentRecord(servicePaymentCard),summary=record?servicePaymentSummary(record):null;
 const history=summary?.history??[];
 const editable=!!record&&pagePermission('edit',servicePaymentPage)&&!servicePaymentBusy;
 const selected=history.length&&(!(summary.due>0)||history.length>=servicePaymentLabels.length)
  ?String(history.length-1):'new';
 const savedDetails=history[Number(selected)];
 const method=servicePaymentDraft['method-'+selected]??(savedDetails?.method==='bKash'?'Bkash':savedDetails?.method??'');
 const account=servicePaymentDraft['account-'+selected]??savedDetails?.account??'';
 const field=(key,label,value='',readonly=false,attrs='')=>'<label><span>'+label+'</span><input name="'+key+'" value="'+esc(value)+'" '+(readonly?'readonly ':'')+attrs+'></label>';
 const fields=field('card','ID NO',servicePaymentCard,false,'required autocomplete="off" maxlength="120"')+
  field('name','NAME',record?.serviceBenefitEntry.name||'',true)+
  field('total','TOTAL',servicePaymentMoney(summary?.total??null),true)+
  field('due','DUE',servicePaymentMoney(servicePaymentDraftDue(summary)),true)+
  servicePaymentLabels.map((label,index)=>{
   const saved=summary?.history[index];
   const dateKey='paymentDate'+index,readonly=!editable;
   const date=servicePaymentDraft[dateKey]??saved?.paymentDate??servicePaymentToday();
   const amount=servicePaymentDraft['amount'+index]??(saved?servicePaymentMoney(servicePaymentCents(saved.amount)):'');
   return '<fieldset class="service-payment-installment" aria-label="'+label+'">'+
    field(dateKey,label+' Date',date??'',readonly,'placeholder="DD/MM/YYYY"')+
    field('amount'+index,label,amount,readonly,'inputmode="decimal"')+'</fieldset>';
  }).join('')+
  '<label><span>Payment</span><select name="method-'+selected+'" '+(!editable?'disabled':'')+'><option value="">Select payment type</option>'+
  servicePaymentMethods.map(option=>'<option '+(option===method?'selected':'')+'>'+option+'</option>').join('')+'</select></label>'+
  field('account-'+selected,'Bkash/Bank Ac No',account,!editable,'maxlength="120"');
 const notice=servicePaymentCard?(record?(summary.due===null?'Input Report-এ Salary, Joining Date ও Release যাচাই করুন।':servicePaymentStatus(summary)):'এই আইডির রেকর্ড Input Report-এ পাওয়া যায়নি।'):'';
 return '<form id="servicePaymentEntryForm" class="service-payment-entry no-print">'+fields+
  '<p role="status">'+esc(notice)+'</p><button type="submit" class="primary" '+(!editable?'disabled':'')+'>'+(servicePaymentBusy?'Saving…':'Save')+'</button></form>';
}

function renderServicePayment(){
 if(!pagePermission('view',servicePaymentPage))return;
 const results=servicePaymentSearchResults();
 $('#main').innerHTML=serviceBenefitNavigation()+'<div class="service-payment-controls no-print"><button type="button" data-service-payment-entry>✎ Payment Entry</button>'+
  '<form id="servicePaymentSearchForm"><input id="servicePaymentSearch" aria-label="Search ID No" value="'+esc(servicePaymentSearch)+'" placeholder="ID No, ID No…" autocomplete="off">'+
  '<button type="submit">⌕ Search</button></form>'+(results.hasRows?'<button type="button" data-page-action="print">🖨 Print</button>':'')+'</div>'+servicePaymentEntry()+results.html;
 applyActionControls();
}

function servicePaymentLoadCard(value){
 servicePaymentCard=value.trim();
 const row=servicePaymentRecord(servicePaymentCard);
 servicePaymentDraft={...row?.serviceBenefitPaymentDraft};
 servicePaymentBaseline=row?structuredClone(row):null;
 renderServicePayment();
 if(row&&servicePaymentSummary(row).due===0){
  const dialog=document.createElement('dialog');
  dialog.innerHTML='<form method="dialog"><h3>Payment Complete</h3><button autofocus>OK</button></form>';
  document.body.append(dialog);
  dialog.addEventListener('close',()=>dialog.remove(),{once:true});
  dialog.showModal();
 }else document.querySelector('#servicePaymentEntryForm input[name^="amount"]:not([readonly])')?.focus();
}

function servicePaymentPrepare(row,draft){
 const {history,total}=servicePaymentSummary(row);
 const date=servicePaymentToday();
 const payments=[];
 for(let index=0;index<servicePaymentLabels.length;index++){
  const saved=history[index],key=saved?String(index):'new';
  const amount=String(draft['amount'+index]??'').trim()||saved?.amount;
  if(!amount)continue;
  if(index!==payments.length)throw Error('আগের কিস্তির ঘর আগে পূরণ করুন।');
  const cents=servicePaymentCents(amount);
  if(!cents)throw Error('পেমেন্ট শূন্যের বেশি হতে হবে।');
  const dateInput=draft['paymentDate'+index];
  const paymentDate=dateInput!==undefined?(dateInput.trim()?normalizeDate(dateInput):''):saved?.paymentDate??date;
  let details={};
  if(!saved||draft['method-'+key]!==undefined||draft['account-'+key]!==undefined){
   const choice=draft['method-'+key]??saved?.method??'';
   const method=choice==='bKash'?'Bkash':choice;
   const account=String(draft['account-'+key]??saved?.account??'').trim();
   if(method&&!servicePaymentMethods.includes(method))throw Error('সঠিক পেমেন্টের ধরন নির্বাচন করুন।');
   if(account.length>120)throw Error('Bkash/Bank Ac No তথ্য বেশি বড় হয়েছে।');
   details={method,account:method==='Cash'?'':account};
  }
  const amountToSave=saved&&servicePaymentCents(saved.amount)===cents?saved.amount:(cents/100).toFixed(2);
  payments.push({...saved,...details,date:saved?.date??date,paymentDate,amount:amountToSave});
 }
 const paid=payments.reduce((sum,payment)=>sum+servicePaymentCents(payment.amount),0);
 const amountsChanged=payments.length!==history.length||payments.some((payment,index)=>servicePaymentCents(payment.amount)!==servicePaymentCents(history[index].amount));
 if(amountsChanged){
  if(total===null)throw Error('Input Report-এ Salary, Joining Date ও Release যাচাই করুন।');
  if(paid>total)throw Error('কিস্তির যোগফল মোট টাকার চেয়ে বেশি।');
 }
 const pending={};
 for(let index=payments.length;index<servicePaymentLabels.length;index++){
  const key='paymentDate'+index;
  if(draft[key]!==undefined)pending[key]=draft[key].trim()?normalizeDate(draft[key]):'';
 }
 if(payments.length===history.length&&payments.length<servicePaymentLabels.length){
  for(const key of ['method-new','account-new']){
   if(draft[key]!==undefined)pending[key]=draft[key].trim();
  }
 }
 return {payments,pending};
}

async function servicePaymentSave(){
 if(servicePaymentBusy||activePage!==servicePaymentPage||!pagePermission('edit',servicePaymentPage))return;
 const row=servicePaymentRecord(servicePaymentCard);
 if(!row)return toast('Input Report থেকে একটি আইডি নির্বাচন করুন।');
 if(!personalSaveSame(row,servicePaymentBaseline))return toast('রেকর্ডটি অন্য জায়গা থেকে বদলেছে। আইডি আবার লোড করে বাকি টাকা মিলিয়ে নিন।');
 let prepared;
 try{prepared=servicePaymentPrepare(row,servicePaymentDraft);}catch(error){return toast(error.message);}
 const {payments,pending}=prepared;
 const record={...row,serviceBenefitPayments:payments,serviceBenefitPaymentDraft:pending,updatedAt:new Date().toISOString()};
 const next={...state,records:{...state.records,'admin-documents':state.records['admin-documents'].map(item=>item.id===row.id?record:item)}};
 servicePaymentBusy=true;
 renderServicePayment();
 try{
  if(await commit(next,{personalFile:record})){
   servicePaymentDraft={...pending};
   servicePaymentBaseline=structuredClone(record);
   const previous=servicePaymentSummary(row);
   const paymentChanged=!personalSaveSame(payments,previous.history);
   if(paymentChanged)servicePaidRange=null;
   const complete=servicePaymentSummary(record).due===0&&paymentChanged;
   if(complete){
    servicePaymentMode='';
    servicePaymentCard='';
    servicePaymentBaseline=null;
   }
   toast(complete?'Payment Complete':'Payment entry saved.');
  }
 }finally{
  servicePaymentBusy=false;
  if(activePage===servicePaymentPage)renderServicePayment();
 }
}

const servicePaymentOriginalRender=renderPage;
renderPage=function(...args){
 if(activePage===servicePaymentPage&&pagePermission('view',servicePaymentPage))return renderServicePayment();
 if(activePage===servicePaidPage&&pagePermission('view',servicePaidPage))return renderServicePaid();
 return servicePaymentOriginalRender.apply(this,args);
};

$('#main').addEventListener('input',event=>{
 const input=event.target;
 if(input.id==='servicePaymentSearch')servicePaymentSearch=input.value;
 if(input.form?.id==='servicePaymentEntryForm'&&input.name!=='card'){
  servicePaymentDraft[input.name]=input.value;
  if(/^amount[0-2]$/.test(input.name)){
   const row=servicePaymentRecord(servicePaymentCard);
   input.form.elements.due.value=servicePaymentMoney(servicePaymentDraftDue(row?servicePaymentSummary(row):null));
  }
 }
});
$('#main').addEventListener('change',event=>{
 const input=event.target;
 if(input.form?.id==='servicePaymentEntryForm'&&input.name==='card'&&input.value.trim()!==servicePaymentCard){
  setTimeout(()=>{if(activePage===servicePaymentPage&&input.isConnected)servicePaymentLoadCard(input.value);},0);
 }
});
$('#main').addEventListener('keydown',event=>{
 const input=event.target;
 if(event.key!=='Enter'||event.isComposing||input.form?.id!=='servicePaymentEntryForm'||input.name!=='card')return;
 event.preventDefault();
 servicePaymentLoadCard(input.value);
});
$('#main').addEventListener('submit',event=>{
 if(event.target.id==='servicePaidSearchForm'){
  event.preventDefault();
  if(activePage!==servicePaidPage||!pagePermission('view',servicePaidPage))return;
  const start=event.target.elements.start.value,end=event.target.elements.end.value;
  if(!start||!end||start>end)return toast('Select a valid start and end date.');
  servicePaidRange={start,end};
  renderServicePaid();
 }else if(event.target.id==='servicePaymentSearchForm'){
  event.preventDefault();
  servicePaymentIds=[...new Set(servicePaymentSearch.split(/[,，]+/).map(serviceBenefitSearchKey).filter(Boolean))];
  renderServicePayment();
 }else if(event.target.id==='servicePaymentEntryForm'){
  event.preventDefault();
  const card=event.target.elements.card.value;
  if(card.trim()!==servicePaymentCard)servicePaymentLoadCard(card);
  else void servicePaymentSave();
 }
});
$('#main').addEventListener('click',event=>{
 if(event.target.closest('[data-service-nav="admin-service-payment"]')){
  servicePaymentMode='';
  servicePaymentSearch='';
  servicePaymentIds=[];
 }
},true);
$('#main').addEventListener('click',event=>{
 if(event.target.closest('[data-service-paid-all]')&&activePage===servicePaidPage&&pagePermission('view',servicePaidPage)){
  servicePaidRange=null;
  renderServicePaid();
  document.querySelector('[data-service-paid-all]')?.focus();
 }
 if(event.target.closest('[data-service-payment-entry]')){
  servicePaymentMode='entry';
  renderServicePayment();
  document.querySelector('#servicePaymentEntryForm input[name="card"]')?.focus();
 }
});

const servicePaymentStyle=document.createElement('style');
servicePaymentStyle.textContent=`
.service-benefit-navigation [data-service-nav="admin-service-payment"]{background:#dceeff;border:1px solid #88b9ea;color:#174c7a}
.service-benefit-navigation [data-service-nav="admin-service-paid"]{background:#d9f4eb;border:1px solid #8fcdb4;color:#175c49}
.service-payment-controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:14px 0}
.service-payment-controls form{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px;width:min(100%,520px);margin:0}
.service-payment-controls #servicePaidSearchForm{display:flex;flex-wrap:wrap;align-items:end;width:auto}
#servicePaidSearchForm label{display:grid;gap:4px;min-width:0;margin:0}
#servicePaidSearchForm [data-service-paid-all]{background:#d9f4eb;color:#175c49}
#servicePaidSearchForm [data-service-paid-all][aria-pressed="true"]{border-color:#175c49}
.service-payment-controls input{width:100%;min-width:0}
.service-payment-controls [data-service-payment-entry]{background:#d9f4eb;color:#175c49}
.service-payment-controls button[type=submit]{background:#fff0d8;color:#80501a}
.service-payment-entry{display:grid;grid-template-columns:minmax(0,1fr);gap:5px;max-width:580px;padding:14px;margin:0 0 18px;background:#fff;border-radius:10px}
.service-payment-installment{display:grid;gap:5px;min-inline-size:0;margin:3px 0;padding:7px 6px;border:1px solid #9ebfe4;border-inline-start-width:4px;border-radius:7px;background:#edf5ff}
.service-payment-installment:nth-of-type(2){border-color:#8fcdb4;background:#edf9f3}
.service-payment-installment:nth-of-type(3){border-color:#c2ace7;background:#f6f0ff}
.service-payment-entry label{display:grid;grid-template-columns:clamp(95px,28%,150px) minmax(0,1fr);align-items:center;gap:8px;margin:0}
.service-payment-entry label :is(input,select){box-sizing:border-box;width:100%;min-width:0;margin:0;padding:5px 8px}
.service-payment-entry :is(label,input,select,p),#servicePaymentSearch,#servicePaymentResults :is(th,td){text-align:center}
.service-payment-entry select{text-align-last:center}
.service-payment-entry button{justify-self:end;align-self:center}
#servicePaymentResults{overflow-x:auto;background:#fff}
.service-payment-table{border-collapse:collapse;width:100%;color:#111}
.service-payment-table th,.service-payment-table td{border:1px solid #647b73;padding:6px 8px;text-align:left;overflow-wrap:anywhere}
.service-payment-table tfoot td{font-weight:700}
.service-benefit-paper:not(.service-benefit-empty){padding-top:7mm}
.service-benefit-paper-heading div{font-size:15px}
.service-benefit-signatures strong{max-width:30%}
.service-payment-history{margin-top:8mm}
.service-payment-history h4{margin:0 0 3mm;font-weight:700}
body:has(.service-payment-controls) #main>.page-action-toolbar{display:none!important}
@media print{
 body:has(:is(#servicePaymentResults,#serviceBenefitPrintContent))>:not(#workspace),
 #workspace:has(:is(#servicePaymentResults,#serviceBenefitPrintContent))>:not(#main),
 #main:has(:is(#servicePaymentResults,#serviceBenefitPrintContent))>:not(#servicePaymentResults,#serviceBenefitPrintContent){display:none!important}
 html:has(:is(#servicePaymentResults,#serviceBenefitPrintContent)),
 body:has(:is(#servicePaymentResults,#serviceBenefitPrintContent)),
 :is(#workspace,#main):has(:is(#servicePaymentResults,#serviceBenefitPrintContent)),
 :is(#servicePaymentResults,#serviceBenefitPrintContent){
  background:#fff!important;border:0!important;box-shadow:none!important;
  margin:0!important;padding:0!important;overflow:visible!important
 }
 :is(#servicePaymentResults,#serviceBenefitPrintContent) *{
  background:transparent!important;color:#000!important;-webkit-text-fill-color:#000!important;
  box-shadow:none!important;text-shadow:none!important
 }
 .service-payment-table :is(th,td){border:1px solid #000!important}
 .service-payment-history th:first-child{width:7%;box-sizing:border-box}
 .service-benefit-paper:not(.service-benefit-empty){padding:5mm 3mm 0 8mm}
 .service-benefit-paper-heading div{font-size:12pt}
 .service-benefit-signatures strong{width:max-content}
 .service-payment-table thead{display:table-header-group}
 .service-payment-table tr{break-inside:avoid}
}
`;
document.head.append(servicePaymentStyle);
