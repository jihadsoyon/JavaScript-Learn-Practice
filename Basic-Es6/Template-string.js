


// 1️⃣ Template String (Template Literal)

// 👉 Template string হলো backtick ` দিয়ে লেখা string।
// 👉 এটা ES6 এ এসেছে।
// 👉 এর ভিতরে ${} ব্যবহার করে variable বা expression বসানো যায়।

function puroName(firstName, lastName){
const fullName = `My name is ${firstName} ${lastName} and I am learning JavaScript.`
return fullName;
}

console.log(puroName('Jihad', 'Soyon'))


// 👉 ${} এর ভিতরে শুধু variable না, calculation ও করা যায়।

console.log(`Total: ${10 + 20}`);



// 🔹 2️⃣ Multiline String

const customer = `
Dear Customer,

Thank you for your purchase.

Best regards,
Your Shop
`
console.log(customer);





// 🔹 3️⃣ Dynamic String

// 👉 Dynamic string মানে হলো এমন string যার ভিতরে variable বা data change করলে string ও change হবে।

// Example:

const product = "iPhone";
const price = 999;

const message = `The ${product} price is $${price}`;
console.log(message);


// 🎯 Real Life Example (Card Generate)
function createCard(name, price){
  return `
  <div>
    <h2>${name}</h2>
    <p>Price: $${price}</p>
  </div>
  `;
}

console.log(createCard("Samsung", 800));



//  const products = 'Poco X5 Pro';
 const prices = 300;
 const quantity = 1;
 const tax = 0.1;
 const totals = prices * quantity + prices * quantity * tax;

// console.log(`You bought ${quantity} ${products} for a total of $ ${totals}.`);


// 🔥 সহজভাবে পার্থক্য
// Template String	Backtick দিয়ে লেখা string
// Multiline String	একাধিক লাইনে লেখা string
// Dynamic String	Variable/Expression দিয়ে পরিবর্তনশীল string








// Meeting task 1

const products = [
 { name: "Shirt", price: 500 },
 { name: "Pants", price: 800 },
];

function generateProductHTML(products){
  let html=''
  for(let i = 0; i < products.length; i++){
    html+= `
     <div>
     <h2>${products[i].name}</h2>
     <p>${products[i].price}</p>
     </div> 
  `;
  }
   return html;  
}

console.log(generateProductHTML(products));



































