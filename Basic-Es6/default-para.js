function add(num1, num2){
  const total = num1 + num2;
  console.log(num1, num2, total);
}
//NaN => Not a Number
add(10);


function add2(num1, num2=0){
  const total = num1 + num2;
  console.log(num1,'+',num2,'=' ,total);
}

add2(10);


function fullName(first, last = ''){
  const name = first + ' ' + last;
  console.log(name);
}
fullName('kamruzzaman');

function multiply(num1, num2 = 0){
const result = num1 * num2;
console.log(num1,'*',num2,'=' ,result);
}
multiply(10)




function minus(a, b=8){
  const biyog = a - b;
  console.log(a,'-',b,'=', biyog);
}
minus(20)


/**
 * string --> ''
 * number --> 0[for add]
 * number --> 1[for multiply
 * array  -->  []
 * object --> {}
 * boolean --> false
 */

//Practice Problem

function calculatePrice(price, tax = 5, discount = 0){
  const totalPrice = price + (price * tax / 100)- discount;
  return totalPrice;
}
const overall = calculatePrice(10);
console.log(overall);

function createUserProfile(name, age, country= 'Bangladesh', isPremium = false){
let membership;
if(isPremium){
  membership = 'Premium';
}else{
  membership = 'Standard';
}
const allobj = {
  name: name,
  age: age,
  country: country,
  membership: membership
}
return allobj;
}

console.log(createUserProfile('Jihad', 24, 'Bangladesh', true))

const products = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 }
];

function calculateCartTotal(items, shippingFee = 50){
let total = 0;
for(let i = 0; i < items.length; i++){
total = total + items[i].price * items[i].quantity;
}
total = total + shippingFee;
return total;
}
console.log(calculateCartTotal(products));