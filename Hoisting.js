// HOISTING
// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// 1. Variable Hoisting
a = 5;
console.log(a);
var a; 

// 2. Function Hoisting
console.log(add(5,5));

function add(a,b){
    console.log(a+b);
}