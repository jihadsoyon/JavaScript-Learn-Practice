const person = {
  name: 'sodor uddin',
  age: 25,
  profession: 'developer',
  salary: 25000,
  married: true,
  'fav places': ['bandarban', 'sainmartin', 'kuakata']
}

console.log(person);

//dot notation
// console.log(person.profession);
const income = person.salary;
console.log(income);


//bracked notation
//third bracket diye access kora

console.log(person['age'])
const boyos = person ['age']
console.log(boyos)
console.log(person['fav places'])

const keyName= person['profession'];
console.log(keyName)











