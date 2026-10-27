'use strict';
// Only a public offline notice and icons are cached. Never cache workspace,
// credentials, API responses, authenticated pages, or editable form contents.
const PWA_CACHE_PREFIX='farnoor-pwa-public-';
const PWA_CACHE=PWA_CACHE_PREFIX+'20261027-1';
const PWA_PUBLIC_FILES=['pwa-offline.html','pwa/icon-180.png','pwa/icon-192.png','pwa/icon-512.png'];
const pwaBase=new URL('./',self.location.href);
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(PWA_CACHE).then(cache=>cache.addAll(PWA_PUBLIC_FILES.map(file=>new Request(new URL(file,pwaBase),{cache:'reload'})))));
 // Updated workers wait until old app windows close; never reload a working form.
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PWA_CACHE_PREFIX)&&key!==PWA_CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==pwaBase.origin)return;
 if(request.mode==='navigate'&&[pwaBase.pathname,pwaBase.pathname+'index.html',pwaBase.pathname+'login.html'].includes(url.pathname)){
  event.respondWith(fetch(request).catch(async()=>{
   const fallback=await caches.match(new URL('pwa-offline.html',pwaBase));
   return fallback||new Response('Internet connection required.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }));
  return;
 }
 // Offline artwork only. No cache handling for application scripts, forms or APIs.
 if(PWA_PUBLIC_FILES.some(file=>new URL(file,pwaBase).href===url.href))event.respondWith(fetch(request).catch(()=>caches.match(request)));
});
