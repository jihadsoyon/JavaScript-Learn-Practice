# 🐞 Github Issue Tracker

A modern and responsive **Issue Tracker Web Application** built using **HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript**.  
This project allows users to authenticate, browse issues, search issues, filter by status, and view detailed issue information inside a modal.

🌐 **Live Website:**  
https://issue-trackerrr.netlify.app/login.html

---

# ✨ Features

## 🔐 Authentication System
- Admin Login System
- Demo Credentials
- Login Validation
- Logout Functionality

## 📋 Issue Management
- Load All Issues from API
- Filter Issues by:
  - All
  - Open
  - Closed
- Responsive Issue Cards
- Dynamic Issue Count
- Modal for Detailed Issue View

## 🔎 Search Functionality
- Search Issues by Keywords
- Real-time API Search Integration

## 🎨 UI & UX
- Fully Responsive Design
- Active Tab Highlight
- Loading Spinner While Fetching Data
- Dynamic Top Border Color:
  - 🟢 Green for Open Issues
  - 🟣 Purple for Closed Issues

---

# 🛠️ Technologies Used

<p align="center">

<img src="https://skillicons.dev/icons?i=html,css,tailwind,javascript,git,github,vscode" />

</p>

### Libraries & Frameworks
- Tailwind CSS
- DaisyUI

---

# 🔑 Demo Credentials

```txt
Username: admin
Password: admin123

# 📖 JavaScript Questions & Answers

## What is the difference between var, let, and const?

The difference between `var`, `let`, and `const` are:

- `var` is redeclarable and reassignable
- `let` is reassignable but not redeclarable
- `const` cannot be redeclarable or reassignable

### Example

```js
var name = "Jihad";
var name = "Soyon";

let age = 20;
age = 21;

const country = "Bangladesh";
```

---

## What is the spread operator (...)?

The Spread Operator (`...`) in JavaScript is used to expand or spread elements of an array, object, or iterable into individual elements.

### Example

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2);
```

> Note: The original array is always safe. That's why it is useful.

---

## What is the difference between map(), filter(), and forEach()?

- `map()` is used to transform each element of an array and returns a new array.
- `filter()` is used to select elements based on a condition and returns a new array.
- `forEach()` is used to loop through an array, but it does not return anything.

### Example

```js
const numbers = [1, 2, 3, 4];

const mapped = numbers.map(num => num * 2);

const filtered = numbers.filter(num => num > 2);

numbers.forEach(num => {
  console.log(num);
});
```

---

## What is an arrow function?

Arrow function is shorter syntax of written functions.

### Example

```js
const greet = () => {
  console.log("Hello");
};
```

---

## What are template literals?

Template literals in JavaScript are a modern way to create strings.

There are 3 types:

- Template String
- Multiline String
- Dynamic String

### Example

```js
const name = "Jihad";

console.log(`My name is ${name}`);
```

```js
const message = `
Hello,
Welcome to JavaScript
`;

console.log(message);
```

---
