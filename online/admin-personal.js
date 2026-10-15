'use strict';
const personalFileButtons=[
 ['new','নিউ এন্ট্রি','✚','#d9f3e6','#166348'],
 ['file-1','ফাইল-1','①','#dcecff','#24558b'],
 ['file-2','ফাইল-2','②','#eee2ff','#7042a1'],
 ['file-3','ফাইল-3','③','#ffe2e9','#a43b5e'],
 ['file-4','ফাইল-4','④','#fff0ce','#8b6014'],
 ['file-5','ফাইল-5','⑤','#d6f1f4','#176774'],
 ['file-6','ফাইল-6','⑥','#e7efcf','#536b22'],
 ['file-7','ফাইল-7','⑦','#ffe6d4','#9b5525'],
 ['staff-3','Staff-3','♙','#e1e5ff','#4c5093'],
 ['electrican','Electrican','ϟ','#f4e0f4','#8a3a88']
];
let personalFileSelected='';
const personalFileRenderPage=renderPage;
renderPage=function(...args){
 if(activePage!=='admin-personal-file')return personalFileRenderPage.apply(this,args);
 const selected=personalFileButtons.find(item=>item[0]===personalFileSelected);
 $('#main').innerHTML=heading('Admin','Personal file','')+`<section class="panel"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px">${personalFileButtons.map(([id,name,icon,bg,fg])=>`<button type="button" data-personal-file="${id}" aria-pressed="${id===personalFileSelected}" style="display:flex;align-items:center;gap:12px;min-height:66px;padding:14px 18px;border:1px solid ${fg}55;border-radius:12px;background:${bg};color:${fg};font-size:17px;font-weight:700;${id===personalFileSelected?'box-shadow:0 0 0 2px '+fg+';':''}"><span aria-hidden="true" style="font-size:27px">${icon}</span><span>${name}</span></button>`).join('')}</div></section>${selected?`<section class="panel" aria-label="${esc(selected[1])}"><h3 style="color:${selected[4]}">${esc(selected[1])}</h3></section>`:''}`;
 if(typeof applyActionControls==='function')applyActionControls();
};
$('#main').addEventListener('click',event=>{
 const button=event.target.closest('[data-personal-file]');
 if(!button||activePage!=='admin-personal-file')return;
 personalFileSelected=button.dataset.personalFile;renderPage();
});
