'use strict';
// Original imported entries stay separate from current salary calculations.
const payrollSourcePreviousRender=renderPayroll;
let payrollSourceVisible=false,payrollSourceQuery='',payrollSourceKind='salary';
const payrollSourceAll=()=>payrollRecords().filter(r=>r.hrSource==='AutoPro'&&r.hrSourceForm);
const payrollSourceRows=()=>payrollSourceAll().filter(r=>r.hrSourceForm===payrollSourceKind);
renderPayroll=function(){
 payrollSourcePreviousRender();
 const all=payrollSourceAll(),rows=payrollSourceRows();
 if(!all.length)return;
 const titles={salary:'Salary records',increment:'Increment records',loan:'Loan / Advance records',bonus:'Bonus records','ot-policy':'OT Policy records','att-policy':'Attendance Bonus Policy records',top:'TopSheet records'};
 $('#main .payroll-menu').insertAdjacentHTML('beforeend',[...new Set(all.map(r=>r.hrSourceForm))].map(kind=>`<button type="button" data-payroll-source-toggle="${esc(kind)}">AutoPro · ${esc(titles[kind]||kind)} (${all.filter(r=>r.hrSourceForm===kind).length})</button>`).join(''));
 if(!payrollSourceVisible)return;
 const shown=rows.filter(r=>JSON.stringify(r.hrSourceValues).toLowerCase().includes(payrollSourceQuery.toLowerCase()));
 const columns=Object.keys(rows[0]?.hrSourceValues||{}).filter(k=>!['Author','Time Stamp'].includes(k));
 $('#main .payroll-content').innerHTML=`<section class="payroll-paper"><h3 class="payroll-title">AUTOPRO · ORIGINAL ${esc((titles[payrollSourceKind]||payrollSourceKind).toUpperCase())}</h3><p class="hint">Original saved entries. Blank source fields are preserved. These records do not generate new salaries.</p><label class="no-print">Search original records<input data-payroll-source-search value="${esc(payrollSourceQuery)}" type="search"></label><p>${shown.length} / ${rows.length} records</p><div class="table-wrap"><table class="payroll-result"><thead><tr>${columns.map(k=>`<th>${esc(k)}</th>`).join('')}<th class="no-print">Details</th></tr></thead><tbody>${shown.map(r=>`<tr>${columns.map(k=>`<td>${esc(r.hrSourceValues[k]||'')}</td>`).join('')}<td class="no-print"><button type="button" data-payroll-source-view="${esc(r.id)}">View</button></td></tr>`).join('')}</tbody></table></div></section>`;
};
document.addEventListener('click',event=>{
 const toggle=event.target.closest('[data-payroll-source-toggle]');
 if(toggle){if(activePage!=='payroll'||!canPage('payroll'))return;const kind=toggle.dataset.payrollSourceToggle;payrollSourceVisible=kind!==payrollSourceKind||!payrollSourceVisible;payrollSourceKind=kind;payrollSourceQuery='';renderPayroll();}
 if(event.target.closest('[data-payroll-menu]')&&payrollSourceVisible){payrollSourceVisible=false;renderPayroll();}
 const button=event.target.closest('[data-payroll-source-view]');
 if(!button||activePage!=='payroll'||!canPage('payroll','view'))return;
 const row=payrollSourceRows().find(r=>r.id===button.dataset.payrollSourceView);if(!row)return;
 let dialog=$('#payrollSourceDialog');if(!dialog){dialog=document.createElement('dialog');dialog.id='payrollSourceDialog';document.body.append(dialog);}
 dialog.innerHTML=`<form method="dialog"><h2>AutoPro · Original ${esc(payrollCore.formById(row.hrSourceForm)?.name||row.hrSourceForm)} entry</h2><table class="payroll-form-table"><tbody>${Object.entries(row.hrSourceValues).map(([k,v])=>`<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table><p class="hint">Imported ${esc(row.hrImportedAt.slice(0,10))}. Empty fields were empty in AutoPro.</p><button>Close</button></form>`;dialog.showModal();
});
document.addEventListener('change',event=>{if(event.target.matches('[data-payroll-source-search]')){payrollSourceQuery=event.target.value;renderPayroll();}});
