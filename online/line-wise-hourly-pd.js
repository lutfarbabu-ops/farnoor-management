'use strict';
const hourlyPDPage='production-line-wise-hourly-pd';
const hourlyPDFields=[['section','Section'],['incharge','Incharg Name'],['buyer','Buyer'],['style','Style'],['item','Item'],['workingPlan','Working Plan'],['hourlyTarget','Hourly Target'],['layoutManpower','Layout Manpower'],['presentManpower','Present Manpower']];
const hourlyPDHours=['8:00-9:00','9:00-10:00','10:00-11:00','11:00-12:00','12:00-1:00','2:00-3:00','3:00-4:00','4:00-5:00','5:00-6:00','6:00-7:00','7:00-8:00'];
const hourlyPDColumns=['1st Machine','Last Machine','QC Check','QC Pass','Defect'];
let hourlyPDView='new-input';
const hourlyPDDraft={fields:{},rows:hourlyPDHours.map(()=>Array(5).fill(''))};
function hourlyPDInput(value,attributes,readonly=false){return '<input '+attributes+' value="'+esc(value??'')+'" '+(readonly?'readonly':'')+' autocomplete="off">';}
function hourlyPDPaper(readonly=false){return '<section class="hourly-pd-paper" aria-label="Line Wise Hourly Production"><h2>LINE WISE HOURLY PRODUCTION</h2><div class="hourly-pd-details">'+hourlyPDFields.map(([key,label],index)=>'<div class="hourly-pd-field"><label for="hourly-pd-'+key+'">'+label+'</label>'+hourlyPDInput(hourlyPDDraft.fields[key],'id="hourly-pd-'+key+'" data-hourly-pd-field="'+key+'" type="'+(index>=5?'number':'text')+'" '+(index>=5?'min="0" step="1"':'maxlength="200"'),readonly)+'</div>').join('')+'</div><div class="hourly-pd-table-wrap"><table class="hourly-pd-table"><thead><tr><th scope="col">Hourly</th>'+hourlyPDColumns.map(label=>'<th scope="col">'+label+'</th>').join('')+'</tr></thead><tbody>'+hourlyPDHours.map((hour,row)=>'<tr><th scope="row">'+hour+'</th>'+hourlyPDColumns.map((label,col)=>'<td>'+hourlyPDInput(hourlyPDDraft.rows[row][col],'type="number" min="0" step="1" data-hourly-pd-row="'+row+'" data-hourly-pd-col="'+col+'" aria-label="'+hour+' '+label+'"',readonly)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div></section>';}
function renderHourlyPD(){
 const nav=[['new-input','✚','New Input'],['print','▧','Print'],['input-report','▤','Input Report']];
 $('#main').innerHTML='<div class="hourly-pd-workspace"><nav class="hourly-pd-nav no-print" aria-label="Line Wise Hourly PD pages">'+nav.map(([key,icon,name])=>'<button type="button" data-hourly-pd-view="'+key+'" class="hourly-pd-'+key+'" aria-pressed="'+(hourlyPDView===key)+'"><span aria-hidden="true">'+icon+'</span> '+name+'</button>').join('')+'</nav>'+(hourlyPDView==='input-report'?'<section class="hourly-pd-report"><h2>Input Report</h2></section>':(hourlyPDView==='print'?'<div class="hourly-pd-print-actions no-print"><button type="button" data-hourly-pd-print data-page-action-required="print">▧ Print</button></div>':'')+hourlyPDPaper(hourlyPDView==='print'))+'</div>';
 if(typeof applyActionControls==='function')applyActionControls();
}
const hourlyPDPreviousRenderPage=renderPage;
renderPage=function(...args){if(activePage===hourlyPDPage)return renderHourlyPD();return hourlyPDPreviousRenderPage.apply(this,args);};
document.getElementById('main').addEventListener('click',event=>{
 if(activePage!==hourlyPDPage)return;
 const button=event.target.closest('[data-hourly-pd-view]');
 if(button){hourlyPDView=button.dataset.hourlyPdView;renderHourlyPD();return;}
 if(event.target.closest('[data-hourly-pd-print]')&&FarnoorAccess.canAction('output','print'))window.print();
});
document.getElementById('main').addEventListener('input',event=>{
 if(activePage!==hourlyPDPage)return;
 const node=event.target;
 if(node.dataset.hourlyPdField)hourlyPDDraft.fields[node.dataset.hourlyPdField]=node.value;
 if(node.dataset.hourlyPdRow!==undefined)hourlyPDDraft.rows[Number(node.dataset.hourlyPdRow)][Number(node.dataset.hourlyPdCol)]=node.value;
});
