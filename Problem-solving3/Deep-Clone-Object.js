function deepClone(value, map = new WeakMap()) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (map.has(value)) {
        return map.get(value);
    }

    let cloned;

    if (Array.isArray(value)) {
        cloned = [];
        map.set(value, cloned);
        for (let i = 0; i < value.length; i++) {
            cloned[i] = deepClone(value[i], map);
        }
    } 
    else {
        cloned = {};
        map.set(value, cloned);
        
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                cloned[key] = deepClone(value[key], map);
            }
        }
    }

    return cloned;
}

// ============== Test data ==============
const original = {
    name: "Rahim",
    age: 28,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        details: {
            zip: 1200,
            area: "Mirpur"
        }
    },
    hobbies: ["Cricket", "Football", { indoor: "Chess" }],
    score: null,
    isActive: true
};

// Add circular reference
original.self = original;

console.log("Original Object:");
console.log(original);

const cloned = deepClone(original);

console.log("\nCloned Object:");
console.log(cloned);

// Reference check
console.log("\nAre they same reference?", original === cloned); 
console.log("Nested address same reference?", original.address === cloned.address);

// Modify clone → original will not be affected
cloned.address.city = "Chittagong";
cloned.hobbies[2].indoor = "Table Tennis";

console.log("\nAfter modifying cloned:");
console.log("Original city:", original.address.city);     
console.log("Cloned city:", cloned.address.city);
console.log("Original hobbies indoor:", original.hobbies[2].indoor);
console.log("Cloned hobbies indoor:", cloned.hobbies[2].indoor);