'use strict';
// Display saved Sample times in 12-hour notation without changing stored values.
function sampleTime12(value){
 const raw=String(value??'').trim();if(!raw)return '';
 const match=raw.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i);if(!match)return raw;
 let hour=Number(match[1]);const minute=Number(match[2]),period=match[3]?.toUpperCase();
 if(minute>59||(period?(hour<1||hour>12):hour>23))return raw;
 const suffix=period||(hour>=12?'PM':'AM');
 return (hour%12||12)+':'+match[2]+' '+suffix;
}
const sampleTime12PreviousSheet=samplePDPrintSheet;
samplePDPrintSheet=function(records){return sampleTime12PreviousSheet(records.map(record=>({...record,hourlyPD:{...record.hourlyPD,fields:{...record.hourlyPD.fields,sampleStartTime:sampleTime12(record.hourlyPD.fields?.sampleStartTime),sampleEndTime:sampleTime12(record.hourlyPD.fields?.sampleEndTime)}}})));};
