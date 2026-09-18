const STORAGE_KEY = 'numbers';

// localStorage থেকে array পড়া — যদি কিছু না থাকে, খালি array রিটার্ন করবে
const getNumbers = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

// array-কে localStorage-এ save করা (JSON string হিসেবে, কারণ localStorage শুধু string রাখতে পারে)
const saveNumbers = (numbers) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(numbers));
};

// নতুন random number generate করে array-তে push করা
const addNumber = () => {
    const numbers = getNumbers();
    const newNumber = Math.ceil(Math.random() * 100);

    numbers.push(newNumber);
    saveNumbers(numbers);
};

document.getElementById('addBtn').addEventListener('click', addNumber);