'use strict';
(()=>{
 const nav=document.getElementById('navigation');
 if(!nav)return;
 let open=false,listOpen=false,currentPage='';
 const pages=[
  {id:'new-vehicles',label:'New Vehicles',icon:'🚘',color:'#168264'},
  {id:'registration-certificate',label:'Registration Certificate (Blue Book)',icon:'📘',color:'#2865a5'},
  {id:'tax-token',label:'Tax Token',icon:'🧾',color:'#b96812'},
  {id:'fitness-certificate',label:'Fitness Certificate',icon:'✓',color:'#7546a8'}
 ];
 const mainPage=id=>id==='vehicles-list'?{label:'Vehicles List',icon:'🚗'}:id==='driving-license'?{label:'Driving License',icon:'🪪'}:pages.find(page=>page.id===id);
 const addStyles=()=>{
  if(document.getElementById('vehiclesDepartmentStyles'))return;
  const style=document.createElement('style');
  style.id='vehiclesDepartmentStyles';
  style.textContent=`
   #navigation .vehicles-department{margin-bottom:9px}
   #navigation .vehicles-department>.department-button{--color:#b45f06;background:linear-gradient(135deg,#c97818,#9d4e08);color:#fff;border:1px solid #e3a65d;box-shadow:0 3px 6px #69401122}
   #navigation .vehicles-department>.department-button:hover{filter:brightness(1.06)}
   #navigation .vehicles-department .vehicles-menu{display:grid;gap:5px;padding:7px 0 2px 13px}
   #navigation .vehicles-department .vehicles-submenu{display:grid;gap:5px;padding:5px 0 3px 12px}
   #navigation .vehicles-department .vehicles-nav-button{width:100%;display:flex;align-items:center;gap:8px;padding:8px 9px;border:1px solid #fff;border-radius:7px;text-align:left;color:#fff;box-shadow:0 2px 4px #17312b14;font-size:12px}
   #navigation .vehicles-department .vehicles-nav-button:hover{filter:brightness(1.08)}
   #navigation .vehicles-department .vehicles-nav-button[aria-current="page"]{outline:2px solid #234f40}
   #navigation .vehicles-department .vehicles-nav-button .vehicles-nav-icon{width:21px;text-align:center;font-size:16px}
   #navigation .vehicles-department .vehicles-group-button{background:#167d78}
   #navigation .vehicles-department .vehicles-driving-button{background:#5540a1}
   #navigation .vehicles-department .vehicles-sub-button{justify-content:flex-start}
   .vehicles-content{max-width:1100px}
   .vehicles-content h2{color:#173b56}
   .vehicles-content .vehicles-actions{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}
   .vehicles-content .vehicles-action{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid transparent;border-radius:8px;color:#fff;font-weight:600;cursor:pointer}
   .vehicles-content .vehicles-action:hover{filter:brightness(1.08)}
   .vehicles-content .vehicles-note{margin-top:16px;padding:18px;border:1px solid #d5e0e7;border-radius:10px;background:#fff;color:#536979}
  `;
  document.head.append(style);
 };
 const syncMenu=()=>{
  const wrapper=nav.querySelector('.vehicles-department');
  if(!wrapper)return;
  const toggle=wrapper.querySelector('[data-vehicles-department]');
  const list=wrapper.querySelector('[data-vehicles-menu]');
  const listButton=wrapper.querySelector('[data-vehicles-page="vehicles-list"]');
  const submenu=wrapper.querySelector('[data-vehicles-submenu]');
  if(toggle){toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('.chevron').textContent=open?'−':'+';}
  if(list)list.hidden=!open;
  if(listButton){listButton.setAttribute('aria-expanded',String(listOpen));listButton.setAttribute('aria-current',currentPage==='vehicles-list'?'page':'false');listButton.querySelector('.chevron').textContent=listOpen?'−':'+';}
  if(submenu)submenu.hidden=!listOpen;
  wrapper.querySelectorAll('[data-vehicles-page]').forEach(button=>{
   const id=button.dataset.vehiclesPage;
   if(id!=='vehicles-list')button.setAttribute('aria-current',currentPage===id?'page':'false');
  });
 };
 const renderMain=()=>{
  const page=mainPage(currentPage),main=document.getElementById('main');
  if(!page||!main)return;
  const buttons=pages.map(item=>'<button type="button" class="vehicles-action" style="background:'+item.color+'" data-vehicles-page="'+item.id+'"><span aria-hidden="true">'+item.icon+'</span>'+item.label+'</button>').join('');
  const shortcuts=currentPage==='driving-license'?'':('<div class="vehicles-actions">'+buttons+'</div>');
  main.innerHTML='<section class="vehicles-content"><span class="eyebrow">VEHICLES</span><h2><span aria-hidden="true">'+page.icon+'</span> '+page.label+'</h2>'+shortcuts+'<div class="vehicles-note" role="status">'+(currentPage==='vehicles-list'?'Choose a vehicle record section above.':'No information has been added to this page yet.')+'</div></section>';
 };
 const inject=()=>{
  addStyles();
  if(nav.querySelector('.vehicles-department'))return;
  const reference=nav.querySelector('[data-department="requistion"]')?.closest('.department');
  if(!reference)return;
  const wrapper=document.createElement('div');
  wrapper.className='department vehicles-department';
  wrapper.innerHTML='<button type="button" class="department-button" data-vehicles-department aria-expanded="false"><span class="icon" aria-hidden="true">🚘</span><span>Vehicles</span><span class="chevron" aria-hidden="true">+</span></button><div class="vehicles-menu" data-vehicles-menu hidden><button type="button" class="vehicles-nav-button vehicles-group-button" data-vehicles-page="vehicles-list" aria-expanded="false"><span class="vehicles-nav-icon" aria-hidden="true">🚗</span><span>Vehicles List</span><span class="chevron" aria-hidden="true">+</span></button><div class="vehicles-submenu" data-vehicles-submenu hidden>'+pages.map(item=>'<button type="button" class="vehicles-nav-button vehicles-sub-button" data-vehicles-page="'+item.id+'" style="background:'+item.color+'"><span class="vehicles-nav-icon" aria-hidden="true">'+item.icon+'</span><span>'+item.label+'</span></button>').join('')+'</div><button type="button" class="vehicles-nav-button vehicles-driving-button" data-vehicles-page="driving-license"><span class="vehicles-nav-icon" aria-hidden="true">🪪</span><span>Driving License</span></button></div>';
  reference.before(wrapper);
  syncMenu();
 };
 document.addEventListener('click',event=>{
  const toggle=event.target.closest('[data-vehicles-department]');
  if(toggle){event.preventDefault();event.stopImmediatePropagation();open=!open;inject();syncMenu();return;}
  const button=event.target.closest('[data-vehicles-page]');
  if(!button||(!nav.contains(button)&&!document.getElementById('main')?.contains(button)))return;
  event.preventDefault();event.stopImmediatePropagation();
  const id=button.dataset.vehiclesPage;
  open=true;
  if(id==='vehicles-list')listOpen=!listOpen;
  else if(pages.some(page=>page.id===id))listOpen=true;
  currentPage=id;
  inject();syncMenu();renderMain();
 },true);
 new MutationObserver(inject).observe(nav,{childList:true,subtree:true});
 inject();
})();