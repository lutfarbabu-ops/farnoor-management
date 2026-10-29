'use strict';
const ironWorkerDefaults=['Ridy Ahmed','Md. Abul Kalam','Md. Salim','Md. Sohel Rana','Rezakul Islam','Md. Muslim Uddin','Aulad Hossan','Md. Liton','Md. Antor','Md. Enamul Haque','Md. Sahidul Islam Salim'];
const ironWorkerDefaultCards={...ironBoardCards};
let ironWorkerOverrides=[];
try{const list=JSON.parse(localStorage.getItem('farnoor-iron-workers-v1')||'[]');if(Array.isArray(list))ironWorkerOverrides=list.filter(w=>w&&typeof w.name==='string'&&w.name.length<=120&&typeof w.card==='string'&&w.card.length<=40&&Number.isInteger(w.sl)&&w.sl>0).slice(0,200);}catch{}
function ironWorkerList(){
 const workers=ironWorkerDefaults.map((name,i)=>({name,card:ironWorkerDefaultCards[name]||'',sl:i+1}));
 const merge=w=>{const index=workers.findIndex(old=>w.previousCard&&old.card===w.previousCard||w.card&&old.card===w.card||old.name===w.name);if(index<0)workers.push(w);else workers[index]=w;};
 const records=ironPDRecords().slice().sort((a,b)=>String(a.updatedAt||a.createdAt).localeCompare(String(b.updatedAt||b.createdAt)));
 for(const row of records){const f=row.hourlyPD.fields||{};if(f.workerProfile==='1'&&f.ironManName){const n=Number(f.sl);if(Number.isInteger(n)&&n>0)merge({name:f.ironManName,card:f.cardNo||'',sl:n,previousCard:f.workerPreviousCard||''});}}
 for(const w of ironWorkerOverrides)merge({...w});
 return workers.sort((a,b)=>a.sl-b.sl);
}
function ironWorkerRefresh(){const list=ironWorkerList();ironBoardNames.splice(0,ironBoardNames.length,...list.map(w=>w.name));for(const key of Object.keys(ironBoardCards))delete ironBoardCards[key];for(const w of list)ironBoardCards[w.name]=w.card;return list;}
function ironWorkerSync(source,form=ironBoardForm){
 const list=ironWorkerRefresh();if(source==='sl'){const raw=String(form.sl??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));form.sl=raw;const worker=list.find(w=>String(w.sl)===raw);form.ironManName=worker?.name||'';form.cardNo=worker?.card||'';}
 else{const worker=list.find(w=>w.name===form.ironManName);if(worker){form.sl=String(worker.sl);form.cardNo=worker.card;}}
 return form;
}
function ironWorkerHydrate(){
 if(ironBoardRows.length||ironBoardBusy)return;
 const records=ironPDRecords(),date=ironPDDraft.fields.date||ironPDToday(),today=records.filter(r=>r.date===date);
 const source=today.length?today:[...new Map(records.map(r=>[r.hourlyPD.fields?.cardNo||r.hourlyPD.fields?.ironManName,r]).reverse()).values()];
 ironBoardRows=source.filter(r=>r.hourlyPD.fields?.ironManName).map(r=>{const fields={...r.hourlyPD.fields,date};const worker=ironWorkerList().find(w=>w.card&&w.card===fields.cardNo||w.name===fields.ironManName);if(worker){fields.ironManName=worker.name;fields.sl=String(worker.sl);fields.cardNo=worker.card;}return {id:today.length?r.id:undefined,fields,rows:today.length?ironPDComputedRows(r.hourlyPD.rows):ironPDComputedRows()};}).sort((a,b)=>Number(a.fields.sl)-Number(b.fields.sl));
}
const ironWorkerPreviousPaper=ironPDPaper;
ironPDPaper=function(readonly=false){
 ironWorkerRefresh();ironWorkerHydrate();
 if(!Object.keys(ironBoardForm).length){const used=new Set(ironBoardRows.map(r=>r.fields.ironManName)),worker=ironWorkerList().find(w=>!used.has(w.name));if(worker)ironBoardForm={sl:String(worker.sl),ironManName:worker.name,cardNo:worker.card};}
 else if(ironBoardForm.ironManName)ironWorkerSync('name');else if(ironBoardForm.sl)ironWorkerSync('sl');
 return ironWorkerPreviousPaper(readonly).replace('<div class="iron-pd-details">','<div class="iron-worker-toolbar"><button type="button" data-iron-worker-manage '+(!FarnoorAccess.canAction('output','edit')?'disabled':'')+'>♙ Manage Names</button></div><div class="iron-pd-details">');
};
const ironWorkerPreviousLoad=ironPDLoad;
ironPDLoad=function(record){ironWorkerPreviousLoad(record);ironBoardRows=[];ironWorkerHydrate();const current=ironBoardRows.find(r=>r.id===record.id);ironBoardForm={...(current?.fields||record.hourlyPD.fields)};ironWorkerSync('name');ironBoardEditingName=ironBoardForm.ironManName;};
const ironWorkerPreviousAdd=ironBoardAdd;
ironBoardAdd=function(){if(ironBoardForm.ironManName)ironWorkerSync('name');const name=ironBoardForm.ironManName;ironWorkerPreviousAdd();const row=ironBoardRows.find(r=>r.fields.ironManName===name);if(row){row.fields.workerProfile='1';row.fields.workerPreviousCard=ironWorkerList().find(w=>w.name===name)?.previousCard||'';}};
function ironWorkerEditRow(index){const row=ironBoardRows[index];if(!row||ironBoardBusy)return;ironBoardForm={...row.fields};ironBoardEditingName=row.fields.ironManName;renderIronPD();document.getElementById('iron-board-workingPlan')?.focus();}
function ironWorkerSaveProfile(profile,originalCard=''){
 const name=String(profile.name||'').trim(),card=String(profile.card||'').trim(),sl=Number(String(profile.sl||'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)));
 if(!name||name.length>120||!card||card.length>40||!Number.isInteger(sl)||sl<1||sl>999)throw Error('সঠিক নাম, Card No ও SL লিখুন।');
 const workers=ironWorkerList(),original=workers.find(w=>w.card===originalCard);
 if(workers.some(w=>w!==original&&(w.name.toLocaleLowerCase()===name.toLocaleLowerCase()||w.card===card||w.sl===sl)))throw Error('এই নাম, Card No বা SL আগে থেকেই আছে।');
 const previousOverride=ironWorkerOverrides.find(w=>w.card===originalCard);const worker={name,card,sl,previousCard:previousOverride?.previousCard||original?.card||''};ironWorkerOverrides=ironWorkerOverrides.filter(w=>w.card!==originalCard&&w.card!==card);ironWorkerOverrides.push(worker);
 localStorage.setItem('farnoor-iron-workers-v1',JSON.stringify(ironWorkerOverrides));
 for(const row of ironBoardRows)if(original&&(row.fields.cardNo===original.card||row.fields.ironManName===original.name)){Object.assign(row.fields,{ironManName:name,cardNo:card,sl:String(sl),workerProfile:'1',workerPreviousCard:worker.previousCard});}
 ironWorkerRefresh();ironBoardForm={ironManName:name,cardNo:card,sl:String(sl)};ironBoardEditingName=ironBoardRows.some(r=>r.fields.ironManName===name)?name:null;
 return worker;
}
function ironWorkerManage(){
 if(!FarnoorAccess.canAction('output','edit')||ironBoardBusy)return;
 document.getElementById('ironWorkerDialog')?.remove();const dialog=document.createElement('dialog');dialog.id='ironWorkerDialog';
 dialog.innerHTML='<h2>Iron Man Names</h2><label>Existing Name<select data-worker-existing><option value="">New Name</option>'+ironWorkerList().map(w=>'<option value="'+esc(w.card)+'">'+esc(w.sl+'. '+w.name)+'</option>').join('')+'</select></label><label>SL<input data-worker-sl inputmode="numeric"></label><label>Iron Man Name<input data-worker-name maxlength="120"></label><label>Card No<input data-worker-card maxlength="40"></label><p>নাম তালিকা এই ডিভাইসে থাকবে। রোতে Input দিয়ে নিচের Save চাপলে অনলাইনেও থাকবে।</p><p role="status"></p><div class="dialog-actions"><button type="button" data-worker-save>Save Name</button><button type="button" data-worker-close>Close</button></div>';
 dialog.querySelector('[data-worker-existing]').onchange=event=>{const w=ironWorkerList().find(w=>w.card===event.target.value);for(const key of ['sl','name','card'])dialog.querySelector('[data-worker-'+key+']').value=w?.[key]??'';};
 dialog.querySelector('[data-worker-save]').onclick=()=>{try{const profile={};for(const key of ['sl','name','card'])profile[key]=dialog.querySelector('[data-worker-'+key+']').value;ironWorkerSaveProfile(profile,dialog.querySelector('[data-worker-existing]').value);dialog.close();renderIronPD();toast('নাম তালিকায় রাখা হয়েছে।');}catch(error){dialog.querySelector('[role="status"]').textContent=error.message;}};
 dialog.querySelector('[data-worker-close]').onclick=()=>dialog.close();dialog.addEventListener('close',()=>dialog.remove(),{once:true});document.body.append(dialog);dialog.showModal();
}
document.getElementById('main').addEventListener('click',event=>{if(activePage!==ironPDPage)return;const row=event.target.closest('[data-iron-worker-row]');if(row)ironWorkerEditRow(Number(row.dataset.ironWorkerRow));if(event.target.closest('[data-iron-worker-manage]'))ironWorkerManage();});
document.getElementById('main').addEventListener('input',event=>{if(activePage!==ironPDPage||ironBoardBusy)return;const key=event.target.dataset.ironBoardField;if(!['sl','ironManName'].includes(key))return;ironWorkerSync(key==='sl'?'sl':'name');const name=document.getElementById('iron-board-ironManName'),sl=document.getElementById('iron-board-sl');if(name)name.value=ironBoardForm.ironManName||'';if(sl)sl.value=ironBoardForm.sl||'';});
document.getElementById('main').addEventListener('change',event=>{if(activePage!==ironPDPage)return;if(event.target.dataset.ironBoardChoose!==undefined){const row=ironBoardRows[Number(event.target.dataset.ironBoardChoose)];if(row?.fields.ironManName){ironWorkerSync('name',row.fields);renderIronPD();}return;}if(event.target.dataset.ironBoardField!=='ironManName')return;ironWorkerSync('name');const sl=document.getElementById('iron-board-sl');if(sl)sl.value=ironBoardForm.sl||'';});
const ironWorkerStyle=document.createElement('style');ironWorkerStyle.textContent='.iron-pd-edit-links{gap:5px!important;flex-wrap:wrap!important;justify-content:flex-start!important}.iron-pd-edit-links button{font-size:11px!important;padding:5px 8px!important;min-height:27px!important;line-height:1.2!important}.iron-worker-row-name{font-size:12px;padding:4px 6px;white-space:normal}.iron-worker-toolbar{text-align:right;margin-bottom:10px}#ironWorkerDialog{width:min(500px,90vw);border:0;border-radius:12px;padding:22px;color:#17334c}#ironWorkerDialog label{display:grid;gap:4px;margin:10px 0}#ironWorkerDialog input,#ironWorkerDialog select{padding:9px;width:100%;box-sizing:border-box}#ironWorkerDialog .dialog-actions{display:flex;justify-content:flex-end;gap:8px}#ironWorkerDialog::backdrop{background:#071e3acc}';document.head.append(ironWorkerStyle);
