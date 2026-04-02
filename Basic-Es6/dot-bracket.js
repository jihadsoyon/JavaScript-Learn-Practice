const employee = {
 name: 'John Doe',
 1: 'desk one',
 'home-address': '123 Main St',
 position: 'Software Enginner',
 salary: 500000
 
}

//dot notation 
console.log(employee.name);
console.log(employee.salary);

//bracket nptation
console.log(employee['name']);
console.log(employee['1']);
console.log(employee['home-address']);

const money = employee['salary'];
console.log(money);

const key = 'position';
console.log(employee[key]);




