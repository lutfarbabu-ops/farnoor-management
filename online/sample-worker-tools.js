'use strict';
const sampleWorkerDefaults=Object.values(sampleBoardSectionWorkers).flat();
const sampleWorkerDefaultCards={...samplePrintWorkerIds,...sampleBoardCards};
function sampleWorkerSection(worker){const value=String(worker.section||'').toUpperCase();return ['SAMPLE-1','SAMPLE-2'].includes(value)?value:Object.keys(sampleBoardSectionWorkers).find(k=>sampleBoardSectionWorkers[k].includes(worker.name))||'';}
let sampleWorkerOverrides=[];

try{const list=JSON.parse(localStorage.getItem('farnoor-sample-workers-v1')||'[]');if(Array.isArray(list))sampleWorkerOverrides=list.filter(w=>w&&typeof w.name==='string'&&w.name.length<=120&&typeof w.card==='string'&&w.card.length<=40&&Number.isInteger(w.sl)&&w.sl>0).slice(0,200);}catch{}
function sampleWorkerList(){
 const workers=sampleWorkerDefaults.map((name,i)=>({name,card:sampleWorkerDefaultCards[name]||'',sl:i+1,section:sampleWorkerSection({name})}));
 const merge=w=>{const index=workers.findIndex(old=>w.previousCard&&old.card===w.previousCard||w.card&&old.card===w.card||old.name===w.name);if(index<0)workers.push(w);else workers[index]=w;};
 const records=samplePDRecords().slice().sort((a,b)=>String(a.updatedAt||a.createdAt).localeCompare(String(b.updatedAt||b.createdAt)));
 for(const row of records){const f=row.hourlyPD.fields||{};if(f.workerProfile==='1'&&f.ironManName){const n=Number(f.sl);if(Number.isInteger(n)&&n>0)merge({name:f.ironManName,card:f.cardNo||sampleWorkerDefaultCards[f.ironManName]||'',sl:n,section:f.sampleSection||'',previousCard:f.workerPreviousCard||''});}}
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
 const saved=sampleBoardRows.find(row=>row.fields.ironManName===identity.ironManName&&(!sampleBoardForm.sampleNewOld||sampleBoardRowSlot(row.fields.sampleNewOld)===sampleBoardRowSlot(sampleBoardForm.sampleNewOld))&&(!sampleBoardForm.sampleSection||String(row.fields.sampleSection||'').toUpperCase()===String(sampleBoardForm.sampleSection).toUpperCase()));
 sampleBoardForm=saved?{...saved.fields,...identity}:{sampleSection:sampleBoardForm.sampleSection||'',sampleNewOld:sampleBoardForm.sampleNewOld||'',...identity};
 sampleBoardEditingName=saved?identity.ironManName:null;sampleBoardEditingRow=saved||null;
 if(paint)for(const [key]of sampleBoardFields){const input=document.getElementById('sample-board-'+key);if(input)input.value=sampleBoardForm[key]??'';}
 return sampleBoardForm;
}
function sampleWorkerHydrate(){
 if(sampleBoardRows.length||sampleBoardBusy)return;
 const records=typeof sampleDailySavedRecords==='function'?sampleDailySavedRecords():samplePDRecords();
 sampleBoardRows=records.filter(r=>r.hourlyPD.fields?.ironManName).map(r=>({id:r.id,fields:{...r.hourlyPD.fields,date:r.date},rows:samplePDComputedRows(r.hourlyPD.rows)}));
}
const sampleWorkerPreviousPaper=samplePDPaper;
samplePDPaper=function(readonly=false){
 sampleWorkerRefresh();sampleWorkerHydrate();
 return sampleWorkerPreviousPaper(readonly).replace('<div class="sample-pd-details">','<div class="sample-worker-toolbar"><button type="button" data-sample-worker-manage '+(!FarnoorAccess.canAction('output','edit')?'disabled':'')+'>♙ Manage Names</button></div><div class="sample-pd-details">');
};
const sampleWorkerPreviousLoad=samplePDLoad;
samplePDLoad=function(record){sampleWorkerPreviousLoad(record);sampleBoardRows=[];sampleWorkerHydrate();const current=sampleBoardRows.find(r=>r.id===record.id);sampleBoardForm={...(current?.fields||record.hourlyPD.fields)};sampleWorkerSync('name');sampleBoardEditingName=sampleBoardForm.ironManName;sampleBoardEditingRow=current||null;};
const sampleWorkerPreviousAdd=sampleBoardAdd;
sampleBoardAdd=function(){if(sampleBoardForm.ironManName)sampleWorkerSync('name');const name=sampleBoardForm.ironManName,row=sampleWorkerPreviousAdd();if(row&&typeof row==='object'){row.fields.workerProfile='1';row.fields.workerPreviousCard=sampleWorkerList().find(w=>w.name===name)?.previousCard||'';}return row;};
function sampleWorkerEditRow(index){const row=sampleBoardRows[index];if(!row||sampleBoardBusy)return;sampleBoardForm={...row.fields};sampleBoardEditingName=row.fields.ironManName;sampleBoardEditingRow=row;renderSamplePD();document.getElementById('sample-board-buyer')?.focus();}
function sampleWorkerSaveProfile(profile,originalCard=''){
 const name=String(profile.name||'').trim(),card=String(profile.card||'').trim(),section=String(profile.section||'').toUpperCase();
 const workers=sampleWorkerList(),original=originalCard?workers.find(w=>w.card===originalCard||w.name===originalCard):null;
 const sl=original?.sl||(profile.sl?Number(profile.sl):Math.max(0,...workers.map(w=>w.sl))+1);
 if(!name||name.length>120||!card||card.length>40||!['SAMPLE-1','SAMPLE-2'].includes(section)||!Number.isInteger(sl)||sl<1||sl>999)throw Error('Section নির্বাচন করে সঠিক নাম ও Card No লিখুন।');
 if(workers.some(w=>w!==original&&(w.name.toLocaleLowerCase()===name.toLocaleLowerCase()||w.card===card||w.sl===sl)))throw Error('এই নাম বা Card No আগে থেকেই আছে।');
 const previousOverride=sampleWorkerOverrides.find(w=>w.card===originalCard||w.name===originalCard);const worker={name,card,sl,section,previousCard:previousOverride?.previousCard||original?.card||''};sampleWorkerOverrides=sampleWorkerOverrides.filter(w=>w.name!==original?.name&&w.card!==originalCard&&w.card!==card);sampleWorkerOverrides.push(worker);
 localStorage.setItem('farnoor-sample-workers-v1',JSON.stringify(sampleWorkerOverrides));
 for(const row of sampleBoardRows)if(original&&(original.card&&row.fields.cardNo===original.card||row.fields.ironManName===original.name)){Object.assign(row.fields,{ironManName:name,cardNo:card,sl:String(sl),sampleSection:section,workerProfile:'1',workerPreviousCard:worker.previousCard});}
 sampleWorkerRefresh();sampleBoardForm={ironManName:name,cardNo:card,sl:String(sl),sampleSection:section};sampleBoardEditingName=sampleBoardRows.some(r=>r.fields.ironManName===name)?name:null;
 return worker;
}
function sampleWorkerManage(){
 if(!FarnoorAccess.canAction('output','edit')||sampleBoardBusy)return;
 document.getElementById('sampleWorkerDialog')?.remove();const dialog=document.createElement('dialog');dialog.id='sampleWorkerDialog';
 dialog.innerHTML='<h2>Sample Man Names</h2><label>Existing Name<select data-worker-existing><option value="">New Name</option>'+sampleWorkerList().map(w=>'<option value="'+esc(w.name)+'">'+esc(w.name)+'</option>').join('')+'</select></label><label>Section<select data-worker-section><option value="">Select Section</option><option value="SAMPLE-1">Sample-1</option><option value="SAMPLE-2">Sample-2</option></select></label><label>Sample Man Name<input data-worker-name maxlength="120"></label><label>Card No<input data-worker-card maxlength="40"></label><p>নাম তালিকা এই ডিভাইসে থাকবে। ফরমের Save চাপলে অনলাইনেও থাকবে।</p><p role="status"></p><div class="dialog-actions"><button type="button" data-worker-save>Save Name</button><button type="button" data-worker-close>Close</button></div>';
 dialog.querySelector('[data-worker-existing]').onchange=event=>{const w=sampleWorkerList().find(w=>w.name===event.target.value);for(const key of ['name','card'])dialog.querySelector('[data-worker-'+key+']').value=w?.[key]??'';dialog.querySelector('[data-worker-section]').value=w?sampleWorkerSection(w):'';};
 dialog.querySelector('[data-worker-save]').onclick=()=>{try{const profile={};for(const key of ['section','name','card'])profile[key]=dialog.querySelector('[data-worker-'+key+']').value;sampleWorkerSaveProfile(profile,dialog.querySelector('[data-worker-existing]').value);dialog.close();renderSamplePD();toast('নাম তালিকায় রাখা হয়েছে।');}catch(error){dialog.querySelector('[role="status"]').textContent=error.message;}};
 dialog.querySelector('[data-worker-close]').onclick=()=>dialog.close();dialog.addEventListener('close',()=>dialog.remove(),{once:true});document.body.append(dialog);dialog.showModal();
}
document.getElementById('main').addEventListener('click',event=>{if(activePage!==samplePDPage)return;const row=event.target.closest('[data-sample-worker-row]');if(row)sampleWorkerEditRow(Number(row.dataset.sampleWorkerRow));if(event.target.closest('[data-sample-worker-manage]'))sampleWorkerManage();});
document.getElementById('main').addEventListener('input',event=>{if(activePage!==samplePDPage||sampleBoardBusy)return;const key=event.target.dataset.sampleBoardField;if(!['sl','ironManName'].includes(key))return;sampleWorkerSelect(key==='sl'?'sl':'name');});
document.getElementById('main').addEventListener('change',event=>{if(activePage!==samplePDPage)return;if(event.target.dataset.sampleBoardChoose!==undefined){const row=sampleBoardRows[Number(event.target.dataset.sampleBoardChoose)];if(row?.fields.ironManName){sampleWorkerSync('name',row.fields);renderSamplePD();}return;}if(event.target.dataset.sampleBoardField!=='ironManName')return;sampleWorkerSelect('name');});
const sampleWorkerStyle=document.createElement('style');sampleWorkerStyle.textContent='.sample-pd-edit-links{gap:5px!important;flex-wrap:wrap!important;justify-content:flex-start!important}.sample-pd-edit-links button{font-size:11px!important;padding:5px 8px!important;min-height:27px!important;line-height:1.2!important}.sample-worker-row-name{font-size:12px;padding:4px 6px;white-space:normal}.sample-worker-toolbar{text-align:right;margin-bottom:10px}#sampleWorkerDialog{width:min(500px,90vw);border:0;border-radius:12px;padding:22px;color:#17334c}#sampleWorkerDialog label{display:grid;gap:4px;margin:10px 0}#sampleWorkerDialog input,#sampleWorkerDialog select{padding:9px;width:100%;box-sizing:border-box}#sampleWorkerDialog .dialog-actions{display:flex;justify-content:flex-end;gap:8px}#sampleWorkerDialog::backdrop{background:#071e3acc}';document.head.append(sampleWorkerStyle);

document.getElementById('main').addEventListener('change',event=>{if(activePage!==samplePDPage||sampleBoardBusy||event.target.dataset.sampleBoardField!=='sampleNewOld')return;sampleBoardForm.sampleNewOld=sampleBoardRowSlot(event.target.value);const row=sampleBoardRows.find(row=>sampleBoardSameSlot(row.fields,sampleBoardForm));if(row){sampleBoardForm={...row.fields,sampleNewOld:sampleBoardRowSlot(row.fields.sampleNewOld)};sampleBoardEditingRow=row;sampleBoardEditingName=row.fields.ironManName;}else{sampleBoardEditingRow=null;sampleBoardEditingName=null;delete sampleBoardForm.date;}renderSamplePD();});
