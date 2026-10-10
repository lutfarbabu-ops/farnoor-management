'use strict';
// Read-only source reports retain every original cell, including empty values.
const hrSourcePriorRender=hrRender;
let hrSourceSearch='',hrSourceOffset=0,hrSourcePage='';
const hrSourceBundles=()=>hrList().filter(r=>r.hrSource==='AutoPro'&&Array.isArray(r.hrSourceRows));
function hrSourceRender(){
 const bundles=hrSourceBundles();if(!bundles.length)return;
 if(!hrList().some(row=>!Array.isArray(row.hrSourceRows))) $('#main .panel')?.remove();
 if(hrSourcePage!==activePage){hrSourceSearch='';hrSourceOffset=0;hrSourcePage=activePage;}
 const records=bundles.flatMap(bundle=>bundle.hrSourceRows.map(values=>({headers:bundle.hrSourceHeaders,values})));
 const matched=records.filter(r=>r.values.join(' ').toLowerCase().includes(hrSourceSearch.toLowerCase()));
 const headers=[...new Set(bundles.flatMap(bundle=>bundle.hrSourceHeaders))];
 const visible=matched.slice(hrSourceOffset,hrSourceOffset+100);
 $('#main').insertAdjacentHTML('beforeend','<section class="panel"><h3>AutoPro · Original '+esc(pageInfo(activePage).page.name)+'</h3><p>Original saved records. Blank fields are preserved. This archive does not change attendance or leave balances.</p><label>Search original records<input type="search" data-hr-source-search value="'+esc(hrSourceSearch)+'"></label><p>'+matched.length+' / '+records.length+' records · Showing '+(visible.length?hrSourceOffset+1:0)+'–'+(hrSourceOffset+visible.length)+'</p><div class="table-wrap"><table><thead><tr>'+headers.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+visible.map(r=>'<tr>'+headers.map(h=>'<td>'+esc(r.values[r.headers.indexOf(h)]??'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><button type="button" data-hr-source-prev '+(hrSourceOffset===0?'disabled':'')+'>Previous 100</button> <button type="button" data-hr-source-next '+(hrSourceOffset+100>=matched.length?'disabled':'')+'>Next 100</button></section>');
}
hrRender=function(){hrSourcePriorRender();hrSourceRender();};
document.addEventListener('input',event=>{if(event.target.matches('[data-hr-source-search]')){const caret=event.target.selectionStart;hrSourceSearch=event.target.value;hrSourceOffset=0;hrRender();const input=document.querySelector('[data-hr-source-search]');input.focus();input.setSelectionRange(caret,caret);}});
document.addEventListener('click',event=>{if(event.target.closest('[data-hr-source-next]')){hrSourceOffset+=100;hrRender();}if(event.target.closest('[data-hr-source-prev]')){hrSourceOffset=Math.max(0,hrSourceOffset-100);hrRender();}});
