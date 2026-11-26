'use strict';
(()=>{
 const buttonId='productionPdfBundleButton';
 const style=document.createElement('style');
 style.textContent='#'+buttonId+'{display:flex;align-items:center;gap:7px;box-sizing:border-box;width:calc(100% - 16px);margin:4px 6px 6px 8px;padding:8px 7px;border:1px solid #87add7;border-radius:10px;background:#dcecff;color:#154b80;font:700 11px system-ui;box-shadow:0 2px 7px #102b5020;cursor:pointer;text-align:left;white-space:nowrap}#'+buttonId+':hover{background:#c9e0ff}#'+buttonId+':disabled{opacity:.65;cursor:wait}#'+buttonId+'[hidden]{display:none!important}#productionPdfDatePanel{box-sizing:border-box;width:calc(100% - 16px);margin:0 6px 8px 8px;padding:8px;background:#f6faff;border:1px solid #b7cde7;border-radius:9px}#productionPdfDatePanel[hidden]{display:none!important}#productionPdfDatePanel label{display:block;margin:0 0 5px;color:#154b80;font:600 11px system-ui}#productionPdfDatePanel input{box-sizing:border-box;width:100%;min-width:0;margin:0 0 6px;padding:7px;border:1px solid #aac3e0;border-radius:6px;background:#fff;color:#123;font:12px system-ui}#productionPdfSearch{width:100%;padding:7px;border:0;border-radius:6px;background:#185a98;color:#fff;font:700 12px system-ui;cursor:pointer}#productionPdfSearch:disabled{opacity:.65;cursor:wait}#productionPdfFormat{box-sizing:border-box;width:100%;margin:0 0 6px;padding:7px;border:1px solid #aac3e0;border-radius:6px;background:#fff;color:#123;font:12px system-ui}#productionPdfDatePanel .format-label{margin-top:7px}';
 document.head.append(style);
 function notify(message){if(typeof toast==='function')toast(message);else window.alert(message);}
 function safeName(value){return String(value||'Report').normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g,'-').replace(/^-+|-+$/g,'').slice(0,90)||'Report';}
 function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
 function displayValue(value){if(value===null||value===undefined)return '';if(typeof value==='object'){try{return JSON.stringify(value);}catch{return String(value);}}return String(value);}
 function pdfDocument(title,rows){
  const columns=[...new Set(rows.flatMap(row=>Object.keys(row)))];
  const table='<table><thead><tr>'+columns.map(key=>'<th>'+escapeHTML(key)+'</th>').join('')+'</tr></thead><tbody>'+
   rows.map(row=>'<tr>'+columns.map(key=>'<td>'+escapeHTML(displayValue(row[key]))+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
  const host=document.createElement('article');
  host.style.cssText='width:275mm;padding:7mm;background:#fff;color:#142235;font:9pt Arial,sans-serif;box-sizing:border-box';
  host.innerHTML='<h1 style="text-align:center;color:#123e67;margin:0 0 2mm;font-size:18pt">FARNOOR GARMENTS LTD.</h1><p style="text-align:center;margin:0 0 4mm">1028/1/2 Malibagh Bazar Road, Dhaka-1217</p><h2 style="text-align:center;margin:0 0 4mm;font-size:14pt">'+escapeHTML(title)+'</h2><p style="font-size:8pt;color:#526273;margin:0 0 3mm">Saved records: '+rows.length+'</p>'+table;
  const sheet=document.createElement('style');
  sheet.textContent='table{border-collapse:collapse;width:100%;table-layout:fixed}th,td{border:1px solid #34495e;padding:3px 4px;text-align:left;vertical-align:top;overflow-wrap:anywhere;white-space:pre-wrap}th{background:#e8f0f5}tr{break-inside:avoid}thead{display:table-header-group}';
  host.append(sheet);
  return host;
 }
 async function makeCurrentPrintImages(title,html){
  const frame=document.createElement('iframe');frame.title=title+' JPG';frame.style.cssText='position:fixed;left:-20000px;top:0;width:1123px;height:794px;border:0;pointer-events:none';
  const ready=new Promise((resolve,reject)=>{frame.onload=resolve;frame.onerror=()=>reject(Error('Current report format could not load.'));});
  const source=html.replace('</head>','<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script></head>');
  document.body.append(frame);
  try{
   frame.srcdoc=source;await ready;await frame.contentDocument.fonts.ready;
   await Promise.all([...frame.contentDocument.images].map(image=>image.complete?Promise.resolve():new Promise(resolve=>{image.onload=resolve;image.onerror=resolve;})));
   const win=frame.contentWindow;if(!win.html2pdf)throw Error('Image tool could not be loaded. Check the internet connection and retry.');
   const sheets=[...frame.contentDocument.querySelectorAll('[class]')].filter(node=>[...node.classList].some(name=>name.endsWith('-pd-print-sheet')));
   if(!sheets.length)throw Error('Report print pages could not be found.');
   const images=[];for(const sheet of sheets){const worker=win.html2pdf().set({margin:0,image:{type:'jpeg',quality:.96},html2canvas:{scale:2,backgroundColor:'#ffffff',logging:false,useCORS:false,windowWidth:1123,windowHeight:794,scrollX:0,scrollY:0},jsPDF:{unit:'mm',format:'a4',orientation:'landscape'},pagebreak:{mode:['css','legacy']}}).from(sheet).toCanvas();const canvas=await worker.get('canvas');const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.96));if(!blob)throw Error('JPG image could not be created.');images.push(await blob.arrayBuffer());}
   return images;
  }finally{frame.remove();}
 }
 async function makeGenericImage(title,rows){
  const node=pdfDocument(title,rows);document.body.append(node);
  try{if(!window.html2canvas)throw Error('Image tool could not be loaded.');const canvas=await window.html2canvas(node,{scale:2,backgroundColor:'#ffffff',logging:false});const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.96));if(!blob)throw Error('JPG image could not be created.');return [await blob.arrayBuffer()];}finally{node.remove();}
 }
 async function makePdf(title,rows,printHTML){
  if(printHTML)return makeCurrentPrintPdf(title,printHTML);
  const node=pdfDocument(title,rows);
  document.body.append(node);
  try{
   const worker=window.html2pdf().set({margin:0,image:{type:'jpeg',quality:.94},html2canvas:{scale:1.5,backgroundColor:'#ffffff',logging:false},jsPDF:{unit:'mm',format:'a4',orientation:'landscape'},pagebreak:{mode:['css','legacy']}}).from(node);
   return await worker.outputPdf('arraybuffer');
  }finally{node.remove();}
 }
 async function makeCurrentPrintPdf(title,html){
  const frame=document.createElement('iframe');frame.title=title+' PDF';frame.style.cssText='position:fixed;left:-20000px;top:0;width:1123px;height:794px;border:0;pointer-events:none';
  const ready=new Promise((resolve,reject)=>{frame.onload=resolve;frame.onerror=()=>reject(Error('Current report format could not load.'));});
  const source=html.replace('</head>','<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script></head>');
  document.body.append(frame);
  try{
   frame.srcdoc=source;await ready;await frame.contentDocument.fonts.ready;
   await Promise.all([...frame.contentDocument.images].map(image=>image.complete?Promise.resolve():new Promise(resolve=>{image.onload=resolve;image.onerror=resolve;})));
   const win=frame.contentWindow;if(!win.html2pdf)throw Error('PDF tool could not be loaded. Check the internet connection and retry.');
   const root=frame.contentDocument.body;
   const worker=win.html2pdf().set({margin:0,image:{type:'jpeg',quality:1},html2canvas:{scale:2,backgroundColor:'#ffffff',logging:false,useCORS:false,windowWidth:1123,windowHeight:794,scrollX:0,scrollY:0},jsPDF:{unit:'mm',format:'a4',orientation:'landscape'},pagebreak:{mode:['css','legacy']}}).from(root);
   return await worker.outputPdf('arraybuffer');
  }finally{frame.remove();}
 }
 function crc32(bytes){let crc=-1;for(let i=0;i<bytes.length;i++){crc^=bytes[i];for(let j=0;j<8;j++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}return (crc^-1)>>>0;}
 function zipFiles(files){
  const encoder=new TextEncoder(),parts=[],central=[];let offset=0;const now=new Date(),time=((now.getHours()&31)<<11)|((now.getMinutes()&63)<<5)|Math.floor(now.getSeconds()/2),date=(((now.getFullYear()-1980)&127)<<9)|((now.getMonth()+1)<<5)|now.getDate();
  for(const file of files){
   const name=encoder.encode(file.name),data=new Uint8Array(file.data),crc=crc32(data),local=new Uint8Array(30+name.length),lv=new DataView(local.buffer);
   lv.setUint32(0,0x04034b50,true);lv.setUint16(4,20,true);lv.setUint16(6,0x0800,true);lv.setUint16(8,0,true);lv.setUint16(10,time,true);lv.setUint16(12,date,true);lv.setUint32(14,crc,true);lv.setUint32(18,data.length,true);lv.setUint32(22,data.length,true);lv.setUint16(26,name.length,true);lv.setUint16(28,0,true);local.set(name,30);parts.push(local,data);
   const item=new Uint8Array(46+name.length),cv=new DataView(item.buffer);cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint16(8,0x0800,true);cv.setUint16(10,0,true);cv.setUint16(12,time,true);cv.setUint16(14,date,true);cv.setUint32(16,crc,true);cv.setUint32(20,data.length,true);cv.setUint32(24,data.length,true);cv.setUint16(28,name.length,true);cv.setUint16(30,0,true);cv.setUint16(32,0,true);cv.setUint16(34,0,true);cv.setUint16(36,0,true);cv.setUint32(38,0,true);cv.setUint32(42,offset,true);item.set(name,46);central.push(item);offset+=local.length+data.length;
  }
  const centralOffset=offset,centralSize=central.reduce((sum,item)=>sum+item.length,0),end=new Uint8Array(22),ev=new DataView(end.buffer);ev.setUint32(0,0x06054b50,true);ev.setUint16(8,files.length,true);ev.setUint16(10,files.length,true);ev.setUint32(12,centralSize,true);ev.setUint32(16,centralOffset,true);ev.setUint16(20,0,true);return new Blob([...parts,...central,end],{type:'application/zip'});
 }
 function normalizeDay(value){
  if(value===null||value===undefined||value==='')return '';
  const text=String(value).trim();
  let match=text.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  let year,month,day;
  if(match){year=Number(match[1]);month=Number(match[2]);day=Number(match[3]);}
  else{
   match=text.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
   if(!match)return '';
   const first=Number(match[1]),second=Number(match[2]);
   if(first>12){day=first;month=second;}else if(second>12){month=first;day=second;}else if(text.includes('-')||text.includes('.')){day=first;month=second;}else{month=first;day=second;}
   year=Number(match[3]);
  }
  if(month<1||month>12||day<1||day>31||year<1900)return '';
  const check=new Date(0);check.setUTCHours(0,0,0,0);check.setUTCFullYear(year,month-1,day);
  if(check.getUTCFullYear()!==year||check.getUTCMonth()!==month-1||check.getUTCDate()!==day)return '';
  return String(year).padStart(4,'0')+'-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0');
 }
 function recordMatchesDay(row,day){
  let found=false;
  const dateKeys=/^(date|reportdate|productiondate|entrydate|workdate|dailydate|transactiondate|dateofproduction)$/i;
  function visit(value){
   if(found||!value||typeof value!=='object')return;
   for(const [key,item] of Object.entries(value)){
    if(/^(created|updated|deleted|modified)at$/i.test(key))continue;
    if(dateKeys.test(key)&&normalizeDay(item)===day){found=true;return;}
    if(item&&typeof item==='object')visit(item);
   }
  }
  visit(row);return found;
 }
 function scheduleMatchesDay(file,day){
  const start=normalizeDay(file.startDate),end=normalizeDay(file.endDate);
  return Boolean(start&&end&&start<=day&&day<=end);
 }
 function dhakaDay(){
  const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const value=Object.fromEntries(parts.map(part=>[part.type,part.value]));return value.year+'-'+value.month+'-'+value.day;
 }
 function runningDayDisplay(){return dhakaDay().split('-').reverse().join('-');}
 function outputKind(row){const kind=String(row.hourlyPDKind||'').toLowerCase();return ['quality','iron','sample','finishing'].includes(kind)?kind:'line';}
 function outputRow(row){const fields=row.hourlyPD?.fields||{};return {Date:row.date||'',Section:fields.section||'',Incharge:fields.incharge||'',Buyer:[fields.buyer,fields.buyerLast].filter(Boolean).join(' / '),Style:[fields.style,fields.styleLast].filter(Boolean).join(' / '),Item:[fields.item,fields.itemLast].filter(Boolean).join(' / '),WorkingPlan:fields.workingPlan??'',HourlyTarget:fields.hourlyTarget??'',LayoutManpower:fields.layoutManpower??'',PresentManpower:fields.presentManpower??'',Remarks:fields.remarks||'',HourlyData:JSON.stringify({hours:row.hourlyPD?.rows||[],targets:row.hourlyPD?.targets||[],differences:row.hourlyPD?.differences||[],achievements:row.hourlyPD?.achievements||[]})};}
 function scheduleRow(file){return {Section:file.section||'',Month:file.month||'',WeeklyOff:file.weekly||'',ExtraDays:file.extra||[],StartDate:file.startDate||'',EndDate:file.endDate||'',Rows:file.rows||[],DailyJournal:file.journal||{},CreatedAt:file.createdAt||''};}
 const printModuleFiles={line:'line-wise-hourly-pd.js',quality:'quality-wise-hourly-pd.js',iron:'iron-wise-hourly-pd.js',sample:'sample-wise-hourly-pd.js',finishing:'finishing-wise-hourly-pd.js'};
 const printFunctionNames={line:'hourlyPDPrintHTML',quality:'qualityPDPrintHTML',iron:'ironPDPrintHTML',sample:'samplePDPrintHTML',finishing:'finishingPDPrintHTML'};
 const printModulePromises=new Map();
 async function ensurePrintFunction(kind){
  const name=printFunctionNames[kind];if(typeof window[name]==='function')return window[name];
  let pending=printModulePromises.get(kind);
  if(!pending){pending=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=new URL(printModuleFiles[kind]+'?pdf-export=20261126-1',document.baseURI).href;script.onload=()=>typeof window[name]==='function'?resolve(window[name]):reject(Error('Print module loaded but its function is unavailable.'));script.onerror=()=>reject(Error('Could not load the '+kind+' report Print module.'));document.head.append(script);});printModulePromises.set(kind,pending);}
  return pending;
 }
 async function collectReports(day){
  if(typeof state==='undefined'||typeof DEPARTMENTS==='undefined')throw Error('Production data is not ready. Refresh data and retry.');
  const department=DEPARTMENTS.find(item=>item.id==='production');if(!department)throw Error('Production department was not found.');
  const pages=department.pages.filter(page=>!page.hidden&&!page.navigationOnly&&(!window.FarnoorAccess?.canPage||window.FarnoorAccess.canPage(page.permissionPage||page.id)));
  const largeGroups=(window.FarnoorLargeGroups||[]).filter(group=>group==='output'||pages.some(page=>page.id===group));
  for(const group of largeGroups){if(!(window.FarnoorLoadedLargeGroups||[]).includes(group)){if(typeof ensureWorkspacePageData!=='function')throw Error('Saved Production records could not be loaded.');await ensureWorkspacePageData(group);}}
  const reports=[];
  const add=(name,rows,printHTML='')=>{if(Array.isArray(rows)&&rows.length)reports.push({name,rows,printHTML});};
  for(const page of pages){if(page.id==='output')continue;const rows=(state.records?.[page.id]||[]).filter(row=>recordMatchesDay(row,day));add(page.name,rows);}
  const hourly=state.records?.output||[];
  const kinds=[
   ['line','Line Wise Hourly PD','production-line-wise-hourly-pd',()=>window.hourlyPDPrintHTML],
   ['quality','Quality Wise Hourly PD','production-quality-wise-hourly-pd',()=>window.qualityPDPrintHTML],
   ['iron','Iron Wise Hourly PD','production-iron-wise-hourly-pd',()=>window.ironPDPrintHTML],
   ['sample','Sample Wise Hourly PD','production-sample-wise-hourly-pd',()=>window.samplePDPrintHTML],
   ['finishing','Finishing Wise Hourly PD','output',()=>window.finishingPDPrintHTML]
  ];
  for(const [kind,label,permission,getPrint] of kinds){
   if(window.FarnoorAccess?.canPage&&!window.FarnoorAccess.canPage(permission))continue;
   const saved=hourly.filter(row=>row.hourlyProduction===true&&row.hourlyPD&&!row.deletedAt&&outputKind(row)===kind&&normalizeDay(row.date)===day);
   if(!saved.length)continue;
   const printFn=typeof getPrint()==='function'?getPrint():await ensurePrintFunction(kind);if(typeof printFn!=='function')throw Error(label+'-এর আসল Print ফরম্যাট পাওয়া যায়নি। পেজ রিফ্রেশ করে আবার চেষ্টা করুন।');
   const printHTML=printFn(saved),sheetClass={line:'hourly-pd-print-sheet',quality:'quality-pd-print-sheet',iron:'iron-pd-print-sheet',sample:'sample-pd-print-sheet',finishing:'finishing-pd-print-sheet'}[kind];if(!printHTML||!printHTML.includes(sheetClass))throw Error(label+'-এর Print ফরম্যাট তৈরি করা যায়নি।');
   add(label,saved.map(outputRow),printHTML);
  }
  if(window.FarnoorAccess?.canPage?.('schedule-report')!==false)add('Production Plan and Schedule Reports',(state.productionSchedules||[]).filter(file=>scheduleMatchesDay(file,day)).map(scheduleRow));
  return reports;
 }
 async function exportForDay(day){
  const button=document.getElementById(buttonId),search=document.getElementById('productionPdfSearch');
  if(!button||button.disabled||!day)return;
  button.disabled=true;if(search)search.disabled=true;
  try{
   if(!window.html2pdf){const script=document.createElement('script');script.src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';script.crossOrigin='anonymous';document.head.append(script);await new Promise((resolve,reject)=>{script.onload=resolve;script.onerror=()=>reject(Error('JPG image tool could not be loaded. Check the internet connection and retry.'));});}
   const reports=await collectReports(day);if(!reports.length)throw Error('এই তারিখে কোনো সেভ করা Production রিপোর্ট পাওয়া যায়নি।');
   const files=[];for(let index=0;index<reports.length;index++){button.textContent='Preparing JPG '+(index+1)+'/'+reports.length+'…';const report=reports[index],stem=safeName(report.name)+'-'+day,images=report.printHTML?await makeCurrentPrintImages(report.name+' · '+day,report.printHTML):await makeGenericImage(report.name+' · '+day,report.rows);images.forEach((data,page)=>files.push({name:stem+(images.length>1?'-page-'+String(page+1).padStart(2,'0'):'')+'.jpg',data}));}
   button.textContent='Preparing download…';const blob=zipFiles(files),url=URL.createObjectURL(blob),anchor=document.createElement('a');anchor.href=url;anchor.download='FARNOOR-Production-JPGs-'+day+'.zip';document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);notify(day+' তারিখের '+files.length+'টি JPG ফাইল ZIP ফাইলে ডাউনলোড হয়েছে।');
  }catch(error){notify(error.message||'Production JPG তৈরি করা যায়নি.');}
  finally{button.disabled=false;button.textContent='▤ Download Production JPGs';if(search)search.disabled=false;}
 }
 function syncButton(){
  const production=document.body.dataset.activeDepartment==='production';
  let button=document.getElementById(buttonId);
  if(production&&!button){button=document.createElement('button');button.type='button';button.id=buttonId;button.textContent='▤ Download Production JPGs';button.title='Choose a date and download its saved Production reports as JPG images';button.setAttribute('aria-expanded','false');button.addEventListener('click',()=>{const panel=document.getElementById('productionPdfDatePanel');if(panel){panel.hidden=!panel.hidden;button.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden)document.getElementById('productionPdfDate')?.focus();}});const panel=document.createElement('div');panel.id='productionPdfDatePanel';panel.hidden=true;panel.innerHTML='<label for="productionPdfDate">Report date (DD-MM-YYYY)</label><input id="productionPdfDate" type="text" inputmode="numeric" autocomplete="off" placeholder="DD-MM-YYYY" value="'+runningDayDisplay()+'"><button type="button" id="productionPdfSearch">Search</button>';panel.querySelector('#productionPdfSearch').addEventListener('click',()=>{const input=panel.querySelector('#productionPdfDate'),value=input.value.trim();if(!/^\d{2}-\d{2}-\d{4}$/.test(value)){notify('তারিখ DD-MM-YYYY ফরমেটে দিন।');input.focus();return;}const day=normalizeDay(value);if(!day){notify('সঠিক তারিখ DD-MM-YYYY ফরমেটে দিন।');input.focus();return;}input.value=day.split('-').reverse().join('-');exportForDay(day);});button._datePanel=panel;}
  if(button){
   button.hidden=!production;
   const labels=[...document.querySelectorAll('#navigation .submenu-label')],label=labels.find(node=>node.textContent.trim()==='Production Records');
   const anchor=label?.closest('button'),pages=anchor?.parentElement;
   if(production&&anchor&&pages&&button.parentElement!==pages){anchor.after(button);if(button._datePanel)button.after(button._datePanel);}
   else if(production&&anchor&&button.previousElementSibling!==anchor){anchor.after(button);if(button._datePanel)button.after(button._datePanel);}
   else if(production&&button.parentElement===pages&&button._datePanel&&button.nextElementSibling!==button._datePanel)button.after(button._datePanel);
  }
 }
 const previousGoPage=window.goPage;if(typeof previousGoPage==='function'){window.goPage=function(id){const result=previousGoPage(id);setTimeout(syncButton,0);return result;};}
 const buttonObserver=new MutationObserver(syncButton);
 buttonObserver.observe(document.body,{attributes:true,attributeFilter:['data-active-department']});
 const navigation=document.getElementById('navigation');if(navigation)buttonObserver.observe(navigation,{childList:true,subtree:true});
 syncButton();
})();