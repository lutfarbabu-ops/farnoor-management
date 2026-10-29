'use strict';
const sampleWorkerDefaults=['Ridy Ahmed','Md. Abul Kalam','Md. Salim','Md. Sohel Rana','Rezakul Islam','Md. Muslim Uddin','Aulad Hossan','Md. Liton','Md. Antor','Md. Enamul Haque','Md. Sahidul Islam Salim'];
const sampleWorkerDefaultCards={...sampleBoardCards};
let sampleWorkerOverrides=[];
try{if(localStorage.getItem('farnoor-sample-workers-v1')===null){localStorage.setItem('farnoor-sample-workers-v1',localStorage.getItem('farnoor-iron-workers-v1')||'[]');}}catch{}
try{const list=JSON.parse(localStorage.getItem('farnoor-sample-workers-v1')||'[]');if(Array.isArray(list))sampleWorkerOverrides=list.filter(w=>w&&typeof w.name==='string'&&w.name.length<=120&&typeof w.card==='string'&&w.card.length<=40&&Number.isInteger(w.sl)&&w.sl>0).slice(0,200);}catch{}
function sampleWorkerList(){
 const workers=sampleWorkerDefaults.map((name,i)=>({name,card:sampleWorkerDefaultCards[name]||'',sl:i+1}));
 const merge=w=>{const index=workers.findIndex(old=>w.previousCard&&old.card===w.previousCard||w.card&&old.card===w.card||old.name===w.name);if(index<0)workers.push(w);else workers[index]=w;};
 const records=samplePDRecords().slice().sort((a,b)=>String(a.updatedAt||a.createdAt).localeCompare(String(b.updatedAt||b.createdAt)));
 for(const row of records){const f=row.hourlyPD.fields||{};if(f.workerProfile==='1'&&f.ironManName){const n=Number(f.sl);if(Number.isInteger(n)&&n>0)merge({name:f.ironManName,card:f.cardNo||'',sl:n,previousCard:f.workerPreviousCard||''});}}
 for(const w of sampleWorkerOverrides)merge({...w});
 return workers.sort((a,b)=>a.sl-b.sl);
}
function sampleWorkerRefresh(){const list=sampleWorkerList();sampleBoardNames.splice(0,sampleBoardNames.length,...list.map(w=>w.name));for(const key of Object.keys(sampleBoardCards))delete sampleBoardCards[key];for(const w of list)sampleBoardCards[w.name]=w.card;return list;}
function sampleWorkerSync(source,form=sampleBoardForm){
 const list=sampleWorkerRefresh();if(source==='sl'){const raw=String(form.sl??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));form.sl=raw;const worker=list.find(w=>String(w.sl)===raw);form.ironManName=worker?.name||'';form.cardNo=worker?.card||'';}
 else{const worker=list.find(w=>w.name===form.ironManName);if(worker){form.sl=String(worker.sl);form.cardNo=worker.card;}}
 return form;
}
function sampleWorkerSelect(source,paint=true){
 sampleWorkerSync(source);
 const identity={sl:sampleBoardForm.sl||'',ironManName:sampleBoardForm.ironManName||'',cardNo:sampleBoardForm.cardNo||''};
 const row=identity.ironManName?sampleBoardRows.find(r=>r.fields.ironManName===identity.ironManName):null;
 sampleBoardForm=row?{...row.fields,...identity}:{sampleSection:sampleBoardForm.sampleSection||'',sampleNewOld:sampleBoardForm.sampleNewOld||'',...identity};
 sampleBoardEditingName=row?identity.ironManName:null;
 if(paint)for(const [key]of sampleBoardFields){const input=document.getElementById('sample-board-'+key);if(input)input.value=sampleBoardForm[key]??'';}
 return sampleBoardForm;
}
function sampleWorkerHydrate(){
 if(sampleBoardRows.length||sampleBoardBusy)return;
 const records=samplePDRecords(),date=samplePDDraft.fields.date||samplePDToday(),today=records.filter(r=>r.date===date);
 const source=today.length?today:[...new Map(records.map(r=>[r.hourlyPD.fields?.cardNo||r.hourlyPD.fields?.ironManName,r]).reverse()).values()];
 sampleBoardRows=source.filter(r=>r.hourlyPD.fields?.ironManName).map(r=>{const fields={...r.hourlyPD.fields,date};const worker=sampleWorkerList().find(w=>w.card&&w.card===fields.cardNo||w.name===fields.ironManName);if(worker){fields.ironManName=worker.name;fields.sl=String(worker.sl);fields.cardNo=worker.card;}return {id:today.length?r.id:undefined,fields,rows:today.length?samplePDComputedRows(r.hourlyPD.rows):samplePDComputedRows()};}).sort((a,b)=>Number(a.fields.sl)-Number(b.fields.sl));
}
const sampleWorkerPreviousPaper=samplePDPaper;
samplePDPaper=function(readonly=false){
 sampleWorkerRefresh();sampleWorkerHydrate();
 if(!Object.keys(sampleBoardForm).length){const used=new Set(sampleBoardRows.map(r=>r.fields.ironManName)),worker=sampleWorkerList().find(w=>!used.has(w.name));if(worker)sampleBoardForm={sl:String(worker.sl),ironManName:worker.name,cardNo:worker.card};}
 else if(sampleBoardForm.ironManName)sampleWorkerSync('name');else if(sampleBoardForm.sl)sampleWorkerSync('sl');
 if(sampleBoardForm.ironManName&&Object.keys(sampleBoardForm).every(key=>['sl','ironManName','cardNo'].includes(key)))sampleWorkerSelect('name',false);
 return sampleWorkerPreviousPaper(readonly).replace('<div class="sample-pd-details">','<div class="sample-worker-toolbar"><button type="button" data-sample-worker-manage '+(!FarnoorAccess.canAction('output','edit')?'disabled':'')+'>♙ Manage Names</button></div><div class="sample-pd-details">');
};
const sampleWorkerPreviousLoad=samplePDLoad;
samplePDLoad=function(record){sampleWorkerPreviousLoad(record);sampleBoardRows=[];sampleWorkerHydrate();const current=sampleBoardRows.find(r=>r.id===record.id);sampleBoardForm={...(current?.fields||record.hourlyPD.fields)};sampleWorkerSync('name');sampleBoardEditingName=sampleBoardForm.ironManName;};
const sampleWorkerPreviousAdd=sampleBoardAdd;
sampleBoardAdd=function(){if(sampleBoardForm.ironManName)sampleWorkerSync('name');const name=sampleBoardForm.ironManName;sampleWorkerPreviousAdd();const row=sampleBoardRows.find(r=>r.fields.ironManName===name);if(row){row.fields.workerProfile='1';row.fields.workerPreviousCard=sampleWorkerList().find(w=>w.name===name)?.previousCard||'';}};
function sampleWorkerEditRow(index){const row=sampleBoardRows[index];if(!row||sampleBoardBusy)return;sampleBoardForm={...row.fields};sampleBoardEditingName=row.fields.ironManName;renderSamplePD();document.getElementById('sample-board-buyer')?.focus();}
function sampleWorkerSaveProfile(profile,originalCard=''){
 const name=String(profile.name||'').trim(),card=String(profile.card||'').trim(),sl=Number(String(profile.sl||'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)));
 if(!name||name.length>120||!card||card.length>40||!Number.isInteger(sl)||sl<1||sl>999)throw Error('সঠিক নাম, Card No ও SL লিখুন।');
 const workers=sampleWorkerList(),original=workers.find(w=>w.card===originalCard);
 if(workers.some(w=>w!==original&&(w.name.toLocaleLowerCase()===name.toLocaleLowerCase()||w.card===card||w.sl===sl)))throw Error('এই নাম, Card No বা SL আগে থেকেই আছে।');
 const previousOverride=sampleWorkerOverrides.find(w=>w.card===originalCard);const worker={name,card,sl,previousCard:previousOverride?.previousCard||original?.card||''};sampleWorkerOverrides=sampleWorkerOverrides.filter(w=>w.card!==originalCard&&w.card!==card);sampleWorkerOverrides.push(worker);
 localStorage.setItem('farnoor-sample-workers-v1',JSON.stringify(sampleWorkerOverrides));
 for(const row of sampleBoardRows)if(original&&(row.fields.cardNo===original.card||row.fields.ironManName===original.name)){Object.assign(row.fields,{ironManName:name,cardNo:card,sl:String(sl),workerProfile:'1',workerPreviousCard:worker.previousCard});}
 sampleWorkerRefresh();sampleBoardForm={ironManName:name,cardNo:card,sl:String(sl)};sampleBoardEditingName=sampleBoardRows.some(r=>r.fields.ironManName===name)?name:null;
 return worker;
}
function sampleWorkerManage(){
 if(!FarnoorAccess.canAction('output','edit')||sampleBoardBusy)return;
 document.getElementById('sampleWorkerDialog')?.remove();const dialog=document.createElement('dialog');dialog.id='sampleWorkerDialog';
 dialog.innerHTML='<h2>Sample Man Names</h2><label>Existing Name<select data-worker-existing><option value="">New Name</option>'+sampleWorkerList().map(w=>'<option value="'+esc(w.card)+'">'+esc(w.sl+'. '+w.name)+'</option>').join('')+'</select></label><label>SL<input data-worker-sl inputmode="numeric"></label><label>Sample Man Name<input data-worker-name maxlength="120"></label><label>Card No<input data-worker-card maxlength="40"></label><p>নাম তালিকা এই ডিভাইসে থাকবে। রোতে Input দিয়ে নিচের Save চাপলে অনলাইনেও থাকবে।</p><p role="status"></p><div class="dialog-actions"><button type="button" data-worker-save>Save Name</button><button type="button" data-worker-close>Close</button></div>';
 dialog.querySelector('[data-worker-existing]').onchange=event=>{const w=sampleWorkerList().find(w=>w.card===event.target.value);for(const key of ['sl','name','card'])dialog.querySelector('[data-worker-'+key+']').value=w?.[key]??'';};
 dialog.querySelector('[data-worker-save]').onclick=()=>{try{const profile={};for(const key of ['sl','name','card'])profile[key]=dialog.querySelector('[data-worker-'+key+']').value;sampleWorkerSaveProfile(profile,dialog.querySelector('[data-worker-existing]').value);dialog.close();renderSamplePD();toast('নাম তালিকায় রাখা হয়েছে।');}catch(error){dialog.querySelector('[role="status"]').textContent=error.message;}};
 dialog.querySelector('[data-worker-close]').onclick=()=>dialog.close();dialog.addEventListener('close',()=>dialog.remove(),{once:true});document.body.append(dialog);dialog.showModal();
}
document.getElementById('main').addEventListener('click',event=>{if(activePage!==samplePDPage)return;const row=event.target.closest('[data-sample-worker-row]');if(row)sampleWorkerEditRow(Number(row.dataset.sampleWorkerRow));if(event.target.closest('[data-sample-worker-manage]'))sampleWorkerManage();});
document.getElementById('main').addEventListener('input',event=>{if(activePage!==samplePDPage||sampleBoardBusy)return;const key=event.target.dataset.sampleBoardField;if(!['sl','ironManName'].includes(key))return;sampleWorkerSelect(key==='sl'?'sl':'name');});
document.getElementById('main').addEventListener('change',event=>{if(activePage!==samplePDPage)return;if(event.target.dataset.sampleBoardChoose!==undefined){const row=sampleBoardRows[Number(event.target.dataset.sampleBoardChoose)];if(row?.fields.ironManName){sampleWorkerSync('name',row.fields);renderSamplePD();}return;}if(event.target.dataset.sampleBoardField!=='ironManName')return;sampleWorkerSelect('name');});
const sampleWorkerStyle=document.createElement('style');sampleWorkerStyle.textContent='.sample-pd-edit-links{gap:5px!important;flex-wrap:wrap!important;justify-content:flex-start!important}.sample-pd-edit-links button{font-size:11px!important;padding:5px 8px!important;min-height:27px!important;line-height:1.2!important}.sample-worker-row-name{font-size:12px;padding:4px 6px;white-space:normal}.sample-worker-toolbar{text-align:right;margin-bottom:10px}#sampleWorkerDialog{width:min(500px,90vw);border:0;border-radius:12px;padding:22px;color:#17334c}#sampleWorkerDialog label{display:grid;gap:4px;margin:10px 0}#sampleWorkerDialog input,#sampleWorkerDialog select{padding:9px;width:100%;box-sizing:border-box}#sampleWorkerDialog .dialog-actions{display:flex;justify-content:flex-end;gap:8px}#sampleWorkerDialog::backdrop{background:#071e3acc}';document.head.append(sampleWorkerStyle);
