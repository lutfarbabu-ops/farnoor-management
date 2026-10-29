'use strict';
// Excel is a layout reference; report values come only from saved Sample records.
function sampleFinishingCalculate(data){
 const f=data.fields||{},values=samplePDComputedRows(data.rows).map(row=>row[3]);
 return {qty:f.sampleQty??'',sizeQty:f.sampleSizeQty??'',complete:f.sampleComplete??samplePDSum(values)};
}
function sampleDailySection(fields){return /^sample[ ._-]*2$|^2$/i.test(String(fields.sampleSection||fields.section||''))?'SAMPLE-2':'SAMPLE-1';}
samplePDPrintSheet=function(records){
 records=records.slice().sort(samplePDCompare);
 const text=v=>samplePDDisplay(v),date=records[0]?.date||samplePDPrintDate||samplePDToday();
 const widths=[9.14,31,19.14,19.14,22.43,26.14,18.57,18.57,25.85,19.14,17.85,19.71,19.57],width=widths.reduce((a,b)=>a+b,0);
 const cell=(value,cls='')=>'<td class="'+cls+'"><span class="sample-pd-value">'+text(value)+'</span></td>';
 const groups=['SAMPLE-1','SAMPLE-2'].map(section=>{
  const rows=records.filter(r=>sampleDailySection(r.hourlyPD.fields||{})===section),min=section==='SAMPLE-1'?8:7;
  const details=Array.from({length:Math.max(min,rows.length)},(_,i)=>{
   const r=rows[i],f=r?.hourlyPD.fields||{},a=r?sampleFinishingCalculate(r.hourlyPD):{};
   return '<tr class="sd-detail">'+cell(r?f.sl||i+1:i+1)+cell(f.ironManName||f.qcName)+cell(r?f.sampleStartDate||r.date:'')+cell(f.sampleStartTime,'sd-start')+cell(f.buyer)+cell(f.style)+cell(a.qty,'sd-qty')+cell(a.sizeQty)+cell(f.item)+cell(f.sampleEndDate,'sd-end-date')+cell(f.sampleEndTime,'sd-end-time')+cell(a.complete)+cell(f.remarks)+'</tr>';
  }).join('');
  const total=key=>rows.length?samplePDSum(rows.map(r=>sampleFinishingCalculate(r.hourlyPD)[key])):'';
  return '<section class="sd-section"><header><h2>FARNOOR GARMENTS LTD.</h2><h3>DAILY SAMPLE PRODUCTION REPORT</h3><div class="sd-meta"><b>SECTION: '+section+'</b><b>DATE : <span class="sample-pd-value">'+text(date)+'</span></b></div></header><table class="sample-pd-print-table sd-table"><colgroup>'+widths.map(w=>'<col style="width:'+(w/width*100)+'%">').join('')+'</colgroup><thead><tr>'+['SL','SAMPLE MAN NAME','DATE','START TIME','BUYER','STYLE','QTY','SIZE QTY','ITEM','END DATE','END TIME','DAILY COMPLETE SAMPLE','REMARK'].map(t=>'<th scope="col">'+t+'</th>').join('')+'</tr></thead><tbody>'+details+'<tr class="sd-total"><td colspan="5"></td><th>TOTAL</th>'+cell(total('qty'),'sd-qty')+cell(total('sizeQty'))+'<td colspan="3"></td>'+cell(total('complete'),'sd-complete')+'<td></td></tr></tbody></table></section>';
 }).join('');
 return '<article class="sample-pd-print-sheet sample-daily-report">'+groups+'</article>';
};
const sampleFinishingCSS=`
.sample-daily-report{font-family:Arial,sans-serif!important;min-height:0!important;padding:0!important;background:#fff;color:#000}
.sample-daily-report .sd-section{break-inside:avoid;margin:0 0 4mm}
.sample-daily-report .sd-section:last-child{margin-bottom:0}
.sample-daily-report header{background:#fff;color:#000;border:0;padding:0}
.sample-daily-report header h2{background:#00b0f0;color:#000;font:bold 14pt/1.15 Arial,sans-serif;margin:0;padding:1mm;border:.5px solid #000;text-align:center;letter-spacing:normal}
.sample-daily-report header h3{background:#4bacc6;color:#000;font:bold 9pt/1.2 Arial,sans-serif;margin:0;padding:1mm;border:solid #000;border-width:0 .5px .5px;text-align:center}
.sample-daily-report header .sd-meta{display:flex;justify-content:space-between;align-items:center;min-height:5mm;padding:1mm 2mm;border:solid #000;border-width:0 .5px .5px;font:9pt/1.2 Arial,sans-serif;color:#000;gap:4mm}
.sample-daily-report .sample-pd-value{color:#7030a0;font-weight:700}
.sample-daily-report .sd-table{border-collapse:collapse;width:100%;table-layout:fixed;margin:0}
.sample-daily-report .sd-table th,.sample-daily-report .sd-table td{border:.5px solid #000!important;box-sizing:border-box;padding:.65mm .4mm!important;font:7pt/1.2 Arial,sans-serif!important;text-align:center;vertical-align:middle;overflow-wrap:normal;word-break:normal;white-space:normal;height:6mm}
.sample-daily-report .sd-table thead th{background:#d9d9d9;color:#000;font-weight:700!important;height:9mm}
.sample-daily-report .sd-table .sd-qty{background:#eeece1}
.sample-daily-report .sd-table .sd-start,.sample-daily-report .sd-table .sd-end-date{background:#d7e4bc}
.sample-daily-report .sd-table .sd-end-time{background:#92cddc}
.sample-daily-report .sd-table .sd-total>*{font-weight:700!important;height:6mm}
.sample-daily-report .sd-table .sd-complete{background:#ff0}
@media screen{.sample-pd-print-pages{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.sample-pd-print-pages .sample-daily-report{width:281mm;min-width:281mm;max-width:none;margin-left:auto;margin-right:auto}}
@media print{.sample-daily-report{-webkit-print-color-adjust:exact;print-color-adjust:exact;break-inside:avoid}}
`;
const sampleFinishingStyle=document.createElement('style');sampleFinishingStyle.textContent=sampleFinishingCSS;document.head.append(sampleFinishingStyle);
const sampleFinishingPreviousPrintHTML=samplePDPrintHTML;
samplePDPrintHTML=function(records){return sampleFinishingPreviousPrintHTML(records).replace('</style>',sampleFinishingCSS+'</style>');};
