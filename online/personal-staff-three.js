'use strict';
// Staff-3 shares File-3 content and print layout so both stay in sync.
function personalStaffThreeSalary(value){return personalFileThreeSalary(value);}
function personalStaffThree(row){return personalFileThree(row).replaceAll('pf3-','ps3-').replaceAll('File-3','Staff-3');}
const personalStaffThreePreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='staff-3')return personalStaffThreePreviousList(folder);return personalStaffThreePreviousList('file-3').replaceAll('pf3-','ps3-').replaceAll('File-3','Staff-3');};
