'use strict';
const personalFileButtons=[
 ['new','New Entry','✚','#d9f3e6','#166348'],
 ['file-1','File-1','①','#dcecff','#24558b'],
 ['file-2','File-2','②','#eee2ff','#7042a1'],
 ['file-3','File-3','③','#ffe2e9','#a43b5e'],
 ['file-4','File-4','④','#fff0ce','#8b6014'],
 ['file-5','File-5','⑤','#d6f1f4','#176774'],
 ['file-6','File-6','⑥','#e7efcf','#536b22'],
 ['file-7','File-7','⑦','#ffe6d4','#9b5525'],
 ['staff-3','Staff-3','♙','#e1e5ff','#4c5093'],
 ['electrican','Electrican','ϟ','#f4e0f4','#8a3a88']
];
let personalFileSelected='';
const personalEntryFields=[
 'কার্ড নং','পদবী বাংলা','পদবী ইংলিশ','সেকশন','সেকশন ইংলিশ','লাইন','যোগদানের তারিখ',
 'নাম বাংলা','নাম ইংলিশ','পিতার নাম','মাতার নাম','লিঙ্গ','স্বামী/স্ত্রীর নাম','স্বামী/স্ত্রীর (বয়স)','স্বামী/স্ত্রীর (পেশা)',
 {title:'স্থায়ী ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 {title:'বর্তমান ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 'জন্ম তারিখ','জন্ম সাল','শিক্ষাগত যোগ্যতা','মোবাইল নং','অভিজ্ঞতা','প্রস্তাবিত বেতন','রক্তের গ্রুপ','জাতীয় আইডি নং',
 'শারীরিক শনাক্তকরণ চিহ্ন','উচ্চতা','ভাইয়ের সংখ্যা','বোনের সংখ্যা','নিজ অবস্থান','দৈহিক সক্ষমতা',
 {children:true,title:'সন্তানাদির বিবরণ:'},
 'পূর্ববর্তী প্রতিষ্ঠানের চাকুরীর বিবরণ','জাতীয়তা','ধর্ম','পরিচিত বিশিষ্ট ব্যক্তিবর্গ','নমিনীর নাম','নমিনীর ঠিকানা',
 'নমিনীর এন.আই.ডি','নমিনীর সম্পর্ক','নমিনীর জন্ম সাল'
];
const personalEntryDraft={};
let personalEntryId=null,personalEntryFolder='file-1',personalEntryBusy=false;
function personalEntryForm(){
 const row=(label,key)=>`<div class="personal-entry-row"><label for="personal-${key}">${esc(label)}</label><input id="personal-${key}" data-personal-field="${key}" value="${esc(personalEntryDraft[key]||'')}" autocomplete="off" ${/তারিখ/.test(label)?'placeholder="DD/MM/YYYY"':''}></div>`;
 return `<style>.personal-entry-form{max-width:920px;margin:auto}.personal-entry-row{display:grid;grid-template-columns:minmax(150px,32%) minmax(0,1fr);align-items:center;gap:16px;padding:7px 0;border-bottom:1px solid #e4eee8}.personal-entry-row label{text-align:left;font-size:16px;color:#234b40}.personal-entry-row input{width:100%;min-height:39px;font-size:17px}.personal-entry-form h4{margin:24px 0 6px;padding:10px;background:#e5f2ed;color:#185b43;border-radius:7px}.personal-entry-children input{min-width:65px;width:100%;font-size:16px}.personal-entry-children th{font-size:14px}.personal-entry-children td{padding:7px}@media(max-width:520px){.personal-entry-row{grid-template-columns:minmax(120px,42%) minmax(0,1fr);gap:8px}.personal-entry-row label{font-size:14px}}</style><form class="personal-entry-form" aria-label="Personal file New Entry" onsubmit="return false">${personalEntryFields.map((field,index)=>typeof field==='string'?row(field,'field-'+index):field.children?`<h4>${field.title}</h4><div class="table-wrap"><table class="personal-entry-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:5},(_,i)=>`<tr><td>${i+1}</td>${['নাম','বয়স','লিঙ্গ'].map((label,col)=>{const key='child-'+i+'-'+col;return `<td><input aria-label="সন্তান ${i+1} ${label}" data-personal-field="${key}" value="${esc(personalEntryDraft[key]||'')}" autocomplete="off"></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`:`<h4>${field.title}</h4>${field.fields.map((label,col)=>row(label,'address-'+index+'-'+col)).join('')}`).join('')}<div style="display:flex;justify-content:flex-end;align-items:center;gap:12px;margin-top:22px"><label for="personalFolder">Save to</label><select id="personalFolder" style="width:150px">${personalFileButtons.slice(1).map(([id,name])=>`<option value="${id}" ${id===personalEntryFolder?'selected':''}>${name}</option>`).join('')}</select><button type="button" class="primary" id="personalSave" data-page-action-required="edit" ${personalEntryBusy?'disabled':''}>${personalEntryBusy?'Saving…':'Save'}</button></div></form>`;
}
$('#main').addEventListener('input',event=>{if(event.target.dataset.personalField)personalEntryDraft[event.target.dataset.personalField]=event.target.value;});
const personalFileRenderPage=renderPage;
renderPage=function(...args){
 if(activePage==='admin-personal-entry-report'){renderPersonalEntryReport();return;}
 if(activePage!=='admin-personal-file')return personalFileRenderPage.apply(this,args);
 const selected=personalFileButtons.find(item=>item[0]===personalFileSelected);
 $('#main').innerHTML=heading('Admin','Personal file','')+`<section class="panel"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(112px,145px));gap:8px">${personalFileButtons.map(([id,name,icon,bg,fg])=>`<button type="button" data-personal-file="${id}" aria-pressed="${id===personalFileSelected}" style="display:flex;align-items:center;gap:7px;min-height:40px;padding:8px 10px;border:1px solid ${fg}55;border-radius:8px;background:${bg};color:${fg};font-size:13px;font-weight:700;${id===personalFileSelected?'box-shadow:0 0 0 2px '+fg+';':''}"><span aria-hidden="true" style="font-size:19px">${icon}</span><span>${name}</span></button>`).join('')}</div></section>${selected?`<section class="panel" aria-label="${esc(selected[1])}"><h3 style="color:${selected[4]}">${esc(selected[1])}</h3>${personalFileSelected==='new'?personalEntryForm():personalSavedList(personalFileSelected)}</section>`:''}`;
 if(typeof applyActionControls==='function')applyActionControls();
};
$('#main').addEventListener('click',event=>{
 const button=event.target.closest('[data-personal-file]');
 if(!button||activePage!=='admin-personal-file')return;
 if(button.dataset.personalFile==='new'&&personalFileSelected!=='new'&&personalEntryId){for(const key of Object.keys(personalEntryDraft))delete personalEntryDraft[key];personalEntryId=null;}personalFileSelected=button.dataset.personalFile;renderPage();
});

function personalSavedList(folder){
 const rows=(state.records['admin-documents']||[]).filter(r=>r.personalFile&&r.personalFolder===folder);
 return '<div class="table-wrap"><table><thead><tr><th>Card No.</th><th>Name</th><th>Action</th></tr></thead><tbody>'+rows.map(r=>'<tr><td>'+esc(r.reference)+'</td><td>'+esc(r.name)+'</td><td><button data-personal-open="'+esc(r.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="3">No saved entries.</td></tr>')+'</tbody></table></div>';
}
$('#main').addEventListener('change',event=>{if(event.target.id==='personalFolder')personalEntryFolder=event.target.value;});
$('#main').addEventListener('keydown',event=>{
 if(activePage!=='admin-personal-file'||!event.target.matches('[data-personal-field]')||event.isComposing||event.altKey||event.ctrlKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;
 event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-personal-field]')],index=inputs.indexOf(event.target),target=inputs[index+(event.key==='ArrowUp'?-1:1)];
 if(target){target.focus();target.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#personalSave').focus();
});
async function personalSaveEntry(){
 if(personalEntryBusy)return;
 if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');
 const card=(personalEntryDraft['field-0']||'').trim(),name=(personalEntryDraft['field-7']||personalEntryDraft['field-8']||'').trim();
 if(!card||!name)return toast('কার্ড নং ও নাম লিখুন।');
 if(card.length>120||name.length>200||Object.values(personalEntryDraft).some(value=>value.length>2000))return toast('কোনো ঘরে লেখা বেশি বড় হয়েছে।');
 const next=structuredClone(state),rows=next.records['admin-documents']||[],existing=personalEntryId&&rows.find(r=>r.id===personalEntryId);
 if(personalEntryId&&!existing)return toast('Saved entry is unavailable. Refresh before saving.');
 const now=new Date(),record={...existing,id:personalEntryId||crypto.randomUUID(),reference:card,name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',personalFile:true,personalFolder:personalEntryFolder,personalEntry:structuredClone(personalEntryDraft),createdAt:existing?.createdAt||now.toISOString(),updatedAt:now.toISOString()};
 if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;
 personalEntryBusy=true;const button=$('#personalSave');button.disabled=true;button.textContent='Saving…';
 try{if(await commit(next)){personalEntryId=record.id;toast('Personal file saved online.');}}finally{personalEntryBusy=false;if(activePage==='admin-personal-file')renderPage();}
}
$('#main').addEventListener('click',event=>{
 if(!['admin-personal-file','admin-personal-entry-report'].includes(activePage))return;
 if(event.target.closest('#personalSave'))void personalSaveEntry();
 const open=event.target.closest('[data-personal-open]');if(!open)return;
 const row=(state.records['admin-documents']||[]).find(r=>r.id===open.dataset.personalOpen&&r.personalFile);if(!row)return;
 for(const key of Object.keys(personalEntryDraft))delete personalEntryDraft[key];Object.assign(personalEntryDraft,row.personalEntry);personalEntryId=row.id;personalEntryFolder=row.personalFolder;personalFileSelected='new';if(activePage==='admin-personal-entry-report')goPage('admin-personal-file');else renderPage();
});

function renderPersonalEntryReport(){
 const rows=(state.records['admin-documents']||[]).filter(row=>row.personalFile).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||'')));
 $('#main').innerHTML=heading('Admin · Personal file','Entry Report','')+'<section class="panel"><div class="table-wrap"><table><thead><tr><th>SL</th><th>Card No.</th><th>Name</th><th>File</th><th>Saved Date</th><th>Action</th></tr></thead><tbody>'+rows.map((row,i)=>'<tr><td>'+(i+1)+'</td><td>'+esc(row.reference)+'</td><td>'+esc(row.name)+'</td><td>'+esc(personalFileButtons.find(b=>b[0]===row.personalFolder)?.[1]||'')+'</td><td>'+esc(row.date)+'</td><td><button data-personal-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="6">No saved entries.</td></tr>')+'</tbody></table></div></section>';
 if(typeof applyActionControls==='function')applyActionControls();
}
