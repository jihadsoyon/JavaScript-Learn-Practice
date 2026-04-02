// ১️⃣ Object.keys()

// Purpose:
// Object এর সব property name (keys) বের করে array হিসেবে return করে।

// Example:

// const student = { name: "Rafi", age: 20, grade: "A" };

// const keys = Object.keys(student);
// console.log(keys); // ["name", "age", "grade"]

// এখানে student object এর সব key বের হলো।


// ২️⃣ Object.values()

// Purpose:
// Object এর সব value বের করে array হিসেবে return করে।

// Example:

// const values = Object.values(student);
// console.log(values); // ["Rafi", 20, "A"]

// এখানে student object এর সব value বের হলো।


// ৩️⃣ Object.entries()

// Purpose:
// Object এর [key, value] pair এর array return করে।

// Example:

// const entries = Object.entries(student);
// console.log(entries);
// // [["name", "Rafi"], ["age", 20], ["grade", "A"]]

// এইটা মূলত Object কে array of arrays তে রূপান্তর করে।





// ✅ Summary Table
// Method/Property	Purpose
// Object.keys(obj)	সব keys array আকারে দেয়
// Object.values(obj)	সব values array আকারে দেয়
// Object.entries(obj)	সব [key, value] pair array আকারে দেয়
// delete obj.key	কোনো property remove করে
// Object.seal(obj)	নতুন property add করা যাবে না, কিন্তু update করা যাবে
// Object.freeze(obj)	সম্পূর্ণ object immutable, কোনো পরিবর্তন হবে না