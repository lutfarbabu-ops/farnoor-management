'use strict';
const sampleBoardSectionWorkers={'SAMPLE-1':['Md. Saidul Islam','Sha-Alam (Boro)','Md. Shahalam (Shoto)'],'SAMPLE-2':['Md. Hafiz','Sala Uddin','Md. Liton Hossain']};
const sampleBoardNames=Object.values(sampleBoardSectionWorkers).flat();
const sampleBoardCards={};
function sampleBoardNamesForSection(section){const key=String(section||'').toUpperCase();if(!['SAMPLE-1','SAMPLE-2'].includes(key))return [];return typeof sampleWorkerList==='function'?sampleWorkerList().filter(w=>sampleWorkerSection(w)===key).map(w=>w.name):sampleBoardSectionWorkers[key]||[];}
function sampleBoardDateValue(value){const v=String(value||'');return /^\d{2}\/\d{2}\/\d{4}$/.test(v)?v.split('/').reverse().join('-'):v;}
function sampleBoardTimeValue(value){const v=String(value||'').trim(),m=v.match(/^(\d{1,2})[:.](\d{2})(?:\s*(AM|PM))?$/i);if(!m)return '';let h=Number(m[1]);if(m[3])h=h%12+(/PM/i.test(m[3])?12:0);return String(h).padStart(2,'0')+':'+m[2];}
function sampleBoardFieldValue(key,value){return ['sampleStartDate','sampleEndDate'].includes(key)&&/^\d{4}-\d{2}-\d{2}$/.test(value)?value.split('-').reverse().join('/'):value;}
function sampleBoardRowSlot(value){const match=String(value||'').trim().match(/^(?:Row|New)([1-5])$/i);return match?'Row'+match[1]:/^(New|Old)$/i.test(String(value||'').trim())?'Row1':String(value||'');}
function sampleBoardSameSlot(a,b){return String(a.ironManName||'').trim().toLowerCase()===String(b.ironManName||'').trim().toLowerCase()&&(sampleBoardRowSlot(a.sampleNewOld)||'Row1')===(sampleBoardRowSlot(b.sampleNewOld)||'Row1')&&(!a.sampleSection||!b.sampleSection||a.sampleSection.toUpperCase()===b.sampleSection.toUpperCase());}
function sampleBoardStorageSection(fields){const slot=sampleBoardRowSlot(fields.sampleNewOld);return /^Row[1-5]$/.test(slot)?'Sample|'+fields.sampleSection+'|'+(fields.cardNo||fields.ironManName)+'|'+slot:fields.ironManName;}
function sampleBoardFieldControl(key,label,edit){
 const value=key==='sampleNewOld'?sampleBoardRowSlot(sampleBoardForm[key]):sampleBoardForm[key]??'',attrs='id="sample-board-'+key+'" data-sample-board-field="'+key+'"';
 if(['sampleSection','sampleNewOld','ironManName'].includes(key)){
  let options=key==='sampleSection'?['Sample-1','Sample-2']:key==='sampleNewOld'?['Row1','Row2','Row3','Row4','Row5']:sampleBoardNamesForSection(sampleBoardForm.sampleSection);
  if(key==='ironManName'&&sampleBoardEditingName===value&&!options.includes(value))options=[...options,value];
  return '<select '+attrs+' '+(!edit?'disabled':'')+'><option value="">Select '+label+'</option>'+options.map(v=>'<option value="'+esc(v)+'" '+(v.toLowerCase()===String(value).toLowerCase()?'selected':'')+'>'+esc(v)+'</option>').join('')+'</select>';
 }
 const date=['sampleStartDate','sampleEndDate'].includes(key),time=['sampleStartTime','sampleEndTime'].includes(key);
 return sampleBoardInput(date?sampleBoardDateValue(value):time?sampleBoardTimeValue(value):value,attrs+' type="'+(date?'date':time?'time':'text')+'" maxlength="300"'+(['sampleQty','sampleSizeQty','sampleComplete'].includes(key)?' inputmode="decimal"':'')+(['buyer','style','item'].includes(key)?' list="sample-board-options-'+key+'"':''),!edit);
}
const sampleBoardFields=[['sampleSection','Section'],['sampleNewOld','Row'],['ironManName','Sample Man Name'],['buyer','Buyer'],['style','Style'],['item','Item'],['sampleQty','QTY'],['sampleSizeQty','Size QTY'],['sampleStartDate','Input Date'],['sampleStartTime','Start Time'],['sampleEndDate','End Date'],['sampleEndTime','End Time'],['sampleComplete','Complete Sample'],['remarks','Remarks']];
let sampleBoardRows=[],sampleBoardForm={},sampleBoardBusy=false,sampleBoardEditingName=null,sampleBoardEditingRow=null;
const sampleBoardHours=['8-9 AM','9-10AM','10-11AM','11-12 AM','12.-1 PM','2.-3 PM','3.-4 PM','4.-5 PM','5.-6 PM','6.-7 PM'];
function sampleBoardSuggestions(key,query){
 const q=String(query||'').trim().toLocaleLowerCase();if(q.length<2)return [];
 return [...new Set([...samplePDRecords().map(r=>r.hourlyPD.fields?.[key]),...sampleBoardRows.map(r=>r.fields[key])].map(v=>String(v??'').trim()).filter(Boolean))].filter(v=>v.toLocaleLowerCase().includes(q));
}
function sampleBoardInput(value,attrs,readonly=false){return '<input '+attrs+' value="'+esc(value??'')+'" '+(readonly?'readonly':'')+' autocomplete="off">';}
function sampleBoardTotal(row){const h=samplePDNumber(row.fields.workingPlan),t=samplePDNumber(row.fields.hourlyTarget);return h===null||t===null?'':h*t;}
function sampleBoardTable(edit){
 const columns=['Section','Row','Sample Man Name','Buyer','Style','Item','QTY','Size QTY','Input Date','Start Time','End Date','End Time','Complete Sample','Remarks'];
 const cell=value=>'<td>'+esc(value??'')+'</td>';
 return '<div class="sample-pd-table-wrap"><table class="sample-pd-table sample-board-table"><thead><tr>'+columns.map(label=>'<th scope="col">'+label+'</th>').join('')+'</tr></thead><tbody>'+sampleBoardRows.map((row,i)=>{
  const f=row.fields,name=f.ironManName?'<button type="button" class="sample-worker-row-name" data-sample-worker-row="'+i+'">'+esc(f.ironManName)+'</button>':'<select data-sample-board-choose="'+i+'" aria-label="Sample Man Name row '+(i+1)+'" '+(!edit?'disabled':'')+'><option value="">Select Sample Man Name</option>'+sampleBoardNamesForSection(f.sampleSection).map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('')+'</select>';
  return '<tr data-sample-board-index="'+i+'">'+cell(f.sampleSection)+cell(sampleBoardRowSlot(f.sampleNewOld)||f.sl||i+1)+'<td>'+name+'</td>'+[f.buyer,f.style,f.item,f.sampleQty,f.sampleSizeQty,f.sampleStartDate,f.sampleStartTime,f.sampleEndDate,f.sampleEndTime,f.sampleComplete,f.remarks].map(cell).join('')+'</tr>';
 }).join('')+(!sampleBoardRows.length?'<tr><td colspan="14">Input চাপলে এখানে রো যোগ হবে।</td></tr>':'')+'</tbody><tfoot><tr><th colspan="6">Total</th>'+cell(samplePDSum(sampleBoardRows.map(r=>r.fields.sampleQty)))+cell(samplePDSum(sampleBoardRows.map(r=>r.fields.sampleSizeQty)))+'<td colspan="4"></td>'+cell(samplePDSum(sampleBoardRows.map(r=>r.fields.sampleComplete)))+'<td></td></tr></tfoot></table></div>';
}
samplePDPaper=function(readonly=false){
 const edit=FarnoorAccess.canAction('output','edit')&&!readonly;
 return '<section class="sample-pd-paper sample-board"><h2>SAMPLE WISE HOURLY PRODUCTION</h2><div class="sample-pd-details">'+sampleBoardFields.map(([key,label])=>'<div class="sample-pd-field"><label for="sample-board-'+key+'">'+label+'</label>'+sampleBoardFieldControl(key,label,edit)+'</div>').join('')+'</div>'+['buyer','style','item','hourlyTarget'].map(key=>'<datalist id="sample-board-options-'+key+'">'+sampleBoardSuggestions(key,sampleBoardForm[key]).map(v=>'<option value="'+esc(v)+'"></option>').join('')+'</datalist>').join('')+'<div class="sample-pd-save-actions"><button type="button" data-sample-board-save '+(!edit||sampleBoardBusy?'disabled':'')+'>'+(sampleBoardBusy?'Saving…':'Save')+'</button></div>'+sampleBoardTable(edit)+'</section>';
};
function sampleBoardAdd(){
 if(sampleBoardBusy||!FarnoorAccess.canAction('output','edit'))return;
 try{
  const f={ironManName:'',...sampleBoardForm};if(f.ironManName&&!sampleBoardNames.includes(f.ironManName)&&!sampleBoardRows.some(r=>r.fields.ironManName===f.ironManName))throw Error('Sample Man Name নির্বাচন করুন।');
  for(const key of ['sl','workingPlan','hourlyTarget']){const raw=f[key]??'';if(key!=='sl'&&String(raw).trim()===''){f[key]='';continue;}const n=samplePDNumber(key==='sl'&&String(raw).trim()===''?sampleBoardRows.length+1:raw);if(n===null||!Number.isFinite(n)||n<0||(key==='sl'&&(!Number.isInteger(n)||n<1)))throw Error(key==='sl'?'সঠিক SL লিখুন।':'Working Hour ও Target Hour-এ সঠিক সংখ্যা লিখুন।');f[key]=String(n);}
  f.sampleNewOld=sampleBoardRowSlot(f.sampleNewOld);if(f.sampleNewOld&&!['Row1','Row2','Row3','Row4','Row5','New','Old'].includes(f.sampleNewOld))throw Error('Row1 থেকে Row5 নির্বাচন করুন।');
  if(String(f.sampleSection||'').trim()){const section=String(f.sampleSection).trim().toUpperCase().replace(/^SAMPLE[ ._-]*/, '');if(!['1','2'].includes(section))throw Error('Sample Section-এ SAMPLE-1 বা SAMPLE-2 লিখুন।');f.sampleSection='SAMPLE-'+section;}
  for(const key of ['sampleStartDate','sampleEndDate'])if(String(f[key]||'').trim())f[key]=normalizeDate(f[key]);
  for(const key of ['sampleQty','sampleSizeQty','sampleComplete'])if(String(f[key]??'').trim()){const n=samplePDNumber(f[key]);if(n===null||!Number.isFinite(n)||n<0)throw Error('QTY, Size QTY ও Daily Complete Sample-এ সঠিক সংখ্যা লিখুন।');f[key]=String(n);}
  const staged=sampleBoardEditingRow&&sampleBoardRows.includes(sampleBoardEditingRow)&&sampleBoardSameSlot(sampleBoardEditingRow.fields,f)?sampleBoardEditingRow:f.ironManName?sampleBoardRows.find(r=>sampleBoardSameSlot(r.fields,f)):null,date=staged?.fields.date||samplePDDraft.fields.date||samplePDToday();
  const saved=f.ironManName?(typeof sampleDailySavedRecords==='function'?sampleDailySavedRecords():samplePDRecords()).find(r=>sampleBoardSameSlot(r.hourlyPD.fields||{},f)):null;
  if(staged&&sampleBoardEditingName!==f.ironManName)return toast('এই নামের এই Row ইতোমধ্যে আছে। রোটি খুলে এডিট করুন।');
  const previous=staged||(saved?{id:saved.id,fields:saved.hourlyPD.fields,rows:saved.hourlyPD.rows}:null);
  const row={id:previous?.id,fields:{...previous?.fields,...f,cardNo:sampleBoardCards[f.ironManName]??previous?.fields.cardNo??f.cardNo??'',date:previous?.fields.date||date,section:previous?.fields.section||sampleBoardStorageSection({...f,cardNo:sampleBoardCards[f.ironManName]||f.cardNo}),tableNo:previous?.fields.section||sampleBoardStorageSection({...f,cardNo:sampleBoardCards[f.ironManName]||f.cardNo})},rows:samplePDComputedRows(previous?.rows)};
  if(staged)sampleBoardRows[sampleBoardRows.indexOf(staged)]=row;else sampleBoardRows.push(row);
  sampleBoardEditingName=null;sampleBoardForm={sampleSection:f.sampleSection||''};renderSamplePD();return row;
 }catch(error){toast(error.message);}
}
const sampleBoardOriginalLoad=samplePDLoad;
samplePDLoad=function(record){sampleBoardOriginalLoad(record);samplePDDraft.fields.cardNo=sampleBoardCards[samplePDDraft.fields.ironManName]??samplePDDraft.fields.cardNo??'';sampleBoardRows=[{id:record.id,fields:structuredClone(samplePDDraft.fields),rows:samplePDComputedRows(record.hourlyPD.rows)}];sampleBoardForm={...samplePDDraft.fields,sl:samplePDDraft.fields.sl||'1'};};
const sampleBoardOriginalSave=saveSamplePD;
async function sampleBoardSave(rowsToSave=sampleBoardRows){
 if(sampleBoardBusy||!rowsToSave.length||!FarnoorAccess.canAction('output','edit'))return false;
 if(rowsToSave.some(row=>!row.fields.ironManName))return toast('সেভ করার আগে প্রতিটি রোতে Sample Man Name নির্বাচন করুন।');if(new Set(rowsToSave.map(row=>row.id||samplePDKey(row.fields.date,row.fields.section))).size!==rowsToSave.length)return toast('একই এন্ট্রি দুইবার সেভ করা যাবে না।');
 sampleBoardBusy=true;let complete=true;const formBefore=structuredClone(sampleBoardForm);
 try{for(const row of rowsToSave){row.fields.cardNo=sampleBoardCards[row.fields.ironManName]??row.fields.cardNo??'';samplePDDraft.fields={...row.fields};samplePDDraft.rows=samplePDComputedRows(row.rows);for(const key of ['targets','differences','achievements'])samplePDDraft[key]=Array(5).fill('');samplePDEditId=row.id||null;samplePDPendingId=null;
   if(!await sampleBoardOriginalSave()){complete=false;break;}row.id=samplePDEditId;
  }
 }finally{sampleBoardBusy=false;sampleBoardForm=complete?{}:formBefore;sampleBoardEditingName=null;samplePDView='new-input';renderSamplePD();}
 return complete;
}
async function sampleBoardSubmit(){
 if(sampleBoardBusy||!FarnoorAccess.canAction('output','edit'))return false;
 if(!sampleBoardForm.sampleSection){toast('Section নির্বাচন করুন।');return false;}
 if(!sampleBoardForm.ironManName){toast('Sample Man Name নির্বাচন করুন।');return false;}
 const row=sampleBoardAdd();if(!row||typeof row!=='object')return false;
 const saved=await sampleBoardSave([row]);
 if(!saved){sampleBoardForm={...row.fields};sampleBoardEditingName=row.fields.ironManName;sampleBoardEditingRow=row;renderSamplePD();}
 return saved===true;
}
const sampleBoardMain=document.getElementById('main');
sampleBoardMain.addEventListener('click',event=>{if(activePage===samplePDPage&&samplePDEditId&&event.target.closest('[data-sample-pd-view="new-input"]')){sampleBoardRows=[];sampleBoardForm={};}},true);
sampleBoardMain.addEventListener('click',event=>{if(activePage!==samplePDPage)return;if(event.target.closest('[data-sample-board-add]'))sampleBoardAdd();if(event.target.closest('[data-sample-board-save]'))void sampleBoardSubmit();});
sampleBoardMain.addEventListener('input',event=>{
 if(activePage!==samplePDPage||sampleBoardBusy)return;const node=event.target,key=node.dataset.sampleBoardField;
 if(key){sampleBoardForm[key]=sampleBoardFieldValue(key,node.value);const list=document.getElementById('sample-board-options-'+key);if(list)list.innerHTML=sampleBoardSuggestions(key,node.value).map(v=>'<option value="'+esc(v)+'"></option>').join('');}
 if(node.dataset.sampleBoardCard!==undefined)sampleBoardRows[Number(node.dataset.sampleBoardCard)].fields.cardNo=node.value;
 if(node.dataset.sampleBoardHour!==undefined){const hour=Number(node.dataset.sampleBoardHour),worker=Number(node.dataset.sampleBoardWorker);sampleBoardRows[worker].rows[hour][3]=node.value;document.querySelector('[data-sample-board-sum="'+hour+'"]').textContent=String(samplePDSum(sampleBoardRows.map(r=>r.rows[hour][3])));}
});
sampleBoardMain.addEventListener('change',event=>{if(activePage===samplePDPage&&!sampleBoardBusy&&event.target.dataset.sampleBoardChoose!==undefined){const row=sampleBoardRows[Number(event.target.dataset.sampleBoardChoose)],name=event.target.value;if(!sampleBoardNames.includes(name))return;if(sampleBoardRows.some(other=>other!==row&&other.fields.ironManName===name)){event.target.value='';toast('এই নামের এন্ট্রি ইতোমধ্যে আছে। অন্য নাম নির্বাচন করুন।');return;}row.fields.ironManName=name;row.fields.cardNo=sampleBoardCards[name];if(!row.id)row.fields.section=row.fields.tableNo=name;renderSamplePD();return;}if(activePage===samplePDPage&&event.target.dataset.sampleBoardField)sampleBoardForm[event.target.dataset.sampleBoardField]=sampleBoardFieldValue(event.target.dataset.sampleBoardField,event.target.value);if(activePage===samplePDPage&&event.target.dataset.sampleBoardField==='sampleSection'){sampleBoardForm={sampleSection:event.target.value,sampleNewOld:sampleBoardForm.sampleNewOld||''};sampleBoardEditingName=null;renderSamplePD();}});
sampleBoardMain.addEventListener('keydown',event=>{
 if(activePage!==samplePDPage||samplePDView!=='new-input'||event.key!=='Enter'||event.isComposing||event.repeat||sampleBoardBusy)return;
 const target=event.target;if(target.matches('[data-sample-board-add],[data-sample-board-save]'))return;
 if(!target.matches('[data-sample-board-field],[data-sample-board-card],[data-sample-board-hour]'))return;event.preventDefault();
 const selector=target.hasAttribute('data-sample-board-field')?'[data-sample-board-field]':'[data-sample-board-card],[data-sample-board-hour]',fields=[...document.querySelectorAll('.sample-board '+selector)],index=fields.indexOf(target);
 (fields[index+1]||document.querySelector('[data-sample-board-save]'))?.focus();
});
const sampleBoardStyle=document.createElement('style');sampleBoardStyle.textContent='.sample-board .sample-board-table{min-width:1650px}.sample-board .sample-board-table th{white-space:normal;min-width:72px}.sample-board .sample-board-table th:nth-child(3){min-width:165px}.sample-board .sample-board-table input{min-width:65px;width:100%;box-sizing:border-box}.sample-board .sample-board-table td:nth-child(3){white-space:normal;font-weight:700}.sample-board select{width:100%;min-height:38px;padding:8px;border:1px solid #b4c9e4;border-radius:6px;background:#f6faff;color:#163a59}.sample-board .sample-pd-save-actions{justify-content:flex-end}';document.head.append(sampleBoardStyle);
