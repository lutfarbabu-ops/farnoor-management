'use strict';
(()=>{
 const nav=document.getElementById('navigation');
 if(!nav)return;
 let currentPage='';
 const vehicleSections=[
  {id:'new-vehicles',label:'New Vehicles',icon:'🚘',color:'#168264'},
  {id:'registration-certificate',label:'Registration Certificate (Blue Book)',icon:'📘',color:'#2865a5'},
  {id:'tax-token',label:'Tax Token',icon:'🧾',color:'#b96812'},
  {id:'fitness-certificate',label:'Fitness Certificate',icon:'✓',color:'#7546a8'}
 ];
 const vehicleMainPages=[
  {id:'vehicles-list',label:'Vehicles List',icon:'🚗',color:'#167d78'},
  {id:'driving-license',label:'Driving License',icon:'🪪',color:'#5540a1'}
 ];
 const getPage=id=>[...vehicleMainPages,...vehicleSections].find(page=>page.id===id);
 const addStyles=()=>{
  if(document.getElementById('vehiclesDepartmentStyles'))return;
  const style=document.createElement('style');
  style.id='vehiclesDepartmentStyles';
  style.textContent=`
   #navigation .vehicles-department{margin-bottom:9px}
   #navigation .vehicles-department>.department-button{--color:#b45f06;background:linear-gradient(135deg,#c97818,#9d4e08);color:#fff;border:1px solid #e3a65d;box-shadow:0 3px 6px #69401122}
   #navigation .vehicles-department>.department-button:hover{filter:brightness(1.06)}
   #navigation .vehicles-department .department-button .icon{font-size:20px}
   .vehicles-content{max-width:1100px}
   .vehicles-content h2{color:#173b56}
   .vehicles-content .vehicles-main-pages,.vehicles-content .vehicles-sections{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}
   .vehicles-content .vehicles-action{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid transparent;border-radius:8px;color:#fff;font-weight:600;cursor:pointer}
   .vehicles-content .vehicles-action:hover{filter:brightness(1.08)}
   .vehicles-content .vehicles-action[aria-current="page"]{outline:2px solid #234f40}
   .vehicles-content .vehicles-note{margin-top:16px;padding:18px;border:1px solid #d5e0e7;border-radius:10px;background:#fff;color:#536979}
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
  wrapper.innerHTML='<button type="button" class="department-button" data-vehicles-department aria-label="Open Vehicles"><span class="icon" aria-hidden="true">🚘</span><span>Vehicles</span></button>';
  reference.before(wrapper);
 };
 const renderMain=()=>{
  const main=document.getElementById('main');
  if(!main)return;
  const selected=getPage(currentPage);
  const mainButtons=vehicleMainPages.map(page=>'<button type="button" class="vehicles-action" style="background:'+page.color+'" data-vehicle-main-page="'+page.id+'" aria-current="'+(currentPage===page.id?'page':'false')+'"><span aria-hidden="true">'+page.icon+'</span>'+page.label+'</button>').join('');
  let heading='Vehicles',icon='🚘',sectionButtons='',note='Choose a page above.';
  if(selected){
   heading=selected.label;icon=selected.icon;
   if(currentPage==='vehicles-list'||vehicleSections.some(page=>page.id===currentPage)){
    sectionButtons='<div class="vehicles-sections">'+vehicleSections.map(page=>'<button type="button" class="vehicles-action" style="background:'+page.color+'" data-vehicles-page="'+page.id+'" aria-current="'+(currentPage===page.id?'page':'false')+'"><span aria-hidden="true">'+page.icon+'</span>'+page.label+'</button>').join('')+'</div>';
   }
   if(currentPage==='vehicles-list')note='Choose a vehicle record section above.';
   else if(currentPage==='driving-license'||vehicleSections.some(page=>page.id===currentPage))note='No information has been added to this page yet.';
  }
  main.innerHTML='<section class="vehicles-content"><span class="eyebrow">VEHICLES</span><h2><span aria-hidden="true">'+icon+'</span> '+heading+'</h2><div class="vehicles-main-pages">'+mainButtons+'</div>'+sectionButtons+'<div class="vehicles-note" role="status">'+note+'</div></section>';
 };
 document.addEventListener('click',event=>{
  const department=event.target.closest('[data-vehicles-department]');
  if(department){event.preventDefault();event.stopImmediatePropagation();currentPage='';renderMain();return;}
  const mainPage=event.target.closest('[data-vehicle-main-page]');
  if(mainPage){event.preventDefault();event.stopImmediatePropagation();currentPage=mainPage.dataset.vehicleMainPage;renderMain();return;}
  const section=event.target.closest('[data-vehicles-page]');
  if(section){event.preventDefault();event.stopImmediatePropagation();currentPage=section.dataset.vehiclesPage;renderMain();}
 },true);
 new MutationObserver(inject).observe(nav,{childList:true,subtree:true});
 inject();
})();