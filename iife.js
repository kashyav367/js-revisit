// An Immediately Invoked Function Expression (IIFE)
// is a function that runs immediately after being defined

// Example syntax:
// (function() {
//   // code runs immediately
// })();

// Arrow function version of IIFE:
// (() => {
//   // code runs immediately
// })();

let a = 1;  
let b = 2;  

// Function to calculate sum of two numbers
function sum(a, b) {
    return a + b;  // returns addition of a and b
}

// Higher-order function
// It takes another function (ops) as a parameter
function doOperation(a, b, ops) {
    return ops(a, b);  // calls the passed function (sum here)
}

// Calling doOperation and passing sum function
// This will execute sum(1, 2) → returns 3
console.log(doOperation(a, b, sum));

// IIFE example
// This function runs immediately after definition
// It returns a + b (1 + 2 = 3)
return (function() {
    return a + b;
})();  // () at the end invokes the function immediately