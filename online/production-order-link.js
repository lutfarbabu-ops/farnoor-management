'use strict';
const productionOrderFields=['buyer','style','item','orderQty','bookingQty','bookingDate','shipmentDate'];
function productionOrderRows(){return FarnoorAccess.canPage('order-report')?(state.orderFiles||[]).filter(file=>!file.deletedAt).flatMap(file=>(file.rows||[]).map(row=>({...row,orderQty:row.orderQty??row.qty??'',bookingQty:row.bookingQty??'',bookingDate:row.bookingDate??''}))):[];}
function productionOrderKey(value){return String(value??'').trim().replace(/\s+/g,' ').toLocaleLowerCase().replace(/[০-৯]/g,ch=>'০১২৩৪৫৬৭৮৯'.indexOf(ch));}
function productionOrderMatch(source,row,field){
 const value=productionOrderKey(row[field]);if(value.length<2)return null;
 // An existing buyer/style/item is context, even when only one order matches the edited field.
 const compatible=source.filter(item=>['buyer','style','item'].filter(key=>key!==field&&productionOrderKey(row[key])).every(key=>productionOrderKey(item[key])===productionOrderKey(row[key])));
 let candidates=compatible.filter(item=>productionOrderKey(item[field])===value);
 if(!candidates.length&&['buyer','style','item'].includes(field)){const values=[...new Set(compatible.map(item=>String(item[field]??'')).filter(item=>productionOrderKey(item).includes(value)))];if(values.length===1)candidates=compatible.filter(item=>productionOrderKey(item[field])===productionOrderKey(values[0]));}
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
 if(match)for(const key of productionOrderFields){const value=String(match[key]??'');if(!value.trim())continue;if(!String(row[key]??'').trim())row[key]=value;else if(key===field&&['buyer','style','item'].includes(field)&&productionOrderKey(row[key])!==productionOrderKey(value))row[key]=value;}
 document.querySelectorAll(`[data-plan-row="${input.dataset.planRow}"]`).forEach(cell=>cell.value=row[PLAN_FIELDS[Number(cell.dataset.planCol)][0]]??'');refreshProduction();
});
