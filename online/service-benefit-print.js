'use strict';
const servicePrintCompanies={
 'FARNOOR GARMENTS LTD.':{bn:'ফারনূর গার্মেন্টস লিঃ',bnAddress:'১২০৮/১/২ মালিবাগ বাজার রোড, ঢাকা-১২১৭',enAddress:'1028/1/2 Malibagh Bazar Road, Dhaka-1217',holiday:'রবিবার'},
 'FARNOOR GARMENTS LTD. UNIT-2':{bn:'ফারনূর গার্মেন্টস লিঃ-ইউনিট-২',bnAddress:'৪৫৪, বাবুরচালা, পিরুজালী, আলীমপাড়া, গাজীপুর সদর, গাজীপুর',enAddress:'454, BaburChala, Alimpara, Pirujali, Gazipur',holiday:'শুক্রবার'}
};
let servicePrintCard='',servicePrintCompany='FARNOOR GARMENTS LTD.',servicePrintRecordId='',servicePrintReady=false,servicePrintError='';
function servicePrintDate(value){const [day,month,year]=normalizeDate(value).split('/').map(Number);return {day,month,year,key:year*10000+month*100+day};}
function servicePrintYearRows(joining,release){
 const start=servicePrintDate(joining),end=servicePrintDate(release);
 if(end.key<start.key)throw Error('Release তারিখ যোগদানের তারিখের আগে হতে পারবে না।');
 const result=[];
 if(start.year===end.year){let months=end.month-start.month,days=end.day-start.day+1;if(days<0){months--;days+=30;}result.push({year:start.year,months:Math.max(0,months),days:Math.max(0,days)});return result;}
 for(let year=start.year;year<=end.year;year++){
  const first=year===start.year,last=year===end.year;
  result.push({year,months:last?end.month-1:12,days:first?Math.min(30,new Date(Date.UTC(start.year,start.month,0)).getUTCDate()-start.day+1):last?end.day:30});
 }
 return result;
}
function servicePrintMatches(){const key=serviceBenefitSearchKey(servicePrintCard);return key?serviceBenefitRows().filter(row=>serviceBenefitSearchKey(row.serviceBenefitEntry?.cardNo||row.reference)===key).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||''))):[];}
function servicePrintBuildPaper(row,companyName){
 const entry=row.serviceBenefitEntry||{},company=servicePrintCompanies[companyName],rows=servicePrintYearRows(entry.joiningDate,entry.release),totalDays=rows.reduce((sum,item)=>sum+item.days,0),totalMonths=rows.reduce((sum,item)=>sum+item.months,0);
 if(!company)throw Error('Company নির্বাচন করুন।');
 return '<article class="service-benefit-paper" aria-label="Service benefit statement"><header class="service-benefit-paper-heading"><h1>'+esc(companyName)+'</h1><h2>'+esc(company.bn)+'</h2><div>'+esc(company.bnAddress)+'</div><div>'+esc(company.enAddress)+'</div><div>সাপ্তাহিক ছুটি: '+esc(company.holiday)+'</div><h3>Service benefit</h3></header><dl class="service-benefit-print-details">'+[['Name',entry.name],['Designation',entry.designation],['Card/Staff No',entry.cardNo],['Date Of Joining',normalizeDate(entry.joiningDate).replaceAll('/','.')],['Salary',entry.salary],['Basic','']].map(([label,value])=>'<dt>'+esc(label)+'</dt><dd><span aria-hidden="true">:</span> <b>'+esc(value||'')+'</b></dd>').join('')+'</dl><table class="service-benefit-year-table"><colgroup><col style="width:10%"><col style="width:23%"><col style="width:22%"><col style="width:22%"><col style="width:23%"></colgroup><thead><tr><th>SL.</th><th>Year</th><th>Month</th><th>Days</th><th>Basic</th></tr></thead><tbody>'+rows.map((item,index)=>'<tr><td>'+String(index+1).padStart(2,'0')+'</td><td>'+item.year+'</td><td>'+item.months+' Month</td><td>'+item.days+' Days</td><td></td></tr>').join('')+'</tbody><tfoot><tr><th colspan="2">Total =</th><td>'+totalMonths+' Month</td><td>'+totalDays+' Days</td><td></td></tr></tfoot></table><div class="service-benefit-payment"><strong>Total Payment =</strong><span></span></div><footer class="service-benefit-signatures"><strong>Received Sign</strong><strong>Authorised Sign</strong></footer></article>';
}
function renderServiceBenefitPrint(){
 const matches=servicePrintMatches(),selected=servicePrintReady?matches.find(row=>row.id===servicePrintRecordId):null;
 let paper='';if(selected)try{paper=servicePrintBuildPaper(selected,servicePrintCompany);}catch(error){servicePrintError=error.message;}
 const controls='<form id="serviceBenefitPrintForm" class="service-print-controls no-print" aria-label="Service Benefit Print selection"><div><label for="servicePrintCard">ID No</label><input id="servicePrintCard" value="'+esc(servicePrintCard)+'" placeholder="ID No" autocomplete="off" required></div><div><label for="servicePrintCompany">Company</label><select id="servicePrintCompany">'+Object.keys(servicePrintCompanies).map(name=>'<option '+(name===servicePrintCompany?'selected':'')+'>'+esc(name)+'</option>').join('')+'</select></div><button type="submit" class="service-print-save"><span aria-hidden="true">⌕</span> Search</button><button type="button" data-page-action="print" '+(!paper?'hidden':'')+'><span aria-hidden="true">🖨</span> Print</button>'+'<p role="status" class="service-print-status" '+(!servicePrintError?'hidden':'')+'> '+esc(servicePrintError)+'</p></form>';
 $('#main').innerHTML=serviceBenefitNavigation()+controls+(paper?'<section id="serviceBenefitPrintContent" class="service-benefit-print-surround">'+paper+'</section>':'');if(typeof applyActionControls==='function')applyActionControls();
}
const servicePrintPreviousRender=renderPage;renderPage=function(...args){if(activePage==='admin-service-print')return renderServiceBenefitPrint();return servicePrintPreviousRender.apply(this,args);};
$('#main').addEventListener('input',event=>{if(event.target.id!=='servicePrintCard')return;servicePrintCard=event.target.value;servicePrintReady=false;servicePrintRecordId='';servicePrintError='';document.getElementById('serviceBenefitPrintContent')?.remove();const button=document.querySelector('#serviceBenefitPrintForm [data-page-action="print"]');if(button)button.hidden=true;});
$('#main').addEventListener('change',event=>{if(event.target.id==='servicePrintCompany'){servicePrintCompany=event.target.value;servicePrintReady=false;renderServiceBenefitPrint();}});
$('#main').addEventListener('submit',event=>{
 if(event.target.id!=='serviceBenefitPrintForm')return;event.preventDefault();servicePrintCard=document.getElementById('servicePrintCard').value.trim();servicePrintCompany=document.getElementById('servicePrintCompany').value;const matches=servicePrintMatches();servicePrintError='';servicePrintReady=false;
 if(!matches.length)servicePrintError='এই ID No-এর সেভ করা ইনপুট পাওয়া যায়নি।';
 else{const row=matches[0];try{if(!row.serviceBenefitEntry?.joiningDate||!row.serviceBenefitEntry?.release)throw Error('Input Report-এর রেকর্ডে Date Of Joining ও Release তারিখ পূরণ করুন।');servicePrintYearRows(row.serviceBenefitEntry.joiningDate,row.serviceBenefitEntry.release);servicePrintRecordId=row.id;servicePrintReady=true;}catch(error){servicePrintError=error.message;}}
 renderServiceBenefitPrint();
});
