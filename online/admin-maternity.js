'use strict';
const maternityFileButtons=[
 ['calculation-month','Calculatin Month','▦','#dcecff','#24558b'],
 ['first-payment','1st Payment','①','#d9f3e6','#166348'],
 ['second-payment','2nd Payment','②','#eee2ff','#7042a1']
];
let maternityFileSelected='',maternityCardLookup='',maternityCardText='',maternityCompanyChoice='FARNOOR GARMENTS LTD',maternityNameChoice='',maternityPrintSubmitted=false;
function maternityCardKey(value){return String(value??'').normalize('NFKC').trim().toLocaleLowerCase().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));}
function maternityCardRows(card=maternityCardLookup){return (state.records['admin-documents']||[]).filter(row=>row.personalFile&&(!card||maternityCardKey(row.personalEntry?.['field-0']||row.reference)===maternityCardKey(card)));}
function maternityCardCount(folder){return maternityCardLookup?maternityCardRows().filter(row=>row.personalFolder===folder).length:0;}
function maternityCardLookupForm(){const options=(items,current)=>items.map(item=>`<option value="${esc(item)}"${item===current?' selected':''}>${esc(item)}</option>`).join('');return `<form id="maternityCardLookupForm" style="display:flex;flex-wrap:wrap;align-items:end;gap:10px;margin-bottom:20px"><label style="display:grid;gap:4px;width:170px">ID No.<input id="maternityCardLookup" aria-label="ID No." placeholder="Card No." maxlength="120" autocomplete="off" value="${esc(maternityCardText)}"></label><label style="display:grid;gap:4px;min-width:240px">Company<select id="maternityCompanyChoice" aria-label="Company"><option value="">Select company</option>${options(['FARNOOR GARMENTS LTD','FARNOOR GARMENTS LTD. UNIT-2'],maternityCompanyChoice)}</select></label><button type="submit" class="primary">Save</button></form>`;}
const maternityEntryFields=[
 'কার্ড নং','পদবী বাংলা','পদবী ইংলিশ','সেকশন বাংলা','সেকশন ইংলিশ','লাইন','যোগদানের তারিখ',
 'নাম বাংলা','নাম ইংলিশ','পিতার নাম','মাতার নাম','লিঙ্গ','স্বামী/স্ত্রীর নাম','স্বামী/স্ত্রীর (বয়স)','স্বামী/স্ত্রীর (পেশা)',
 {title:'স্থায়ী ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 {title:'বর্তমান ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 'জন্ম তারিখ','জন্ম সাল','শিক্ষাগত যোগ্যতা','নিজের মোবাইল নং','অভিজ্ঞতা','প্রস্তাবিত বেতন','রক্তের গ্রুপ','জাতীয় আইডি নং',
 'শারীরিক শনাক্তকরণ চিহ্ন','উচ্চতা','ভাইয়ের সংখ্যা','বোনের সংখ্যা','নিজ অবস্থান','দৈহিক সক্ষমতা',
 {children:true,title:'সন্তানাদির বিবরণ:'},
 'পূর্ববর্তী প্রতিষ্ঠানের চাকুরীর বিবরণ','জাতীয়তা','ধর্ম','পরিচিত বিশিষ্ট ব্যক্তিবর্গ','নমিনীর নাম','নমিনীর ঠিকানা',
 'নমিনীর এন.আই.ডি','নমিনীর সম্পর্ক','নমিনীর জন্ম সাল'
];
const maternityEntryOptions={"field-1":["সিঃ সুইং অপারেটর","সুইং অপারেটর","জুনিয়র সুইং অপারেটর","সহকারী সুইং অপারেটর","লাইন আয়রন ম্যান","ইনপুটম্যান","সিঃ কাটারম্যান","কাটারম্যান","জুনিয়র কাটারম্যান","সাধারণ কাটারম্যান","সহকারী কাটারম্যান","সিঃ কোয়াঃ ইন্সঃ","কোয়াঃ ইন্সঃ","জুনিয়র কোয়াঃ ইন্সঃ","সাধারণ কোয়াঃ ইন্সঃ","সহকারী কোয়াঃ ইন্সঃ","পলিওম্যান","জুনিয়র পলিওম্যান","সাধারণ পলিওম্যান","সহকারী পলিওম্যান","প্যাকিংম্যান","জুনিয়র প্যাকিংম্যান","সাধারণ প্যাকিংম্যান","সহকারী প্যাকিংম্যান","ফোল্ডিংম্যান","জুনিয়র ফোল্ডিংম্যান","সাধারণ ফোল্ডিংম্যান","সহকারী ফোল্ডিংম্যান","ফিনিশিং আয়রন ম্যান","ফিনিশিং সহকারী","সূতা ঝাড়া সহকারী","লাইনচীফ","লাইন ইনচার্জ","সুপারভাইজার","ড্রাইভার","নার্স","চেকার","স্টোর লেবার","ডাক্তার","সেফটি অফিসার","ক্লিনার","সিকিউরিটি গার্ড","স্যাম্পলম্যান"],"field-2":["Sr. Sewing Operator","Sewing Operator","Jr. Sewing Operator","Ast. Sewing Operator","Line Ironman","Input Man","Sr.Cutter man","Cutter man","Jr. Cutter man","Gen. Cutter man","Ast. Cutter man","Sr. Q/I","Q/I","Jr. Q.I.","General Q.I.","Ast. Q.I.","Poly Woman","Jr. Poly Women","General. Poly Women","Ast. Poly Women","Packingman","Jr. Packingman","General Packingman","Ast. Packingman","Foldingman","Jr. Foldingman","General Foldingman","Ast. Foldingman","Finishing Ironman","Ast. Finishing","Line chief","Line Incharge","Supervisor","Driver","Nurse","Checker","Store Labour","Doctor","Safety Officer","Cleaner","Security Guard","Samplman"],"field-3":["লাইন-১","লাইন-২","লাইন-৩","লাইন-৪","লাইন-৫","সুইং","কাটিং","প্যাকিং","ফিনিশিং","কোয়ালিটি","এডমিন","মার্চেন্ডাইজিং","স্যাম্পল","স্টোর","মেকানিক্যাল","ইলেকট্রিক্যাল","একাউন্টস"],"field-4":["Line-1","Line-2","Line-3","Line-4","Line-5","Sewing","Cutting","Packing","Quality","Finishing","Admin","Merchandising","Samleman","Store","Mechanical","Electrical","Accounts"],"field-5":["সইং লাইন-১","সইং লাইন-২","সইং লাইন-৩","সইং লাইন-৪","সইং লাইন-৫"]};
const maternityEntryDraft={};
let maternityEntryId=null,maternityEntryFolder='file-1',maternityEntryBusy=false,maternityPendingRecord=null;
function maternityEntryForm(){
 const row=(label,key)=>{const value=maternityEntryDraft[key]||'',options=maternityEntryOptions[key];const control=`<input id="maternity-${key}" data-maternity-field="${key}" value="${esc(value)}" autocomplete="off" ${options?`data-maternity-choice="true" aria-autocomplete="list" aria-expanded="false" aria-controls="maternity-options-${key}"`:''} ${/তারিখ/.test(label)?'placeholder="DD/MM/YYYY"':''}>${options?`<div class="maternity-suggestions" id="maternity-options-${key}" role="listbox" hidden></div>`:''}`;return `<div class="maternity-entry-row"><label for="maternity-${key}">${esc(label)}</label><div class="maternity-choice-wrap">${control}</div></div>`;};
 return `<style>.maternity-choice-wrap{position:relative;min-width:0}.maternity-suggestions{position:absolute;left:0;right:0;top:100%;z-index:50;max-height:240px;overflow:auto;background:white;border:1px solid #639b85;border-radius:6px;box-shadow:0 8px 22px #183b3426}.maternity-suggestions[hidden]{display:none}.maternity-suggestions button{display:block;width:100%;text-align:left;border:0;border-radius:0;background:white;color:#183e31;padding:10px 12px;font-size:16px}.maternity-suggestions button:hover,.maternity-suggestions button[aria-selected="true"]{background:#d8eee5}.maternity-entry-form{max-width:920px;margin:auto}.maternity-entry-row{display:grid;grid-template-columns:minmax(150px,32%) minmax(0,1fr);align-items:center;gap:16px;padding:7px 0;border-bottom:1px solid #e4eee8}.maternity-entry-row label{text-align:left;font-size:16px;color:#234b40}.maternity-entry-row input,.maternity-entry-row select{width:100%;min-height:39px;font-size:17px}.maternity-entry-form h4{margin:24px 0 6px;padding:10px;background:#e5f2ed;color:#185b43;border-radius:7px}.maternity-entry-children input{min-width:65px;width:100%;font-size:16px}.maternity-entry-children th{font-size:14px}.maternity-entry-children td{padding:7px}@media(max-width:520px){.maternity-entry-row{grid-template-columns:minmax(120px,42%) minmax(0,1fr);gap:8px}.maternity-entry-row label{font-size:14px}}</style><form class="maternity-entry-form" aria-label="Maternity File New Entry" onsubmit="return false">${maternityEntryFields.map((field,index)=>typeof field==='string'?row(field,'field-'+index)+(index===20?row('ফ্যামেলী অন্য জনের মোবাইল নং','family-mobile'):''):field.children?`<h4>${field.title}</h4><div class="table-wrap"><table class="maternity-entry-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:5},(_,i)=>`<tr><td>${i+1}</td>${['নাম','বয়স','লিঙ্গ'].map((label,col)=>{const key='child-'+i+'-'+col;return `<td><input aria-label="সন্তান ${i+1} ${label}" data-maternity-field="${key}" value="${esc(maternityEntryDraft[key]||'')}" autocomplete="off"></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`:`<h4>${field.title}</h4>${field.fields.map((label,col)=>row(label,'address-'+index+'-'+col)).join('')}`).join('')}<div style="display:flex;justify-content:flex-end;align-items:center;gap:12px;margin-top:22px"><button type="button" class="primary" id="maternitySave" data-page-action-required="edit" ${maternityEntryBusy?'disabled':''}>${maternityEntryBusy?'Saving…':'Save'}</button></div></form>`;
}
function maternityOptionMatches(key,value){const norm=text=>String(text).normalize('NFKC').trim().toLocaleLowerCase().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));const query=norm(value);return [...query].length<2?[]:(maternityEntryOptions[key]||[]).filter(option=>norm(option).includes(query));}
$('#main').addEventListener('input',event=>{const input=event.target,key=input.dataset.maternityField;if(!key)return;maternityEntryDraft[key]=input.value;if(maternityEntryOptions[key])maternityShowChoices(input);});
const maternityFileRenderPage=renderPage;
renderPage=function(...args){
 if(activePage.startsWith('admin-maternity-form-')){renderMaternityPrintFile();return;}

 if(activePage==='admin-maternity-new-entry'){$('#main').innerHTML=heading('Admin','New Entry','')+'<section class="panel">'+maternityEntryForm()+'</section>';if(typeof applyActionControls==='function')applyActionControls();return;}
 if(activePage==='admin-maternity-entry-report'){renderMaternityEntryReport();return;}
 if(!['admin-maternity-file','admin-maternity-print'].includes(activePage))return maternityFileRenderPage.apply(this,args);
 if(activePage==='admin-maternity-file'){$('#main').innerHTML=heading('Admin','Maternity File','');return;}
 $('#main').innerHTML=heading('Admin','Print','')+maternityCardLookupForm()+maternityPrintFileButtons()+(maternityPrintSubmitted?'<section class="panel" aria-label="Selected company and name">'+maternityPrintCompanyInfo()+'</section>':'');
 if(typeof applyActionControls==='function')applyActionControls();
};
$('#main').addEventListener('click',event=>{
 const button=event.target.closest('[data-maternity-file]');
 if(!button||activePage!=='admin-maternity-print')return;
 if(button.dataset.maternityFile==='new'){maternityCardLookup='';maternityCardText='';}if(button.dataset.maternityFile==='new'&&maternityFileSelected!=='new'&&maternityEntryId){for(const key of Object.keys(maternityEntryDraft))delete maternityEntryDraft[key];maternityEntryId=null;}maternityFileSelected=button.dataset.maternityFile;maternityCardLookup=maternityCardText.trim();goPage('admin-maternity-form-'+maternityFileSelected);
});

function maternitySavedList(folder){
 const rows=maternityCardRows().filter(r=>r.personalFolder===folder);
 return '<div class="table-wrap"><table><thead><tr><th>Card No.</th><th>Name</th><th>Action</th></tr></thead><tbody>'+rows.map(r=>'<tr><td>'+esc(r.reference)+'</td><td>'+esc(r.name)+'</td><td><button data-maternity-open="'+esc(r.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="3">No saved entries.</td></tr>')+'</tbody></table></div>';
}
$('#main').addEventListener('change',event=>{if(event.target.id==='maternityFolder')maternityEntryFolder=event.target.value;if(event.target.dataset.maternityField)maternityEntryDraft[event.target.dataset.maternityField]=event.target.value;});
$('#main').addEventListener('keydown',event=>{
 if(!['admin-maternity-file','admin-maternity-new-entry'].includes(activePage)||!event.target.matches('[data-maternity-field]')||event.isComposing||event.altKey||event.ctrlKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;
 if(event.target.list?.options.length&&event.key!=='Enter')return;
 event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-maternity-field]')],index=inputs.indexOf(event.target),target=inputs[index+(event.key==='ArrowUp'?-1:1)];
 if(target){target.focus();if(typeof target.select==='function')target.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#maternitySave').focus();
});
async function maternitySaveEntry(){
 if(maternityEntryBusy)return;
 if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');
 try{for(const key of ['field-6','field-17'])if(maternityEntryDraft[key]?.trim())maternityEntryDraft[key]=normalizeDate(maternityEntryDraft[key]);}catch(error){toast(error.message);return;}
 const card=(maternityEntryDraft['field-0']||'').trim(),name=(maternityEntryDraft['field-7']||maternityEntryDraft['field-8']||'').trim();
 if(!card||!name)return toast('কার্ড নং ও নাম লিখুন।');
 if(card.length>120||name.length>200||Object.values(maternityEntryDraft).some(value=>value.length>2000))return toast('কোনো ঘরে লেখা বেশি বড় হয়েছে।');
 const next=structuredClone(state),rows=next.records['admin-documents']||[],existing=maternityEntryId&&rows.find(r=>r.id===maternityEntryId);
 if(maternityEntryId&&!existing)return toast('Saved entry is unavailable. Refresh before saving.');
 const now=new Date(),record={...existing,id:maternityEntryId||maternityPendingRecord?.id||crypto.randomUUID(),reference:card,name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',personalFile:true,personalFolder:maternityEntryFolder,personalEntry:structuredClone(maternityEntryDraft),createdAt:existing?.createdAt||now.toISOString(),updatedAt:now.toISOString()};
 if(maternityPendingRecord&&JSON.stringify(maternityPendingRecord.personalEntry)===JSON.stringify(record.personalEntry)&&maternityPendingRecord.personalFolder===record.personalFolder){record.createdAt=maternityPendingRecord.createdAt;record.updatedAt=maternityPendingRecord.updatedAt;record.date=maternityPendingRecord.date;}maternityPendingRecord=structuredClone(record);
 if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;
 maternityEntryBusy=true;const button=$('#maternitySave');button.disabled=true;button.textContent='Saving…';
 try{if(await commit(next,{personalFile:record})){maternityEntryId=record.id;maternityPendingRecord=null;toast('Maternity File saved online.');goPage('admin-maternity-entry-report');}}finally{maternityEntryBusy=false;if(['admin-maternity-file','admin-maternity-new-entry'].includes(activePage))renderPage();}
}
$('#main').addEventListener('click',event=>{
 if(!['admin-maternity-file','admin-maternity-new-entry','admin-maternity-entry-report'].includes(activePage))return;
 if(event.target.closest('#maternitySave'))void maternitySaveEntry();
 const open=event.target.closest('[data-maternity-open]');if(!open)return;
 const row=(state.records['admin-documents']||[]).find(r=>r.id===open.dataset.maternityOpen&&r.personalFile);if(!row)return;
 for(const key of Object.keys(maternityEntryDraft))delete maternityEntryDraft[key];Object.assign(maternityEntryDraft,row.personalEntry);maternityEntryId=row.id;maternityEntryFolder=row.personalFolder;maternityFileSelected='new';goPage('admin-maternity-new-entry');
});


function maternityReportDate(value){if(!value)return '';try{return normalizeDate(value);}catch{return value;}}
$('#main').addEventListener('focusout',event=>{
 const input=event.target;if(!['field-6','field-17'].includes(input.dataset.maternityField)||!input.value.trim())return;
 try{input.value=normalizeDate(input.value);maternityEntryDraft[input.dataset.maternityField]=input.value;input.setCustomValidity('');}catch(error){input.setCustomValidity(error.message);toast(error.message);}
});
function maternityReportColumns(){
 const columns=[];maternityEntryFields.forEach((field,index)=>{
  if(typeof field==='string'){columns.push({label:field,key:'field-'+index,date:/তারিখ/.test(field)});if(index===20)columns.push({label:'ফ্যামেলী অন্য জনের মোবাইল নং',key:'family-mobile'});}
  else if(field.children)columns.push({label:field.title,children:true,labels:['ক্রমিক নং','নাম','বয়স','লিঙ্গ']});
  else columns.push({label:field.title,keys:field.fields.map((_,col)=>'address-'+index+'-'+col),labels:field.fields});
 });return columns;
}
function renderMaternityEntryReport(){
 const rows=(state.records['admin-documents']||[]).filter(row=>row.personalFile).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||''))),columns=maternityReportColumns(),count=2+columns.reduce((sum,col)=>sum+(col.labels?.length||1),0);
 const top='<th rowspan="2">ক্রমিক নং</th>'+columns.map(col=>col.labels?'<th colspan="4">'+esc(col.label)+'</th>':'<th rowspan="2">'+esc(col.label)+'</th>').join('')+'<th rowspan="2" class="no-print">Action</th>';
 const lower=columns.filter(col=>col.labels).flatMap(col=>col.labels).map(label=>'<th>'+esc(label)+'</th>').join('');
 const values=row=>{const entry=row.personalEntry||{};return columns.map(col=>{
  if(col.children){const children=Array.from({length:5},(_,i)=>[i+1,...[0,1,2].map(n=>entry['child-'+i+'-'+n]||'')]).filter(child=>child.slice(1).some(Boolean));return [0,1,2,3].map(i=>'<td>'+children.map(child=>esc(child[i])).join('<br>')+'</td>').join('');}
  if(col.keys)return col.keys.map(key=>'<td>'+esc(entry[key])+'</td>').join('');
  return '<td>'+esc(col.date?maternityReportDate(entry[col.key]):entry[col.key])+'</td>';
 }).join('');};
 $('#main').innerHTML=heading('Admin · Maternity File','','')+'<section class="panel"><h2 style="text-align:center;font-size:26px;font-weight:800;margin:12px 0 24px">ENTRY REPORT</h2><div class="table-wrap"><table class="maternity-full-report" style="width:max-content;min-width:100%;border-collapse:collapse"><thead><tr>'+top+'</tr><tr>'+lower+'</tr></thead><tbody>'+rows.map((row,i)=>'<tr><td>'+(i+1)+'</td>'+values(row)+'<td class="no-print"><button data-maternity-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="'+count+'">No saved entries.</td></tr>')+'</tbody></table></div></section><style>.maternity-full-report th,.maternity-full-report td{border:1px solid #6c9485;min-width:120px;max-width:280px;padding:10px;text-align:center;vertical-align:middle;white-space:normal;overflow-wrap:anywhere}.maternity-full-report th{background:#e2f1e9;color:#214d3d;font-size:14px}.maternity-full-report td{font-size:15px}</style>';
 if(typeof applyActionControls==='function')applyActionControls();
}

$('#main').addEventListener('input',event=>{if(event.target.id==='maternityCardLookup'){maternityCardText=event.target.value;maternityCardLookup='';const preview=document.querySelector('#main section[aria-label]');if(preview)preview.remove();document.getElementById('maternityPrintCompanyInfo')?.remove();}});
$('#main').addEventListener('submit',event=>{
 if(event.target.id!=='maternityCardLookupForm')return;event.preventDefault();if(activePage==='admin-maternity-print'){if(!maternityCompanyChoice)return toast('Company নির্বাচন করুন।');const card=$('#maternityCardLookup').value.trim();maternityCardText=card;maternityCardLookup=card;if(card&&!maternityCardRows(card).length){maternityPrintSubmitted=false;maternityFileSelected='';renderPage();return toast('এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।');}maternityPrintSubmitted=true;renderPage();return;}
 const card=$('#maternityCardLookup').value.trim();if(!card){maternityCardLookup='';maternityFileSelected='';renderPage();return;}
 const matches=maternityCardRows(card),match=matches[0];
 if(!match){maternityCardLookup='';maternityFileSelected='';renderPage();toast('এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।');return;}
 maternityCardText=card;maternityCardLookup=card;maternityFileSelected=maternityFileSelected||'file-1';renderPage();
 toast('কার্ড নম্বরের সঙ্গে মিলে সেভ করা ফাইল দেখানো হয়েছে।');
});

let maternityChoiceInput=null,maternityChoiceIndex=-1;
function maternityCloseChoices(){if(!maternityChoiceInput)return;const list=document.getElementById('maternity-options-'+maternityChoiceInput.dataset.maternityField);if(list)list.hidden=true;maternityChoiceInput.setAttribute('aria-expanded','false');maternityChoiceInput.removeAttribute('aria-activedescendant');maternityChoiceInput=null;maternityChoiceIndex=-1;}
function maternityShowChoices(input){maternityCloseChoices();const key=input.dataset.maternityField,list=document.getElementById('maternity-options-'+key),matches=maternityOptionMatches(key,input.value);if(!list)return;
 list.innerHTML=matches.map((value,index)=>'<button type="button" role="option" id="maternity-choice-'+key+'-'+index+'" data-maternity-choice-value="'+esc(value)+'" aria-selected="false">'+esc(value)+'</button>').join('');list.hidden=!matches.length;input.setAttribute('aria-expanded',String(!!matches.length));if(matches.length){maternityChoiceInput=input;maternityChoiceIndex=-1;}
}
function maternityChooseValue(value){const input=maternityChoiceInput;if(!input)return;input.value=value;maternityEntryDraft[input.dataset.maternityField]=value;maternityCloseChoices();input.focus();}
$('#main').addEventListener('focusin',event=>{if(event.target.dataset.maternityChoice)maternityShowChoices(event.target);else if(!event.target.closest('.maternity-suggestions'))maternityCloseChoices();});
$('#main').addEventListener('pointerdown',event=>{const option=event.target.closest('[data-maternity-choice-value]');if(option){event.preventDefault();maternityChooseValue(option.dataset.maternityChoiceValue);}else if(!event.target.dataset.maternityChoice)maternityCloseChoices();});
$('#main').addEventListener('click',event=>{const option=event.target.closest('[data-maternity-choice-value]');if(option&&maternityChoiceInput)maternityChooseValue(option.dataset.maternityChoiceValue);});
$('#main').addEventListener('keydown',event=>{
 if(event.isComposing||event.target!==maternityChoiceInput)return;const input=maternityChoiceInput,list=document.getElementById('maternity-options-'+input.dataset.maternityField),options=[...list.querySelectorAll('[role="option"]')];if(!options.length)return;
 if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();maternityCloseChoices();return;}
 if(!['ArrowDown','ArrowUp','Enter'].includes(event.key))return;event.preventDefault();event.stopImmediatePropagation();
 if(event.key==='Enter'){const value=options[Math.max(0,maternityChoiceIndex)].dataset.maternityChoiceValue;maternityChooseValue(value);const fields=[...$('#main').querySelectorAll('[data-maternity-field]')],next=fields[fields.indexOf(input)+1];if(next)next.focus();return;}
 maternityChoiceIndex=(maternityChoiceIndex+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;options.forEach((option,index)=>option.setAttribute('aria-selected',String(index===maternityChoiceIndex)));input.setAttribute('aria-activedescendant',options[maternityChoiceIndex].id);options[maternityChoiceIndex].scrollIntoView({block:'nearest'});
},true);

$('#main').addEventListener('change',event=>{if(event.target.id==='maternityCompanyChoice')maternityCompanyChoice=event.target.value;if(event.target.id==='maternityNameChoice')maternityNameChoice=event.target.value;});

function maternityPrintCompany(){return maternityCompanyChoice==='FARNOOR GARMENTS LTD. UNIT-2'?{bn:'ফারনূর গার্মেন্টস লিঃ-ইউনিট-২',address:'৪৫৪, বাবুরচালা, পিরুজালী, আলীমপাড়া, গাজীপুর সদর, গাজীপুর',en:'454, BaburChala, Alimpara, Pirujali, Gazipur',holiday:'শুক্রবার'}:{bn:'ফারনূর গার্মেন্টস লিঃ',address:'১২০৮/১/২ মালিবাগ বাজার রোড, ঢাকা-১২১৭',en:'1028/1/2 Malibagh Bazar Road, Dhaka-1217',holiday:'রবিবার'};}
function maternityPrintCompanyInfo(){const c=maternityPrintCompany();return '<div id="maternityPrintCompanyInfo" style="text-align:center;padding:18px 12px 24px;font-size:20px;line-height:1.6;color:#123f32"><b style="font-size:28px">'+esc(c.bn)+'</b><div>'+esc(c.address)+'</div><div>'+esc(c.en)+'</div><div>সাপ্তাহিক ছুটি: '+c.holiday+'</div></div>';}
$('#main').addEventListener('change',event=>{if(activePage==='admin-maternity-print'&&['maternityCompanyChoice','maternityNameChoice'].includes(event.target.id)){maternityPrintSubmitted=false;renderPage();}});

function maternityPrintSelection(){return '<div class="maternity-print-selection" style="display:flex;flex-wrap:wrap;gap:6px 20px;border-bottom:1px solid #aaa;padding:4px 0;margin-bottom:12px;font-size:14px;color:#000"><span>কার্ড নং: <b>'+esc(maternityFileOneBangla(maternityCardLookup))+'</b></span><span>কোম্পানি: <b>'+esc(maternityCompanyChoice)+'</b></span><span>নাম: <b>'+esc(maternityNameChoice||'—')+'</b></span></div>';}

function maternityPrintFileButtons(){return '<div class="no-print" style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px">'+maternityFileButtons.filter(b=>b[0]!=='new').map(([id,name,icon,bg,fg])=>'<button type="button" data-maternity-file="'+id+'" aria-pressed="'+(maternityFileSelected===id)+'" style="padding:8px 14px;border:1px solid '+fg+'55;border-radius:7px;background:'+bg+';color:'+fg+';font-weight:700">'+icon+' '+name+'</button>').join('')+'</div>';}

function renderMaternityPrintFile(){const folder=activePage.slice('admin-maternity-form-'.length),title=maternityFileButtons.find(b=>b[0]===folder)?.[1]||folder;maternityFileSelected=folder;const rows=maternityCardLookup?maternityCardRows():[];$('#main').innerHTML=heading('Admin · Maternity File · Print',title,'')+'<div class="no-print" style="display:flex;justify-content:flex-end;gap:10px;margin-bottom:16px">'+(folder?'<button type="button" id="maternityFormBack" style="margin-right:auto;background:#e0e7ff;border-color:#a5b4fc;color:#312e81;font-weight:700">← Back</button>':'')+'<button id="maternityFormPrint" style="background:#2563eb;border-color:#1d4ed8;color:white">Print</button><button id="maternityFormExcel" style="background:#16803c;border-color:#116530;color:white">Excel</button></div><section class="panel" id="maternityFilePrintContent">'+(['calculation-month','first-payment','second-payment'].includes(folder)?'':maternitySavedList(folder))+'</section>';}
$('#main').addEventListener('click',async event=>{if(!activePage.startsWith('admin-maternity-form-'))return;if(event.target.closest('#maternityFormBack')){goPage('admin-maternity-print');return;}if(event.target.closest('#maternityFormPrint')){if(!FarnoorAccess.canAction('admin-documents','print'))return toast('Print permission is required.');window.print();}if(event.target.closest('#maternityFormExcel')){const rows=['file-1','file-2','file-3','file-4','file-5','file-6','file-7','staff-3','electrican'].includes(maternityFileSelected)?(maternityCardLookup?maternityCardRows():[]):[{personalEntry:{}}];if(!rows.length)return toast('কোনো মিলে যাওয়া এন্ট্রি নেই।');const title=maternityFileButtons.find(b=>b[0]===maternityFileSelected)?.[1]||'Maternity File',matrix=[[maternityCompanyChoice],[maternityNameChoice],[title],['Field','Value']];for(const row of rows){const e=row.personalEntry||{};for(const [i,field] of maternityEntryFields.entries()){let value=typeof field==='string'?e['field-'+i]||'':field.children?Array.from({length:5},(_,n)=>[0,1,2].map(k=>e['child-'+n+'-'+k]||'').join(' / ')).join('; '):field.fields.map((label,k)=>label+' '+(e['address-'+i+'-'+k]||'')).join(', ');matrix.push([typeof field==='string'?field:field.title,value]);if(i===20)matrix.push(['ফ্যামেলী অন্য জনের মোবাইল নং',e['family-mobile']||'']);}}const name=title+'-'+maternityCardLookup.replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.xlsx',data=makeXlsx(matrix,title),mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';try{if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Excel workbook',accept:{[mime]:['.xlsx']}}]});const stream=await handle.createWritable();await stream.write(new Blob([data],{type:mime}));await stream.close();toast('Excel file saved.');}else{download(name,data,mime);toast('Excel downloaded. ব্রাউজারের Download settings দিয়ে লোকেশন নির্বাচন করুন।');}}catch(error){if(error.name!=='AbortError')toast(error.message);}}});





