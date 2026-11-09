'use strict';

const servicePaymentPage='admin-service-payment';
const servicePaymentMethods=['Cash','bKash','Bank'];
const servicePaymentLabels=['1st Payment','2nd Payment','3rd Payment'];
const servicePaymentToday=()=>new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'});
let servicePaymentMode='',servicePaymentSearch='',servicePaymentIds=[],servicePaymentCard='',servicePaymentDraft={},servicePaymentBaseline=null,servicePaymentBusy=false;

pageInfo('admin-service-file').department.pages.push({
 id:servicePaymentPage,name:'Payment',icon:'৳',hidden:true,navigationOnly:true,
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

function servicePaymentHistory(row){
 const payments=servicePaymentSummary(row).history;
 return '<table class="service-payment-table"><thead><tr><th>SL</th><th>Payment Date</th><th>Payment</th><th>Bkash/Bank</th><th>Amount</th></tr></thead><tbody>'+
  payments.map((payment,index)=>'<tr>'+[index+1,payment.paymentDate,payment.method,payment.account,servicePaymentMoney(servicePaymentCents(payment.amount))].map(value=>'<td>'+esc(value??'')+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
}

const servicePaymentOriginalNavigation=serviceBenefitNavigation;
serviceBenefitNavigation=function(){
 const button='<button type="button" data-service-nav="'+servicePaymentPage+'" aria-pressed="'+(activePage===servicePaymentPage)+'"><span aria-hidden="true">৳</span> Payment</button>';
 return servicePaymentOriginalNavigation().replace('<button type="button" data-service-nav="admin-service-entry-report"',button+'<button type="button" data-service-nav="admin-service-entry-report"');
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
  paper.insertAdjacentHTML('beforeend','<section class="service-payment-history"><h4>Payment history</h4>'+servicePaymentHistory(row)+'</section>');
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
 const headings=['Total','Due',...servicePaymentLabels,'Date','Payment Date','Payment','Bkash/Bank','Remarks'];
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
 if(!servicePaymentIds.length)return '';
 const rows=servicePaymentIds.map(id=>({id,row:servicePaymentRecord(id)}));
 let total=0,due=0;
 const body=rows.map(({id,row})=>{
  if(!row)return '<tr><td>'+esc(id)+'</td><td></td><td></td><td></td><td></td><td>Not found</td></tr>';
  const summary=servicePaymentSummary(row);
  total+=summary.total??0;
  due+=summary.due??0;
  const entry=row.serviceBenefitEntry;
  return '<tr>'+[entry.cardNo||id,entry.name,entry.designation,servicePaymentMoney(summary.total),
   servicePaymentMoney(summary.due),servicePaymentStatus(summary)].map(value=>'<td>'+esc(value??'')+'</td>').join('')+'</tr>';
 }).join('');
 return '<div id="servicePaymentResults"><table class="service-payment-table"><thead><tr><th>ID No</th><th>Name</th><th>Designation</th><th>Total Amount</th><th>Due</th><th>Remarks</th></tr></thead><tbody>'+
  body+'</tbody><tfoot><tr><th colspan="3">Total</th><td>'+servicePaymentMoney(total)+'</td><td>'+servicePaymentMoney(due)+'</td><td></td></tr></tfoot></table></div>';
}

function servicePaymentEntry(){
 if(servicePaymentMode!=='entry')return '';
 const record=servicePaymentRecord(servicePaymentCard),summary=record?servicePaymentSummary(record):null;
 const editable=summary?.due>0&&pagePermission('edit',servicePaymentPage)&&!servicePaymentBusy;
 const field=(key,label,value='',readonly=false,attrs='')=>'<label><span>'+label+'</span><input name="'+key+'" value="'+esc(value)+'" '+(readonly?'readonly ':'')+attrs+'></label>';
 const fields=field('card','ID NO',servicePaymentCard,false,'required autocomplete="off" maxlength="120"')+
  field('name','NAME',record?.serviceBenefitEntry.name||'',true)+
  field('total','TOTAL',servicePaymentMoney(summary?.total??null),true)+
  field('due','DUE',servicePaymentMoney(summary?.due??null),true)+
  servicePaymentLabels.map((label,index)=>{
   const saved=summary?.history[index];
   return field('amount'+index,label,saved?servicePaymentMoney(servicePaymentCents(saved.amount)):servicePaymentDraft['amount'+index]||'',!!saved||!editable,'inputmode="decimal"');
  }).join('')+
  field('date','DATE',servicePaymentDraft.date??servicePaymentToday(),!editable,'placeholder="DD/MM/YYYY"')+
  field('paymentDate','Payment Date',servicePaymentDraft.paymentDate??servicePaymentToday(),!editable,'placeholder="DD/MM/YYYY"')+
  '<label><span>Payment</span><select name="method" '+(!editable?'disabled':'')+'><option value="">Select payment type</option>'+
  servicePaymentMethods.map(method=>'<option '+(method===servicePaymentDraft.method?'selected':'')+'>'+method+'</option>').join('')+'</select></label>'+
  field('account','Bkash/Bank',servicePaymentDraft.account||'',!editable,'maxlength="120"');
 const notice=servicePaymentCard?(record?(summary.due===null?'Input Report-এ Salary, Joining Date ও Release যাচাই করুন।':servicePaymentStatus(summary)):'এই আইডির রেকর্ড Input Report-এ পাওয়া যায়নি।'):'';
 return '<form id="servicePaymentEntryForm" class="service-payment-entry no-print">'+fields+
  '<p role="status">'+esc(notice)+'</p><button type="submit" class="primary" '+(!editable?'disabled':'')+'>'+(servicePaymentBusy?'Saving…':'Save')+'</button></form>';
}

function renderServicePayment(){
 if(!pagePermission('view',servicePaymentPage))return;
 const results=servicePaymentSearchResults();
 $('#main').innerHTML=serviceBenefitNavigation()+'<div class="service-payment-controls no-print"><button type="button" data-service-payment-entry>✎ Payment Entry</button>'+
  '<form id="servicePaymentSearchForm"><label class="sr-only" for="servicePaymentSearch">ID No</label><input id="servicePaymentSearch" value="'+esc(servicePaymentSearch)+'" placeholder="ID No, ID No…" autocomplete="off">'+
  '<button type="submit">⌕ Search</button></form>'+(results?'<button type="button" data-page-action="print">🖨 Print</button>':'')+'</div>'+servicePaymentEntry()+results;
 applyActionControls();
}

function servicePaymentLoadCard(value){
 servicePaymentCard=value.trim();
 servicePaymentDraft={};
 const row=servicePaymentRecord(servicePaymentCard);
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
 const {history,due}=servicePaymentSummary(row);
 if(due===null||due<=0)throw Error('এই আইডির পরিশোধযোগ্য বাকি নেই।');
 const date=normalizeDate(draft.date??servicePaymentToday()),paymentDate=normalizeDate(draft.paymentDate??servicePaymentToday());
 const method=draft.method,account=String(draft.account||'').trim();
 if(!servicePaymentMethods.includes(method))throw Error('পেমেন্টের ধরন নির্বাচন করুন।');
 if(method!=='Cash'&&!account)throw Error('Bkash/Bank তথ্য দিন।');
 if(account.length>120)throw Error('Bkash/Bank তথ্য বেশি বড় হয়েছে।');
 const added=[];
 for(let index=history.length;index<servicePaymentLabels.length;index++){
  const amount=String(draft['amount'+index]||'').trim();
  if(!amount)continue;
  if(index!==history.length+added.length)throw Error('আগের কিস্তির ঘর আগে পূরণ করুন।');
  const cents=servicePaymentCents(amount);
  if(!cents)throw Error('পেমেন্ট শূন্যের বেশি হতে হবে।');
  added.push({amount:(cents/100).toFixed(2),date,paymentDate,method,account:method==='Cash'?'':account});
 }
 if(!added.length)throw Error('কমপক্ষে একটি কিস্তির পরিমাণ দিন।');
 if(added.reduce((sum,payment)=>sum+servicePaymentCents(payment.amount),0)>due)throw Error('পেমেন্টের পরিমাণ বাকি টাকার চেয়ে বেশি।');
 return [...history,...added];
}

async function servicePaymentSave(){
 if(servicePaymentBusy||activePage!==servicePaymentPage||!pagePermission('edit',servicePaymentPage))return;
 const row=servicePaymentRecord(servicePaymentCard);
 if(!row)return toast('Input Report থেকে একটি আইডি নির্বাচন করুন।');
 if(!personalSaveSame(row,servicePaymentBaseline))return toast('রেকর্ডটি অন্য জায়গা থেকে বদলেছে। আইডি আবার লোড করে বাকি টাকা মিলিয়ে নিন।');
 let payments;
 try{payments=servicePaymentPrepare(row,servicePaymentDraft);}catch(error){return toast(error.message);}
 const record={...row,serviceBenefitPayments:payments,updatedAt:new Date().toISOString()};
 const next={...state,records:{...state.records,'admin-documents':state.records['admin-documents'].map(item=>item.id===row.id?record:item)}};
 servicePaymentBusy=true;
 renderServicePayment();
 try{
  if(await commit(next,{personalFile:record})){
   servicePaymentDraft={};
   servicePaymentBaseline=structuredClone(record);
   toast(servicePaymentSummary(record).due===0?'Payment Complete':'Payment saved.');
  }
 }finally{
  servicePaymentBusy=false;
  if(activePage===servicePaymentPage)renderServicePayment();
 }
}

const servicePaymentOriginalRender=renderPage;
renderPage=function(...args){
 if(activePage===servicePaymentPage&&pagePermission('view',servicePaymentPage))return renderServicePayment();
 return servicePaymentOriginalRender.apply(this,args);
};

$('#main').addEventListener('input',event=>{
 const input=event.target;
 if(input.id==='servicePaymentSearch')servicePaymentSearch=input.value;
 if(input.form?.id==='servicePaymentEntryForm'&&input.name!=='card')servicePaymentDraft[input.name]=input.value;
});
$('#main').addEventListener('change',event=>{
 const input=event.target;
 if(input.form?.id==='servicePaymentEntryForm'&&input.name==='method')servicePaymentDraft.method=input.value;
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
 if(event.target.id==='servicePaymentSearchForm'){
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
 if(event.target.closest('[data-service-payment-entry]')){
  servicePaymentMode='entry';
  renderServicePayment();
  document.querySelector('#servicePaymentEntryForm input[name="card"]')?.focus();
 }
});

const servicePaymentStyle=document.createElement('style');
servicePaymentStyle.textContent=`
.service-benefit-navigation [data-service-nav="admin-service-payment"]{background:#dceeff;border:1px solid #88b9ea;color:#174c7a}
.service-payment-controls,.service-payment-controls form{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.service-payment-controls{margin:14px 0}
.service-payment-controls input{min-width:220px}
.service-payment-controls [data-service-payment-entry]{background:#d9f4eb;color:#175c49}
.service-payment-controls button[type=submit]{background:#fff0d8;color:#80501a}
.service-payment-entry{display:grid;grid-template-columns:minmax(0,1fr);gap:5px;max-width:580px;padding:14px;margin:0 0 18px;background:#fff;border-radius:10px}
.service-payment-entry label{display:grid;grid-template-columns:clamp(95px,28%,150px) minmax(0,1fr);align-items:center;gap:8px;margin:0}
.service-payment-entry label :is(input,select){box-sizing:border-box;width:100%;min-width:0;margin:0;padding:5px 8px}
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
 body:has(.service-payment-controls) #main>:not(#servicePaymentResults){display:none!important}
 body:has(.service-payment-controls) #main,#servicePaymentResults{margin:0!important;padding:0!important;overflow:visible}
 body:has(.service-payment-controls) .footer-note,body:has(.service-payment-controls) #workspaceRefreshNotice{display:none!important}
 .service-benefit-paper:not(.service-benefit-empty){padding-top:5mm;padding-left:3mm}
 .service-benefit-paper-heading div{font-size:12pt}
 .service-payment-table thead{display:table-header-group}
 .service-payment-table tr{break-inside:avoid}
}
`;
document.head.append(servicePaymentStyle);
