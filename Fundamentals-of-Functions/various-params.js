//01

function evenSizedString(str){
  const size = str.length;
  console.log(str, size);

  if (size % 2 === 0){
  console.log('even size')
}
else{
  console.log('odd size')
}
}

evenSizedString('Dhaka');
evenSizedString('Faka');

//02

function doubleOrTriple(number, doDouble){
  if(doDouble === true){
    const result = number * 2;
    return result;
  }

  else{
    const result = number * 3;
    return result;
  }


}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));






//practice

function evenSizedStrings(str){
  const size = str.length;
  console.log(str, size);
 if(size * 10 === 80){
  console.log('terenere')
 }
 else(
  console.log('hunte')
 )

}
evenSizedStrings('jamalpur');
evenSizedStrings('mymensingh');

/////



//02

function doublOrTripple(number, doDouble){
 if (doDouble === true){
   const result = number * 2;
   return result;
 }
else{
  const result = number * 3;
  return result;
}

}
console.log(doublOrTripple(5, true));
console.log(doublOrTripple(5, false));


function assaChol(number, numer){
  if (numer === true){
    const result = number * 3;
    return result;
  }
  else{
    const result = number * 2;
    return result;
  }
}

console.log(assaChol(10, false));
console.log(assaChol(10, true));





//03

function numberOfElements(numbers){
  const len = numbers.length;
  return len;
}
console.log(numberOfElements([12, 45, 78, 45, 121254, 4, 5]));

// //04
function getAge(person){
  console.log(person);
  const age = person.age;
  return age;
}
console.log(getAge({age : 24}));

// // //practice
function jolio(numbers){
  const lel = numbers.length;
  return lel;
}

console.log(jolio([12, 45, 78, 45, 121254, 4, 5, 67]));

//practice

