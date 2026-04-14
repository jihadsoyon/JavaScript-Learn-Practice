function sum(x) {
    // If no arguments are given
    if (x === undefined) return 0;

    let total = x;

    // Inner curried function
    function add(y) {
        if (y === undefined) {
            return total;           // Calling () returns sum.
        }
        total += y;
        return add;                 // Returning myself again for chaining
    }

    return add;
}

console.log(sum(1)(2)(3)(4)());        // 10
console.log(sum(5)(10)(15)(20)());     // 50
console.log(sum(1)(2, 3)(4)());        // Wait, This will not work (takes one argument)

console.log(sum(100)());               // 100
console.log(sum()());                  // 0