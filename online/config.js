/* Edit this file to add departments, pages and record fields. Keep IDs unique. */
window.DEPARTMENTS = [
 {id:'hr',name:'Administration',icon:'♙',color:'#ae526c',pages:[
  {id:'payroll',name:'Payroll',icon:'৳',shade:'#e1f1fa',fields:[['reference','Payroll reference'],['name','Employee / salary period'],['quantity','Salary amount (BDT)','number'],['date','Payment date','date'],['status','Status','status']]},
  {id:'employees',name:'Personal File',icon:'♧',shade:'#f8efcd',fields:[['reference','Employee ID'],['name','Employee name / designation'],['quantity','Record quantity','number'],['date','Joining date','date'],['status','Status','status']]},
  {id:'increment',name:'Increment',icon:'↗',shade:'#eee6fb',fields:[['reference','Increment reference'],['name','Employee ID / name'],['quantity','Increment amount (BDT)','number'],['date','Effective date','date'],['status','Status','status']]},
  {id:'maternity-benefits',name:'Maternity Benefits',icon:'♡',shade:'#e5f0ff',fields:[['reference','Benefit reference'],['name','Employee ID / name'],['quantity','Benefit amount (BDT)','number'],['date','Payment date','date'],['status','Status','status']]},
  {id:'service-benefits',name:'Service Benefits',icon:'♢',shade:'#ffe8de',fields:[['reference','Benefit reference'],['name','Employee ID / name'],['quantity','Benefit amount (BDT)','number'],['date','Settlement date','date'],['status','Status','status']]},
  {id:'attendance',name:'Attendance',icon:'✓',shade:'#e5f2ea'}
 ]},
 {id:'accounts',name:'Account',icon:'৳',color:'#427a47',pages:[
 {id:'credit-entry',name:'CREDIT ENTRY',parent:'CREDIT',icon:'⊕',shade:'#e5edff'},
 {id:'cash-report',name:'CASH REPORT',parent:'CREDIT',icon:'▤',shade:'#fff1da'},
 {id:'debit-entry',name:'DEBIT ENTRY',parent:'DEBIT',icon:'⊖',shade:'#f4e5fa'},
 {id:'debit-report',name:'DEBIT REPORT',parent:'DEBIT',icon:'▥',shade:'#e1f1fa'},
 {id:'balance-report',name:'BALANCE REPORT',icon:'⇄',shade:'#f8efcd'},
 {id:'tax',name:'TAX',icon:'▱',shade:'#ece5fa'},
 {id:'vat',name:'VAT',icon:'%',shade:'#ffe8de'},
 {id:'budget',name:'BUDGET',icon:'▦',shade:'#e5effc'},
 {id:'payments',name:'Payment register',icon:'৳',shade:'#ece5fa'},
 {id:'expenses',name:'Expense register',icon:'⊕',shade:'#ffe8de'}]},
 {id:'commercial',name:'Commercial',icon:'▰',color:'#385fa1',pages:[{id:'exports',name:'Export register',icon:'↗',shade:'#fff0dc'},{id:'imports',name:'Import register',icon:'↙',shade:'#f2e6fa'}]},
 {id:'merch',name:'Merchandising',icon:'◈',color:'#6553aa',pages:[{id:'order-entry',name:'ORDER ENTRY',parent:'NEW ORDER',icon:'▤',shade:'#e1f1fc'},{id:'order-report',name:'ORDER REPORT',parent:'NEW ORDER',icon:'▥',shade:'#fff1da'},{id:'booking',name:'BOOKING',icon:'▦',shade:'#fbe5df'},{id:'merch-sample',name:'Sample',icon:'◇',shade:'#e4edf9'},{id:'orders',name:'Buyer orders (legacy)',icon:'▤',shade:'#e1f1fc',hidden:true,fields:[['reference','Order reference'],['name','Buyer / style'],['quantity','Quantity (pcs)','number'],['date','Delivery date','date'],['status','Status','status']]},{id:'styles',name:'Style register',icon:'◇',shade:'#fff1da',hidden:true}]},
 {id:'knitting',name:'Knitting and Dyeing',icon:'▨',color:'#087e83',pages:[{id:'knitting-jobs',name:'Knitting jobs',icon:'▥',shade:'#f5e5ef'},{id:'dyeing-batches',name:'Dyeing batches',icon:'◉',shade:'#f9eecf'}]},
 {id:'inventory',name:'Store',icon:'▣',color:'#b07624',pages:[{id:'stock',name:'Fabric & trims',icon:'▧',shade:'#e4eaff'},{id:'movement',name:'Stock movement',icon:'⇄',shade:'#fae5ed'}]},
 {id:'production',name:'Production',icon:'⚙',color:'#277a93',pages:[
 ...['Line-1','Line-2','Line-3','Line-4','Unit-2 Line-1','Unit-2 Line-2','Unit-2 Line-3','Unit-2 Line-4'].flatMap((line,index)=>[{id:`schedule-line-${index+1}`,name:line,section:line,navPath:['Schedule','Sewing',line],groupEntry:true,icon:'▦',shade:'#e3edfc'},{id:`schedule-report-${index+1}`,name:'Schedule Report',section:line,navPath:['Schedule','Sewing',line],icon:'▤',shade:'#fff0d4'}]),
 ...['Cutting','Finishing','Quality'].map((name,index)=>({id:`schedule-${name.toLowerCase()}`,name,navPath:['Schedule'],icon:['✂','✧','◎'][index],shade:['#fce4dd','#eee4fa','#e1effb'][index]})),
 {id:'planning',name:'Production planning',icon:'▦',shade:'#f5e5ef'},{id:'output',name:'Daily output',icon:'▥',shade:'#f9eecf'}]},
 {id:'cutting',name:'Cutting',icon:'✂',color:'#8f5b33',pages:[{id:'cutting-plan',name:'Cutting plan',icon:'▤',shade:'#e1f1fc'},{id:'cutting-output',name:'Cutting output',icon:'▥',shade:'#eee6fb'}]},
 {id:'finishing',name:'Finishing',icon:'✧',color:'#8c4596',pages:[{id:'finishing-output',name:'Finishing output',icon:'✓',shade:'#e1f1fa'},{id:'packing',name:'Packing register',icon:'▣',shade:'#fff1da'}]},
 {id:'quality',name:'Quality',icon:'◎',color:'#ab653e',pages:[{id:'inspection',name:'Inspection log',icon:'⌕',shade:'#dfeeff'},{id:'issues',name:'Issue tracker',icon:'⚑',shade:'#eee6fb'}]},
 {id:'sample',name:'Sample',icon:'◇',color:'#aa3f55',pages:[{id:'samples',name:'Sample tracker',icon:'◈',shade:'#e1f1fc'},{id:'sample-approvals',name:'Sample approvals',icon:'✓',shade:'#f8efcd'}]},
 {id:'maintenance',name:'Maintenance',icon:'⚒',color:'#526775',pages:[{id:'maintenance-jobs',name:'Maintenance jobs',icon:'⚙',shade:'#ffe8de'},{id:'machines',name:'Machine register',icon:'▦',shade:'#ece5fa'}]},
 {id:'electrical',name:'Electrical',icon:'ϟ',color:'#777323',pages:[{id:'electrical-jobs',name:'Electrical jobs',icon:'⊕',shade:'#e1f1fc'},{id:'power-log',name:'Power log',icon:'▥',shade:'#fae5ed'}]}
];
window.DEFAULT_FIELDS=[['reference','Reference'],['name','Description / name'],['quantity','Quantity / amount','number'],['date','Date','date'],['status','Status','status']];
window.SAMPLE_RECORDS={
 orders:[{id:'o1',reference:'FG-26041',name:'Nordic Apparel · Polo shirt',quantity:12000,date:'15/10/2026',status:'In progress'},{id:'o2',reference:'FG-26042',name:'Urban Thread · Cotton tee',quantity:8500,date:'20/10/2026',status:'Pending'},{id:'o3',reference:'FG-26038',name:'Evergreen · Knit cardigan',quantity:6000,date:'01/10/2026',status:'Completed'}],
 planning:[{id:'p1',reference:'LINE-01',name:'Polo shirt · FG-26041',quantity:12000,date:'15/10/2026',status:'In progress'},{id:'p2',reference:'LINE-02',name:'Cotton tee · FG-26042',quantity:8500,date:'20/10/2026',status:'Pending'}],
 stock:[{id:'s1',reference:'FAB-001',name:'Cotton jersey · kg',quantity:2400,date:'04/10/2026',status:'Completed'},{id:'s2',reference:'TRM-012',name:'Logo buttons · pcs',quantity:35000,date:'05/10/2026',status:'Completed'}],
 employees:[{id:'e1',reference:'EMP-001',name:'Rahima Akter · Sewing operator',quantity:1,date:'01/01/2026',status:'Completed'},{id:'e2',reference:'EMP-002',name:'Abdul Karim · Line supervisor',quantity:1,date:'01/01/2026',status:'Completed'}],
 payments:[{id:'a1',reference:'PAY-26001',name:'Fabric supplier · BDT',quantity:185000,date:'05/10/2026',status:'Pending'}],
 inspection:[{id:'q1',reference:'QC-26012',name:'Polo shirt · Final inspection',quantity:500,date:'04/10/2026',status:'Completed'}]
};

