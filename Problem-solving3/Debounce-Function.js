function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Test function
function mySearch(text) {
    console.log("Searching for:", text);
}


const debouncedSearch = debounce(mySearch, 500);

console.log("Debounce function created!");


debouncedSearch("apple");
debouncedSearch("apricot");
debouncedSearch("application");

