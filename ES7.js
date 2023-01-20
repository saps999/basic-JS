//Array.prototype.includes()-->
//Used to determine whether the array contains 
//the specified value, if so, return true; otherwise, return false.

const array=[10,20,30,40,50,60];
let result=array.includes(30);

console.log("Array includes: ",result);
console.log("Array includes: ",array.includes(100));

//----------------------------------------------------------------------------------------------
//Exponentiation Operator
console.log(2**5); 
// equal to
//console.log(Math.pow(2, 5));