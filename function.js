// normal function
function myFunction(a,b){
    return a+b;
}
console.log(myFunction(3,2));

// arrow function
let add=(a,b)=>a+b;
console.log(add(3,2));

// annonymous function

let x= function(a,b){
    console.log(a+b)
};
x(2,3)