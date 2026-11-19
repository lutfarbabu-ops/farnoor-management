'use strict';
(() => {
 let busy=false;
 function recordCollection(page,id){
  const preferred=pageInfo(page)?.page?.resource;
  if(typeof preferred==='string'&&preferred.startsWith('record:'))return preferred.slice(7);
  return Object.entries(state.records||{}).find(([,rows])=>Array.isArray(rows)&&rows.some(row=>row.id===id))?.[0]||page;
 }
 function itemById(collection,id){
  return collection==='orderFiles'?(state.orderFiles||[]).find(row=>row.id===id):(state.records?.[collection]||[]).find(row=>row.id===id);
 }
 function removeItem(next,collection,id,action,deletedAt){
  if(collection==='orderFiles')next.orderFiles=(next.orderFiles||[]).filter(row=>row.id!==id);
  else{
   const rows=[...(next.records?.[collection]||[])],index=rows.findIndex(row=>row.id===id);
   if(index<0)throw Error('Saved record was not found.');
   if(action==='remove')rows.splice(index,1);
   else if(action==='soft-delete')rows[index]={...rows[index],deletedAt};
   else {const {...rest}=rows[index];delete rest.deletedAt;rows[index]=rest;}
   next.records={...(next.records||{}),[collection]:rows};
  }
 }
 document.addEventListener('click',async event=>{
  const button=event.target.closest('button[data-store-action="delete"],button[data-order-action="delete"],button[data-booking-action="delete"],button[data-booking-action="restore"],button[data-delete]');
  if(!button||busy)return;
  const store=button.dataset.storeAction==='delete',order=button.dataset.orderAction==='delete',
    booking=['delete','restore'].includes(button.dataset.bookingAction),generic=button.dataset.delete!==undefined;
  if(!store&&!order&&!booking&&!generic)return;
  event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
  const page=activePage,action=booking?(button.dataset.bookingAction==='restore'?'restore':'soft-delete'):'remove';
  let collection,id;
  if(order){
   if(orderSearch){toast('Clear search and select one saved file to delete.');return;}
   collection='orderFiles';id=button.closest('[data-order-file]')?.dataset.orderFile||orderSelected;
  }else if(store){
   id=button.dataset.storeId;
   const category=pageInfo(page)?.page?.storeCategory;
   collection=category&&typeof StoreCore!=='undefined'?StoreCore.key(category):recordCollection(page,id);
  }else if(booking){collection='booking';id=button.dataset.bookingId;}
  else {collection=page;id=button.dataset.delete;}
  if(!id)return toast('Select a saved file first.');
  const current=itemById(collection,id);
  if(!current)return toast('Saved record was not found. Refresh and try again.');
  if(!FarnoorAccess.canAction(page,'edit'))return toast('You do not have permission to delete this file.');
  if(action!=='restore'&&!confirm(booking?'Move this booking file to Deleted files? It can be restored.':'Delete this saved file? This action cannot be undone.'))return;
  if(dataSaving)return toast('Another save is in progress. Please wait.');
  busy=true;
  const deletedAt=action==='soft-delete'?new Date().toISOString():null;
  try{
   const response=await FarnoorAPI.request('/api/workspace/item',{method:'POST',payload:{page,collection,id,action,deletedAt,revision:dataRevision,accessRevision:accessInfo.revision}});
   const result=await response.json();
   if(!response.ok){const error=Error(result.error||'Could not delete the saved file.');error.status=response.status;throw error;}
   if(result.mutatedId!==id||result.action!==action||!Number.isSafeInteger(result.revision))throw Error('Delete was not confirmed. Refresh and retry.');
   const next=structuredClone(state);removeItem(next,collection,id,action,deletedAt);state=next;dataSavedState=structuredClone(next);dataRevision=result.revision;dataChanged=false;
   void FarnoorWorkspaceCache.write(dataCacheUserId,{state,access:accessInfo,revision:dataRevision});
   renderPage();dataStatus('Saved online');toast(action==='soft-delete'?'Booking file moved to Deleted files.':action==='restore'?'Booking file restored.':'Saved file deleted.');
  }catch(error){dataStatus('Not saved · Retry');toast(error.message||'Could not delete the saved file.');if(error.status===409)void loadData(true);}
  finally{busy=false;}
 },true);
})();