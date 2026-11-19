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

 renderBookingEntry=function(){
  bookingDraft||={id:null,openedAt:new Date().toISOString(),rows:[blankBookingRow()]};
  const source=bookingSourceRows();
  const lists=fields.filter(([key])=>key!=='remarks').map(([key])=>'<datalist id="booking-source-'+key+'">'+[...new Set(source.map(row=>String(row[key]??'')).filter(Boolean))].map(value=>'<option value="'+esc(value)+'"></option>').join('')+'</datalist>').join('');
  const entries=bookingDraft.rows.map((row,index)=>'<section class="booking-entry-card"><div class="booking-entry-card-head"><strong>Booking Item '+(index+1)+'</strong><button type="button" class="booking-remove-item" data-booking-action="remove" data-booking-row="'+index+'" data-page-action-required="edit" aria-label="Remove booking item '+(index+1)+'">Remove</button></div><div class="booking-entry-fields">'+fields.map(([key,label],position)=>'<label class="booking-entry-field"><span><i>'+String(position+1).padStart(2,'0')+'</i>'+esc(label)+'</span><input data-booking-row="'+index+'" data-booking-field="'+key+'" aria-label="'+esc(label)+'" maxlength="500" '+(key!=='remarks'?'list="booking-source-'+key+'"':'')+' '+(key.endsWith('Qty')?'inputmode="decimal" placeholder="Enter quantity"':'')+' '+(['bookingDate','shipmentDate'].includes(key)?'placeholder="DD/MM/YYYY"':'')+' value="'+esc(row[key]??'')+'"></label>').join('')+'</div></section>').join('');
  $('#main').innerHTML='<section class="account-paper booking-paper booking-entry">'+bookingIdentity('BOOKING',bookingDraft)+lists+'<div class="booking-entry-intro"><span>BOOKING ENTRY</span><p>Fill in the booking information below.</p></div><div class="booking-entry-list">'+entries+'</div><div class="booking-controls booking-entry-controls no-print"><button type="button" class="booking-add-item" data-booking-action="row" data-page-action-required="edit">＋ Add Booking Item</button><button type="button" class="primary booking-save-entry" id="bookingSave" data-booking-action="save" data-page-action-required="edit" '+(bookingBusy?'disabled':'')+'>'+(bookingBusy?'Saving…':'Save Booking')+'</button></div>'+bookingSignatures()+'</section>';
  applyActionControls();
 };
})();