const person = {
  name: 'sodor uddin',
  age: 25,
  profession: 'developer',
  salary: 25000,
  married: true,
  'fav places': ['bandarban', 'sainmartin', 'kuakata']
}

console.log(person);


person['age'] = 26;
person['profession'] = 'devops';
person['salary'] = 32000;
person['married'] = false;
person['fav places'][1] = 'jamalpur';
console.log(person)

// person['salary'] = 32000;
// person['age'] = 26;
// person['fav places'] = ['maldives', 'bali', 'patya']
// person['fav places'][1] = 'jamalpur';

// const propName = 'profession';
// person[propName] = 'devops';


// const marStatus = 'married';
// person[marStatus] = false;
// console.log(person)