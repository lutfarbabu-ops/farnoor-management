'use strict';
// Encrypted, tab-session cache. Fresh authentication is required before display.
window.FarnoorWorkspaceCache=(()=>{
 const prefix='farnoor.cache.key:',maxAge=30*60*1000;let database;
 function db(){return database||=(new Promise((resolve,reject)=>{const request=indexedDB.open('farnoor-encrypted-workspace',1);request.onupgradeneeded=()=>request.result.createObjectStore('workspace');request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);}));}
 async function operation(mode,action){const database=await db();return new Promise((resolve,reject)=>{const tx=database.transaction('workspace',mode),request=action(tx.objectStore('workspace'));let result;request.onsuccess=()=>result=request.result;tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}
 async function key(userId,create=false){let value=sessionStorage.getItem(prefix+userId);if(!value&&create){value=JSON.stringify(Array.from(crypto.getRandomValues(new Uint8Array(32))));sessionStorage.setItem(prefix+userId,value);}return value?crypto.subtle.importKey('raw',new Uint8Array(JSON.parse(value)),'AES-GCM',false,['encrypt','decrypt']):null;}
 async function read(userId){try{const secret=await key(userId);if(!secret)return null;const item=await operation('readonly',store=>store.get(userId));if(!item||Date.now()-item.savedAt>maxAge)return null;const bytes=await crypto.subtle.decrypt({name:'AES-GCM',iv:item.iv},secret,item.bytes),body=JSON.parse(new TextDecoder().decode(bytes));if(body.userId!==userId||body.access?.role!=='super_admin')return null;return body;}catch{return null;}}
 async function write(userId,body){if(!userId||body.access?.role!=='super_admin')return;try{const text=JSON.stringify({...body,userId});if(text.length>40000000)return;const secret=await key(userId,true),iv=crypto.getRandomValues(new Uint8Array(12)),bytes=await crypto.subtle.encrypt({name:'AES-GCM',iv},secret,new TextEncoder().encode(text));await operation('readwrite',store=>store.put({savedAt:Date.now(),iv,bytes},userId));}catch{/* Cache failure must not interrupt online work. */}}
 async function clear(){try{for(const name of Object.keys(sessionStorage))if(name.startsWith(prefix))sessionStorage.removeItem(name);await operation('readwrite',store=>store.clear());}catch{}}
 return {read,write,clear};
})();
