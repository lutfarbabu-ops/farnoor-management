'use strict';
function validateAdminSignatures(rows){
 if(rows===undefined)return;
 if(!Array.isArray(rows)||rows.length>500)throw Error('Invalid Sign records.');
 const ids=new Set(),names=new Set(),cards=new Set();let total=0;
 for(const row of rows){
  if(!row||typeof row.id!=='string'||!row.id||row.id.length>120||ids.has(row.id)||typeof row.fullName!=='string'||!row.fullName.trim()||row.fullName.length>200||typeof row.idNo!=='string'||row.idNo.length>120||!Array.isArray(row.photos)||row.photos.length>20)throw Error('Invalid Sign details.');
  const key=row.fullName.trim().replace(/\s+/g,' ').toLocaleLowerCase(),card=row.idNo.trim().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).toLowerCase();
  if(names.has(key)||card&&cards.has(card))throw Error('এই নাম বা ID NO আগে সেভ হয়েছে। আগের Sign খুলে পরিবর্তন করুন।');
  ids.add(row.id);names.add(key);if(card)cards.add(card);const photoIds=new Set();
  for(const photo of row.photos){if(!photo||typeof photo.id!=='string'||!photo.id||photo.id.length>120||photoIds.has(photo.id)||typeof photo.name!=='string'||photo.name.length>200||typeof photo.data!=='string'||photo.data.length>1400000||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(photo.data))throw Error('Sign Photo হিসেবে PNG, JPG বা WebP ছবি দিন।');photoIds.add(photo.id);total+=photo.data.length;}
 }
 if(total>6000000)throw Error('Sign ছবির মোট আকার বেশি হয়েছে। ছোট আকারের ছবি দিন।');
}
