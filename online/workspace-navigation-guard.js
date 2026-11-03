'use strict';
// Leaving Super Admin must also leave its background-render state. Otherwise
// an in-flight admin request or workspace refresh can replace the opened page.
document.getElementById('navigation').addEventListener('click',event=>{
 if(event.target.closest('[data-department]'))adminView=false;
},true);
