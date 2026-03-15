const mobile = {
  brand: 'samsung',
  price: 25000,
  color: 'black',
  camera: '12mp',
  isNew: true
}

//for of chalay array er moddhe
//for in chalay object er moddhe

for(const prop in mobile){
console.log(prop);
console.log(mobile[prop])
}

// const propo = Object.keys(mobile);
// console.log(propo)

// for(const key of propo){
//   console.log(key, '|', mobile[key]);

// }


// for(const prop in mobile){
//   console.log(prop);
//   console.log(mobile[prop])
// }

// const keys = Object.keys(mobile);
// console.log(keys);

// for(const key of keys){
//   console.log(key, '|',mobile[key])
// }


// for(const prop in mobile){
//   console.log(prop)
//   // console.log(mobile[prop])
// }
// const keys = Object.keys(mobile); 
// console.log(keys);

// for (const key of keys){
//   console.log(key, '|', typeof mobile[key]);
// }
