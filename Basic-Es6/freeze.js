// ৪️⃣ delete

// Purpose:
// Object এর কোনো property remove করতে।

// Example:

// delete student.age;
// console.log(student); // { name: "Rafi", grade: "A" }

// এখন age property gone।

// 💡 Tip: delete শুধুমাত্র property remove করে, object নিজে remove হয় না।



// ৫️⃣ Object.seal()

// Purpose:

// Object seal করলে নতুন property add করা যায় না।

// Existing property update করা যায়।

// Existing property delete করা যায় না।

// Example:

// Object.seal(student);
// student.name = "Jihad";  // Update করা যাবে
// student.city = "Dhaka";   // নতুন property add হবে না
// delete student.grade;     // delete হবে না
// console.log(student);     // { name: "Jihad", grade: "A" }
// ৬️⃣ Object.freeze()

// Purpose:




// Object freeze করলে কোনো পরিবর্তন সম্ভব না।

// Update, delete বা add কোনো operation কাজ করবে না।

// Example:

// Object.freeze(student);
// student.name = "Sumi"; // কাজ করবে না
// delete student.grade;   // কাজ করবে না
// student.city = "Dhaka"; // কাজ করবে না
// console.log(student);   // { name: "Jihad", grade: "A" }

// 💡 Tip: Seal এবং Freeze দুইটিই object কে restrict করে, কিন্তু Freeze আরও strict।














// Practical Task: Student Object

// তোমার কাছে student object আছে:



// কাজগুলো:

// Object এর সব keys console.log() দিয়ে দেখাও।

// Object এর সব values console.log() দিয়ে দেখাও।

// Object এর সব entries console.log() দিয়ে দেখাও।

// age property delete করো।

// Object seal করো।

// তারপর চেষ্টা করো city নামের নতুন property add করতে।

// এবং grade update করতে।

// Object freeze করো।

// তারপর চেষ্টা করো name update করতে।

// এবং grade delete করতে।

// সব শেষে console.log() দিয়ে চূড়ান্ত object দেখাও।



const student = {
  name: "Rafi",
  age: 20,
  grade: "A"
};

const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);
const entries = Object.entries(student);
console.log(entries);
// delete student.age;
console.log(student)
Object.seal(student);
student.city = 'Dhaka';
student.grade = 'B'
console.log(student); 
Object.freeze(student);
student.name = 'Jihad';
delete student.grade;
console.log(student); 





