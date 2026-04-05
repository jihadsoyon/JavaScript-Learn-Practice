console.log(2===2);
console.log(2===3);
console.log(2==='2');

//compares the data type first. If dta types are diffrent, it returns false. If data types are same, it compares the values and returns true or false accordingly.




// 🟢 Step 1: == (Double Equals)

// == মানে loose equality

// এটা দুই value compare করে type কে ignore করে, মানে type convert করতে পারে

// এটাকে বলে type coercion

// উদাহরণ:
console.log(5 == "5");   // true
console.log(0 == false); // true
console.log(null == undefined); // true

// Explanation:

// 5 == "5" → string "5" converted to number 5 → true

// 0 == false → false converted to 0 → true


//🟢 Step 2: === (Triple Equals)

// === মানে strict equality

// এটা type + value উভয়ই check করে

// কোন type conversion হয় না

// উদাহরণ:
console.log(5 === "5");   // false
console.log(0 === false); // false
console.log(null === undefined); // false
console.log(5 === 5); // true

// Explanation:

// Type mismatch হলে সবসময় false

// Value + type একদম match করতে হবে
