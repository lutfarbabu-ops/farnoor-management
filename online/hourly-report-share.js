'use strict';
const hourlySharePreviousView=hourlyPDPrintView;
hourlyPDPrintView=function(){return hourlySharePreviousView().replace('<button type="button" class="hourly-email-button"','<button type="button" class="hourly-share-button" data-hourly-share data-page-action-required="pdf">↗ Share Image</button><button type="button" class="hourly-email-button"');};
const hourlyShareStyle=document.createElement('style');hourlyShareStyle.textContent='.hourly-share-button{background:#dcfce7!important;color:#166534!important;border:1px solid #4ade80!important}#hourlyShareDialog{width:min(900px,92vw);max-height:90vh;overflow:auto;border:0;border-radius:12px;padding:20px}#hourlyShareDialog img{display:block;width:100%;height:auto;margin:12px 0}#hourlyShareDialog .dialog-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}#hourlyShareDialog::backdrop{background:#071e3acc}';document.head.append(hourlyShareStyle);
function hourlyShareFiles(images){return images.map(image=>new File([Uint8Array.from(atob(image.jpg.split(',')[1]),c=>c.charCodeAt(0))],image.name,{type:'image/jpeg'}));}
function hourlyCanShareFiles(files){try{return typeof navigator.share==='function'&&typeof navigator.canShare==='function'&&navigator.canShare({files});}catch{return false;}}
function hourlyShowShare(images){
 const files=hourlyShareFiles(images),supported=hourlyCanShareFiles(files);
 document.getElementById('hourlyShareDialog')?.close();
 const dialog=document.createElement('dialog');dialog.id='hourlyShareDialog';
 dialog.innerHTML='<h2>Share Image</h2><p>'+(supported?'Share চাপুন, তারপর অ্যাপ ও প্রাপক বেছে নিন।':'এই ব্রাউজারে সরাসরি ছবি শেয়ার সমর্থিত নয়। JPG ডাউনলোড করে অ্যাপে সংযুক্ত করুন।')+'</p>'+images.map(image=>'<img src="'+image.jpg+'" alt="Report image to share">').join('')+'<p role="status"></p><div class="dialog-actions">'+(supported?'<button type="button" data-share-send class="hourly-share-button">↗ Share</button>':'')+'<button type="button" data-share-download>Download JPG</button><button type="button" data-share-close>Close</button></div>';
 dialog.querySelector('[data-share-close]').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>dialog.remove(),{once:true});
 dialog.querySelector('[data-share-download]').onclick=()=>{for(const image of images){const link=document.createElement('a');link.href=image.jpg;link.download=image.name;document.body.append(link);link.click();link.remove();}};
 const send=dialog.querySelector('[data-share-send]');if(send)send.onclick=async()=>{if(!FarnoorAccess.canAction('output','pdf'))return toast('Report export permission is required.');send.disabled=true;const status=dialog.querySelector('[role="status"]');status.textContent='';try{await navigator.share({files,title:'Line Wise Hourly Production'});status.textContent='ছবি শেয়ার করার জন্য নির্বাচিত অ্যাপে দেওয়া হয়েছে।';}catch(error){if(error.name!=='AbortError')status.textContent='শেয়ার করা যায়নি। আবার Share চাপুন অথবা Download JPG ব্যবহার করুন।';}finally{send.disabled=false;}};
 document.body.append(dialog);dialog.showModal();
}
document.getElementById('main').addEventListener('click',async event=>{const button=event.target.closest('[data-hourly-share]');if(!button||activePage!==hourlyPDPage||hourlyExportBusy)return;hourlyExportBusy=true;button.disabled=true;const title=button.textContent;button.textContent='ছবি প্রস্তুত হচ্ছে…';try{const records=hourlyExportRecords();hourlyShowShare(await hourlyReportImages(records));}catch(error){toast(error.message);}finally{hourlyExportBusy=false;button.disabled=false;button.textContent=title;}});
