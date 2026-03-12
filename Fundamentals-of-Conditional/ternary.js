const age = 22;
// if (age >= 18){
//   console.log('You can vote')
// }
// else{
//   console.log('Go and Sleep')
// }
// // simple ternary
//  age >= 18 ? console.log('Vote') : console.log('Sleep')







 let price = 1000;
let isLeader = true;

// if (isLeader){
//   price= 0;
// }
// else {
//   price = price+ 200;
// }
//  console.log(price)



// price = isLeader === true ? 0 : price + 100;

// console.log(price);

// Optionall; semi advance  ternary 

// if (isLeader === true){
//   if(price > 1000){
//     price = price/2
//   }
//   else {
//     price = 0;
//   }
// }
// else {
//   price = price+ 1000 ;
// }

// console.log(price);

if(isLeader){
  if(price >= 1000){
    price /= 2;
  }
  else{
    price = 0;
  }
}
else{
  price += 1000;
}
console.log(price);

// //ternary

price===isLeader===true?(price >= 1000 ? price/2 : 0) : price + 1000;
//  let price = 1000;
// let isLeader = true;

// console.log(price);




















// price = isLeader ? (price >= 1000 ? price / 2 : 0) : price + 1000;