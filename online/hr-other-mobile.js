'use strict';
// Additional contact number stays separate from Contact No and Bank/Mobile Info.
(() => {
 const key='Other Mobile No';
 const priorResults=profileSearchRenderResults;
 profileSearchRenderResults=function(){
  priorResults();
  const table=document.querySelector('#profileSearchReport table');
  if(!table||!profileSearchResults)return;
  const head=table.tHead?.rows[0];
  if(!head||[...head.cells].some(c=>c.textContent===key))return;
  const th=document.createElement('th');th.textContent=key;head.insertBefore(th,head.lastElementChild);
  [...table.tBodies[0].rows].forEach((tr,i)=>{
   const td=document.createElement('td');td.textContent=String(profileSearchResults[profileSearchOffset+i]?.hrDetails?.[key]??'');
   tr.insertBefore(td,tr.lastElementChild);
  });
 };
 const priorOpen=hrOpen;
 hrOpen=function(id,view){
  priorOpen(id,view);
  if(!hrDialog.open||!hrEditing?.employee||hrEditing.id!==(id||null)||hrEditing.detailKeys.includes(key))return;
  const index=hrEditing.detailKeys.length;hrEditing.detailKeys.push(key);
  const field={key:'detail_'+index,label:key};hrEditing.detailed.push(field);
  document.querySelector('#hrDetailFields').insertAdjacentHTML('beforeend',hrInput(field,'',view));
  document.querySelector('#hrDetailFields').lastElementChild.style.cssText='display:grid;grid-template-columns:minmax(120px,32%) minmax(0,1fr);align-items:center;gap:15px;border-bottom:1px solid #dce9df;padding:7px 0';
 };
})();
