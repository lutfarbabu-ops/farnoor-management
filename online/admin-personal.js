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
function personalEntryForm(){
 const row=(label,key)=>`<div class="personal-entry-row"><label for="personal-${key}">${esc(label)}</label><input id="personal-${key}" data-personal-field="${key}" value="${esc(personalEntryDraft[key]||'')}" autocomplete="off" ${/তারিখ/.test(label)?'placeholder="DD/MM/YYYY"':''}></div>`;
 return `<style>.personal-entry-form{max-width:920px;margin:auto}.personal-entry-row{display:grid;grid-template-columns:minmax(150px,32%) minmax(0,1fr);align-items:center;gap:16px;padding:7px 0;border-bottom:1px solid #e4eee8}.personal-entry-row label{text-align:left;font-size:16px;color:#234b40}.personal-entry-row input{width:100%;min-height:39px;font-size:17px}.personal-entry-form h4{margin:24px 0 6px;padding:10px;background:#e5f2ed;color:#185b43;border-radius:7px}.personal-entry-children input{min-width:65px;width:100%;font-size:16px}.personal-entry-children th{font-size:14px}.personal-entry-children td{padding:7px}@media(max-width:520px){.personal-entry-row{grid-template-columns:minmax(120px,42%) minmax(0,1fr);gap:8px}.personal-entry-row label{font-size:14px}}</style><form class="personal-entry-form" aria-label="Personal file New Entry" onsubmit="return false">${personalEntryFields.map((field,index)=>typeof field==='string'?row(field,'field-'+index):field.children?`<h4>${field.title}</h4><div class="table-wrap"><table class="personal-entry-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:5},(_,i)=>`<tr><td>${i+1}</td>${['নাম','বয়স','লিঙ্গ'].map((label,col)=>{const key='child-'+i+'-'+col;return `<td><input aria-label="সন্তান ${i+1} ${label}" data-personal-field="${key}" value="${esc(personalEntryDraft[key]||'')}" autocomplete="off"></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`:`<h4>${field.title}</h4>${field.fields.map((label,col)=>row(label,'address-'+index+'-'+col)).join('')}`).join('')}</form>`;
}
$('#main').addEventListener('input',event=>{if(event.target.dataset.personalField)personalEntryDraft[event.target.dataset.personalField]=event.target.value;});
const personalFileRenderPage=renderPage;
renderPage=function(...args){
 if(activePage!=='admin-personal-file')return personalFileRenderPage.apply(this,args);
 const selected=personalFileButtons.find(item=>item[0]===personalFileSelected);
 $('#main').innerHTML=heading('Admin','Personal file','')+`<section class="panel"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(112px,145px));gap:8px">${personalFileButtons.map(([id,name,icon,bg,fg])=>`<button type="button" data-personal-file="${id}" aria-pressed="${id===personalFileSelected}" style="display:flex;align-items:center;gap:7px;min-height:40px;padding:8px 10px;border:1px solid ${fg}55;border-radius:8px;background:${bg};color:${fg};font-size:13px;font-weight:700;${id===personalFileSelected?'box-shadow:0 0 0 2px '+fg+';':''}"><span aria-hidden="true" style="font-size:19px">${icon}</span><span>${name}</span></button>`).join('')}</div></section>${selected?`<section class="panel" aria-label="${esc(selected[1])}"><h3 style="color:${selected[4]}">${esc(selected[1])}</h3>${personalFileSelected==='new'?personalEntryForm():''}</section>`:''}`;
 if(typeof applyActionControls==='function')applyActionControls();
};
$('#main').addEventListener('click',event=>{
 const button=event.target.closest('[data-personal-file]');
 if(!button||activePage!=='admin-personal-file')return;
 personalFileSelected=button.dataset.personalFile;renderPage();
});
