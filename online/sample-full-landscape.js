'use strict';
// Use the A4 landscape printable area with equal, printer-safe margins.
const sampleFullLandscapePreviousHTML=samplePDPrintHTML;
samplePDPrintHTML=function(records){return sampleFullLandscapePreviousHTML(records).replace('@page{size:A4 landscape;margin:8mm}','@page{size:A4 landscape;margin:5mm}').replaceAll('281mm','287mm').replaceAll('194mm','200mm');};
