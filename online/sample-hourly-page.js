'use strict';
const sampleHourlyPage='production-sample-wise-hourly-pd';
function renderSampleHourlyPage(){
 const section=activePage==='production-sample';
 $('#main').innerHTML='<section class="sample-hourly-workspace" aria-label="'+(section?'Production Sample':'Sample Wise Hourly PD')+'"><div class="sample-hourly-heading"><span class="sample-hourly-emblem" aria-hidden="true">'+(section?'✂':'◴')+'</span><p>PRODUCTION · SAMPLE</p><h2>'+(section?'Sample':'SAMPLE WISE HOURLY PRODUCTION')+'</h2>'+(section?'<button type="button" data-sample-hourly-open><span aria-hidden="true">◴</span> Sample Wise Hourly PD <span aria-hidden="true">→</span></button>':'<p class="sample-hourly-subtitle">Sample Wise Hourly PD</p>')+'</div></section>';
 if(typeof applyActionControls==='function')applyActionControls();
}
const sampleHourlyPreviousRender=renderPage;
renderPage=function(...args){if(['production-sample',sampleHourlyPage].includes(activePage))return renderSampleHourlyPage();return sampleHourlyPreviousRender.apply(this,args);};
document.getElementById('main').addEventListener('click',event=>{if(activePage==='production-sample'&&event.target.closest('[data-sample-hourly-open]'))goPage(sampleHourlyPage);});
const sampleHourlyStyle=document.createElement('style');sampleHourlyStyle.textContent=`
#navigation [data-group="production:Sample"]{--sub-bg:#f9dfef!important;--sub-edge:#d396ba!important;--sub-ink:#782b61!important;--sub-accent:#b7448d!important}
#navigation [data-group="production:Sample"] .submenu-icon{color:#a42d7b}
#navigation [data-page="production-sample-wise-hourly-pd"]{--sub-bg:#e0ecff!important;--sub-edge:#93b4e5!important;--sub-ink:#244d83!important;--sub-accent:#477bc1!important}
#navigation [data-page="production-sample-wise-hourly-pd"] .submenu-icon{color:#426bb9}
@media screen{#main:has(.sample-hourly-workspace){background:#112445;min-height:calc(100vh - 140px)}}
.sample-hourly-workspace{box-sizing:border-box;min-height:65vh;padding:38px 22px;color:#f1f5ff}
.sample-hourly-heading{max-width:1000px;margin:auto;text-align:center;padding:28px 16px}
.sample-hourly-emblem{display:inline-grid;place-items:center;width:66px;height:66px;border-radius:18px;background:#eadcf8;color:#8b3b91;font-size:36px;box-shadow:0 8px 24px #07132966}
.sample-hourly-heading>p{font-size:12px;font-weight:700;letter-spacing:2px;color:#b5cbee;margin:20px 0 12px}
.sample-hourly-heading h2{font:bold clamp(24px,3vw,38px)/1.25 Georgia,serif;color:#ff566f;margin:14px 0 22px}
.sample-hourly-heading .sample-hourly-subtitle{letter-spacing:normal;color:#e1eaff;font-size:17px}
.sample-hourly-heading button{display:inline-flex;gap:12px;align-items:center;padding:14px 20px;border:1px solid #adc6ef;border-radius:9px;background:#e0ecff;color:#244d83;font-size:16px;font-weight:700;cursor:pointer}
@media(max-width:600px){.sample-hourly-workspace{padding:24px 5px}.sample-hourly-heading{padding:18px 5px}.sample-hourly-heading button{font-size:14px;padding:12px}}
`;document.head.append(sampleHourlyStyle);
