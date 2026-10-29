'use strict';
// The source workbook supplies layout only. Values always come from saved Iron inputs.
function ironFinishingCalculate(data){
 const f=data.fields||{},rows=ironPDComputedRows(data.rows),values=rows.map(row=>ironPDNumber(row[3])),valid=values.filter(n=>n!==null&&Number.isFinite(n)),hourly=ironPDNumber(f.hourlyTarget),hours=ironPDNumber(f.workingPlan);
 const target=hourly===null?null:valid.length*hourly,production=valid.reduce((a,b)=>a+b,0);
 return {values:rows.map(row=>row[3]),totalTarget:hourly===null||hours===null?null:hourly*hours,target,production,variance:target===null?null:production-target,rate:target?production/target:null};
}
ironPDPrintSheet=function(records){
 records=records.slice().sort(ironPDCompare);
 const text=v=>ironPDDisplay(v),num=v=>v===null||v===undefined||v===''?'':String(Math.round(v*1e9)/1e9),percent=v=>v===null?'':Math.round(v*100)+'%';
 const cell=(v,cls='',source=true)=>'<td class="'+cls+'">'+(source?'<span class="iron-pd-value">'+text(v)+'</span>':text(v))+'</td>';
 const widths=[18,6,23,14,16,22,17,14,16,...ironPDHours.map(()=>12),14,17,16,14,20],width=widths.reduce((a,b)=>a+b,0),calculations=records.map(r=>ironFinishingCalculate(r.hourlyPD));
 const sum=key=>records.length?calculations.reduce((s,a)=>s+(a[key]??0),0):'';
 const body=records.map((record,i)=>{const f=record.hourlyPD.fields||{},a=calculations[i];return '<tr class="if-detail">'+cell(f.section)+cell(i+1)+cell(f.ironManName||f.qcName)+cell(f.cardNo)+cell(f.workingPlan)+cell(f.buyer)+cell(f.item)+cell(num(a.totalTarget))+cell(f.hourlyTarget)+a.values.map(v=>cell(v,'if-hour')).join('')+cell(num(a.target),'if-target',false)+cell(num(a.production),'if-production',false)+cell(num(a.variance),'if-variance',false)+cell(percent(a.rate),'if-rate',false)+cell(f.remarks)+'</tr>';}).join('');
 const footer='<tr class="if-total"><th colspan="7">Total</th>'+cell(num(sum('totalTarget')),'',false)+cell(records.length?ironPDSum(records.map(r=>r.hourlyPD.fields?.hourlyTarget)):'','',false)+ironPDHours.map((_,h)=>cell(records.length?ironPDSum(calculations.map(a=>a.values[h])):'','if-hour',false)).join('')+cell(num(sum('target')),'',false)+cell(num(sum('production')),'',false)+cell(num(sum('variance')),'if-variance',false)+cell(records.length?percent(sum('target')?sum('production')/sum('target'):null):'','',false)+'<td></td></tr>';
 const supervisors=[...new Set(records.map(r=>r.hourlyPD.fields?.incharge).filter(Boolean))];
 return '<article class="iron-pd-print-sheet iron-finishing-report"><header><div class="if-title"><h2>FARNOOR GARMENTS LTD.</h2><aside>Today Target Qty<br><b>'+num(sum('totalTarget'))+' Pcs</b></aside></div><h3>FINISHING IRON SECTION HOURLY PRODUCTION MONITORING BOARD</h3><div class="if-meta"><b>Supervisor Name : <span class="iron-pd-value">'+text(supervisors.join(', '))+'</span></b><b>Date : <span class="iron-pd-value">'+text((records[0]?.date||ironPDPrintDate||'').replaceAll('/','.'))+'</span></b></div></header><table class="iron-pd-print-table if-table"><colgroup>'+widths.map(w=>'<col style="width:'+(w/width*100)+'%">').join('')+'</colgroup><thead><tr>'+['SECTION','SL.','IRON MAN NAME','CARD NO:','WORKING<br>HOUR','BUYER','ITEM','TOTAL TARGET','TARGET/<br>Hrs'].map(t=>'<th rowspan="2" scope="col">'+t+'</th>').join('')+ironPDHours.map((_,i)=>'<th scope="col" class="if-hour">'+(i+1)+'</th>').join('')+['Target','Production','Variance','HIT<br>RATE','Remarks'].map((t,i)=>'<th rowspan="2" scope="col" class="if-head-'+i+'">'+t+'</th>').join('')+'</tr><tr>'+ironPDHours.map(h=>'<th scope="col" class="if-hour">'+h.replace('-','<br>–<br>')+'</th>').join('')+'</tr></thead><tbody>'+body+(!records.length?'<tr><td colspan="25">Input Report থেকে সেভ করা ডাটা নির্বাচন করুন।</td></tr>':'')+footer+'</tbody></table></article>';
};
const ironFinishingCSS=`
.iron-finishing-report{font-family:Arial,sans-serif!important;min-height:0!important;padding:0!important}
.iron-finishing-report header{background:#fff;color:#000;border:.5px solid #000}
.iron-finishing-report header .if-title{display:flex;align-items:center;min-height:19mm;padding:0;color:#000}
.iron-finishing-report header h2{flex:1;font:bold 21pt/1.2 Arial,sans-serif;text-align:center;margin:0;padding:3mm 0;border:0}
.iron-finishing-report header aside{width:33mm;align-self:stretch;border-left:.5px solid #000;font:bold 8pt/1.5 Arial,sans-serif;text-align:center;padding:3mm 1mm;box-sizing:border-box}
.iron-finishing-report header h3{font:bold 10pt/1.2 Arial,sans-serif;text-align:center;margin:0;padding:1.8mm 0;border-top:.5px solid #000;border-bottom:.5px solid #000}
.iron-finishing-report header .if-meta{display:flex;justify-content:space-between;gap:5mm;min-height:10mm;padding:2mm 2mm;color:#000;font:9pt/1.3 Arial,sans-serif}
.iron-finishing-report .iron-pd-value{color:#7030a0;font-weight:700}
.iron-finishing-report .if-table th,.iron-finishing-report .if-table td{font:bold 6.5pt/1.2 Arial,sans-serif!important;padding:1mm .35mm!important;border:.5px solid #000!important;box-sizing:border-box;text-align:center;vertical-align:middle;overflow-wrap:normal;word-break:normal}
.iron-finishing-report .if-table thead th{background:#e2efda;color:#000;height:auto;font-size:6pt!important}
.iron-finishing-report .if-table thead .if-hour{background:#edf4e8}
.iron-finishing-report .if-table .if-detail td{height:11mm}
.iron-finishing-report .if-table .if-detail td:first-child{background:#bdd7ee}
.iron-finishing-report .if-table .if-target{background:#fce4d6;color:#000}
.iron-finishing-report .if-table .if-production{background:#f4b183;color:#000}
.iron-finishing-report .if-table .if-variance{background:#ff0;color:red}
.iron-finishing-report .if-table .if-rate{background:#00b050;color:#000}
.iron-finishing-report .if-table .if-head-3{background:#ff33cc}
.iron-finishing-report .if-table .if-head-4{background:#ffc000}
.iron-finishing-report .if-table .if-hour{white-space:nowrap}
.iron-finishing-report .if-table .if-total>*{background:#92d050;font-weight:700!important;height:11mm;font-size:8pt!important}
@media screen{.iron-pd-print-pages{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.iron-pd-print-pages .iron-finishing-report{width:281mm;min-width:281mm;max-width:none;margin-left:auto;margin-right:auto}}
@media print{.iron-finishing-report{-webkit-print-color-adjust:exact;print-color-adjust:exact}.iron-finishing-report .if-table{width:100%;table-layout:fixed;border-collapse:collapse}.iron-finishing-report .if-table th,.iron-finishing-report .if-table td{font-size:6.5pt!important}}
`;
const ironFinishingStyle=document.createElement('style');ironFinishingStyle.textContent=ironFinishingCSS;document.head.append(ironFinishingStyle);
const ironFinishingPreviousPrintHTML=ironPDPrintHTML;
ironPDPrintHTML=function(records){return ironFinishingPreviousPrintHTML(records).replace('</style>',ironFinishingCSS+'</style>');};
