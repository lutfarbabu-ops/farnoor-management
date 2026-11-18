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
 const canEditVehicles=()=>accessInfo?.role==='super_admin'||FarnoorAccess?.canAction('vehicles','edit')===true;
 const vehicleRows=()=>Array.isArray(state?.records?.vehicles)?state.records.vehicles:[];
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
   .vehicles-form{max-width:700px;margin:18px 0;padding:20px;border:1px solid #d5e0e7;border-radius:10px;background:#fff;display:grid;gap:12px}
   .vehicles-form label{display:grid;grid-template-columns:minmax(180px,34%) minmax(0,1fr);align-items:center;gap:12px}
   .vehicles-form input{width:100%;box-sizing:border-box}
   .vehicles-form button{justify-self:end}
   .vehicles-records{margin-top:22px;overflow-x:auto}
   .vehicles-records table{width:100%;border-collapse:collapse;background:#fff}
   .vehicles-records th,.vehicles-records td{padding:9px;border:1px solid #ccd8df;text-align:center}
   @media(max-width:620px){.vehicles-form label{grid-template-columns:1fr;gap:4px}}
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
 const renderVehicleForm=()=>{
  const rows=vehicleRows();
  const editable=canEditVehicles();
  const form='<form id="vehiclesNewEntryForm" class="vehicles-form no-print">'+
   '<label for="vehiclesNo"><span>Vehicles No:</span><input id="vehiclesNo" name="vehicleNo" required maxlength="80" autocomplete="off"></label>'+
   '<label for="blueBookNo"><span>Blue Book No:</span><input id="blueBookNo" name="blueBookNo" maxlength="120" autocomplete="off"></label>'+
   '<label for="taxTokenNo"><span>Tax Token No:</span><input id="taxTokenNo" name="taxTokenNo" maxlength="120" autocomplete="off"></label>'+
   '<label for="fitnessCertificateNo"><span>Fitness Certificate:</span><input id="fitnessCertificateNo" name="fitnessCertificateNo" maxlength="120" autocomplete="off"></label>'+
   '<button type="submit" class="primary" '+(!editable?'disabled':'')+'>Save</button></form>';
  const table=rows.length?'<div class="vehicles-records"><table><thead><tr><th>Vehicles No</th><th>Blue Book No</th><th>Tax Token No</th><th>Fitness Certificate</th></tr></thead><tbody>'+
   rows.map(row=>'<tr>'+[row.vehicleNo,row.blueBookNo,row.taxTokenNo,row.fitnessCertificateNo].map(value=>'<td>'+esc(value||'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>':'<div class="vehicles-note" role="status">No vehicles saved yet.</div>';
  return form+(!editable?'<p role="status">Vehicles edit permission is required to save.</p>':'')+table;
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
   else if(currentPage==='driving-license')note='No information has been added to this page yet.';
  }
  const body=currentPage==='new-vehicles'?renderVehicleForm():'<div class="vehicles-note" role="status">'+note+'</div>';
  main.innerHTML='<section class="vehicles-content"><span class="eyebrow">VEHICLES</span><h2><span aria-hidden="true">'+icon+'</span> '+heading+'</h2><div class="vehicles-main-pages">'+mainButtons+'</div>'+sectionButtons+body+'</section>';
 };
 const saveVehicle=async form=>{
  if(!canEditVehicles())return toast('Vehicles edit permission is required.');
  if(!dataReady)return toast('Wait for saved data to load.');
  const data=new FormData(form);
  const vehicleNo=String(data.get('vehicleNo')||'').trim();
  if(!vehicleNo)return toast('Vehicles No লিখুন।');
  if(vehicleRows().some(item=>String(item.vehicleNo||'').trim().toLowerCase()===vehicleNo.toLowerCase()))return toast('This Vehicles No is already saved.');
  const row={id:crypto.randomUUID(),vehicleNo,blueBookNo:String(data.get('blueBookNo')||'').trim(),taxTokenNo:String(data.get('taxTokenNo')||'').trim(),fitnessCertificateNo:String(data.get('fitnessCertificateNo')||'').trim(),createdAt:new Date().toISOString()};
  const next=structuredClone(state);
  next.records={...next.records,vehicles:[row,...vehicleRows()]};
  const button=form.querySelector('[type="submit"]');
  if(button){button.disabled=true;button.textContent='Saving…';}
  if(await commit(next)){
   currentPage='new-vehicles';
   renderMain();
   toast('Vehicle saved online.');
  }else if(button){button.disabled=false;button.textContent='Save';}
 };
 document.addEventListener('click',event=>{
  const department=event.target.closest('[data-vehicles-department]');
  if(department){event.preventDefault();event.stopImmediatePropagation();currentPage='';renderMain();return;}
  const mainPage=event.target.closest('[data-vehicle-main-page]');
  if(mainPage){event.preventDefault();event.stopImmediatePropagation();currentPage=mainPage.dataset.vehicleMainPage;renderMain();return;}
  const section=event.target.closest('[data-vehicles-page]');
  if(section){event.preventDefault();event.stopImmediatePropagation();currentPage=section.dataset.vehiclesPage;renderMain();}
 },true);
 document.addEventListener('submit',event=>{
  if(event.target?.id!=='vehiclesNewEntryForm')return;
  event.preventDefault();event.stopImmediatePropagation();void saveVehicle(event.target);
 },true);
 new MutationObserver(inject).observe(nav,{childList:true,subtree:true});
 inject();
})();