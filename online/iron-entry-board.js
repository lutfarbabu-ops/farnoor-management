'use strict';
const ironBoardNames=['Md. Sohel Rana','Md. Liton','Md. Muslim Uddin','Rezakul Islam','Aulad Hossan','Md. Abul Kalam','Md. Salim','Md. Enamul Haque','Md. Sahidul Islam Salim','Md. Antor','Ridy Ahmed'];
const ironBoardCards={'Md. Sohel Rana':'1074','Md. Liton':'1094','Md. Muslim Uddin':'1095','Rezakul Islam':'1103','Aulad Hossan':'1108','Md. Abul Kalam':'1123','Md. Salim':'1174','Md. Enamul Haque':'1186','Md. Sahidul Islam Salim':'1221','Md. Antor':'1272','Ridy Ahmed':'1283'};
const ironBoardFields=[['sl','SL'],['ironManName','Iron Man Name'],['workingPlan','Working Hour'],['buyer','Buyer'],['style','Style'],['item','Item'],['hourlyTarget','Target Hour'],['remarks','Remarks']];
let ironBoardRows=[],ironBoardForm={},ironBoardBusy=false,ironBoardEditingName=null;
const ironBoardHours=['8-9 AM','9-10AM','10-11AM','11-12 AM','12.-1 PM','2.-3 PM','3.-4 PM','4.-5 PM','5.-6 PM','6.-7 PM'];
function ironBoardSuggestions(key,query){
 const q=String(query||'').trim().toLocaleLowerCase();if(q.length<2)return [];
 return [...new Set([...ironPDRecords().map(r=>r.hourlyPD.fields?.[key]),...ironBoardRows.map(r=>r.fields[key])].map(v=>String(v??'').trim()).filter(Boolean))].filter(v=>v.toLocaleLowerCase().includes(q));
}
function ironBoardInput(value,attrs,readonly=false){return '<input '+attrs+' value="'+esc(value??'')+'" '+(readonly?'readonly':'')+' autocomplete="off">';}
function ironBoardTotal(row){const h=ironPDNumber(row.fields.workingPlan),t=ironPDNumber(row.fields.hourlyTarget);return h===null||t===null?'':h*t;}
ironPDPaper=function(readonly=false){
 const edit=FarnoorAccess.canAction('output','edit')&&!readonly;
 return '<section class="iron-pd-paper iron-board"><h2>IRON WISE HOURLY PRODUCTION</h2><div class="iron-pd-details">'+ironBoardFields.map(([key,label])=>'<div class="iron-pd-field"><label for="iron-board-'+key+'">'+label+'</label>'+(key==='ironManName'?'<select id="iron-board-'+key+'" data-iron-board-field="'+key+'" '+(!edit?'disabled':'')+'><option value="">Select Iron Man Name</option>'+[...new Set([...ironBoardNames,ironBoardForm.ironManName].filter(Boolean))].map(name=>'<option '+(name===ironBoardForm.ironManName?'selected ':'')+'value="'+esc(name)+'">'+esc(name)+'</option>').join('')+'</select>':ironBoardInput(ironBoardForm[key]??(key==='sl'?ironBoardRows.length+1:''),'id="iron-board-'+key+'" data-iron-board-field="'+key+'" maxlength="300"'+(['sl','workingPlan','hourlyTarget'].includes(key)?' inputmode="decimal"':'')+(['buyer','style','item','hourlyTarget'].includes(key)?' list="iron-board-options-'+key+'"':''),!edit))+'</div>').join('')+'</div>'+['buyer','style','item','hourlyTarget'].map(key=>'<datalist id="iron-board-options-'+key+'">'+ironBoardSuggestions(key,ironBoardForm[key]).map(v=>'<option value="'+esc(v)+'"></option>').join('')+'</datalist>').join('')+'<div class="iron-pd-save-actions"><button type="button" data-iron-board-add '+(!edit||ironBoardBusy?'disabled':'')+'>Input</button></div><div class="iron-pd-table-wrap"><table class="iron-pd-table iron-board-table"><thead><tr>'+['SL.','IRON MAN NAME','CARD NO','WORKING HOUR','BUYER','ITEM','TOTAL TARGET','TARGET/Hrs',...ironBoardHours].map(t=>'<th scope="col">'+t+'</th>').join('')+'</tr></thead><tbody>'+ironBoardRows.map((r,i)=>'<tr data-iron-board-index="'+i+'"><td>'+esc(r.fields.sl||i+1)+'</td><td>'+(r.fields.ironManName?'<button type="button" class="iron-worker-row-name" data-iron-worker-row="'+i+'">'+esc(r.fields.ironManName)+'</button>':'<select data-iron-board-choose="'+i+'" aria-label="Iron Man Name row '+(i+1)+'" '+(!edit?'disabled':'')+'><option value="">Select Iron Man Name</option>'+ironBoardNames.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('')+'</select>')+'</td><td>'+ironBoardInput(r.fields.cardNo,'data-iron-board-card="'+i+'" aria-label="Card No '+esc(r.fields.ironManName)+'" maxlength="120"',!edit||Object.hasOwn(ironBoardCards,r.fields.ironManName))+'</td><td>'+esc(r.fields.workingPlan)+'</td><td>'+esc(r.fields.buyer)+'</td><td>'+esc(r.fields.item)+'</td><td><output>'+esc(ironBoardTotal(r))+'</output></td><td>'+esc(r.fields.hourlyTarget)+'</td>'+ironBoardHours.map((hour,h)=>'<td>'+ironBoardInput(r.rows[h][3],'type="number" min="0" step="1" data-iron-board-hour="'+h+'" data-iron-board-worker="'+i+'" aria-label="'+esc(r.fields.ironManName)+' '+hour+'"',!edit)+'</td>').join('')+'</tr>').join('')+(!ironBoardRows.length?'<tr><td colspan="18">Input চাপলে এখানে রো যোগ হবে।</td></tr>':'')+'</tbody><tfoot><tr><th colspan="6">Total</th><td>'+esc(ironPDSum(ironBoardRows.map(ironBoardTotal)))+'</td><td>'+esc(ironPDSum(ironBoardRows.map(r=>r.fields.hourlyTarget)))+'</td>'+ironBoardHours.map((_,h)=>'<td><output data-iron-board-sum="'+h+'">'+esc(ironPDSum(ironBoardRows.map(r=>r.rows[h][3])))+'</output></td>').join('')+'</tr></tfoot></table></div><div class="iron-pd-save-actions"><button type="button" data-iron-board-save '+(!edit||ironBoardBusy||!ironBoardRows.length?'disabled':'')+'>'+(ironBoardBusy?'Saving…':'Save')+'</button></div></section>';
};
function ironBoardAdd(){
 if(ironBoardBusy||!FarnoorAccess.canAction('output','edit'))return;
 try{
  const f={ironManName:'',...ironBoardForm};if(f.ironManName&&!ironBoardNames.includes(f.ironManName)&&!ironBoardRows.some(r=>r.fields.ironManName===f.ironManName))throw Error('Iron Man Name নির্বাচন করুন।');
  for(const key of ['sl','workingPlan','hourlyTarget']){const raw=f[key]??'';if(key!=='sl'&&String(raw).trim()===''){f[key]='';continue;}const n=ironPDNumber(key==='sl'&&String(raw).trim()===''?ironBoardRows.length+1:raw);if(n===null||!Number.isFinite(n)||n<0||(key==='sl'&&(!Number.isInteger(n)||n<1)))throw Error(key==='sl'?'সঠিক SL লিখুন।':'Working Hour ও Target Hour-এ সঠিক সংখ্যা লিখুন।');f[key]=String(n);}
  const staged=f.ironManName?ironBoardRows.find(r=>r.fields.ironManName===f.ironManName):null,date=staged?.fields.date||ironPDDraft.fields.date||ironPDToday();
  const saved=f.ironManName?ironPDRecords().find(r=>r.date===date&&r.hourlyPD.fields?.ironManName===f.ironManName):null;
  if(staged&&ironBoardEditingName!==f.ironManName)return toast('এই নামের এন্ট্রি ইতোমধ্যে আছে। একই নামে দ্বিতীয় রো যোগ করা যাবে না।');
  const previous=staged||(saved?{id:saved.id,fields:saved.hourlyPD.fields,rows:saved.hourlyPD.rows}:null);
  const row={id:previous?.id,fields:{...previous?.fields,...f,cardNo:ironBoardCards[f.ironManName]??previous?.fields.cardNo??f.cardNo??'',date,section:previous?.fields.section||f.ironManName,tableNo:previous?.fields.section||f.ironManName},rows:ironPDComputedRows(previous?.rows)};
  if(staged)ironBoardRows[ironBoardRows.indexOf(staged)]=row;else ironBoardRows.push(row);
  ironBoardEditingName=null;ironBoardForm={sl:String(ironBoardRows.length+1)};renderIronPD();
 }catch(error){toast(error.message);}
}
const ironBoardOriginalLoad=ironPDLoad;
ironPDLoad=function(record){ironBoardOriginalLoad(record);ironPDDraft.fields.cardNo=ironBoardCards[ironPDDraft.fields.ironManName]??ironPDDraft.fields.cardNo??'';ironBoardRows=[{id:record.id,fields:structuredClone(ironPDDraft.fields),rows:ironPDComputedRows(record.hourlyPD.rows)}];ironBoardForm={...ironPDDraft.fields,sl:ironPDDraft.fields.sl||'1'};};
const ironBoardOriginalSave=saveIronPD;
async function ironBoardSave(){
 if(ironBoardBusy||!ironBoardRows.length||!FarnoorAccess.canAction('output','edit'))return;
 if(ironBoardRows.some(row=>!row.fields.ironManName))return toast('সেভ করার আগে প্রতিটি রোতে Iron Man Name নির্বাচন করুন।');if(new Set(ironBoardRows.map(row=>row.fields.ironManName)).size!==ironBoardRows.length)return toast('একই নাম একাধিক রোতে আছে। নামগুলো আলাদা করুন।');
 ironBoardBusy=true;let complete=true;const formBefore=structuredClone(ironBoardForm);
 try{for(const row of ironBoardRows){row.fields.cardNo=ironBoardCards[row.fields.ironManName]??row.fields.cardNo??'';ironPDDraft.fields={...row.fields};ironPDDraft.rows=ironPDComputedRows(row.rows);for(const key of ['targets','differences','achievements'])ironPDDraft[key]=Array(5).fill('');ironPDEditId=row.id||null;ironPDPendingId=null;
   if(!await ironBoardOriginalSave()){complete=false;break;}row.id=ironPDEditId;
  }
 }finally{ironBoardBusy=false;ironBoardForm=complete?{}:formBefore;ironBoardEditingName=null;ironPDView='new-input';renderIronPD();}
}
const ironBoardMain=document.getElementById('main');
ironBoardMain.addEventListener('click',event=>{if(activePage===ironPDPage&&ironPDEditId&&event.target.closest('[data-iron-pd-view="new-input"]')){ironBoardRows=[];ironBoardForm={};}},true);
ironBoardMain.addEventListener('click',event=>{if(activePage!==ironPDPage)return;if(event.target.closest('[data-iron-board-add]'))ironBoardAdd();if(event.target.closest('[data-iron-board-save]'))void ironBoardSave();});
ironBoardMain.addEventListener('input',event=>{
 if(activePage!==ironPDPage||ironBoardBusy)return;const node=event.target,key=node.dataset.ironBoardField;
 if(key){ironBoardForm[key]=node.value;const list=document.getElementById('iron-board-options-'+key);if(list)list.innerHTML=ironBoardSuggestions(key,node.value).map(v=>'<option value="'+esc(v)+'"></option>').join('');}
 if(node.dataset.ironBoardCard!==undefined)ironBoardRows[Number(node.dataset.ironBoardCard)].fields.cardNo=node.value;
 if(node.dataset.ironBoardHour!==undefined){const hour=Number(node.dataset.ironBoardHour),worker=Number(node.dataset.ironBoardWorker);ironBoardRows[worker].rows[hour][3]=node.value;document.querySelector('[data-iron-board-sum="'+hour+'"]').textContent=String(ironPDSum(ironBoardRows.map(r=>r.rows[hour][3])));}
});
ironBoardMain.addEventListener('change',event=>{if(activePage===ironPDPage&&!ironBoardBusy&&event.target.dataset.ironBoardChoose!==undefined){const row=ironBoardRows[Number(event.target.dataset.ironBoardChoose)],name=event.target.value;if(!ironBoardNames.includes(name))return;if(ironBoardRows.some(other=>other!==row&&other.fields.ironManName===name)){event.target.value='';toast('এই নামের এন্ট্রি ইতোমধ্যে আছে। অন্য নাম নির্বাচন করুন।');return;}row.fields.ironManName=name;row.fields.cardNo=ironBoardCards[name];if(!row.id)row.fields.section=row.fields.tableNo=name;renderIronPD();return;}if(activePage===ironPDPage&&event.target.dataset.ironBoardField)ironBoardForm[event.target.dataset.ironBoardField]=event.target.value;});
ironBoardMain.addEventListener('keydown',event=>{
 if(activePage!==ironPDPage||ironPDView!=='new-input'||event.key!=='Enter'||event.isComposing||event.repeat||ironBoardBusy)return;
 const target=event.target;if(target.matches('[data-iron-board-add],[data-iron-board-save]'))return;
 if(!target.matches('[data-iron-board-field],[data-iron-board-card],[data-iron-board-hour]'))return;event.preventDefault();
 const selector=target.hasAttribute('data-iron-board-field')?'[data-iron-board-field]':'[data-iron-board-card],[data-iron-board-hour]',fields=[...document.querySelectorAll('.iron-board '+selector)],index=fields.indexOf(target);
 (fields[index+1]||document.querySelector(target.hasAttribute('data-iron-board-field')?'[data-iron-board-add]':'[data-iron-board-save]'))?.focus();
});
const ironBoardStyle=document.createElement('style');ironBoardStyle.textContent='.iron-board .iron-board-table{min-width:1650px}.iron-board .iron-board-table th{white-space:normal;min-width:72px}.iron-board .iron-board-table th:nth-child(2){min-width:165px}.iron-board .iron-board-table input{min-width:65px;width:100%;box-sizing:border-box}.iron-board .iron-board-table td:nth-child(2){white-space:normal;font-weight:700}.iron-board select{width:100%;min-height:38px;padding:8px;border:1px solid #b4c9e4;border-radius:6px;background:#f6faff;color:#163a59}.iron-board .iron-pd-save-actions{justify-content:flex-end}';document.head.append(ironBoardStyle);
