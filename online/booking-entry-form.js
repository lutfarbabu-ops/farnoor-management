'use strict';
(() => {
 const fields=[
  ['buyer','BUYER'],
  ['style','Art.No/Style No'],
  ['contNo','Cont. No.'],
  ['item','ITEM'],
  ['colour','Color'],
  ['fabricType','Fabric Types'],
  ['orderQty','ORDER QTY'],
  ['bookingQty','BOOKING QTY'],
  ['bookingDate','BOOKING DATE'],
  ['shipmentDate','SHIPMENT DATE'],
  ['remarks','REMARKS']
 ];
 bookingColumns.splice(0,bookingColumns.length,...fields);
 const formFields=[fields[3],fields[0],...fields.slice(1,3),...fields.slice(4)];
 const suggestionFields=new Set(['buyer','style','contNo','item','colour','fabricType']);

 renderBookingEntry=function(){
  bookingDraft||={id:null,openedAt:new Date().toISOString(),rows:[blankBookingRow()]};
  const source=bookingSourceRows();
  const suggestions=Object.fromEntries([...suggestionFields].map(key=>[key,[...new Set(source.map(row=>String(row[key]??'').trim()).filter(Boolean))]]));
  const lists=fields.filter(([key])=>key!=='remarks'&&!suggestionFields.has(key)).map(([key])=>'<datalist id="booking-source-'+key+'">'+[...new Set(source.map(row=>String(row[key]??'')).filter(Boolean))].map(value=>'<option value="'+esc(value)+'"></option>').join('')+'</datalist>').join('');
  const entries=bookingDraft.rows.map((row,index)=>'<section class="booking-entry-card"><div class="booking-entry-fields">'+formFields.map(([key,label],position)=>'<label class="booking-entry-field"><span><i>'+String(position+1).padStart(2,'0')+'</i>'+esc(label)+'</span><input data-booking-row="'+index+'" data-booking-field="'+key+'" aria-label="'+esc(label)+'" maxlength="500" '+(key!=='remarks'&&!suggestionFields.has(key)?'list="booking-source-'+key+'"':'')+' '+(suggestionFields.has(key)?'data-booking-suggest="'+key+'"':'')+' '+(key.endsWith('Qty')?'inputmode="decimal" placeholder="Enter quantity"':'')+' '+(['bookingDate','shipmentDate'].includes(key)?'placeholder="DD/MM/YYYY"':'')+' value="'+esc(row[key]??'')+'">'+(suggestionFields.has(key)?'<div class="booking-entry-suggestions" role="listbox" hidden></div>':'')+'</label>').join('')+'</div></section>').join('');
  $('#main').innerHTML='<section class="account-paper booking-paper booking-entry">'+bookingIdentity('BOOKING',bookingDraft)+lists+'<div class="booking-entry-list">'+entries+'</div><div class="booking-controls booking-entry-controls no-print"><button type="button" class="booking-add-item" data-booking-action="row" data-page-action-required="edit">＋ Add Booking Item</button><button type="button" class="primary booking-save-entry" id="bookingSave" data-booking-action="save" data-page-action-required="edit" '+(bookingBusy?'disabled':'')+'>'+(bookingBusy?'Saving…':'Save Booking')+'</button></div></section>';
  applyActionControls();
  $('#main').querySelectorAll('[data-booking-suggest]').forEach(input=>{
   const panel=input.parentElement.querySelector('.booking-entry-suggestions');
   const choices=suggestions[input.dataset.bookingSuggest]||[];
   const update=()=>{
    panel.replaceChildren();
    const query=input.value.trim().toLocaleLowerCase();
    if(query.length<2){panel.hidden=true;return;}
    const matches=choices.filter(value=>value.toLocaleLowerCase().includes(query)).slice(0,10);
    if(!matches.length){panel.hidden=true;return;}
    matches.forEach(value=>{const option=document.createElement('button');option.type='button';option.className='booking-entry-suggestion';option.setAttribute('role','option');option.textContent=value;option.addEventListener('mousedown',event=>event.preventDefault());option.addEventListener('click',()=>{input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}));panel.hidden=true;input.focus();});panel.append(option);});
    panel.hidden=false;
   };
   input.addEventListener('input',update);
   input.addEventListener('focus',update);
   input.addEventListener('keydown',event=>{if(event.key==='Escape')panel.hidden=true;else if(event.key==='Enter'&&!panel.hidden){const first=panel.querySelector('.booking-entry-suggestion');if(first){event.preventDefault();first.click();}}});
   input.addEventListener('blur',()=>window.setTimeout(()=>{panel.hidden=true;},140));
  });
 };
})();