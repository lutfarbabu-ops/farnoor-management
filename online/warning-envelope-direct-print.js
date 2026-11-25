'use strict';
(function(){
  const envelopePages = new Set(['admin-warning-envelope-1','admin-warning-envelope-2']);
  let activeFrame = null;

  function printEnvelope(event){
    const target = event.target instanceof Element ? event.target : null;
    if (!target || !target.closest('[data-warning-document-print]')) return;
    if (!document.querySelector('.wd-preview .wd-envelope')) return;

    const paper = document.querySelector('.wd-preview .wd-envelope');
    if (!paper) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    if (activeFrame) activeFrame.remove();
    const frame = document.createElement('iframe');
    activeFrame = frame;
    frame.title = 'Envelope print';
    frame.setAttribute('aria-hidden','true');
    frame.setAttribute('allow','');
    frame.style.cssText = 'position:fixed;left:-10000px;top:0;width:1px;height:1px;border:0;visibility:hidden';
    const title = activePage === 'admin-warning-envelope-1' ? 'Envelope1' : 'Envelope2';
    const content = paper.outerHTML;
    const css = `
      @page { size: 9.5in 4.125in; margin: 0; }
      * { box-sizing: border-box; }
      html, body { width: 9.5in; height: 4.125in; margin: 0; padding: 0; overflow: hidden; background: #fff; color: #000; }
      body { font-family: 'Nirmala UI','Noto Sans Bengali',serif; font-size: 10pt; font-weight: 400; line-height: 1.6; letter-spacing: 0; }
      .warning-doc-paper { display: block; width: 9.5in; height: 4.125in; min-height: 0; margin: 0; display: flex; align-items: center; padding: 8mm 10mm; overflow: hidden; background: #fff; color: #000; font-family: 'Nirmala UI','Noto Sans Bengali',serif; font-size: 10pt; font-weight: 400; line-height: 1.6; overflow-wrap: anywhere; break-inside: avoid; page-break-inside: avoid; }
      .wd-envelope-grid { display: grid; width: 100%; grid-template-columns: 1fr 1fr; gap: 8mm; align-items: center; }
      .wd-envelope-grid > section + section { min-height: 36mm; padding-left: 7mm; border-left: 1px solid #000; }
      .wd-pairs { display: grid; grid-template-columns: max-content 1mm minmax(0,1fr); gap: 0 1mm; align-items: start; }
      .wd-pairs > div { min-width: 0; }
      .wd-value { color: #000; }
      .wd-sender-name { font-size: 11pt; }
      .wd-sender-address { font-size: 8.5pt; }
      @media print {
        html, body { width: 9.5in !important; height: 4.125in !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; }
        .warning-doc-paper { width: 9.5in !important; height: 4.125in !important; margin: 0 !important; }
      }`;
    frame.onload = async function(){
      try {
        await frame.contentDocument.fonts.ready;
        await new Promise(resolve => setTimeout(resolve, 150));
        frame.contentWindow.focus();
        frame.contentWindow.print();
      } catch (error) {
        console.error('Envelope print could not start', error);
        frame.remove();
        activeFrame = null;
      }
    };
    const cleanup = function(){
      frame.remove();
      if (activeFrame === frame) activeFrame = null;
    };
    document.body.append(frame);
    frame.contentWindow.addEventListener('afterprint', cleanup, {once:true});
    window.setTimeout(cleanup, 120000);
    const doc = frame.contentDocument;
    doc.open();
    doc.write('<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><style>'+css+'</style></head><body>'+content+'</body></html>');
    doc.close();
  }

  document.addEventListener('click', printEnvelope, true);
})();
