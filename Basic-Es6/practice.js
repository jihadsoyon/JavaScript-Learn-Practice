
// // Level 1
// // 🟢 Task 1: Employee Profile
 
// const employee = {
//     name: "Jihad",
//     age: 25,
//     role: "MERN Stack Developer",
//     skills: ["JavaScript", "React", "Next.js"]
// };


// const showEmployye = () => {
//     const {name, age, role, skills} = employee;
//     let skilll = "";

//     for(let i = 0; i < skills.length; i++){
//         skilll+= skills[i];

//         if(i < skills.length -1){
//             skilll+= ", "
//         }
//     }

//     return`
//     Name: ${name}
//     Age: ${age}
//     Role: ${role}
//     Skills: ${skilll}
//     `
// }

// console.log(showEmployye());


// // 🟢 Task 2: Default Parameter + Template String


// const introduce = (name, role, country = "Bangladesh") => {
//     return `
//     Hi, I'm ${name}. I'm a ${role} from ${country}.
//     `

// };

// console.log(introduce("Jihad", "Developer"));




// // 🟢 Task 3: Dot vs Bracket


// const user = {
//   name: "Jihad",
//   age: 25,
//   "home-address": "Jamalpur",
//   role: "Developer"
// };


// const getUser = (user) => {
// return `
// ${user.name}
// ${user.age}
// ${user["home-address"]}
// ${user.role}
// `
// }

// console.log(getUser(user));



// // 🟡 LEVEL 2 — Multiple Concepts


// const usser = {
//   name: "Jihad",
//   role: "Developer",
//   salary: 50000
// };

// const key = "salary";

// console.log(usser[key]);


// // 🟡 Task 5: Spread + Destructuring


// const basicInfo = {
//   name: "Jihad",
//   age: 25
// };

// const jobInfo = {
//   role: "MERN Developer",
//   company: "Tech Company"
// };


// const spreadDes = (basicInfo, jobInfo) => {


//     const shommilito =  {...basicInfo, ...jobInfo};

//      const {name, age, role, company} = shommilito;

//     return {
//         name, age, role, company
//     };


// }

// console.log(spreadDes(basicInfo, jobInfo));



// 🟡 Task 6: Array Spread + Loop


// const frontend = ["HTML", "CSS", "JavaScript"];

// const backend = ["Node.js", "Express.js"];

// const database = ["MongoDB"];


// const skills = [...frontend, ...backend, ...database];

// for(const skill of skills){
//     console.log(skill);
// }

// console.log(skills);
   



// 🟠 LEVEL 3 — Object Mastery



// Task 7: Object key + value 🔥

// const employee = {
//   name: "Jihad",
//   role: "Developer",
//   salary: 50000,
//   experience: 2
// };

// for(const emply in employee){
//         console.log(`${emply} -> ${employee[emply]}`);
// }

// 🟠 Task 8: Nested Object + Optional Chaining



// const user = {
//   name: "Jihad",
//   profile: {
//     address: {
//       city: "Jamalpur"
//     }
//   }
// };

// const user2 = {
//   name: "Jihad"
// };


// const getcITY = user.profile?.address?.city;
// console.log(getcITY);

// const getcITY2 = user2.profile?.address?.city;
// console.log(getcITY2);



// 🔴 LEVEL 4 — Freeze vs Seal

// Task 9: Object.freeze() 🔥


// const user = {
//   name: "Jihad",
//   age: 25
// };

// const userFreze = Object.freeze(user);

// user.age = 26;
// user.name = 'Soyon';
// user.role = 'Developer';
// delete user.name;

// console.log(user);


// I know by using freeze you can't add, update or delete the object property


// 🔴 Task 10: Object.seal()



// const user = {
//   name: "Jihad",
//   age: 25
// };


// const sealuser = Object.seal(user);

// user.name = 'Soyon';
// user.role = 'Developer';
// delete user.age;

// console.log(user);


// I know that by using seal you just can update the existing property otherwise you cant  delete or add





// 🔥 LEVEL 5 — CRAZY COMBINED TASK


// const employees = [
//   {
//     name: "Jihad",
//     age: 25,
//     role: "Frontend Developer",
//     skills: ["HTML", "CSS", "JavaScript"]
//   },

//   {
//     name: "Rahim",
//     age: 28,
//     role: "Backend Developer",
//     skills: ["Node.js", "Express.js", "MongoDB"]
//   },

//   {
//     name: "Karim",
//     age: 30,
//     role: "Full Stack Developer",
//     skills: ["React", "Node.js", "MongoDB"]
//   }
// ];




// const showEmployes = (employees) => {
//     for(const employe of employees){
//         const {name, age, role, skills} = employe;
//         console.log(` ==================
//  Name: ${name}
//  Age: ${age}
//  Role: ${role}`);

//             for(const skill of skills){
//                 console.log(`-${skill}`);
//             }
//     }


// }


// showEmployes(employees);



// 💀 LEVEL 6 — Interview Challenge


// Task 12: Dynamic Employee Search



// const employees = [
//   {
//     name: "Jihad",
//     role: "Frontend Developer",
//     salary: 50000
//   },
//   {
//     name: "Rahim",
//     role: "Backend Developer",
//     salary: 60000
//   },
//   {
//     name: "Karim",
//     role: "Full Stack Developer",
//     salary: 80000
//   }
// ];


// const showEmployeeInfo = (employees, property = 'name') => {

//      console.log(employees[property]);;


// }

// showEmployeeInfo(employees[0], "role");




// 💀 FINAL BOSS — সব একসাথে 🔥


// Task 13: User Profile System


// const user = {
//   name: "Jihad",
//   age: 25,

//   contact: {
//     email: "jihad@example.com",
//     phone: "01700000000"
//   },

//   skills: ["JavaScript", "React", "Next.js"],

//   job: {
//     role: "MERN Stack Developer",
//     salary: 70000
//   }
// };



// const generateProfile = (user, country = "Bangladesh") => {
// // ১. Spread operator দিয়ে অবজেক্ট ক্লোন বা অ্যারে কপি
//   const  newUser =  {...user}
  
//   // ২. Optional chaining (?.), Dot notation (.) এবং Bracket notation ([]) দিয়ে ডেটা এক্সেস
//   const name = newUser['name'];
//   const age = newUser?.age
//   const contact = newUser?.contact;
//   const skills = newUser['skills'];
//   const job = newUser['job']

//   // console.log(name, age, contact, skills,job)

//   // ৩. Object & Array Destructuring
//   const {email, phone} = contact; 
//   const [skills1, skills2, skills3] = skills;
//   const {role, salary} = job;

//   // ৪. for...of লুপ ব্যবহার করে skills ফরম্যাট করা
//   let formattedSkills = ""
//   let count = 1;
//   for(const skill of skills){
//     formattedSkills += 
// `${count} ${skill}\n`;
//     count++;
    
//   }

//   // ৫. Template string ব্যবহার করে আউটপুট তৈরি

//   return `==============================
//         USER PROFILE
// ==============================
// Name: ${name}
// Age: ${age}
// Country: ${country}
// Email: ${email}
// Phone: ${phone}
// Role: ${role}
// Salary: ${salary}
// Skills: 
// ${formattedSkills}  
//   `


// }


// console.log(generateProfile(user));


// const generateProfile = (user, country = "Bangladesh") => {

// const {name, age, contact, skills, job} = user;
// const {email, phone} = contact;
// const [skills1, skills2, skills3] = skills;
// const {role, salary} = job;

// return `
// Name: ${name}
// Age: ${age}
// Country: ${country}
// Email: ${email}
// Phone: ${phone}
// Role: ${role}
// Salary: ${salary}
// Skills: 1.${skills1} 2.${skills2} 3.${skills3}


// `


// }

// console.log(generateProfile(user));



// 🧠 Bonus Challenge

// const user = {
//   name: "Jihad",
//   skills: ["JavaScript", "React"],
//   profile: {
//     role: "Developer"
//   }
// };


// const newUser = {...user}
// newUser.name = "Rahim" ;
// newUser.skills.push('Next.js');
// console.log(newUser);
// console.log(user);