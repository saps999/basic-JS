//await in loop--> place the loop in an async function, then you can use await and the loop stops the
// iteration until the promise we're awaiting resolves

// const fun = (item) => {
//     return new Promise(resolve => {
//       setTimeout(() =>
//         resolve(`done ${item}`), 1000);
//     })
//   }
  
//   const go = async () => {
//     const list = [1, 2, 3]
      
//     for (const item of list) {
//       console.log(item)
//       console.log(await fun(item))
//     }
    
//     console.log('done all')
//   }
  
//   go()

//promise.finally()-->
//The finally() method gets executed when the promise is either resolved successfully or rejected.
//The part of Promise that will be executed later whether it succeeds (.then()) or fails (.catch()).

// const count = true;
// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });


// // add other blocks of code
// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );


// Rest, Spread

//the Rest indefinite length parameters… can be converted into an array and passed in.

//rest-->rest gets used as a prefix of the function’s last parameter.
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  let check=myBio("Cat", "Dog", "Parrot", "Monkey", "Peacock");
  console.log(check);
  

function restParams(p1, p2, ...p3) {
    console.log(p1); // 1
    console.log(p2); // 2
    console.log(p3); // [3, 4, 5]
}
restParams(1, 2, 3, 4, 5);

//spread--spread the values of iterable objects into separate items. So effectively, it does the opposite thing from the rest operator.
const myName = ["Dhanshree", "is", "my"];
const aboutMe = ["Name", ...myName, "petname."];

console.log(aboutMe);


//RegExp groups

//RegExp can return matching packets

const regex= /^[0-9]{6}$/;
const matcher = regex.test('413512'); //pincode validation
console.log(matcher);


const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match      = regExpDate.exec('2020-06-25');
const year       = match[1]; // 2020
const month      = match[2]; // 06
const day        = match[3]; // 25

console.log(year,month,day);

//Regexp lookahead Negative-->

let str = "748596";

console.log( str.match(/^[0-9]{6}$/) ); 


//Regexp dotAll-->
//The dotAll accessor property indicates whether or not the s flag is used with the regular expression.
//Represents matching any symbol except entering. After adding thes flag it is allowed to match enter.


const regex1 = new RegExp('foo', 's');

console.log(regex1.dotAll);


const regex2 = new RegExp('bar');

console.log(regex2.dotAll);
