'use strict';
const stationeryReceiveItems = ['Office File','File Clip','File Megazine','Ring File','Ball Pen','Ball Pen Red','Marker Pen Nerrow','Stapolar Machine','Stapolar Pin','Pin Remover','Punch Machine','Stel Scal','A4 Paper','Wood Pancil','Rouber','Sharpner','Calculater','Highletter 2 colour','Mesarment Tape','Jeams Paper Clip','ButterFly Clip 1/2"','Scissors','Hajira Book','Toner A4','Antry Cutter','Challane Book','Gate Pass Book'];
document.getElementById('main').addEventListener('input', event => {
 const input = event.target;
 if(input.dataset.storeField !== 'item' || !['Accessories','Accessories2','Stationery','Mechanical','Electrical'].includes(storeCategory()) || activePage.endsWith('-report')) return;
 let list = document.getElementById('stationeryReceiveItems');
 if(!list){list=document.createElement('datalist');list.id='stationeryReceiveItems';document.getElementById('main').append(list);}
 input.setAttribute('list',list.id);
 const query=StoreCore.digits(input.value.trim()).toLocaleLowerCase();
 list.innerHTML=query.length<2?'':stationeryReceiveItems.filter(value=>StoreCore.digits(value).toLocaleLowerCase().includes(query)).map(value=>`<option value="${esc(value)}"></option>`).join('');
});


