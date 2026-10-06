'use strict';
window.FarnoorPresence=(()=>{
 const id=crypto.randomUUID();let lastSent=0,busy=false,leaving=false;
 async function heartbeat(){if(leaving||busy||!dataReady||!sessionActive||document.hidden||!navigator.onLine||Date.now()-lastSent<20000)return;busy=true;try{const response=await FarnoorAPI.request('/api/presence/heartbeat',{method:'POST',body:JSON.stringify({sessionId:id})});if(response.ok)lastSent=Date.now();}catch{}finally{busy=false;}}
 async function leave(){leaving=true;try{await FarnoorAPI.request('/api/presence/leave',{method:'POST',body:JSON.stringify({sessionId:id}),keepalive:true});}catch{}}
 document.addEventListener('visibilitychange',()=>{if(!document.hidden){leaving=false;heartbeat();}});
 window.addEventListener('online',heartbeat);
 window.addEventListener('pagehide',leave);
 window.addEventListener('pageshow',()=>{leaving=false;heartbeat();});
 setInterval(heartbeat,25000);heartbeat();
 return {heartbeat,leave,id};
})();
