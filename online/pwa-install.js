'use strict';
(()=>{
 let promptEvent=null,registration=null,installed=false;
 const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
 const ios=()=>/iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const android=()=>/Android/i.test(navigator.userAgent);
 const note=document.createElement('p');note.className='pwa-connection no-print';note.setAttribute('role','status');note.setAttribute('aria-live','polite');note.textContent='ইন্টারনেট সংযোগ নেই। তথ্য দেখা ও সেভ করতে আবার অনলাইনে আসুন।';
 const updateNote=document.createElement('p');updateNote.className='pwa-update no-print';updateNote.setAttribute('role','status');updateNote.hidden=true;updateNote.textContent='অ্যাপের নতুন সংস্করণ প্রস্তুত। কাজ সেভ করে অ্যাপের সব উইন্ডো বন্ধ করে আবার খুলুন।';
 const button=document.createElement('button');button.type='button';button.className='pwa-install-button no-print';button.textContent='অ্যাপ ইনস্টল';button.setAttribute('aria-label','Farnoor অ্যাপ ইনস্টল করুন');
 const dialog=document.createElement('dialog');dialog.className='pwa-dialog no-print';dialog.setAttribute('aria-labelledby','pwaInstallTitle');
 const title=document.createElement('h2');title.id='pwaInstallTitle';title.textContent='Farnoor অ্যাপ ইনস্টল';
 const steps=document.createElement('ol');
 const accountNote=document.createElement('p');accountNote.className='pwa-dialog-note';accountNote.textContent='আগের ইউজারনেম-পাসওয়ার্ড ও অনলাইন তথ্যই ব্যবহার হবে। নতুন ইনস্টলে প্রথমবার লগইন করতে হতে পারে। তথ্য দেখা ও সেভ করতে ইন্টারনেট প্রয়োজন।';
 const close=document.createElement('button');close.type='button';close.textContent='বন্ধ করুন';close.onclick=()=>dialog.close();dialog.append(title,steps,accountNote,close);
 function sync(){note.hidden=navigator.onLine;button.hidden=installed||standalone();}
 function showInstructions(){steps.replaceChildren();const lines=ios()?['Safari দিয়ে এই সফটওয়্যার খুলুন।','Share মেনু থেকে Add to Home Screen নির্বাচন করুন।','Open as Web App থাকলে চালু রাখুন, তারপর Add চাপুন।']:android()?['Chrome দিয়ে এই সফটওয়্যার খুলুন।','Chrome-এর তিন ডট মেনুতে Install app অথবা Add to Home screen নির্বাচন করুন।','ইনস্টল নিশ্চিত করুন। অ্যাপের আইকন হোমস্ক্রিনে দেখা যাবে।']:['Chrome বা Microsoft Edge দিয়ে এই সফটওয়্যার খুলুন।','অ্যাড্রেস বারের Install চিহ্ন অথবা মেনুর Install page as app নির্বাচন করুন।','Install নিশ্চিত করুন। কম্পিউটারের অ্যাপ তালিকা থেকে Farnoor খুলতে পারবেন।'];for(const line of lines){const li=document.createElement('li');li.textContent=line;steps.append(li);}dialog.showModal();}
 button.onclick=async()=>{if(promptEvent){const event=promptEvent;promptEvent=null;try{await event.prompt();const choice=await event.userChoice;if(choice.outcome==='accepted'){installed=true;button.hidden=true;}}catch{showInstructions();}}else showInstructions();};
 window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();promptEvent=event;sync();});
 window.addEventListener('appinstalled',()=>{promptEvent=null;installed=true;button.hidden=true;});
 window.addEventListener('online',sync);window.addEventListener('offline',sync);
 function mount(){const account=document.querySelector('.account');if(account)account.insertBefore(button,document.getElementById('logout'));else{const host=document.createElement('div');host.className='pwa-login-install no-print';host.append(button);(document.querySelector('.auth-brand')||document.querySelector('main')||document.body).after(host);}document.body.append(dialog);document.body.prepend(note,updateNote);sync();
  if('serviceWorker' in navigator&&location.protocol==='https:'){
   navigator.serviceWorker.register(new URL('pwa-sw.js',document.baseURI),{scope:new URL('./',document.baseURI).pathname,updateViaCache:'none'}).then(value=>{registration=value;const waiting=()=>{updateNote.hidden=!registration.waiting;};waiting();registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)waiting();});});}).catch(()=>{/* Installation hints and online use still work if worker registration is unavailable. */});
  }
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
