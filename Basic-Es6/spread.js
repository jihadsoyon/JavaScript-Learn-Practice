
// ১. Spread Operator কী?

// JavaScript-এ Spread Operator হলো ... (তিনটি ডট) যা কোনো array, object বা iterable কে individual elements হিসেবে “ফাঁকিয়ে” দেয়।

// সাধারণভাবে বলতে গেলে, এটা কোনো collection কে আলাদা আলাদা অংশে ভেঙে দেয়।




const max = Math.max(3, 5, 1, 8, 2, 58, 1);
console.log(max);

const numbers = [3, 5, 1, 8, 2, 58, 1, 67];
const max2 = Math.max(...numbers);
console.log(...numbers)
console.log(max2)

const params = [45, 12, 3];
function sum(x, y, z){
  return x + y + z;
}

const result = sum(...params)
console.log(result)

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
const arr1 = [1, 2, 3];
const arr2 = [11, ...arr1, 66, 78];
arr2.push(4);
console.log(...arr1);
console.log(...arr2);

const person = { name: 'Alice', age: 30};
// const person2 = person;
const person2 = {...person, Desgnation: 'Developer'};
person.salary = 36000;
console.log(person);
console.log(person2);




const arr11 = [1,2,3];
const arr21 = arr11; 
arr21.push(4);
console.log(arr11); // [1,2,3,4] ❌ original modify হয়েছে
console.log(arr21);

const original = [1, 2, 3];
const copy = [...original];

// console.log(copy); // [1, 2, 3]

// Modify copy
copy.push(4);
console.log(original); // [1, 2, 3] ✅ original safe
console.log(copy);     // [1, 2, 3, 4]





