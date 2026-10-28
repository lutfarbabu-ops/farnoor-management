'use strict';
// The finishing workbook is a layout reference; all report values use saved inputs.
function qualityFinishingCalculate(data){
 const rows=qualityPDComputedRows(data.rows),target=qualityPDNumber(data.fields?.hourlyTarget);
 const totals=[2,3,4].map(col=>rows.reduce((sum,row)=>sum+(qualityPDNumber(row[col])??0),0));
 const targets=[2,3].map(col=>target===null||!Number.isFinite(target)?null:rows.filter(row=>{const n=qualityPDNumber(row[col]);return n!==null&&Number.isFinite(n);}).length*target);
 const divide=(a,b)=>b!==null&&Number.isFinite(b)&&b!==0?a/b:null;
 return {rows,totals,targets,differences:[targets[0]===null?null:totals[0]-targets[0],targets[1]===null?null:totals[1]-targets[1],totals[2]],rates:[divide(totals[0],targets[0]),divide(totals[1],targets[1]),divide(totals[2],totals[0])]};
}
qualityPDPrintSheet=function(records){
 records=records.slice().sort(qualityPDCompare);
 const source=value=>'<span class="quality-pd-value">'+qualityPDDisplay(value)+'</span>';
 const number=value=>value===null||value===undefined||value===''?'':String(Math.round(value*1e9)/1e9);
 const rate=value=>value===null||value===undefined?'':Math.round(value*100)+'%';
 const cell=(value,attrs='',input=true)=>'<td '+attrs+'>'+(input?source(value):qualityPDDisplay(value))+'</td>';
 const columns=[15.85546875,10.5703125,22,34.28515625,28.5703125,20.28515625,9.140625,9.140625,9.140625,17.42578125,...qualityPDHours.map(()=>9.140625),9.140625,15,9.140625,18.85546875];
 const width=columns.reduce((a,b)=>a+b,0),calculations=records.map(record=>qualityFinishingCalculate(record.hourlyPD));
 const color=(value,defect=false)=>defect?'qf-rate-cyan':value===null?'':value>.9?'qf-rate-green':value>=.8?'qf-rate-yellow':'qf-rate-red';
 const body=records.map((record,index)=>{const fields=record.hourlyPD.fields||{},a=calculations[index];return [2,3,4].map((col,row)=>'<tr class="qf-detail qf-detail-'+row+'">'+(!row?cell(fields.tableNo||String(index+1),'rowspan="3" class="qf-table-no"'):'')+
  cell(row===1?fields.section:'')+cell(row===1?fields.buyer:'','class="qf-buyer"')+
  cell(row===1?fields.style:row===2?(fields.styleLast===undefined?fields.style:fields.styleLast):'','class="qf-style"')+
  cell(row===1?fields.item:row===2?(fields.itemLast===undefined?fields.item:fields.itemLast):'','class="qf-item"')+
  cell(row===1?(fields.qcName||fields.incharge):row===2?fields.qcNameLast:'','class="qf-name"')+
  (!row?cell(fields.workingPlan,'rowspan="3"'):'')+cell(!row?fields.hourlyTarget:'')+cell(row<2?number(a.targets[row]):'')+
  '<th class="qf-status qf-status-'+row+'">'+['QC Check','QC Pass','Defect'][row]+'</th>'+
  qualityPDHours.map((_,hour)=>cell(a.rows[hour][col])).join('')+
  cell(number(a.totals[row]),'class="qf-calculated '+(!row?'qf-check-total':'')+'"',false)+
  cell(number(a.differences[row]),'class="qf-difference"',false)+
  cell(rate(a.rates[row]),'class="qf-achievement '+color(a.rates[row],row===2)+'"',false)+
  (!row?cell(fields.remarks,'rowspan="3" class="qf-remarks"'):'')+'</tr>').join('');}).join('');
 const sum=values=>records.length?qualityPDSum(values):'';
 const target=sum(calculations.map(a=>a.targets[1])),totals=[0,1,2].map(col=>sum(calculations.map(a=>a.totals[col])));
 const divide=(a,b)=>b!==''&&b!==null&&b!==0?a/b:null;
 const summaryRates=[divide(totals[0],target),divide(totals[1],target),divide(totals[2],totals[0])];
 const footer='<tr class="quality-pd-total"><th colspan="5">Total</th><td></td><td></td>'+cell(sum(records.map(r=>r.hourlyPD.fields?.hourlyTarget)),'',false)+cell(number(target),'',false)+'<th class="qf-status-1">Total QC Pass<br>Production</th>'+qualityPDHours.map((_,hour)=>cell(sum(calculations.map(a=>a.rows[hour][3])),'',false)).join('')+cell(number(totals[1]),'',false)+cell(target===''?'':number(totals[1]-target),'',false)+cell(rate(summaryRates[1]),'',false)+'<td></td></tr>';
 const sumWidth=columns.slice(0,5).reduce((a,b)=>a+b,0)/width*100,midWidth=columns.slice(5,15).reduce((a,b)=>a+b,0)/width*100;
 return '<article class="quality-pd-print-sheet quality-finishing-report"><header><h2>Farnoor Garments Ltd</h2><h3>Table Wise Hourly Finishing QC Producion Report</h3><div><b>Date:- <span class="qf-date">'+esc((records[0]?.date||qualityPDPrintDate||'').replaceAll('/','.'))+'</span></b></div></header><table class="quality-pd-print-table qf-table"><colgroup>'+columns.map(value=>'<col style="width:'+(value/width*100)+'%">').join('')+'</colgroup><thead><tr>'+['Table','Line','Buyer','Style','Item','Name','W. Plan','Hourly<br>Target','Total<br>Target','Production<br>Status',...qualityPDHours.map(hour=>hour.replace('-','-<br>')),'Total','Difference','Acv %','Remarks'].map((label,index)=>'<th scope="col"'+(index===22?' class="qf-difference"':'')+'>'+label+'</th>').join('')+'</tr></thead><tbody>'+body+(records.length?'':'<tr><td colspan="25">Input Report থেকে সেভ করা ডাটা নির্বাচন করুন।</td></tr>')+footer+'</tbody></table><table class="quality-pd-summary qf-summary"><colgroup><col style="width:'+sumWidth+'%"><col style="width:'+midWidth+'%"><col style="width:'+(100-sumWidth-midWidth)+'%"></colgroup><tbody><tr><th colspan="3">Farnoor Garments Ltd</th></tr><tr><th colspan="3">Table Wise Finishing QC Summary</th></tr><tr><th colspan="3">Total Summary</th></tr><tr><th>Unit Target</th><td>'+number(target)+'</td><th>TARGET %</th></tr>'+['QC Check','QC Pass','Defect'].map((label,index)=>'<tr class="qf-summary-'+index+'"><th>Total '+label+'</th><td>'+number(totals[index])+'</td><td>'+rate(summaryRates[index])+'</td></tr>').join('')+'</tbody></table></article>';
};
const qualityFinishingCSS=`
.quality-finishing-report{font-family:Tahoma,Arial,sans-serif!important;min-height:0!important;padding:0!important}
.quality-finishing-report header{background:#9cc2e5;border:.5px solid #000;color:#000}
.quality-finishing-report header h2{font:bold 15pt/1.2 Tahoma,Arial,sans-serif;margin:0;padding:1mm;border-bottom:.5px solid #000}
.quality-finishing-report header h3{font:bold 9.2pt/1.2 Tahoma,Arial,sans-serif;margin:0;padding:1.5mm 0;border:0}
.quality-finishing-report header>div{min-height:5mm;padding:.6mm 3mm;font:bold 7.5pt/1.2 Tahoma,Arial,sans-serif;color:red}
.quality-finishing-report .qf-date{margin-left:10mm;color:red}
.quality-finishing-report .qf-table th,.quality-finishing-report .qf-table td{font-size:6.2pt!important;line-height:1.15!important;padding:.35mm .2mm!important;height:5.2mm;border:.5px solid #000!important;box-sizing:border-box;overflow-wrap:anywhere}
.quality-finishing-report .qf-table thead th{background:#a8d08d;color:#000;font-size:5.8pt!important;height:10mm;font-weight:700}
.quality-finishing-report .quality-pd-value{color:#7030a0;font-weight:700}
.quality-finishing-report .qf-table-no .quality-pd-value{font-size:9pt}
.quality-finishing-report .qf-style,.quality-finishing-report .qf-item,.quality-finishing-report .qf-buyer,.quality-finishing-report .qf-name{font-weight:700}
.quality-finishing-report .qf-status{font-weight:700;color:#000}.quality-finishing-report .qf-status-0{background:#ff0!important}.quality-finishing-report .qf-status-1{background:#f4b083!important}.quality-finishing-report .qf-status-2{background:#4472c4!important}
.quality-finishing-report .qf-calculated{color:#000;font-weight:700}.quality-finishing-report .qf-check-total{background:#ff0!important}
.quality-finishing-report .qf-difference{color:red!important;font-weight:700}.quality-finishing-report .qf-achievement{color:#000;font-weight:700}
.quality-finishing-report .qf-rate-green{background:#00b050!important}.quality-finishing-report .qf-rate-yellow{background:#ff0!important}.quality-finishing-report .qf-rate-red{background:#ff5050!important}.quality-finishing-report .qf-rate-cyan{background:#00b0f0!important}
.quality-finishing-report .qf-table tbody tr.qf-detail-0>*{border-top-width:1px!important}.quality-finishing-report .quality-pd-total>*{font-weight:700;height:6mm}
.quality-finishing-report .qf-summary th,.quality-finishing-report .qf-summary td{font:bold 9pt/1.15 Tahoma,Arial,sans-serif!important;height:6.5mm;padding:.8mm 1mm!important;border:.5px solid #000!important;box-sizing:border-box}
.quality-finishing-report .qf-summary tr:nth-child(-n+2){background:#002060;color:#fff}.quality-finishing-report .qf-summary tr:nth-child(3),.quality-finishing-report .qf-summary tr:nth-child(4){background:#00b0f0;color:#fff}.quality-finishing-report .qf-summary tr:nth-child(4)>td{color:#000}
.quality-finishing-report .qf-summary-0{background:#000!important;color:#fff!important}.quality-finishing-report .qf-summary .qf-summary-0>td:nth-child(2){background:#f4b083!important;color:#000!important}
.quality-finishing-report .qf-summary-1{background:#ed7d31!important;color:#fff!important}.quality-finishing-report .qf-summary .qf-summary-1>td:nth-child(2){color:#000!important}
.quality-finishing-report .qf-summary-2{background:#5b9bd5!important;color:#fff!important}.quality-finishing-report .qf-summary .qf-summary-2>td:nth-child(2){color:#000!important}
@media print{.quality-finishing-report .qf-table th,.quality-finishing-report .qf-table td{font-size:6.2pt!important}.quality-finishing-report .qf-summary th,.quality-finishing-report .qf-summary td{font-size:9pt!important}.quality-finishing-report{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
`;
const qualityFinishingStyle=document.createElement('style');qualityFinishingStyle.textContent=qualityFinishingCSS;document.head.append(qualityFinishingStyle);
const qualityFinishingPreviousPrintHTML=qualityPDPrintHTML;
qualityPDPrintHTML=function(records){return qualityFinishingPreviousPrintHTML(records).replace('</style>',qualityFinishingCSS+'</style>');};
