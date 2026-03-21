// 12 inch 1 Feet

function inchToFeet(inch){
  const feet = inch / 12;
  return feet;
}

const shuvoHeight = inchToFeet(70);
console.log(shuvoHeight);

//ignore this one
function inchToFeet2(inch){
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
  return result;
}

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);







//mile to kilometer

function mileKilometer(mile){
  const kilo = mile * 1.60934;
  return kilo;
}

const azomChottor = mileKilometer(5)
console.log(azomChottor);










