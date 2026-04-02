const employee = {
 name: 'John Doe',
 1: 'desk one',
 'home-address': '123 Main St',
 position: 'Software Enginner',
 salary: 500000,
 family: {
  father: 'Richard Poe',
  mother: {
    name: 'jane Doe',
    age: 55
 }
 
}
}
const value = employee.name;
console.log(employee.family?.mother?.age) 




const students = {
  "Rafi": {
    age: 20,
    profile: {
      email: "rafi@example.com",
      city: "Dhaka"
    }
  },
  "Jihad": {
    age: 25
  }
};
console.log(students.Rafi.profile.email)
console.log(students['Rafi'] ['profile'] ['city']);
console.log(students.Jihad.profile?.email);
console.log(students['Jihad']?.profile?.city);










