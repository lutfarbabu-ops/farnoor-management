'use strict';
const stationeryReceiveItems = ['Office File','File Clip','File Megazine','Ring File','Ball Pen','Ball Pen Red','Marker Pen Nerrow','Stapolar Machine','Stapolar Pin','Pin Remover','Punch Machine','Stel Scal','A4 Paper','Wood Pancil','Rouber','Sharpner','Calculater','Highletter 2 colour','Mesarment Tape','Jeams Paper Clip','ButterFly Clip 1/2"','Scissors','Hajira Book','Toner A4','Antry Cutter','Challane Book','Gate Pass Book'];
const accessories2Items=["CHALK","PEN","RED PEN","PENCIL","GLASS PENCIL","RUBBER/ERASER","SHARPING BELT","CUTTING KNIF","NUMBER STICKER","MARKER PEN BIG","MARKER PEN NARROW","CUTTER","MEASUREMENT TAPE","ARROW STICKER","GUIDE.1/16.C/L","GUIDE.1/16.C/R","HANGER GUIDE","MAGNET GUIDE","PLAIN FEED","ZIPPER GUIDE.C/L","ZIPPER GUIDE.C/R","ZIPPER GUIDE BOTH","Cord Gide (C/L & C/R)","BUTTON HOLE KNIF","LIFTER","SILICON","SCISSOR","1/4 Gide (C/L & C/R)","1/8 Gide (C/L & C/R)","Plastic Plan Feed","Plastic Zipper Gide C/R","Plastic Zipper Gide C/L","Plastic Zipper Gide Both","Chock Powder","TIN","AL-PIN","VOMOR","MAGIC PEN","Stapolar Pin","DB-7 -B","DB-9-B","DB-11-B","DB-14-B","DB-16-B","DB-9-NS/KN","DB-11-NS/KN","UY-7-B","UY-9-B","UY-10-B","UY-11-B","UY-14-B","UY-7-KN","UY-9-KN","UY-11-KN","UY-9-LP","UY-11-LP","DC-7-B","DC-8-B","DC-9-B","DC-11-B","DC-14-B","DC-8-NS","DC-9-NS/KN","DC-11-NS/KN","DP-9-B-5","DP-11-B-5","DP-14-B-5","DP-17-11","DP-17-14","U0-10-J/B","UO-11-B","U0-14-B","DC-9-LP","DC-11-LP","EB-16-B","TV-5 x 9"];

document.getElementById('main').addEventListener('input', event => {
 const input = event.target;
 if(input.dataset.storeField !== 'item' || !['Accessories','Accessories2','Stationery','Mechanical','Electrical'].includes(storeCategory()) || activePage.endsWith('-report')) return;
 let list = document.getElementById('stationeryReceiveItems');
 if(!list){list=document.createElement('datalist');list.id='stationeryReceiveItems';document.getElementById('main').append(list);}
 input.setAttribute('list',list.id);
 const query=StoreCore.digits(input.value.trim()).toLocaleLowerCase();
 list.innerHTML=query.length<2?'':(storeCategory()==='Accessories2'?accessories2Items:stationeryReceiveItems).filter(value=>StoreCore.digits(value).toLocaleLowerCase().includes(query)).map(value=>`<option value="${esc(value)}"></option>`).join('');
});


