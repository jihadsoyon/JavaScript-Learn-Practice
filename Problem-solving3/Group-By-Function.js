// Group By Function
function groupBy(array, key) {
    return array.reduce((result, currentItem) => {
        const groupKey = typeof key === 'function' 
            ? key(currentItem) 
            : currentItem[key];

        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(currentItem);
        return result;
    }, {});
}

// ============== Test data==============
const users = [
    { id: 1, name: "Alice", age: 25, city: "Dhaka" },
    { id: 2, name: "Bob",   age: 30, city: "Chittagong" },
    { id: 3, name: "Charlie", age: 25, city: "Dhaka" },
    { id: 4, name: "David", age: 35, city: "Sylhet" },
    { id: 5, name: "Eve",   age: 30, city: "Dhaka" }
];

console.log("Users grouped by age:");
console.log(groupBy(users, "age"));

console.log("\nUsers grouped by city:");
console.log(groupBy(users, "city"));

// Bonus: Grouping with callbacks (e.g. age > 28)
console.log("\nUsers grouped by 'Young' or 'Adult':");
const groupedByAgeGroup = groupBy(users, (user) => user.age > 28 ? "Adult" : "Young");
console.log(groupedByAgeGroup);