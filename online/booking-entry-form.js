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
 const bookingColours=['Navy','Black','Grey Mel.','Anthra Mel.','Sage Green','Ice Sky','Paprika','Ash Grey','Safari','Capri Breeze','Dove Grey','Dark Danim','Scauaring','White','Night Blue','Yellow','Rouge Red','Light Turquiose','Reed','Vintage Grey','Warm Taupe','Off White','Airy Blue','Icy Pink','Red','Lavazza','Hibiscus','Orange Peel','Dark Azur','Turquiose'];
 const previousBookingIdentity=bookingIdentity;bookingIdentity=function(title,file){return previousBookingIdentity(title==='BOOKING REPORT'?'BOOKING':title,file);};
 const bookingTodayIso=()=>{const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Dhaka',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(part=>[part.type,part.value]));return parts.year+'-'+parts.month+'-'+parts.day;};
 const bookingDateText=value=>{const text=String(value??'').trim();let match=text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(match)return match[3].padStart(2,'0')+'-'+match[2].padStart(2,'0')+'-'+match[1];match=text.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);return match?match[1].padStart(2,'0')+'-'+match[2].padStart(2,'0')+'-'+match[3]:text;};
 bookingTable=function(rows,edit=false){return `<div class="table-wrap"><table class="booking-table"><thead><tr><th>SL</th>${bookingColumns.map(([,label])=>`<th>${label}</th>`).join('')}${edit?'<th class="booking-remove no-print"></th>':''}</tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td>${bookingColumns.map(([k,label],j)=>`<td>${edit?`<input data-booking-row="${i}" data-booking-col="${j}" data-booking-field="${k}" aria-label="Booking row ${i+1} ${label}" maxlength="500" ${k!=='remarks'?`list="booking-source-${k}"`:''} ${['bookingDate','shipmentDate'].includes(k)?'placeholder="DD-MM-YYYY"':''} value="${esc(['bookingDate','shipmentDate'].includes(k)?bookingDateText(r[k]):r[k])}" ${k.endsWith('Qty')?'inputmode="decimal"':''}>`:esc(['bookingDate','shipmentDate'].includes(k)?bookingDateText(r[k]):r[k])}</td>`).join('')}${edit?`<td class="booking-remove no-print"><button type="button" data-booking-action="remove" data-booking-row="${i}" data-page-action-required="edit" aria-label="Remove booking row ${i+1}">−</button></td>`:''}</tr>`).join('')}</tbody></table></div>`;};
 const normalizeBookingDate=value=>{const text=String(value??'').trim();if(!text)return '';let year,month,day,match=text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(match){year=+match[1];month=+match[2];day=+match[3];}else{match=text.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2}|\d{4})$/);if(!match)throw Error('Use a date like 1/1/26 or 01/01/2026.');day=+match[1];month=+match[2];year=+match[3];if(year<100)year+=2000;}const date=new Date(Date.UTC(year,month-1,day));if(date.getUTCFullYear()!==year||date.getUTCMonth()!==month-1||date.getUTCDate()!==day)throw Error('Use a valid date like 01-01-2026.');return year+'-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0');};
 bookingValidate=function(rows){const filled=rows.filter(r=>bookingColumns.some(([k])=>String(r[k]??'').trim()));const source=filled.length?filled:[blankBookingRow()];return source.map(r=>{const row=Object.fromEntries(bookingColumns.map(([k])=>[k,String(r[k]??'').trim()]));for(const value of Object.values(row))if(value.length>500)throw Error('Each cell must be within 500 characters.');for(const key of ['orderQty','bookingQty']){if(!row[key])continue;const digits=StoreCore.digits(row[key]);if(!/^\d+(\.\d{1,3})?$/.test(digits)||Number(digits)>1000000000)throw Error('Enter a valid '+bookingColumns.find(c=>c[0]===key)[1]+'.');row[key]=digits;}for(const key of ['bookingDate','shipmentDate'])if(row[key])row[key]=normalizeBookingDate(row[key]);if(row.bookingDate&&row.shipmentDate&&dateKey(row.shipmentDate)<dateKey(row.bookingDate))throw Error('SHIPMENT DATE cannot be before BOOKING DATE.');return row;});};

 renderBookingEntry=function(){
  bookingDraft||={id:null,openedAt:new Date().toISOString(),rows:[{...blankBookingRow(),bookingDate:bookingTodayIso()}]};
  const source=bookingSourceRows();
  const suggestions=Object.fromEntries([...suggestionFields].map(key=>[key,[...new Set([...(key==='colour'?bookingColours:[]),...source.map(row=>String(row[key]??'').trim()).filter(Boolean)])]]));
  const lists=fields.filter(([key])=>key!=='remarks'&&(!suggestionFields.has(key)||key==='colour')).map(([key])=>'<datalist id="booking-source-'+key+'">'+[...new Set([...(key==='colour'?bookingColours:[]),...source.map(row=>String(row[key]??'')).filter(Boolean)])].map(value=>'<option value="'+esc(value)+'"></option>').join('')+'</datalist>').join('');
  const entryHeading='<h2 class="booking-title">BOOKING</h2><p class="booking-date">'+esc(new Date(bookingDraft?.updatedAt||bookingDraft?.createdAt||bookingDraft?.openedAt||Date.now()).toLocaleString("en-GB",{timeZone:"Asia/Dhaka"}))+'</p>';
  const entries=bookingDraft.rows.map((row,index)=>'<div class="booking-item-row"><section class="booking-entry-card"><div class="booking-entry-fields">'+formFields.map(([key,label],position)=>'<label class="booking-entry-field"><span><i>'+String(position+1).padStart(2,'0')+'</i>'+esc(label)+'</span><input data-booking-row="'+index+'" data-booking-field="'+key+'" aria-label="'+esc(label)+'" maxlength="500" '+(key==='colour'||(key!=='remarks'&&!suggestionFields.has(key))?'list="booking-source-'+key+'"':'')+' '+(suggestionFields.has(key)?'data-booking-suggest="'+key+'"':'')+' '+(key.endsWith('Qty')?'inputmode="decimal" placeholder="Enter quantity"':'')+' '+(['bookingDate','shipmentDate'].includes(key)?'placeholder="DD-MM-YYYY"':'')+' value="'+esc(['bookingDate','shipmentDate'].includes(key)?bookingDateText(row[key]):row[key]??'')+'">'+(suggestionFields.has(key)?'<div class="booking-entry-suggestions" role="listbox" hidden></div>':'')+'</label>').join('')+'</div></section><button type="button" class="booking-remove-item" data-booking-action="remove" data-booking-row="'+index+'" data-page-action-required="edit" aria-label="Delete booking item '+(index+1)+'" title="Delete booking item">−</button></div>').join('');
  $('#main').innerHTML='<section class="account-paper booking-paper booking-entry">'+entryHeading+lists+'<div class="booking-entry-list">'+entries+'</div><div class="booking-controls booking-entry-controls no-print"><button type="button" class="booking-add-item" data-booking-action="row" data-page-action-required="edit">＋ Add Booking Item</button><button type="button" class="primary booking-save-entry" id="bookingSave" data-booking-action="save" data-page-action-required="edit" '+(bookingBusy?'disabled':'')+'>'+(bookingBusy?'Saving…':'Save Booking')+'</button></div></section>';
  const stamp=$('#main .booking-date');
  if(stamp){const parts=stamp.textContent.split(/\s*,\s*/);stamp.innerHTML='<span class="booking-time-part">'+esc(parts[1]||'')+'</span><span class="booking-date-part">'+esc(bookingDateText(parts[0]||''))+'</span>';}
  applyActionControls();
  $('#main').querySelectorAll('[data-booking-suggest]').forEach(input=>{
   const panel=input.parentElement.querySelector('.booking-entry-suggestions');
   const choices=suggestions[input.dataset.bookingSuggest]||[];
   const update=()=>{
    panel.replaceChildren();
    const query=input.value.trim().toLocaleLowerCase();
    if(query.length<2&&!(input.dataset.bookingSuggest==='colour'&&!query)){panel.hidden=true;return;}
    const matches=choices.filter(value=>!query||value.toLocaleLowerCase().includes(query)).slice(0,40);
    if(!matches.length){panel.hidden=true;return;}
    matches.forEach(value=>{const option=document.createElement('button');option.type='button';option.className='booking-entry-suggestion';option.setAttribute('role','option');option.textContent=value;option.addEventListener('mousedown',event=>event.preventDefault());option.addEventListener('click',()=>{input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}));panel.hidden=true;input.focus();});panel.append(option);});
    panel.hidden=false;
   };
   input.addEventListener('input',()=>{update();if(input.dataset.bookingSuggest==='colour'){const list=$('#booking-source-colour'),query=input.value.trim().toLocaleLowerCase();if(list)list.innerHTML=choices.filter(value=>!query||value.toLocaleLowerCase().includes(query)).map(value=>'<option value="'+esc(value)+'"></option>').join('');}});
   input.addEventListener('focus',update);
   input.addEventListener('keydown',event=>{if(event.key==='Escape')panel.hidden=true;else if(event.key==='Enter'&&!panel.hidden){const first=panel.querySelector('.booking-entry-suggestion');if(first){event.preventDefault();first.click();}}});
   input.addEventListener('blur',()=>window.setTimeout(()=>{if(!input.matches(':focus'))panel.hidden=true;},140));
  });
 };

 $('#main').addEventListener('click',event=>{const button=event.target.closest('[data-booking-action="row"]');if(!button||activePage!=='booking-entry'||!FarnoorAccess.canAction(activePage,'edit'))return;event.preventDefault();event.stopImmediatePropagation();if(bookingDraft.rows.length>=1000)return toast('Maximum 1000 rows.');const previous=bookingDraft.rows[bookingDraft.rows.length-1]||blankBookingRow();bookingDraft.rows.push({...previous});renderBookingEntry();},true);
})();