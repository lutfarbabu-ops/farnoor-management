'use strict';
(()=>{
 const previousGoPage=window.goPage;
 if(typeof previousGoPage!=='function')return;
 let currentPageId=null;
 let outputLoadPromise=null;
 window.goPage=function(id){
  currentPageId=id;
  previousGoPage(id);
  if(id!=='production-line-wise-hourly-pd'||window.FarnoorLoadedLargeGroups?.includes('output'))return;
  const main=document.querySelector('#main');
  if(main)main.innerHTML='<section class="panel" role="status" style="padding:28px;text-align:center">Loading saved Line Wise records…</section>';
  if(!outputLoadPromise){
   outputLoadPromise=ensureWorkspacePageData('output').finally(()=>{outputLoadPromise=null;});
  }
  void outputLoadPromise.then(()=>{
   if(currentPageId===id)previousGoPage(id);
  }).catch(error=>{
   if(currentPageId===id){
    const target=document.querySelector('#main');
    if(target)target.innerHTML='<section class="panel" role="alert" style="padding:28px;color:#8b1e2d">আগের Line Wise রিপোর্ট লোড করা যায়নি। Refresh data দিয়ে আবার চেষ্টা করুন।</section>';
    if(typeof toast==='function')toast(error.message||'Could not load saved Line Wise records.');
   }
  });
 };
})();