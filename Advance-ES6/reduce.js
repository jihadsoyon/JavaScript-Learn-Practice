const numberss = [1, 2, 3, 4, 5];
let sum = 0;
for(const num of numberss){
sum = sum + num;
}

const total = numberss.reduce((acc, num) => acc + num, 0)
console.log(sum);
console.log(total)






const numbers = [10, 15, 20, 25, 30, 35];

const result = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        return acc + num;
    }

    return acc;
}, 0);

console.log(result);




const employees = [
    { name: "Jihad", salary: 50000 },
    { name: "Rahim", salary: 40000 },
    { name: "Karim", salary: 60000 },
    { name: "Hasan", salary: 30000 }
];



const totalSalary = employees.reduce((acc, employee) => {
    return acc + employee.salary;
}, 0);

console.log(totalSalary);





const cart = [
    {
        name: "Laptop",
        price: 80000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1500,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 3000,
        quantity: 1
    }
];

const totall = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
}, 0);

console.log(totall);


