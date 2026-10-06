'use strict';
window.FarnoorPayrollCore=(()=>{
 const f=(key,label,type='text',options=[],value='')=>({key,label,type,options,value});
 const employee=f('empId','Emp ID'),name=f('empName','Emp Name'),amount=f('amount','Amount','number'),status=f('profileStatus','Status','select',['Active','Inactive'],'Active'),date=f('date','Date','date'),effective=f('date','Effective Date','date');
 const branch=f('branch','Branch Name'),group=f('empGroup','Emp. Group','select',['Staff','Worker']),dept=f('department','Department','department'),section=f('section','Section','section'),designation=f('designation','Designation','designation'),payment=f('paymentGroup','Payment Group','select',['Admin-2 Workers','Cutting Workers','Finishing Workers','Quality Workers','Sample & Design','Sewing (1)','Sewing(2)','Staff']);
 const baseFilters=[employee,branch,group,dept,section,designation];
 const reportDate=[f('fromDate','Date From','date'),f('toDate','Date To','date'),f('dateRange','Date Range','checkbox')];
 const printOptions=[f('printDate','Print Date','date'),f('rowsPerPage','Row/Page','number',[],'8'),f('tableGap','Table Gap','number',[],'0'),f('rowHeight','Row Height','number',[],'110')];
 const commonEntry=[status,date];
 const forms=[
 {id:'salary',name:'Employee Salary',title:'SALARY ENTRY',icon:'৳',fields:[f('index','Index'),employee,name,f('gross','Gross Salary','number'),f('medical','Medical Allowance','number',[],'750'),f('transport','Transport','number',[],'450'),f('food','Fooding','number',[],'1250'),...commonEntry]},
 {id:'bonus',name:'Employee Bonus',title:'BONUS ENTRY',icon:'◈',fields:[employee,amount,date,status]},
 {id:'increment',name:'Emp Increment',title:'INCREMENT ENTRY',icon:'↗',fields:[employee,f('empName','Name'),amount,effective,status]},
 {id:'loan',name:'Loan / Advance',title:'LOAN / ADVANCE ENTRY',icon:'▤',fields:[employee,amount,f('payType','Pay Type','select',['Advance','Loan']),f('duration','Installment Duration (Month)','number'),...commonEntry]},
 {id:'ot-policy',name:'OT Policy',title:'OVERTIME POLICY',icon:'◷',fields:[f('index','Index'),employee,designation,section,f('fixedAmount','Fixed Amount','number'),f('otRate','OT Rate','number'),f('otType','Type','select',['OT','DA'],'OT'),status,effective]},
 {id:'att-policy',name:'Attn Bonus Policy',title:'ATTENDANCE BONUS POLICY',icon:'✓',fields:[f('index','Index'),employee,f('designationCode','Designation code'),designation,group,amount,f('remarks','Remarks'),effective,status]},
 {id:'generator',name:'Salary Generator',title:'SALARY GENERATOR',icon:'⚙',report:true,fields:[employee,branch,group,dept,section,f('floor','Floor'),designation,f('desigGroup','Desig Group'),payment,status,date,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'adjustment',name:'OT Adjustment',title:'OT ADJUSTMENT GENERATOR',icon:'◴',report:true,fields:[employee,dept,designation,section,status,date,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'sheet',name:'Salary Sheet.',title:'SALARY SHEET.',icon:'▦',report:true,fields:[employee,branch,group,dept,f('floor','Floor'),section,f('sectionGroup','Section Group'),f('workingSection','Working Section'),designation,f('desigGroup','Desig Group'),payment,f('reportType','Report Type','select',['Monthly Worker Salary Min','Monthly Worker Salary Old','Monthly Staff Salary','Employee Salary List','Overtime Sheet','Night and Dinner Bill','Top Sheet Wages','Voucher Salary','Voucher Salary Min'],'Monthly Worker Salary Min'),...printOptions,f('genStatus','Gen. Status','select',['Payment','Resigned Employee'],'Payment'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'slip',name:'Pay Slip.',title:'PAY SLIP.',icon:'▧',report:true,fields:[...baseFilters,f('workingSection','Working Section'),f('desigGroup','Desig Group'),f('workGroup','Work Group'),f('workShift','Work Shift','select',['All Shift','Day','Night'],'All Shift'),f('floor','Floor'),...printOptions,f('reportType','Report Type','select',['Payslip'],'Payslip'),f('genStatus','Gen. Status','select',['Payment','Resigned Employee'],'Payment'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'increment-report',name:'Increment Reports',title:'INCREMENT REPORTS',icon:'↟',report:true,fields:[...baseFilters,f('reportType','Report Type','select',['Increment Sheet'],'Increment Sheet'),f('incrementGroup','Increment Group','text',[],'Regular from 2024'),f('percentage','Percentage','number',[],'9'),status,...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'bonus-sheet',name:'Bonus Sheet',title:'BONUS SHEET',icon:'◇',report:true,fields:[...baseFilters,f('desigGroup','Desig Group'),...printOptions,f('bonusType','Bonus Type','select',['Auto Bonus','Entry Bonus'],'Auto Bonus'),f('percentage','Percent (%)','number',[],'50'),f('bonusOn','Bonus On','select',['Basic','Gross'],'Basic'),f('reportTitle','Report Title'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'earned',name:'Earn Leave Report',title:'EARN LEAVE REPORT',icon:'▣',report:true,fields:[...baseFilters,f('joinMonth','Date of Join','month'),f('condition','Condition','select',['<=','=','>=']),f('percentage','Percentage','number',[],'50'),status,f('calcOn','Calc On','select',['Basic','Gross'],'Basic'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'top',name:'TopSheet',title:'TOPSHEET MANAGER',icon:'Σ',fields:[f('index','Index'),f('empCount','Emp','number'),branch,payment,group,dept,section,designation,f('workShift','Work Shift'),...['Salary','Transport','Fooding','Total Payable','Attn Bonus','AIT','PF','Night','Stamp','Absent','Advance Ded Amt','Overtime Hour','Overtime Amount','Net Payable Amount'].map(label=>f(label.replace(/ /g,''),label,'number')),f('reportType','Report Type'),f('remarks','Remarks'),...commonEntry]}
 ];
 const metadata=[branch,group,dept,section,designation,payment,f('floor','Floor'),f('workingSection','Working Section'),f('sectionGroup','Section Group'),f('desigGroup','Desig Group'),f('workGroup','Work Group'),f('workShift','Work Shift'),f('joinDate','Date of Join','date')];
 const attendance=[employee,name,f('period','Salary Month','month'),f('present','Present Days','number'),f('absent','Absent Days','number'),f('leave','Leave Days','number'),f('holiday','Holiday Days','number'),f('otHours','OT Hours','number'),f('otAdjustment','OT Adjustment Hours','number'),f('night','Night Allowance','number'),f('ait','AIT','number'),f('pf','PF','number'),f('stamp','Stamp','number'),f('otherDeduction','Other Deduction','number'),f('earnedDays','Earn Leave Days','number')];
 const rules=[f('houseRentPercent','House Rent (% of Basic)','number'),f('absenceOn','Absent Deduction On','select',['Basic','Gross']),f('absenceDivisor','Absent Daily Divisor','number'),f('otMultiplier','OT Multiplier','number'),f('otDivisor','OT Monthly Hours Divisor','number'),f('earnedDivisor','Earn Leave Daily Divisor','number')];
 const generatedFields=['empId','empName','period','profileStatus','gross','basic','houseRent','medical','transport','food','present','absent','leave','holiday','otHours','otRate','otAmount','attendanceBonus','bonus','night','ait','pf','stamp','absenceDeduction','advanceDeduction','otherDeduction','net','earnedDays','earnedAmount',...metadata.map(x=>x.key)];
 const formById=id=>forms.find(x=>x.id===id);
 const round=v=>Math.round((Number(v)+Number.EPSILON)*100)/100;
 function checkValues(type,values){
  const schema=type==='rules'?rules:type==='attendance'?attendance:type==='generated'?generatedFields.map(key=>f(key,key)):formById(type)?.fields;
  if(!schema||!values||typeof values!=='object'||Array.isArray(values))throw Error('Invalid Payroll record.');
  const allowed=new Set([...schema,...metadata].map(x=>x.key));
  for(const [key,value]of Object.entries(values)){if(!allowed.has(key)||typeof value!=='string'||value.length>500)throw Error('Invalid Payroll field.');}
  for(const field of [...schema,...metadata]){const v=values[field.key];if(!v)continue;if(field.type==='number'&&(!Number.isFinite(Number(v))||Number(v)<0||Number(v)>1e9))throw Error('Invalid '+field.label+'.');if(field.type==='select'&&!field.options.includes(v))throw Error('Invalid '+field.label+'.');if(field.type==='month'&&!/^\d{4}-(0[1-9]|1[0-2])$/.test(v))throw Error('Invalid salary month.');}
  if(values.empId?.length>120||values.empName?.length>200)throw Error('Employee ID or name is too long.');
  if(type==='attendance'&&(!values.empId||!values.period))throw Error('Employee and salary month are required.');
  if(['salary','bonus','increment','loan'].includes(type)&&!values.empId)throw Error('Emp ID is required.');
  if(type==='salary'&&(!values.empName||!values.gross))throw Error('Emp Name and Gross Salary are required.');
  if(['bonus','increment','loan'].includes(type)&&(!values.amount&&values.amount!=='0'))throw Error('Amount is required.');
  if(formById(type)&&!formById(type).report&&(!values.date||!['Active','Inactive'].includes(values.profileStatus)))throw Error('Date and Status are required.');
  if(type==='loan'&&(!values.payType||Number(values.duration)<1||!Number.isInteger(Number(values.duration))))throw Error('Pay Type and whole installment months are required.');
  if(type==='rules'&&['absenceDivisor','otDivisor','earnedDivisor'].some(k=>Number(values[k])<=0))throw Error('Calculation divisors must be greater than zero.');
  if(type==='generated'){if(!values.empId||!values.empName||!/^\d{4}-(0[1-9]|1[0-2])$/.test(values.period||''))throw Error('Invalid generated salary.');for(const key of ['gross','basic','houseRent','medical','transport','food','otHours','otRate','otAmount','attendanceBonus','bonus','night','ait','pf','stamp','absenceDeduction','advanceDeduction','otherDeduction','net','earnedDays','earnedAmount'])if(values[key]!==undefined&&(!Number.isFinite(Number(values[key]))||Math.abs(Number(values[key]))>1e9))throw Error('Invalid generated amount.');}
  return values;
 }
 function validateRows(rows,normalDate){for(const row of rows||[]){if(!row.payrollForm)continue;checkValues(row.payrollForm,row.payrollValues);for(const [key,value]of Object.entries(row.payrollValues))if(/^(date|fromDate|toDate|printDate|joinDate)$/.test(key)&&value)normalDate(value);}}
 function calculate(salary,attendance,rule,policies={}){
  for(const field of rules)if(rule[field.key]===''||rule[field.key]==null)throw Error('Set the company salary calculation rules first.');
  checkValues('rules',rule);if(Number(rule.absenceDivisor)<=0||Number(rule.otDivisor)<=0||Number(rule.earnedDivisor)<=0)throw Error('Calculation divisors must be greater than zero.');
  const days=['present','absent','leave','holiday'].reduce((sum,k)=>sum+Number(attendance[k]||0),0),[year,month]=String(attendance.period||'').split('-').map(Number);
  if(!Number.isFinite(days)||days<=0||days>new Date(year,month,0).getDate())throw Error('Attendance day totals do not match a valid salary month.');
  const gross=round(Number(salary.gross)+Number(policies.increment||0)),medical=Number(salary.medical||0),transport=Number(salary.transport||0),food=Number(salary.food||0);
  if(gross<medical+transport+food)throw Error('Gross Salary cannot be lower than allowances.');
  const basic=round((gross-medical-transport-food)/(1+Number(rule.houseRentPercent)/100)),houseRent=round(gross-basic-medical-transport-food);
  const otHours=round(Number(attendance.otHours||0)+Number(attendance.otAdjustment||0));
  const otRate=round(policies.otRate!==undefined?Number(policies.otRate):basic*Number(rule.otMultiplier)/Number(rule.otDivisor));
  const otAmount=round(otHours*otRate+Number(policies.fixedAmount||0)),absenceDeduction=round(Number(attendance.absent||0)*(rule.absenceOn==='Basic'?basic:gross)/Number(rule.absenceDivisor));
  const attendanceBonus=round(Number(policies.attendanceBonus||0)),bonus=round(Number(policies.bonus||0)),advanceDeduction=round(Number(policies.advanceDeduction||0));
  const net=round(gross+otAmount+attendanceBonus+bonus+Number(attendance.night||0)-absenceDeduction-advanceDeduction-Number(attendance.ait||0)-Number(attendance.pf||0)-Number(attendance.stamp||0)-Number(attendance.otherDeduction||0));
  return {...salary,...attendance,gross:String(gross),basic:String(basic),houseRent:String(houseRent),medical:String(medical),transport:String(transport),food:String(food),otHours:String(otHours),otRate:String(otRate),otAmount:String(otAmount),absenceDeduction:String(absenceDeduction),advanceDeduction:String(advanceDeduction),attendanceBonus:String(attendanceBonus),bonus:String(bonus),net:String(net),earnedAmount:String(round(Number(attendance.earnedDays||0)*basic/Number(rule.earnedDivisor)))};
 }
 return {forms,metadata,attendance,rules,generatedFields,formById,checkValues,validateRows,round,calculate};
})();
