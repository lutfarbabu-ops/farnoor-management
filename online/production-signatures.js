'use strict';
// Schedule uses Sign as a read-only directory, independently of Requistion signing policy.
const productionSignRoles=['Head of Production','General Manager','Managing Director'];
const productionSignRequests=new Map(),productionSignBindings=new WeakMap();
const productionSignKey=value=>String(value||'').normalize('NFKC').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).trim().toLowerCase();
async function productionSignFetch(idNo,section){
 const key=section+':'+productionSignKey(idNo);
 if(!productionSignRequests.has(key))productionSignRequests.set(key,(async()=>{
  const response=await FarnoorAPI.request('/api/production/signature',{method:'GET',payload:{idNo:productionSignKey(idNo),section}}),result=await response.json();
  if(!response.ok)throw Error(result.error||'Sign could not load.');
  const sign=result.sign;
  if(!sign||productionSignKey(sign.idNo)!==productionSignKey(idNo)||typeof sign.fullName!=='string'||!/^data:image\/(png|jpeg|webp);base64,/.test(sign.photo?.data||''))throw Error('এই আইডির নাম ও Sign Photo পাওয়া যায়নি।');
  return sign;
 })().finally(()=>productionSignRequests.delete(key)));
 return productionSignRequests.get(key);
}
function productionSignSlots(file){return Array.from({length:3},(_,i)=>file.scheduleSignatures?.[i]||null);}
function productionSignDraw(paper,file,editable){
 const area=paper?.querySelector('.signatures');if(!area)return;
 const slots=productionSignSlots(file);
 area.classList.add('production-signatures');
 area.innerHTML=productionSignRoles.map((role,index)=>'<div class="production-sign-slot">'+(editable?'<label class="no-print production-sign-id">ID No<input inputmode="numeric" autocomplete="off" maxlength="120" aria-label="'+esc(role)+' ID No" data-production-sign="'+index+'" value="'+esc(slots[index]?.idNo||'')+'"></label>':'')+'<div class="production-sign-preview"></div><div class="production-sign-name"></div><span class="production-sign-role">'+esc(role)+'</span><small class="production-sign-status no-print" role="status"></small></div>').join('');
 productionSignBindings.set(area,{file,editable});
 area.productionSignReady=Promise.all(slots.map((slot,index)=>slot?.idNo?productionSignResolve(area,index,slot.idNo,false):Promise.resolve()));
}
async function productionSignResolve(area,index,raw,update=true){
 const binding=productionSignBindings.get(area);if(!binding)return;
 const {file}=binding,slot=area.children[index],query=productionSignKey(raw),token={};slot.productionSignToken=token;delete slot.dataset.signError;
 slot.querySelector('.production-sign-preview').replaceChildren();slot.querySelector('.production-sign-name').textContent='';
 const status=slot.querySelector('.production-sign-status');status.textContent=query?'সাক্ষর খোঁজা হচ্ছে…':'';
 if(update){file.scheduleSignatures=productionSignSlots(file);file.scheduleSignatures[index]=query?{idNo:query}:null;}
 if(!query)return;
 try{
  const sign=await productionSignFetch(query,file.section);
  if(!area.isConnected||slot.productionSignToken!==token)return;
  const image=new Image();image.alt=sign.fullName+' signature';image.src=sign.photo.data;await image.decode();
  if(!area.isConnected||slot.productionSignToken!==token)return;
  slot.querySelector('.production-sign-preview').append(image);slot.querySelector('.production-sign-name').textContent=sign.fullName;status.textContent='';
  if(update)file.scheduleSignatures[index]={idNo:sign.idNo,signId:sign.id,fullName:sign.fullName};
 }catch(error){if(area.isConnected&&slot.productionSignToken===token){status.textContent=error.message;slot.dataset.signError=error.message;}}
}
async function productionSignReady(paper){
 const area=paper?.querySelector('.production-signatures');if(!area)return;
 await area.productionSignReady;
 const error=[...area.children].find(slot=>slot.dataset.signError)?.dataset.signError;if(error)throw Error(error);
}
const productionSignEditor=drawProductionEditor;
drawProductionEditor=function(){productionSignEditor();productionSignDraw(document.querySelector('#main .production-paper'),currentProductionDraft(),true);};
const productionSignReport=drawProductionReport;
drawProductionReport=function(){productionSignReport();document.querySelectorAll('[data-production-file]').forEach(article=>{const id=article.dataset.productionFile,file=productionReportDrafts.get(id)?.file||(state.productionSchedules||[]).find(f=>f.id===id);if(file)productionSignDraw(article.querySelector('.production-paper'),file,false);});};
document.addEventListener('input',event=>{const input=event.target.closest('[data-production-sign]');if(!input)return;const area=input.closest('.production-signatures'),binding=productionSignBindings.get(area);if(!binding)return;const index=Number(input.dataset.productionSign),slot=area.children[index];slot.productionSignToken={};delete slot.dataset.signError;slot.querySelector('.production-sign-preview').replaceChildren();slot.querySelector('.production-sign-name').textContent='';slot.querySelector('.production-sign-status').textContent='';binding.file.scheduleSignatures=productionSignSlots(binding.file);binding.file.scheduleSignatures[index]=input.value.trim()?{idNo:productionSignKey(input.value)}:null;});
document.addEventListener('focusout',event=>{const input=event.target.closest('[data-production-sign]');if(!input)return;const area=input.closest('.production-signatures');delete area.children[Number(input.dataset.productionSign)].dataset.signError;area.productionSignReady=Promise.all([area.productionSignReady,productionSignResolve(area,Number(input.dataset.productionSign),input.value)]);});
document.addEventListener('keydown',event=>{if(event.target.matches('[data-production-sign]')&&event.key==='Enter'){event.preventDefault();event.stopImmediatePropagation();event.target.blur();}},true);
const productionSignOutputFrame=productionOutputFrame;
productionOutputFrame=async function(article,file){await productionSignReady(article);return productionSignOutputFrame(article,file);};
const productionSignSave=saveProduction;
saveProduction=async function(){try{const area=document.querySelector('#main .production-signatures');if(area){await Promise.all([...area.querySelectorAll('[data-production-sign]')].map(input=>productionSignResolve(area,Number(input.dataset.productionSign),input.value)));await productionSignReady(area.parentElement);}return await productionSignSave();}catch(error){toast(error.message);}};
const productionSignStyle=document.createElement('style');productionSignStyle.textContent='.production-signatures{display:flex;justify-content:space-around;align-items:flex-end;gap:12px}.production-sign-slot{width:30%;text-align:center;display:flex;align-items:center;flex-direction:column}.production-sign-id{display:flex;flex-direction:column;align-items:center;font-size:12px;gap:4px;margin-bottom:8px}.production-sign-id input{width:130px;max-width:100%;text-align:center}.production-sign-preview{height:52px;width:100%;display:flex;align-items:center;justify-content:center}.production-sign-preview img{max-height:50px;max-width:160px;object-fit:contain}.production-sign-name{font-size:12px;min-height:17px;margin:2px 0}.production-sign-role{display:block;border-top:1px solid #111;min-width:90%;padding-top:4px}.production-sign-status{color:#a82424;font-size:12px;max-width:100%}@media print{.production-signatures .no-print{display:none!important}.production-signatures img{max-height:12mm;max-width:40mm}}';document.head.append(productionSignStyle);
