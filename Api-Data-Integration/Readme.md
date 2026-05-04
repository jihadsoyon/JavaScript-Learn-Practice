# 🚀 API Data Integration Practice

## 👨‍💻 About This Module
This repository section showcases my hands-on practice and deep understanding of **API Data Integration using JavaScript**.

I focused on fetching, handling, and dynamically rendering real-world data from REST APIs — a core skill for modern web development.

---

## 🎯 What I Learned

### 🔹 1. API Fundamentals
- What is an API (Application Programming Interface)
- Understanding REST APIs
- HTTP Methods:
  - GET → Fetch data
  - POST → Send data
  - PUT/PATCH → Update data
  - DELETE → Remove data
- Status Codes:
  - 200 → Success
  - 404 → Not Found
  - 500 → Server Error

---

### 🔹 2. Fetch API (Core Skill)
- Using `fetch()` to request data from APIs
- Handling Promises
- Converting response to JSON

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));