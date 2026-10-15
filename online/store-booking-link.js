'use strict';
function storeBookingEnabled(){return ['Fabric','Accessories'].includes(storeCategory())&&!storeDelivery()&&!activePage.endsWith('-report');}
function storeBookingSource(){return FarnoorAccess.canPage('booking-report')?(state.records.booking||[]).filter(file=>!file.deletedAt).flatMap(file=>(file.rows||[]).map(row=>({...row,orderQty:row.bookingQty??''}))):[];}
function storeBookingDraft(){const category=storeCategory();return storeEditing?.category===category&&storeEditing.draft.storeMovement!=='Delivery'?storeEditing.draft:storeDraft(category);}
const storeBookingFields=['buyer','style','item','orderQty'];
document.getElementById('main').addEventListener('input',event=>{
 const input=event.target,field=input.dataset.storeField;if(!field||!storeBookingEnabled()||!storeBookingFields.includes(field))return;
 const id='storeBookingOptions-'+field;let list=document.getElementById(id);if(!list){list=document.createElement('datalist');list.id=id;document.getElementById('main').append(list);}input.setAttribute('list',id);
 const query=StoreCore.digits(input.value).toLocaleLowerCase();list.innerHTML=query.length<2?'':[...new Set(storeBookingSource().map(row=>String(row[field]??'')))].filter(value=>StoreCore.digits(value).toLocaleLowerCase().includes(query)).slice(0,40).map(value=>`<option value="${esc(value)}"></option>`).join('');
});
document.getElementById('main').addEventListener('focusout',event=>{
 const input=event.target,field=input.dataset.storeField;if(!field||!storeBookingEnabled()||!storeBookingFields.includes(field)||!FarnoorAccess.canAction(activePage,'edit'))return;
 const row=storeBookingDraft().rows[Number(input.dataset.storeRow)];row[field]=input.value;const match=productionOrderMatch(storeBookingSource(),row,field);
 if(match)for(const key of StoreCore.viewColumns(storeCategory(),false).filter(key=>['buyer','style','item','orderQty','colour','size'].includes(key)))if(String(match[key]??'').trim())row[key]=String(match[key]);
 document.querySelectorAll(`[data-store-row="${input.dataset.storeRow}"][data-store-field]`).forEach(cell=>cell.value=row[cell.dataset.storeField]??'');
});
