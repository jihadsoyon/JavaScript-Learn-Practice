
//01

const jim = 56;
const tim = 89;
const kim = 68;
if(jim > tim && jim > kim){
  console.log('jim is the ultimate boss')
}
else if(tim > jim && tim > kim){
  console.log('tim is the boss');
}

else {
  console.log('kim is the boss');
}

//02

function maxOfThree (num1, num2, num3){
  
if(num1 > num2 && num1 > num3){
  return num1;
}
else if (num2 > num1 && num2 > num3){
  return num2;
}

else{
  return num3;
}
}
const max = maxOfThree(10, 20, 30);
console.log('max number is', max);


//03 
const maxe = Math.max(12, 1, 56, 78, 98, 54, 41)
console.log('max using Math', maxe)
