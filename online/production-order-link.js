'use strict';
const productionOrderFields=['buyer','style','item','orderQty','bookingQty','bookingDate','shipmentDate'];
function productionOrderRows(){return FarnoorAccess.canPage('order-report')?(state.orderFiles||[]).filter(file=>!file.deletedAt).flatMap(file=>(file.rows||[]).map(row=>({...row,orderQty:row.orderQty??row.qty??'',bookingQty:row.bookingQty??'',bookingDate:row.bookingDate??''}))):[];}
function productionOrderMatch(source,row,field){
 const norm=value=>String(value??'').trim().toLocaleLowerCase().replace(/[০-৯]/g,ch=>'০১২৩৪৫৬৭৮৯'.indexOf(ch));
 const value=norm(row[field]);if(value.length<2)return null;
 let candidates=source.filter(item=>norm(item[field])===value);
 if(!candidates.length){const values=[...new Set(source.map(item=>String(item[field]??'')).filter(item=>norm(item).includes(value)))];if(values.length===1){row[field]=values[0];candidates=source.filter(item=>norm(item[field])===norm(values[0]));}}
 if(candidates.length>1||!['buyer','style','item'].includes(field))candidates=candidates.filter(item=>['buyer','style','item'].filter(key=>key!==field&&norm(row[key])).every(key=>norm(item[key])===norm(row[key])));
 return candidates.length===1?candidates[0]:null;
}
productionComplete=function(input){
 const field=PLAN_FIELDS[Number(input.dataset.planCol)]?.[0];if(!productionOrderFields.includes(field))return;
 const id='productionOrderOptions-'+field;let list=document.getElementById(id);if(!list){list=document.createElement('datalist');list.id=id;document.getElementById('main').append(list);}input.setAttribute('list',id);
 const query=input.value.trim().toLocaleLowerCase(),names=productionOrderRows().map(row=>String(row[field]??''));
 if(['buyer','item','style'].includes(field))names.push(...productionOrderNames[{buyer:'buyers',item:'items',style:'styles'}[field]]);
 list.innerHTML=query.length<2?'':[...new Set(names)].filter(value=>value.toLocaleLowerCase().includes(query)).slice(0,40).map(value=>`<option value="${esc(value)}"></option>`).join('');
};
document.getElementById('main').addEventListener('focusout',event=>{
 const input=event.target;if(!input.matches('[data-plan-row]')||!FarnoorAccess.canAction(activePage,'edit'))return;
 const field=PLAN_FIELDS[Number(input.dataset.planCol)]?.[0];if(!productionOrderFields.includes(field))return;
 const row=currentProductionDraft().rows[Number(input.dataset.planRow)];row[field]=input.value;const match=productionOrderMatch(productionOrderRows(),row,field);
 if(match)for(const key of productionOrderFields)if(String(match[key]??'').trim())row[key]=String(match[key]);
 document.querySelectorAll(`[data-plan-row="${input.dataset.planRow}"]`).forEach(cell=>cell.value=row[PLAN_FIELDS[Number(cell.dataset.planCol)][0]]??'');refreshProduction();
});
