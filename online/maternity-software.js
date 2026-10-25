'use strict';
const maternitySoftwarePages=['admin-maternity-software','admin-maternity-software-new-form'];
{
 const admin=DEPARTMENTS.find(department=>department.id==='admin');
 const before=admin.pages.findIndex(page=>page.id==='admin-maternity-file');
 admin.pages.splice(before<0?admin.pages.length:before,0,
  {id:maternitySoftwarePages[0],name:'Maternity Benefit Software',icon:'♡',shade:'#dcecff',navPath:['Maternity Benefit Software'],groupEntry:true,navigationOnly:true,permissionPage:'admin-documents'},
  {id:maternitySoftwarePages[1],name:'New Form',icon:'✎',shade:'#d9f3e6',navPath:['Maternity Benefit Software'],navigationOnly:true,permissionPage:'admin-documents'});
 submenuLooks.set('group:admin:Maternity Benefit Software',{hue:210,saturation:65,lightness:92,shape:'rounded'});
 submenuLooks.set('page:'+maternitySoftwarePages[1],{hue:155,saturation:62,lightness:93,shape:'rail'});
}
adminHrForms.maternity.pages.push(...maternitySoftwarePages);
let maternitySoftwareOpen=false;
const maternitySoftwarePreviousRender=renderPage;
renderPage=function(...args){
 if(!maternitySoftwarePages.includes(activePage)){maternitySoftwareOpen=false;return maternitySoftwarePreviousRender.apply(this,args);}
 if(!maternitySoftwareOpen){maternityBenefitDraft={};maternityBenefitId=null;maternityBenefitPending=null;maternityProfileLastValues={};maternitySoftwareOpen=true;}
 renderMaternityBenefitEntry();
 const main=document.getElementById('main');
 main.querySelector('.page-heading h2').textContent='Maternity Benefit Software';
 const form=main.querySelector('#maternityBenefitForm');
 form.setAttribute('aria-label','Maternity Benefit Software New Form');
 const title=document.createElement('h3');title.textContent='New Form';title.style.cssText='margin:0 0 18px;text-align:center';form.prepend(title);
 const nav=document.createElement('nav');nav.className='no-print maternity-software-navigation';nav.setAttribute('aria-label','Maternity Benefit Software pages');
 nav.innerHTML='<button type="button" data-maternity-software-new style="background:#d9f3e6;color:#166348;border-color:#82bea3;font-weight:700">✎ New Form</button>';main.prepend(nav);
 main.querySelector('.page-action-toolbar')?.remove();
};
document.getElementById('main').addEventListener('click',event=>{
 if(!event.target.closest('[data-maternity-software-new]'))return;
 maternitySoftwareOpen=false;goPage(maternitySoftwarePages[1]);
});
document.getElementById('main').addEventListener('keydown',event=>{
 if(!maternitySoftwarePages.includes(activePage)||!event.target.matches('[data-maternity-benefit]')||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;
 event.preventDefault();const fields=[...document.querySelectorAll('#maternityBenefitForm [data-maternity-benefit]')],index=fields.indexOf(event.target),next=fields[index+(event.key==='ArrowUp'?-1:1)];
 if(next){next.focus();next.select();}else if(event.key==='Enter')document.getElementById('maternityBenefitSave')?.focus();
});
