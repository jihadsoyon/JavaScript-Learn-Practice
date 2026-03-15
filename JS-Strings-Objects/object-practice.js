/** Task 01:
 * Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
 */

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"])

/**
 * task 02:
 * For this object below add a property named passenger capacity with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

 */


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    "passenger capacity" : 5
};

console.log(car["passenger capacity"])

/**
 * Task 03:
 * Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

 */

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks)

/**
 * task 04:
 * Count the number of properties.
 * 
  let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

 */

 let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(Object.keys(students).length)


/**
 * Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
 */



let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(const object in myObject){
  console.log(object);
  console.log(myObject[object]);
}

const objec = Object.keys(myObject);
// console.log(objec);

for(const obj of objec){
  console.log('key:', obj, '|','type:', typeof myObject[obj])
}



// let myObject = {
// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };
// for (let object in myObject){
//   // console.log(object);
//   // console.log(myObject[object])
// }
// let keys = Object.keys(myObject);
// console.log(keys);

// for (let key of keys){
//   console.log('key:', key, '|', 'type:', typeof myObject[key]);
// }

