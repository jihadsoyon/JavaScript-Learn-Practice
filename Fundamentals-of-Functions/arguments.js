function doubleIt (number){
  const doubled = number * 2;
  console.log(number, doubled);
}

// console.log('I will call the function')
doubleIt(15);
// console.log('-------------');

const pochis = 25 ;
doubleIt(pochis);

const tero = 13 ;
doubleIt(tero);


function difference(num1, num2){
  const  diff = num1-num2;
  console.log(num1, num2, 'differnce between', diff);
}
const fatherAge = 30;
const sonAge = 25;
difference (fatherAge, sonAge);

//parctice
function partHokko(num1, num2, num3){
  const eije = num1 + num2 + num3;
  console.log(num1, num2, num3, 'tinjoner jogfol', eije);
}

const baperAge = 40;
const polarAge = 24;
const sotoAge = 10 ;
partHokko(baperAge, polarAge, sotoAge);

console.log('-------------');
partHokko(23, 45, 90);
