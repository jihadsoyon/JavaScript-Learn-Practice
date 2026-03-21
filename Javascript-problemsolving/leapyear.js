/**
 * Simple Logic
 * 
 * 
 */


function isLeapYear2 (year){
  if(year % 4 === 0){
    return true;
  }
  else{
    return false;
  }
}

const isLipi = isLeapYear2(2052);
console.log(isLipi);


function isLeapYear(year){
 if (year % 100 !== 0 && year % 4 === 0){
  return true;
 }
 else if(year % 100 === 0 && year % 400 === 0){
  return true
 }
 else{
   return false;
 }
}

const isLeap  = isLeapYear(2100);
const isLeap2 = isLeapYear(2400);
const isLeap3 = isLeapYear(1900);
const isLeap4 = isLeapYear(2052);

console.log(isLeap, isLeap2, isLeap3, isLeap4);







