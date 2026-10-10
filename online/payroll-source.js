'use strict';
// Original imported entries stay separate from current salary calculations.
const payrollSourcePreviousRender=renderPayroll;
let payrollSourceVisible=false,payrollSourceQuery='';
const payrollSourceRows=()=>payrollRecords().filter(r=>r.hrSource==='AutoPro'&&r.hrSourceForm==='salary');
renderPayroll=function(){
 payrollSourcePreviousRender();
 const rows=payrollSourceRows();
 if(!rows.length)return;
 $('#main .payroll-menu').insertAdjacentHTML('beforeend',`<button type="button" data-payroll-source-toggle>AutoPro · Salary records (${rows.length})</button>`);
 if(!payrollSourceVisible)return;
 const shown=rows.filter(r=>JSON.stringify(r.hrSourceValues).toLowerCase().includes(payrollSourceQuery.toLowerCase()));
 $('#main .payroll-content').innerHTML=`<section class="payroll-paper"><h3 class="payroll-title">AUTOPRO · ORIGINAL SALARY RECORDS</h3><p class="hint">Original saved entries. Blank source fields are preserved. These records do not generate new salaries.</p><label class="no-print">Search original records<input data-payroll-source-search value="${esc(payrollSourceQuery)}" type="search"></label><p>${shown.length} / ${rows.length} records</p><div class="table-wrap"><table class="payroll-result"><thead><tr>${['Index','Emp ID','Emp Name','Gross Salary','Medical Allowance','Transport','Fooding','Date','Status'].map(k=>`<th>${k}</th>`).join('')}<th class="no-print">Details</th></tr></thead><tbody>${shown.map(r=>`<tr>${['Index','Emp ID','Emp Name','Gross Salary','Medical Allowance','Transport','Fooding','Date','Status'].map(k=>`<td>${esc(r.hrSourceValues[k]||'')}</td>`).join('')}<td class="no-print"><button type="button" data-payroll-source-view="${esc(r.id)}">View</button></td></tr>`).join('')}</tbody></table></div></section>`;
};
document.addEventListener('click',event=>{
 if(event.target.closest('[data-payroll-source-toggle]')){if(activePage!=='payroll'||!canPage('payroll','view'))return;payrollSourceVisible=!payrollSourceVisible;renderPayroll();}
 if(event.target.closest('[data-payroll-menu]')&&payrollSourceVisible){payrollSourceVisible=false;renderPayroll();}
 const button=event.target.closest('[data-payroll-source-view]');
 if(!button||activePage!=='payroll'||!canPage('payroll','view'))return;
 const row=payrollSourceRows().find(r=>r.id===button.dataset.payrollSourceView);if(!row)return;
 let dialog=$('#payrollSourceDialog');if(!dialog){dialog=document.createElement('dialog');dialog.id='payrollSourceDialog';document.body.append(dialog);}
 dialog.innerHTML=`<form method="dialog"><h2>AutoPro · Original salary entry</h2><table class="payroll-form-table"><tbody>${Object.entries(row.hrSourceValues).map(([k,v])=>`<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table><p class="hint">Imported ${esc(row.hrImportedAt.slice(0,10))}. Empty fields were empty in AutoPro.</p><button>Close</button></form>`;dialog.showModal();
});
document.addEventListener('change',event=>{if(event.target.matches('[data-payroll-source-search]')){payrollSourceQuery=event.target.value;renderPayroll();}});
