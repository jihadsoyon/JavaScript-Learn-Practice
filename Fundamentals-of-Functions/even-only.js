/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */


function evenNumbersOnly(numbers){

 const evens = [];
  for (const number of numbers){
    if(number % 2 === 0){
      // console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are', evens);



//02

function sumOfEvenNumbers (numbers){
  let sum = 0;
  for (const number of numbers){
    if (number % 2 === 0){
      console.log(number);
      sum = sum + number ;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('sum of even numbers is', sum); 


/**
 * create function that will return only the odd numbers
 */

function oddNumbersOnly(numbers){
  const odds = []; // খালি array বানালাম odd সংখ্যা রাখার জন্য
  for (const number of numbers){
    if(number % 2 !== 0){ // যদি ভাগশেষ 0 না হয় → Odd
      odds.push(number); // odd সংখ্যা array তে যোগ কর
    }
  }
  return odds; // সব odd সংখ্যা array হিসেবে রিটার্ন কর
}

const numberss = [5, 8, 91, 24, 6, 3];
const odds = oddNumbersOnly(numberss);
console.log('odd numbers are', odds);

function sumOfOddNumbers(numbers){
  let sums = 0;
  for(const number of numbers){
    if(number % 2 === 1){
      console.log(number);
       sums = sums + number;
    }
  }
  return sums;
}

const sums = sumOfOddNumbers(numberss);
console.log('sum of odd number', sums);

