'use strict';
function pagePermission(action,page=activePage){return !!page&&FarnoorAccess.canAction(page,action);}
function buttonPermissionPage(button){const target=button.dataset.scheduleTarget||button.dataset.reportFile;const file=target&&(state.productionSchedules||[]).find(file=>file.id===target);return file?productionPageId(file.section,true):activePage;}
function requiredButtonAction(button){
 if(button.dataset.pageAction)return button.dataset.pageAction;
 if(button.dataset.pageActionRequired)return button.dataset.pageActionRequired;
 const action=button.dataset.accountAction||button.dataset.orderAction||button.dataset.productionAction;
 if(action==='print')return 'print';
 if(action==='pdf')return 'pdf';
 if(['new','row','save','edit','delete'].includes(action)||button.id==='newRecord'||button.dataset.edit!==undefined||button.dataset.delete!==undefined||button.dataset.removeRow!==undefined||button.dataset.removeOrderRow!==undefined||button.dataset.orderRemove!==undefined||button.dataset.removePlan!==undefined)return 'edit';
 return null;
}
function applyActionControls(){
 const main=$('#main');document.body.dataset.printDenied=String(!pagePermission('print'));
 if(adminView||!activePage)return;
 let toolbar=main.querySelector('.page-action-toolbar');
 if((activePage.startsWith('schedule-')||(['order-report','order-entry'].includes(activePage)||activePage.startsWith('sewing-line-page-')))){toolbar?.remove();toolbar=null;}
 if(!toolbar&&!(activePage.startsWith('schedule-')||(['order-report','order-entry'].includes(activePage)||activePage.startsWith('sewing-line-page-')))){toolbar=document.createElement('div');toolbar.className='page-action-toolbar no-print';toolbar.innerHTML='<button type="button" data-page-action="pdf">Pdf</button><button type="button" data-page-action="print">Print</button>';main.prepend(toolbar);}
 main.querySelectorAll('button').forEach(button=>{const action=requiredButtonAction(button);if(action){button.disabled=!pagePermission(action,buttonPermissionPage(button));button.title=button.disabled?action.toUpperCase()+' permission is required':'';}});
 main.querySelectorAll('.account-paper input,.account-paper select,.account-paper textarea,.order-paper input,.order-paper select,.order-paper textarea').forEach(input=>{if(input.classList.contains('balance-select')||input.classList.contains('production-section-select'))return;input.disabled=!pagePermission('edit',buttonPermissionPage(input));});
}
// Capture before page-specific listeners, including controls recreated by report views.
document.addEventListener('click',event=>{const button=event.target.closest('button');if(!button||!button.closest('#main')||adminView||!activePage)return;const action=requiredButtonAction(button);if(action&&!pagePermission(action,buttonPermissionPage(button))){event.preventDefault();event.stopImmediatePropagation();toast(action.toUpperCase()+' permission is required.');return;}if(button.dataset.pageAction){event.preventDefault();event.stopImmediatePropagation();if(action==='pdf')exportPagePDF();else window.print();}},true);
document.addEventListener('submit',event=>{if(event.target.id==='recordForm'&&!pagePermission('edit')){event.preventDefault();event.stopImmediatePropagation();toast('EDIT permission is required.');}},true);
const originalWindowPrint=window.print.bind(window);
window.print=()=>{if(!pagePermission('print')){toast('PRINT permission is required.');return;}originalWindowPrint();};
new MutationObserver(applyActionControls).observe($('#main'),{childList:true,subtree:true});

// A downloadable PDF, separate from the Print dialog. Canvas text retains Unicode names.
function exportPagePDF(root=$('#main')){
 if(!pagePermission('pdf')){toast('PDF permission is required.');return;}
 try{
  const page=pageInfo(activePage).page,lines=[];
  const visible=element=>element.getClientRects().length>0;
  const value=cell=>{const inputs=[...cell.querySelectorAll('input:not([type=checkbox]),select,textarea')];return inputs.length?inputs.map(input=>input.value).join(' '):cell.textContent.trim().replace(/\s+/g,' ');};
  root.querySelectorAll('.file-caption,.order-saved-clock,.production-saved-clock,.production-report-meta,.production-entry-meta,.payroll-report-meta').forEach(el=>{if(visible(el))lines.push(el.textContent.trim());});
  root.querySelectorAll(activePage==='payroll'?($('#main').querySelector('.payroll-result')?'.payroll-result table':'.payroll-form-table'):'table').forEach(table=>{if(!visible(table))return;table.querySelectorAll('tr').forEach(row=>{if(!visible(row))return;const cells=[...row.querySelectorAll('th,td')].filter(cell=>!cell.classList.contains('no-print')&&!cell.querySelector('.row-actions'));lines.push(cells.map(value).join('  |  '));});lines.push('');});
  const signatures=root.querySelector('.signatures');if(signatures&&visible(signatures))lines.push([...signatures.querySelectorAll('span')].map(node=>node.textContent.trim()).join('   '));if(!lines.length)lines.push('No displayed records.');
  const canvas=document.createElement('canvas');canvas.width=1240;canvas.height=1754;const ctx=canvas.getContext('2d'),images=[];let y=0;
  function sheet(){ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#174c3b';ctx.font='bold 30px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText('FARNOOR GARMENTS LTD.',65,70);ctx.font='18px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText('1028/1/2 MALIBAGH BAZAR ROAD, DHAKA-1217',65,102);ctx.font='bold 24px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText(page.name,65,145);ctx.font='18px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText(new Date().toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}),65,177);ctx.fillStyle='#17271f';ctx.font='20px "Segoe UI", "Nirmala UI", sans-serif';y=220;}
  function finish(){ctx.font='16px "Segoe UI",sans-serif';ctx.fillText('Page '+(images.length+1),65,1700);images.push(Uint8Array.from(atob(canvas.toDataURL('image/jpeg',0.9).split(',')[1]),c=>c.charCodeAt(0)));}
  sheet();
  for(const line of lines){let wrapped='';for(const word of line.split(/\s+/)){const test=wrapped?wrapped+' '+word:word;if(ctx.measureText(test).width>1100&&wrapped){if(y>1640){finish();sheet();}ctx.fillText(wrapped,65,y);y+=29;wrapped=word;}else wrapped=test;}if(y>1640){finish();sheet();}ctx.fillText(wrapped,65,y);y+=32;}
  finish();download(activePage+'.pdf',makeImagePDF(images),'application/pdf');toast('PDF downloaded.');
 }catch(error){toast('Could not create PDF: '+error.message);}
}
function makeImagePDF(images){
 const encode=text=>new TextEncoder().encode(text),parts=[],offsets=[0];let length=0;
 const append=data=>{const bytes=typeof data==='string'?encode(data):data;parts.push(bytes);length+=bytes.length;};
 const object=(id,content)=>{offsets[id]=length;append(id+' 0 obj\n');append(content);append('\nendobj\n');};
 append('%PDF-1.4\n');object(1,'<< /Type /Catalog /Pages 2 0 R >>');object(2,'<< /Type /Pages /Count '+images.length+' /Kids ['+images.map((_,i)=>(3+i*3)+' 0 R').join(' ')+'] >>');
 images.forEach((jpeg,index)=>{const pageId=3+index*3,imageId=pageId+1,streamId=pageId+2;object(pageId,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 '+imageId+' 0 R >> >> /Contents '+streamId+' 0 R >>');offsets[imageId]=length;append(imageId+' 0 obj\n<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpeg.length+' >>\nstream\n');append(jpeg);append('\nendstream\nendobj\n');const stream='q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ';object(streamId,'<< /Length '+encode(stream).length+' >>\nstream\n'+stream+'\nendstream');});
 const xref=length;append('xref\n0 '+offsets.length+'\n0000000000 65535 f \n');for(let i=1;i<offsets.length;i++)append(String(offsets[i]).padStart(10,'0')+' 00000 n \n');append('trailer\n<< /Size '+offsets.length+' /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF');return new Blob(parts,{type:'application/pdf'});
}
