// Imorting Variables:
import { name, age } from "./ModulesExport.mjs";

let text = "My name is " + name + ", I am " + age + " years old.";
console.log(text)

// Importing Function:
import { add } from "./ModulesExport.mjs";

console.log(add(3, 5));

// Import Class
import { Person } from "./ModulesExport.mjs"; // in case of class we

let obj = new Person("Saptarshi","Biswas",23)

let message = `I am ${obj.fname} ${obj.lname}, I am ${obj.age} years old.`
console.log(message)