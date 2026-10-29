'use strict';
let qualityExportBusy=false,qualityEmailDraft=null;
const qualityExportPreviousView=qualityPDPrintView;
qualityPDPrintView=function(){return qualityExportPreviousView().replace('</div><div class="quality-pd-edit-links', '<button type="button" class="quality-image-button" data-quality-image data-page-action-required="pdf">▣ Copy Image</button><button type="button" class="quality-email-button" data-quality-email data-page-action-required="pdf">✉ Email</button></div><div class="quality-pd-edit-links');};
const qualityExportStyle=document.createElement('style');qualityExportStyle.textContent='.quality-image-button{background:#e0f2fe!important;color:#075985!important;border:1px solid #38bdf8!important}.quality-email-button{background:#f3e8ff!important;color:#6b21a8!important;border:1px solid #c084fc!important}#qualityEmailDialog{width:min(740px,92vw);max-height:90vh;overflow:auto;border:0;border-radius:14px;padding:24px;color:#172b42}#qualityEmailDialog::backdrop{background:#071e3acc}#qualityEmailDialog img{display:block;width:100%;height:auto;border:1px solid #cbd5e1;margin:12px 0}#qualityEmailDialog input{box-sizing:border-box;width:100%;padding:10px;border:1px solid #94a3b8;border-radius:7px}#qualityEmailDialog .dialog-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:16px}#qualityEmailDialog button{padding:10px 16px}#qualityEmailStatus{white-space:pre-wrap}';document.head.append(qualityExportStyle);
function qualityExportRecords(){if(!FarnoorAccess.canAction('output','pdf'))throw Error('Report export permission is required.');const records=qualityPDPrintRows();if(!records.length)throw Error('এই তারিখে সেভ করা ইনপুট নেই।');return structuredClone(records);}
async function qualityReportImages(records,copy=false){
 const frame=document.createElement('iframe');frame.title='রিপোর্টের ছবি প্রস্তুত হচ্ছে';frame.style.cssText='position:fixed;left:-20000px;top:0;width:1123px;height:794px;border:0;pointer-events:none';
 try{
  const ready=new Promise((resolve,reject)=>{frame.onload=resolve;frame.onerror=()=>reject(Error('রিপোর্ট প্রস্তুত করা যায়নি।'));});frame.srcdoc=qualityPDPrintHTML(records);document.body.append(frame);await ready;
  const doc=frame.contentDocument;const style=doc.createElement('style');style.textContent='html,body{width:1123px;margin:0;background:#fff}.quality-pd-print-sheet{width:1062px!important;min-height:0!important;margin:0 auto!important;padding:0!important;box-sizing:border-box!important;box-shadow:none!important}.quality-pd-print-sheet table th,.quality-pd-print-sheet table td,.quality-pd-print-sheet header,.quality-pd-print-sheet header h2{border-width:.35px!important}.quality-pd-print-sheet .qf-table th,.quality-pd-print-sheet .qf-table td{font-size:6.4pt!important;line-height:1.15!important}';doc.head.append(style);
  await doc.fonts.ready;await personalLoadPdfLibrary(frame.contentWindow);
  const images=[],sheets=[...doc.querySelectorAll('.quality-pd-print-sheet')];
  for(let i=0;i<sheets.length;i++){
   const rendered=await frame.contentWindow.html2pdf().set({margin:0,jsPDF:{unit:'mm',format:'a4',orientation:'landscape'},html2canvas:{scale:6,backgroundColor:'#ffffff',logging:false,useCORS:false,windowWidth:1123,scrollX:0,scrollY:0}}).from(sheets[i]).toCanvas().get('canvas');const canvas=qualityTrimCanvas(rendered);
   // Encode while the rendering document is alive; never pass its canvas out.
   if(copy){if(!qualityCanvasHasReport(canvas))throw Error('রিপোর্টের ছবি সাদা এসেছে। আবার Copy Image চাপুন।');images.push({png:canvas.toDataURL('image/png'),width:canvas.width,height:canvas.height});continue;}
   const jpg=canvas.toDataURL('image/jpeg',1),name='Quality-Wise-Hourly-PD-'+records[0].date.replaceAll('/','-')+'-'+(i+1)+'.jpg';images.push({jpg,name});
  }
  return images;
 }finally{frame.remove();}
}
function qualityTrimCanvas(source){const context=source.getContext('2d'),pixels=context.getImageData(0,0,source.width,source.height).data;let left=source.width,right=-1,top=source.height,bottom=-1;for(let y=0;y<source.height;y++)for(let x=0;x<source.width;x++){const i=(y*source.width+x)*4;if(pixels[i+3]&&Math.min(pixels[i],pixels[i+1],pixels[i+2])<245){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}}if(right<left)return source;left=Math.max(0,left-2);top=Math.max(0,top-2);right=Math.min(source.width-1,right+2);bottom=Math.min(source.height-1,bottom+2);const canvas=document.createElement('canvas');canvas.width=right-left+1;canvas.height=bottom-top+1;canvas.getContext('2d').drawImage(source,left,top,canvas.width,canvas.height,0,0,canvas.width,canvas.height);return canvas;}
function qualityCanvasHasReport(canvas){const sample=document.createElement('canvas');sample.width=64;sample.height=64;const context=sample.getContext('2d');context.drawImage(canvas,0,0,64,64);const pixels=context.getImageData(0,0,64,64).data;let ink=0;for(let i=0;i<pixels.length;i+=4)if(pixels[i+3]>0&&Math.min(pixels[i],pixels[i+1],pixels[i+2])<235)ink++;return ink>20;}
async function qualityClipboardBlob(records){
 const pages=await qualityReportImages(records,true);
 if(pages.length===1)return new Blob([Uint8Array.from(atob(pages[0].png.split(',')[1]),c=>c.charCodeAt(0))],{type:'image/png'});
 const canvas=document.createElement('canvas');canvas.width=Math.max(...pages.map(p=>p.width));canvas.height=pages.reduce((sum,p)=>sum+p.height,0);if(canvas.height>16384)throw Error('কম পেইজ নির্বাচন করে Copy Image চাপুন।');
 const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);let top=0;for(const page of pages){const image=new Image();image.src=page.png;await image.decode();context.drawImage(image,0,top);top+=page.height;}
 if(!qualityCanvasHasReport(canvas))throw Error('রিপোর্টের ছবি সাদা এসেছে। আবার Copy Image চাপুন।');
 return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(Error('ছবি কপি করার জন্য প্রস্তুত হয়নি।')),'image/png'));
}
async function qualityCopyImage(records){let timer;const image=qualityClipboardBlob(records);try{await Promise.race([navigator.clipboard.write([new ClipboardItem({'image/png':image})]),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('সফটওয়্যার পেইজ সামনে রেখে আবার Copy Image চাপুন।')),30000);})]);qualityCopyPreview(await image);}finally{clearTimeout(timer);}}
function qualityCopyPreview(blob){document.getElementById('qualityCopyPreview')?.remove();const dialog=document.createElement('dialog'),url=URL.createObjectURL(blob);dialog.id='qualityCopyPreview';dialog.style.cssText='width:min(1000px,92vw);max-height:90vh;overflow:auto;border:0;border-radius:12px;padding:20px';dialog.innerHTML='<h2 style="margin-top:0">Image copied</h2><p>এই ছবিটি কপি হয়েছে। WhatsApp বা অন্য অ্যাপে Ctrl+V দিয়ে পেস্ট করুন।</p><img alt="Copied production report" style="width:100%;height:auto" src="'+url+'"><div class="dialog-actions"><button type="button">Close</button></div>';dialog.addEventListener('close',()=>{URL.revokeObjectURL(url);dialog.remove();},{once:true});dialog.querySelector('button').onclick=()=>dialog.close();document.body.append(dialog);dialog.showModal();}
async function qualityEmailRequest(route,payload){const response=await FarnoorAPI.request(route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw Object.assign(Error(result.error||'ইমেইল অনুরোধ সম্পন্ন হয়নি।'),{status:response.status});return result;}
function qualityCloseEmail(){const dialog=document.getElementById('qualityEmailDialog');if(dialog?.dataset.sending==='true')return;dialog?.close();dialog?.remove();qualityEmailDraft=null;}
function qualityShowEmail(records,images){
 document.getElementById('qualityEmailDialog')?.remove();qualityEmailDraft={records,images,requestId:crypto.randomUUID()};
 const dialog=document.createElement('dialog');dialog.id='qualityEmailDialog';dialog.innerHTML='<form id="qualityEmailForm"><h2>✉ রিপোর্টের ছবি ইমেইল করুন</h2><p>'+esc(records[0].date)+' · '+records.map(r=>esc(r.hourlyPD.fields.section)).join(', ')+'</p><label for="qualityEmailTo">প্রাপকের ইমেইল (একাধিক হলে কমা দিন)</label><input id="qualityEmailTo" type="email" multiple required maxlength="2600" placeholder="name@example.com"><p>নিচের '+images.length+'টি JPG ছবি সংযুক্ত হবে।</p>'+images.map(image=>'<img src="'+image.jpg+'" alt="'+esc(image.name)+'">').join('')+'<p id="qualityEmailStatus" role="status"></p><div class="dialog-actions"><button type="button" data-quality-email-cancel>Cancel</button><button type="submit" class="primary">পাঠানো নিশ্চিত করুন</button></div></form>';
 document.body.append(dialog);dialog.addEventListener('cancel',event=>{if(dialog.dataset.sending==='true')event.preventDefault();else qualityEmailDraft=null;});dialog.querySelector('[data-quality-email-cancel]').onclick=qualityCloseEmail;dialog.querySelector('form').onsubmit=qualitySendEmail;dialog.showModal();
}
async function qualitySendEmail(event){
 event.preventDefault();const draft=qualityEmailDraft,dialog=document.getElementById('qualityEmailDialog');if(!draft||dialog.dataset.sending==='true')return;
 const to=[...new Set(document.getElementById('qualityEmailTo').value.split(',').map(s=>s.trim().toLowerCase()).filter(Boolean))],status=document.getElementById('qualityEmailStatus');if(!to.length||to.length>10){status.textContent='১–১০টি ইমেইল ঠিকানা দিন।';return;}
 dialog.dataset.sending='true';dialog.querySelectorAll('button,input').forEach(node=>node.disabled=true);status.textContent='ইমেইল পাঠানো হচ্ছে…';
 try{
  const sent=await qualityEmailRequest('/api/hourly-output/email',{reportKind:'quality',to,requestId:draft.requestId,reports:draft.records.map(r=>({id:r.id,version:r.updatedAt||r.createdAt})),images:draft.images.map(image=>({name:image.name,jpg:image.jpg.split(',')[1]}))});
  let job;for(let i=0;i<40;i++){await new Promise(resolve=>setTimeout(resolve,1500));job=await qualityEmailRequest('/api/hourly-output/email/job',{key:sent.jobKey});if(job.status!=='processing')break;}
  if(job?.status==='accepted'){status.textContent='Gmail '+job.accepted+' জন প্রাপকের জন্য ইমেইল গ্রহণ করেছে।';dialog.querySelector('button[type=submit]').hidden=true;dialog.querySelector('[data-quality-email-cancel]').textContent='Close';}
  else if(job?.status==='processing'){status.textContent='ইমেইল এখনও প্রক্রিয়াধীন। আবার পাঠালে একই অনুরোধের অবস্থা দেখা হবে।';}
  else throw Error(job?.error||'ইমেইল পাঠানো যায়নি।');
 }catch(error){status.textContent=error.message;}finally{dialog.dataset.sending='false';dialog.querySelectorAll('button,input').forEach(node=>node.disabled=false);}
}
document.getElementById('main').addEventListener('click',async event=>{
 const button=event.target.closest('[data-quality-image],[data-quality-email]');if(!button||activePage!==qualityPDPage||qualityExportBusy)return;
 qualityExportBusy=true;button.disabled=true;const title=button.textContent;button.textContent='ছবি প্রস্তুত হচ্ছে…';
 try{const records=qualityExportRecords();if(button.hasAttribute('data-quality-email'))qualityShowEmail(records,await qualityReportImages(records));else{if(!navigator.clipboard?.write||typeof ClipboardItem==='undefined')throw Error('এই ব্রাউজারে ছবি কপি সমর্থিত নয়। Chrome বা Edge ব্যবহার করুন।');await qualityCopyImage(records);toast('Image copied. এখন Ctrl+V দিয়ে পেস্ট করুন।');}}
 catch(error){toast(error.name==='NotAllowedError'?'ছবি কপি করার অনুমতি পাওয়া যায়নি। ব্রাউজারে Clipboard অনুমতি দিয়ে আবার Copy Image চাপুন।':error.message);}finally{qualityExportBusy=false;button.disabled=false;button.textContent=title;}
});
const qualityAutoMailQueue=[];let qualityAutoMailBusy=false;
function qualityPDAutoEmailSaved(record,previous){
 if(!['1','2','3','4'].includes(qualityPDTable(record.hourlyPD.fields)))return;
 const queued=qualityAutoMailQueue.length;const rows=qualityPDComputedRows(record.hourlyPD.rows),old=qualityPDComputedRows(previous?.hourlyPD?.rows);
 for(let hour=0;hour<11;hour++){if(JSON.stringify(rows[hour].slice(2,4))===JSON.stringify(old[hour].slice(2,4))||rows[hour].slice(2,4).some(v=>v===''||v===null||v===undefined))continue;qualityAutoMailQueue.push({date:record.date,hour,requestId:crypto.randomUUID()});}if(qualityAutoMailQueue.length>queued)void qualityAutoMailRun();
}
async function qualityAutoMailRun(){
 if(qualityAutoMailBusy)return;qualityAutoMailBusy=true;
 try{while(qualityAutoMailQueue.length){const item=qualityAutoMailQueue.shift();try{
  const batch=await qualityEmailRequest('/api/hourly-output/email/batch',{date:item.date,hour:item.hour,reportKind:'quality'});if(!batch.ready)continue;
  toast('Saved online. চারটি টেবিলের ঘণ্টার JPG রিপোর্ট প্রস্তুত হচ্ছে…');
  const images=await qualityReportImages(batch.records);if(images.length!==1)throw Error('চারটি টেবিলের জন্য একটি JPG প্রয়োজন।');
  const sent=await qualityEmailRequest('/api/hourly-output/email',{automatic:true,reportKind:'quality',hour:item.hour,to:['rakibislam103137@gmail.com','farnoorgl@gmail.com'],requestId:item.requestId,reports:batch.records.map(r=>({id:r.id,version:r.updatedAt||r.createdAt})),images:images.map(image=>({jpg:image.jpg.split(',')[1]}))});
  let job;for(let i=0;i<40;i++){await new Promise(resolve=>setTimeout(resolve,1500));job=await qualityEmailRequest('/api/hourly-output/email/job',{key:sent.jobKey});if(job.status!=='processing')break;}
  toast(job?.status==='accepted'?'Saved online. চার টেবিলের এক JPG Gmail গ্রহণ করেছে।':job?.status==='processing'?'Saved online. ঘণ্টার ইমেইল প্রক্রিয়াধীন আছে।':'Saved online. Email: '+(job?.error||'পাঠানো যায়নি।'));
 }catch(error){if(error.status===409&&!item.retried){item.retried=true;qualityAutoMailQueue.push(item);}else toast('Saved online. Email: '+error.message);}}}finally{qualityAutoMailBusy=false;}
}
