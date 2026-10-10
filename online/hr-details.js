'use strict';
const hrPreviousRenderer=renderPage;
const hrSchemas=window.FARNOOR_HR_FORMS||{};
let hrEditing=null;
const hrDialog=document.createElement('dialog');
hrDialog.className='hr-detail-dialog';hrDialog.style.cssText='width:min(1000px,94vw);max-height:90vh;overflow:auto';
hrDialog.innerHTML='<form id="hrDetailForm"><h2 id="hrDetailTitle"></h2><div id="hrDetailFields" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px"></div><div style="display:flex;gap:12px;margin-top:20px"><button type="button" id="hrDetailClose">Close</button><button type="submit" class="primary" id="hrDetailSave">Save</button></div></form>';
document.body.append(hrDialog);
const hrIsPage=()=>activePage==='employees'||!!hrSchemas[activePage];
const hrList=()=>state.records[activePage]||[];
function hrRender(){
 const page=pageInfo(activePage).page,employees=activePage==='employees';
 const rows=hrList().filter(row=>JSON.stringify([row.reference,row.name,row.date,row.hrDetails,row.hrValues]).toLowerCase().includes(query.toLowerCase()));
 $('#main').innerHTML=heading('HR',page.name,'','<button type="button" data-hr-new data-page-action-required="edit" class="primary">+ New record</button>')+'<section class="panel"><div class="toolbar"><input id="hrSearch" type="search" aria-label="Search HR records" placeholder="Search by ID, name, department…" value="'+esc(query)+'"><span>'+rows.length+' of '+hrList().length+' records</span></div><div class="table-wrap"><table><thead><tr><th>ID / REFERENCE</th><th>NAME / DESCRIPTION</th>'+(employees?'<th>NAME (BN)</th><th>DESIGNATION</th><th>DEPARTMENT</th>':'')+'<th>DATE</th><th>ACTIONS</th></tr></thead><tbody>'+rows.map(row=>'<tr><td>'+esc(row.reference)+'</td><td>'+esc(row.name)+'</td>'+(employees?['Name (Bn)','Designation','Department'].map(key=>'<td>'+esc(row.hrDetails?.[key]||'')+'</td>').join(''):'')+'<td>'+esc(row.date)+'</td><td><button type="button" data-hr-view="'+esc(row.id)+'">View details</button> <button type="button" data-hr-edit="'+esc(row.id)+'" data-page-action-required="edit">Edit</button></td></tr>').join('')+'</tbody></table></div></section>';
 $('#hrSearch').oninput=event=>{query=event.target.value;const position=event.target.selectionStart;hrRender();$('#hrSearch').focus();$('#hrSearch').setSelectionRange(position,position);};
 applyActionControls();
}
renderPage=function(){if(hrIsPage()){hrRender();return;}hrPreviousRenderer();};
function hrInput(field,value,view){
 const name=esc(field.inputKey||field.key),label=esc(field.label),current=String(value??'');
 const control=field.type==='select'?'<select name="'+name+'" '+(view?'disabled':'')+'><option value=""></option>'+[...new Set([...(field.options||[]),...(current?[current]:[])])].map(option=>'<option value="'+esc(option)+'" '+(option===current?'selected':'')+'>'+esc(option)+'</option>').join('')+'</select>':'<input name="'+name+'" value="'+esc(current)+'" maxlength="4000" '+(view?'readonly':'')+' '+(field.type==='date'?'placeholder="DD/MM/YYYY"':'')+'>';
 return '<label style="display:grid;gap:5px">'+label+control+'</label>';
}
function hrOpen(id,view){
 if(!FarnoorAccess.canPage(activePage)||(!view&&!pagePermission('edit')))return;
 const row=hrList().find(record=>record.id===id)||{},employee=activePage==='employees';
 const base=[{key:'reference',label:employee?'Employee ID':'Reference'},{key:'name',label:employee?'Employee name':'Name / description'},{key:'date',label:employee?'Joining date':'Record date',type:'date'}];
 const detailKeys=employee?Object.keys(row.hrDetails||{'ID No':'','Name (Eng)':'','Name (Bn)':'','Designation':'','Department':'','Section':'','Status':'','Date of Join':'','Contact No':'','Salary':''}):[];
 const detailed=employee?detailKeys.map((key,index)=>({key:'detail_'+index,label:key})):(hrSchemas[activePage]||[]).map(field=>({...field,inputKey:'hr_'+field.key}));
 hrEditing={page:activePage,id:id||null,original:JSON.stringify(row),employee,detailKeys,detailed,view};
 $('#hrDetailTitle').textContent=(view?'View ':id?'Edit ':'New ')+pageInfo(activePage).page.name;
 const values={reference:row.reference,name:row.name,date:row.date||new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),...Object.fromEntries(Object.entries(row.hrValues||{}).map(([key,value])=>['hr_'+key,value]))};
 if(employee)detailKeys.forEach((key,index)=>{values['detail_'+index]=row.hrDetails?.[key]||'';});
 $('#hrDetailFields').innerHTML=[...base,...detailed].map(field=>hrInput(field,values[field.inputKey||field.key],view)).join('');
 $('#hrDetailSave').hidden=view;hrDialog.showModal();
}
$('#hrDetailClose').onclick=()=>hrDialog.close();
$('#main').addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;if(button.hasAttribute('data-hr-new'))hrOpen(null,false);if(button.dataset.hrView)hrOpen(button.dataset.hrView,true);if(button.dataset.hrEdit)hrOpen(button.dataset.hrEdit,false);});
$('#hrDetailForm').onsubmit=async event=>{
 event.preventDefault();const edit=hrEditing;if(!edit||edit.view||!pagePermission('edit',edit.page))return;
 const values=Object.fromEntries(new FormData(event.target));const button=$('#hrDetailSave');button.disabled=true;
 try{
  if(!values.reference?.trim()||values.reference.length>120||!values.name?.trim()||values.name.length>200)throw Error('Enter a valid reference and name.');
  const date=normalizeDate(values.date),next=structuredClone(state),rows=next.records[edit.page]||[];
  const original=rows.find(row=>row.id===edit.id);
  if(edit.id&&(!original||JSON.stringify(original)!==edit.original))throw Error('This record changed. Close and reopen it before saving.');
  const row={...(original||{}),id:original?.id||crypto.randomUUID(),reference:values.reference.trim(),name:values.name.trim(),quantity:original?.quantity??1,date,status:original?.status||'Completed'};
  if(rows.some(other=>other.id!==row.id&&other.reference===row.reference))throw Error('This reference already exists.');
  if(edit.employee){row.hrDetails={...(original?.hrDetails||{})};edit.detailKeys.forEach((key,index)=>{row.hrDetails[key]=values['detail_'+index]||'';});row.hrDetails['ID No']=row.reference;row.hrDetails['Name (Eng)']=row.name;row.hrDetails['Date of Join']=date;}
  else{row.hrValues={...(original?.hrValues||{})};for(const field of edit.detailed){let value=values[field.inputKey||field.key]||'';if(value.length>4000)throw Error('Field is too long.');if(value&&field.type==='date')value=normalizeDate(value);row.hrValues[field.key]=value;}}
  if(original)rows[rows.indexOf(original)]=row;else rows.push(row);next.records[edit.page]=rows;
  if(await commit(next)){hrDialog.close();renderPage();toast('HR record saved online.');}
 }catch(error){toast(error.message);}finally{button.disabled=false;}
};
