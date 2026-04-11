const person ={
name: "salim",
fruit : "dalim",
friends: ["alim", "kolim", "lamim"],
isRich: false,
money: 34000

}
// console.log(person)

//Json -=> JS Object with Notation
//Json.stringfy -- > Json e convert
//JSON.parse  ----> Object e convert

const personJson = JSON.stringify(person)
console.log(personJson, typeof personJson); 

const parseJson = JSON.parse(personJson);
console.log(parseJson, typeof parseJson)



