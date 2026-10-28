'use strict';
let hourlyExportBusy=false,hourlyEmailDraft=null;
const hourlyExportPreviousView=hourlyPDPrintView;
hourlyPDPrintView=function(){return hourlyExportPreviousView().replace('</div><div class="hourly-pd-edit-links', '<button type="button" class="hourly-image-button" data-hourly-image data-page-action-required="pdf">📷 ছবি ডাউনলোড</button><button type="button" class="hourly-email-button" data-hourly-email data-page-action-required="pdf">✉ ইমেইল পাঠান</button></div><div class="hourly-pd-edit-links');};
const hourlyExportStyle=document.createElement('style');hourlyExportStyle.textContent='.hourly-image-button{background:#e0f2fe!important;color:#075985!important;border:1px solid #38bdf8!important}.hourly-email-button{background:#f3e8ff!important;color:#6b21a8!important;border:1px solid #c084fc!important}#hourlyEmailDialog{width:min(740px,92vw);max-height:90vh;overflow:auto;border:0;border-radius:14px;padding:24px;color:#172b42}#hourlyEmailDialog::backdrop{background:#071e3acc}#hourlyEmailDialog img{display:block;width:100%;height:auto;border:1px solid #cbd5e1;margin:12px 0}#hourlyEmailDialog input{box-sizing:border-box;width:100%;padding:10px;border:1px solid #94a3b8;border-radius:7px}#hourlyEmailDialog .dialog-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:16px}#hourlyEmailDialog button{padding:10px 16px}#hourlyEmailStatus{white-space:pre-wrap}';document.head.append(hourlyExportStyle);
function hourlyExportRecords(){if(!FarnoorAccess.canAction('output','pdf'))throw Error('Report export permission is required.');const records=hourlyPDPrintRows();if(!records.length)throw Error('এই তারিখে সেভ করা ইনপুট নেই।');return structuredClone(records);}
async function hourlyReportImages(records){
 const frame=document.createElement('iframe');frame.title='রিপোর্টের ছবি প্রস্তুত হচ্ছে';frame.style.cssText='position:fixed;left:-20000px;top:0;width:1123px;height:794px;border:0;pointer-events:none';
 try{
  const ready=new Promise((resolve,reject)=>{frame.onload=resolve;frame.onerror=()=>reject(Error('রিপোর্ট প্রস্তুত করা যায়নি।'));});frame.srcdoc=hourlyPDPrintHTML(records);document.body.append(frame);await ready;
  const doc=frame.contentDocument;const style=doc.createElement('style');style.textContent='html,body{width:1123px;margin:0;background:#fff}.hourly-pd-print-sheet{width:1062px!important;min-height:0!important;margin:0 auto!important;padding:24px 0!important;box-sizing:border-box!important;box-shadow:none!important}';doc.head.append(style);
  await doc.fonts.ready;await personalLoadPdfLibrary(frame.contentWindow);
  const images=[],sheets=[...doc.querySelectorAll('.hourly-pd-print-sheet')];
  for(let i=0;i<sheets.length;i++){
   const canvas=await frame.contentWindow.html2pdf().set({margin:0,jsPDF:{unit:'mm',format:'a4',orientation:'landscape'},html2canvas:{scale:4,backgroundColor:'#ffffff',logging:false,useCORS:false,windowWidth:1123,scrollX:0,scrollY:0}}).from(sheets[i]).toCanvas().get('canvas');
   const jpg=canvas.toDataURL('image/jpeg',1),name='Line-Wise-Hourly-PD-'+records[0].date.replaceAll('/','-')+'-'+(i+1)+'.jpg';images.push({jpg,name});
  }
  return images;
 }finally{frame.remove();}
}
function hourlyDownloadImages(images){for(const image of images){const link=document.createElement('a');link.href=image.jpg;link.download=image.name;document.body.append(link);link.click();link.remove();}}
async function hourlyEmailRequest(route,payload){const response=await FarnoorAPI.request(route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw Error(result.error||'ইমেইল অনুরোধ সম্পন্ন হয়নি।');return result;}
function hourlyCloseEmail(){const dialog=document.getElementById('hourlyEmailDialog');if(dialog?.dataset.sending==='true')return;dialog?.close();dialog?.remove();hourlyEmailDraft=null;}
function hourlyShowEmail(records,images){
 document.getElementById('hourlyEmailDialog')?.remove();hourlyEmailDraft={records,images,requestId:crypto.randomUUID()};
 const dialog=document.createElement('dialog');dialog.id='hourlyEmailDialog';dialog.innerHTML='<form id="hourlyEmailForm"><h2>✉ রিপোর্টের ছবি ইমেইল করুন</h2><p>'+esc(records[0].date)+' · '+records.map(r=>esc(r.hourlyPD.fields.section)).join(', ')+'</p><label for="hourlyEmailTo">প্রাপকের ইমেইল (একাধিক হলে কমা দিন)</label><input id="hourlyEmailTo" type="email" multiple required maxlength="2600" placeholder="name@example.com"><p>নিচের '+images.length+'টি JPG ছবি সংযুক্ত হবে।</p>'+images.map(image=>'<img src="'+image.jpg+'" alt="'+esc(image.name)+'">').join('')+'<p id="hourlyEmailStatus" role="status"></p><div class="dialog-actions"><button type="button" data-hourly-email-cancel>Cancel</button><button type="submit" class="primary">পাঠানো নিশ্চিত করুন</button></div></form>';
 document.body.append(dialog);dialog.addEventListener('cancel',event=>{if(dialog.dataset.sending==='true')event.preventDefault();else hourlyEmailDraft=null;});dialog.querySelector('[data-hourly-email-cancel]').onclick=hourlyCloseEmail;dialog.querySelector('form').onsubmit=hourlySendEmail;dialog.showModal();
}
async function hourlySendEmail(event){
 event.preventDefault();const draft=hourlyEmailDraft,dialog=document.getElementById('hourlyEmailDialog');if(!draft||dialog.dataset.sending==='true')return;
 const to=[...new Set(document.getElementById('hourlyEmailTo').value.split(',').map(s=>s.trim().toLowerCase()).filter(Boolean))],status=document.getElementById('hourlyEmailStatus');if(!to.length||to.length>10){status.textContent='১–১০টি ইমেইল ঠিকানা দিন।';return;}
 dialog.dataset.sending='true';dialog.querySelectorAll('button,input').forEach(node=>node.disabled=true);status.textContent='ইমেইল পাঠানো হচ্ছে…';
 try{
  const sent=await hourlyEmailRequest('/api/hourly-output/email',{to,requestId:draft.requestId,reports:draft.records.map(r=>({id:r.id,version:r.updatedAt||r.createdAt})),images:draft.images.map(image=>({name:image.name,jpg:image.jpg.split(',')[1]}))});
  let job;for(let i=0;i<40;i++){await new Promise(resolve=>setTimeout(resolve,1500));job=await hourlyEmailRequest('/api/hourly-output/email/job',{key:sent.jobKey});if(job.status!=='processing')break;}
  if(job?.status==='accepted'){status.textContent='Gmail '+job.accepted+' জন প্রাপকের জন্য ইমেইল গ্রহণ করেছে।';dialog.querySelector('button[type=submit]').hidden=true;dialog.querySelector('[data-hourly-email-cancel]').textContent='Close';}
  else if(job?.status==='processing'){status.textContent='ইমেইল এখনও প্রক্রিয়াধীন। আবার পাঠালে একই অনুরোধের অবস্থা দেখা হবে।';}
  else throw Error(job?.error||'ইমেইল পাঠানো যায়নি।');
 }catch(error){status.textContent=error.message;}finally{dialog.dataset.sending='false';dialog.querySelectorAll('button,input').forEach(node=>node.disabled=false);}
}
document.getElementById('main').addEventListener('click',async event=>{
 const button=event.target.closest('[data-hourly-image],[data-hourly-email]');if(!button||activePage!==hourlyPDPage||hourlyExportBusy)return;
 hourlyExportBusy=true;button.disabled=true;const title=button.textContent;button.textContent='ছবি প্রস্তুত হচ্ছে…';
 try{const records=hourlyExportRecords(),images=await hourlyReportImages(records);if(button.hasAttribute('data-hourly-email'))hourlyShowEmail(records,images);else{hourlyDownloadImages(images);toast(images.length+'টি রিপোর্টের ছবি ডাউনলোড শুরু হয়েছে।');}}
 catch(error){toast(error.message);}finally{hourlyExportBusy=false;button.disabled=false;button.textContent=title;}
});
