
console.log("-----------------------------------------------------Class Examples------------------------------------------------------------")
//Class

//1st Ex
class Person{
    constructor(fname,lname,age)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    toString()
    {
        console.log('First Name: ',this.fname,
        'Last Name: ',this.lname,
        'Age: ',this.age);
    }
}

var obj=new Person('Dhanshree','Patil',22);
obj.toString();

console.log(obj.hasOwnProperty('fname'));    //true

console.log(obj.hasOwnProperty('toString'));  //false

console.log(obj.__proto__.hasOwnProperty('toString')); //true

//---------------------------------------------------------------------------------------------------
class School{
    constructor(name,address)
    {
        this.name=name;
        this.address=address;
    }

    show()
    {
       console.log(`Hello all, Scholl name is ${this.name}. and its address is ${this.address}.`);
    }
}

  //creating Object of a class
   var school=new School("Sinhgad College","Vadgaon,Pune");
   school.show();

console.log("--------------------------------------------------------------------------------------------------------------------------------------");


console.log("-----------------------------------------------------Arrow function Examples------------------------------------------------------------")
//Arrow function

//() => {…}, short for function. Most importantly, he can ensure that this always points to himself

const square=(num) => {
    return num*num;
}

console.log(square(8));
console.log("--------------------------------------------------------------------------------------------------------------------------------------");

console.log("------------------------------------------Function parameter default value Examples-------------------------------------------------------")
//Function parameter default value---->

// If the function does not pass parameters, the default value is used. more condensed writing.

function Test(num = 50) { 
     const no1 = num * 2;
     console.log(no1);
}

Test(); //No value is specified then it takes the default value as num=50

Test(10);  //value is specified then it takes the value as num=10

//----------------------------------------------------------------------------------------------

function print(k='Pooja')
{
    console.log(`Hii ${k}, Welcome To Bridgelabz.`);
}

print();   //default value

print('Poonam');  //specified value
console.log("--------------------------------------------------------------------------------------------------------------------------------------");

console.log("-----------------------------------------------------Template literal Examples------------------------------------------------------------")
//Template literal--->The composition of long strings, in the past, was concatenated through +.
//Its readability is pretty bad. With template strings, it’s much easier to read.

const firstName = 'Dhanshree';
const lastName = 'Patil';

// without template literal
const namedata = 'Hello, My name is ' + firstName + ', ' + lastName;
console.log(namedata);

// use template literal
const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;
console.log(nameWithLiteralString); 

let str = `Hello all,
Welcome to bridgelabz.
Enjoy Your Learnings.`;

console.log(str);

console.log("--------------------------------------------------------------------------------------------------------------------------------------");



console.log("-----------------------------------------------------Destructuring arrays Examples----------------------------------------------------")
//Destructuring arrays--->Allow JavaScript to easily get content from arrays and objects.
//1st Ex
const array = [10,20,30,40,50];
const [one, two, three] = array;

console.log(one); 
console.log(two); 
console.log(three);

//2nd Ex
const arr=["Rose","Chameli","Lotus","Delia"];
const[first,,,last]=arr;

console.log(first);
console.log(last);

//object destructuring assignment

//1st Ex
let person = {names: "Dhanshree", age: 22};

let {names, age} = person; 
console.log(names);
console.log(age);

//2nd Ex
let student={
    rollno : 1,
    fullName : "Chinmai Patil",
    Class : 10
}

let {rollno,fullName}=student;
console.log(rollno);
console.log(fullName);

console.log("--------------------------------------------------------------------------------------------------------------------------------------");

console.log("-----------------------------------------------------Spread operator Examples---------------------------------------------------------")

//Spread operator---> ...

// That is…, Array can be expanded, if it is an Object, it will be expanded according to key-value.

//1st Ex
const stuendts = ['Diksha', 'Amol']; 
const people = ['Poonam', ...stuendts, 'Mayur', 'rohini'];

console.log(people); 

//2nd Ex
const array1=[10,20,30,40,50];
const array2=[90,80,70,60];

const result=[10,20,30,...array2,40,50];
console.log(result);

console.log("--------------------------------------------------------------------------------------------------------------------------------------");
console.log("-----------------------------------------------let, const to replace var Examples----------------------------------------------------")

//let, const to replace var
/*
let: general variable, can be overridden

const: Once declared, its contents cannot be modified.

Var: In the early days, the var scope of js was global.
That is, the variable is declared after you use it. When it is executed, 
it will be automatically mentioned to the top level, and it will be assigned later.
*/

//console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

//console.log(b);  //ReferenceError: Cannot access 'b' before initialization
const b=50;

console.log(xy);  //output-->undefined
var xy=20;
console.log("--------------------------------------------------------------------------------------------------------------------------------------");

console.log("-----------------------------------------------------Promise Examples---------------------------------------------------------")
//Promise--->
const myPromise = new Promise((myResolve, myReject) => {
    
    const Random=Math.random();

    if(Random > 0.5)
    {
        myResolve(Random);  // when successful
    }
    else
    {
        myReject(`Random Value is Too Low: ${Random}`);  // when error
    }  
});
    
    // wait for a fulfilled Promise.
    myPromise
    .then(result => {
        console.log(`Random Value is: ${result}`);
    })
    .catch(error => {
        console.log(`Error is: ${error}`);
    });
      

console.log("--------------------------------------------------------------------------------------------------------------------------------------");

