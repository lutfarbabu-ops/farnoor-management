'use strict';
let ironExportBusy=false,ironEmailDraft=null;
const ironExportPreviousView=ironPDPrintView;
ironPDPrintView=function(){return ironExportPreviousView().replace('</div><div class="iron-pd-edit-links', '<button type="button" class="iron-image-button" data-iron-image data-page-action-required="pdf">▣ Copy Image</button><button type="button" class="iron-email-button" data-iron-email data-page-action-required="pdf">✉ Email</button></div><div class="iron-pd-edit-links');};
const ironExportStyle=document.createElement('style');ironExportStyle.textContent='.iron-image-button{background:#e0f2fe!important;color:#075985!important;border:1px solid #38bdf8!important}.iron-email-button{background:#f3e8ff!important;color:#6b21a8!important;border:1px solid #c084fc!important}#ironEmailDialog{width:min(740px,92vw);max-height:90vh;overflow:auto;border:0;border-radius:14px;padding:24px;color:#172b42}#ironEmailDialog::backdrop{background:#071e3acc}#ironEmailDialog img{display:block;width:100%;height:auto;border:1px solid #cbd5e1;margin:12px 0}#ironEmailDialog input{box-sizing:border-box;width:100%;padding:10px;border:1px solid #94a3b8;border-radius:7px}#ironEmailDialog .dialog-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:16px}#ironEmailDialog button{padding:10px 16px}#ironEmailStatus{white-space:pre-wrap}';document.head.append(ironExportStyle);
function ironExportRecords(){if(!FarnoorAccess.canAction('output','pdf'))throw Error('Report export permission is required.');const records=ironPDPrintRows();if(!records.length)throw Error('এই তারিখে সেভ করা ইনপুট নেই।');return structuredClone(records);}
async function ironReportImages(records,copy=false){
 const frame=document.createElement('iframe');frame.title='রিপোর্টের ছবি প্রস্তুত হচ্ছে';frame.style.cssText='position:fixed;left:-20000px;top:0;width:1123px;height:794px;border:0;pointer-events:none';
 try{
  const ready=new Promise((resolve,reject)=>{frame.onload=resolve;frame.onerror=()=>reject(Error('রিপোর্ট প্রস্তুত করা যায়নি।'));});frame.srcdoc=ironPDPrintHTML(records);document.body.append(frame);await ready;
  const doc=frame.contentDocument;const style=doc.createElement('style');style.textContent='html,body{width:1123px;margin:0;background:#fff}.iron-pd-print-sheet{width:1062px!important;min-height:0!important;margin:0 auto!important;padding:0!important;box-sizing:border-box!important;box-shadow:none!important}.iron-pd-print-sheet table th,.iron-pd-print-sheet table td,.iron-pd-print-sheet header,.iron-pd-print-sheet header h2{border-width:.35px!important}.iron-pd-print-sheet .qf-table th,.iron-pd-print-sheet .qf-table td{font-size:6.4pt!important;line-height:1.15!important}';doc.head.append(style);
  await doc.fonts.ready;await personalLoadPdfLibrary(frame.contentWindow);
  const images=[],sheets=[...doc.querySelectorAll('.iron-pd-print-sheet')];
  for(let i=0;i<sheets.length;i++){
   const rendered=await frame.contentWindow.html2pdf().set({margin:0,jsPDF:{unit:'mm',format:'a4',orientation:'landscape'},html2canvas:{scale:6,backgroundColor:'#ffffff',logging:false,useCORS:false,windowWidth:1123,scrollX:0,scrollY:0}}).from(sheets[i]).toCanvas().get('canvas');const canvas=ironTrimCanvas(rendered);
   // Encode while the rendering document is alive; never pass its canvas out.
   if(copy){if(!ironCanvasHasReport(canvas))throw Error('রিপোর্টের ছবি সাদা এসেছে। আবার Copy Image চাপুন।');images.push({png:canvas.toDataURL('image/png'),width:canvas.width,height:canvas.height});continue;}
   const jpg=canvas.toDataURL('image/jpeg',1),name='Iron-Wise-Hourly-PD-'+records[0].date.replaceAll('/','-')+'-'+(i+1)+'.jpg';images.push({jpg,name});
  }
  return images;
 }finally{frame.remove();}
}
function ironTrimCanvas(source){const context=source.getContext('2d'),pixels=context.getImageData(0,0,source.width,source.height).data;let left=source.width,right=-1,top=source.height,bottom=-1;for(let y=0;y<source.height;y++)for(let x=0;x<source.width;x++){const i=(y*source.width+x)*4;if(pixels[i+3]&&Math.min(pixels[i],pixels[i+1],pixels[i+2])<245){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}}if(right<left)return source;left=Math.max(0,left-2);top=Math.max(0,top-2);right=Math.min(source.width-1,right+2);bottom=Math.min(source.height-1,bottom+2);const canvas=document.createElement('canvas');canvas.width=right-left+1;canvas.height=bottom-top+1;canvas.getContext('2d').drawImage(source,left,top,canvas.width,canvas.height,0,0,canvas.width,canvas.height);return canvas;}
function ironCanvasHasReport(canvas){const sample=document.createElement('canvas');sample.width=64;sample.height=64;const context=sample.getContext('2d');context.drawImage(canvas,0,0,64,64);const pixels=context.getImageData(0,0,64,64).data;let ink=0;for(let i=0;i<pixels.length;i+=4)if(pixels[i+3]>0&&Math.min(pixels[i],pixels[i+1],pixels[i+2])<235)ink++;return ink>20;}
async function ironClipboardBlob(records){
 const pages=await ironReportImages(records,true);
 if(pages.length===1)return new Blob([Uint8Array.from(atob(pages[0].png.split(',')[1]),c=>c.charCodeAt(0))],{type:'image/png'});
 const canvas=document.createElement('canvas');canvas.width=Math.max(...pages.map(p=>p.width));canvas.height=pages.reduce((sum,p)=>sum+p.height,0);if(canvas.height>16384)throw Error('কম পেইজ নির্বাচন করে Copy Image চাপুন।');
 const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);let top=0;for(const page of pages){const image=new Image();image.src=page.png;await image.decode();context.drawImage(image,0,top);top+=page.height;}
 if(!ironCanvasHasReport(canvas))throw Error('রিপোর্টের ছবি সাদা এসেছে। আবার Copy Image চাপুন।');
 return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(Error('ছবি কপি করার জন্য প্রস্তুত হয়নি।')),'image/png'));
}
async function ironCopyImage(records){let timer;const image=ironClipboardBlob(records);try{await Promise.race([navigator.clipboard.write([new ClipboardItem({'image/png':image})]),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('সফটওয়্যার পেইজ সামনে রেখে আবার Copy Image চাপুন।')),30000);})]);ironCopyPreview(await image);}finally{clearTimeout(timer);}}
function ironCopyPreview(blob){document.getElementById('ironCopyPreview')?.remove();const dialog=document.createElement('dialog'),url=URL.createObjectURL(blob);dialog.id='ironCopyPreview';dialog.style.cssText='width:min(1000px,92vw);max-height:90vh;overflow:auto;border:0;border-radius:12px;padding:20px';dialog.innerHTML='<h2 style="margin-top:0">Image copied</h2><p>এই ছবিটি কপি হয়েছে। WhatsApp বা অন্য অ্যাপে Ctrl+V দিয়ে পেস্ট করুন।</p><img alt="Copied production report" style="width:100%;height:auto" src="'+url+'"><div class="dialog-actions"><button type="button">Close</button></div>';dialog.addEventListener('close',()=>{URL.revokeObjectURL(url);dialog.remove();},{once:true});dialog.querySelector('button').onclick=()=>dialog.close();document.body.append(dialog);dialog.showModal();}
async function ironEmailRequest(route,payload){const response=await FarnoorAPI.request(route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw Object.assign(Error(result.error||'ইমেইল অনুরোধ সম্পন্ন হয়নি।'),{status:response.status});return result;}
function ironCloseEmail(){const dialog=document.getElementById('ironEmailDialog');if(dialog?.dataset.sending==='true')return;dialog?.close();dialog?.remove();ironEmailDraft=null;}
function ironShowEmail(records,images){
 document.getElementById('ironEmailDialog')?.remove();ironEmailDraft={records,images,requestId:crypto.randomUUID()};
 const dialog=document.createElement('dialog');dialog.id='ironEmailDialog';dialog.innerHTML='<form id="ironEmailForm"><h2>✉ রিপোর্টের ছবি ইমেইল করুন</h2><p>'+esc(records[0].date)+' · '+records.map(r=>esc(r.hourlyPD.fields.section)).join(', ')+'</p><label for="ironEmailTo">প্রাপকের ইমেইল (একাধিক হলে কমা দিন)</label><input id="ironEmailTo" type="email" multiple required maxlength="2600" placeholder="name@example.com"><p>নিচের '+images.length+'টি JPG ছবি সংযুক্ত হবে।</p>'+images.map(image=>'<img src="'+image.jpg+'" alt="'+esc(image.name)+'">').join('')+'<p id="ironEmailStatus" role="status"></p><div class="dialog-actions"><button type="button" data-iron-email-cancel>Cancel</button><button type="submit" class="primary">পাঠানো নিশ্চিত করুন</button></div></form>';
 document.body.append(dialog);dialog.addEventListener('cancel',event=>{if(dialog.dataset.sending==='true')event.preventDefault();else ironEmailDraft=null;});dialog.querySelector('[data-iron-email-cancel]').onclick=ironCloseEmail;dialog.querySelector('form').onsubmit=ironSendEmail;dialog.showModal();
}
async function ironSendEmail(event){
 event.preventDefault();const draft=ironEmailDraft,dialog=document.getElementById('ironEmailDialog');if(!draft||dialog.dataset.sending==='true')return;
 const to=[...new Set(document.getElementById('ironEmailTo').value.split(',').map(s=>s.trim().toLowerCase()).filter(Boolean))],status=document.getElementById('ironEmailStatus');if(!to.length||to.length>10){status.textContent='১–১০টি ইমেইল ঠিকানা দিন।';return;}
 dialog.dataset.sending='true';dialog.querySelectorAll('button,input').forEach(node=>node.disabled=true);status.textContent='ইমেইল পাঠানো হচ্ছে…';
 try{
  const sent=await ironEmailRequest('/api/hourly-output/email',{reportKind:'iron',to,requestId:draft.requestId,reports:draft.records.map(r=>({id:r.id,version:r.updatedAt||r.createdAt})),images:draft.images.map(image=>({name:image.name,jpg:image.jpg.split(',')[1]}))});
  let job;for(let i=0;i<40;i++){await new Promise(resolve=>setTimeout(resolve,1500));job=await ironEmailRequest('/api/hourly-output/email/job',{key:sent.jobKey});if(job.status!=='processing')break;}
  if(job?.status==='accepted'){status.textContent='Gmail '+job.accepted+' জন প্রাপকের জন্য ইমেইল গ্রহণ করেছে।';dialog.querySelector('button[type=submit]').hidden=true;dialog.querySelector('[data-iron-email-cancel]').textContent='Close';}
  else if(job?.status==='processing'){status.textContent='ইমেইল এখনও প্রক্রিয়াধীন। আবার পাঠালে একই অনুরোধের অবস্থা দেখা হবে।';}
  else throw Error(job?.error||'ইমেইল পাঠানো যায়নি।');
 }catch(error){status.textContent=error.message;}finally{dialog.dataset.sending='false';dialog.querySelectorAll('button,input').forEach(node=>node.disabled=false);}
}
document.getElementById('main').addEventListener('click',async event=>{
 const button=event.target.closest('[data-iron-image],[data-iron-email]');if(!button||activePage!==ironPDPage||ironExportBusy)return;
 ironExportBusy=true;button.disabled=true;const title=button.textContent;button.textContent='ছবি প্রস্তুত হচ্ছে…';
 try{const records=ironExportRecords();if(button.hasAttribute('data-iron-email'))ironShowEmail(records,await ironReportImages(records));else{if(!navigator.clipboard?.write||typeof ClipboardItem==='undefined')throw Error('এই ব্রাউজারে ছবি কপি সমর্থিত নয়। Chrome বা Edge ব্যবহার করুন।');await ironCopyImage(records);toast('Image copied. এখন Ctrl+V দিয়ে পেস্ট করুন।');}}
 catch(error){toast(error.name==='NotAllowedError'?'ছবি কপি করার অনুমতি পাওয়া যায়নি। ব্রাউজারে Clipboard অনুমতি দিয়ে আবার Copy Image চাপুন।':error.message);}finally{ironExportBusy=false;button.disabled=false;button.textContent=title;}
});
