'use strict';
(()=>{
 const nav=document.getElementById('navigation');
 if(!nav)return;
 let open=false;
 const addStyles=()=>{
  if(document.getElementById('vehiclesDepartmentStyles'))return;
  const style=document.createElement('style');
  style.id='vehiclesDepartmentStyles';
  style.textContent=`
   #navigation .vehicles-department{margin-bottom:9px}
   #navigation .vehicles-department>.department-button{--color:#b45f06;background:linear-gradient(135deg,#c97818,#9d4e08);color:#fff;border:1px solid #e3a65d;box-shadow:0 3px 6px #69401122}
   #navigation .vehicles-department>.department-button:hover{filter:brightness(1.06)}
   #navigation .vehicles-department .vehicles-empty{margin:5px 0 2px 13px;padding:10px 12px;border:1px solid #e4b978;border-radius:7px;background:#fff8eb;color:#754913;font-size:12px}
  `;
  document.head.append(style);
 };
 const inject=()=>{
  addStyles();
  if(nav.querySelector('.vehicles-department'))return;
  const reference=nav.querySelector('[data-department="requistion"]')?.closest('.department');
  if(!reference)return;
  const wrapper=document.createElement('div');
  wrapper.className='department vehicles-department';
  wrapper.innerHTML='<button type="button" class="department-button" data-vehicles-department aria-expanded="'+open+'"><span class="icon" aria-hidden="true">🚘</span><span>Vehicles</span><span class="chevron" aria-hidden="true">'+(open?'−':'+')+'</span></button><div class="vehicles-empty" '+(open?'':'hidden')+' role="status">No pages added yet.</div>';
  reference.before(wrapper);
 };
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-vehicles-department]');
  if(!button)return;
  event.preventDefault();
  event.stopImmediatePropagation();
  open=!open;
  inject();
  const wrapper=nav.querySelector('.vehicles-department');
  if(!wrapper)return;
  const empty=wrapper.querySelector('.vehicles-empty');
  const chevron=wrapper.querySelector('.chevron');
  button.setAttribute('aria-expanded',String(open));
  if(empty)empty.hidden=!open;
  if(chevron)chevron.textContent=open?'−':'+';
 },true);
 new MutationObserver(inject).observe(nav,{childList:true,subtree:true});
 inject();
})();