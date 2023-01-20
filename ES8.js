//Async,await--->The async and await keywords enable asynchronous, promise-based behavior.

async function test() {
    try {
        const result = await otherAsyncFunction();
        console.log(result); // output result
    } catch(e) {
        console.log(e); // Can catch errors if otherAsyncFunction() throws an error
    }
};

setTimeout(function otherAsyncFunction(){console.log("Good Night")
   },1000);

   //-----------------------------------------------------------------------------------------

 //Object.values()--->Returns all the values of the Object’s own properties, excluding inherited values.
 
 const personObject ={
      firstName : "Dhanshree",
      age : 20,
      a : 10,
      b : 100
 }

 let result = Object.values(personObject);
 console.log("Object.Values() :- ",result);

 //----------------------------------------------------------------------------
 //Object.entries()--->Returns the enumerable key, the value of the incoming object itself.

 const mytest={
      x : 100,
      y : 90,
      z : 80
 }

 let testResult=Object.entries(mytest);
 console.log("Object.entries() :- ",testResult);

 //-----------------------------------------------------------------------------------

 //String padStart() & padEnd()-->You can add other content to the beginning or end of the string and fill it to the specified length.
 
 //padstart
 let text="Dhan";
 
 let check = text.padStart(6,'k');

 console.log("PadStart: ",check);

 //padEnd
 let text2="Dhan";
 
 let check1 = text.padEnd(6,'k');

 console.log("PadEnd: ",check1);

 //-------------------------------------------------------------------------------------

 //Trailing commas-->Allow commas at the end of function parameter lists

 //array
 const arr = [
    "one",
    "two",
    "three",,
  ];
  
  console.log(arr.length);

  //object
  const car = {
    color: 'red',
    type: 'coupe',
    hp: 500
};

const {color, type, hp,} = car;

console.log(color);

//function
  function createRectangularPrism(
    w,    // (number) the width
    h,    // (number) the height
    d,    // (number) the depth
  )
   { 
    let result=w*h*d;
    console.log(result);
   }

   createRectangularPrism (
    5,
    10,
    2,
  )

  //function
  function myFunction(
    p1,
    p2,
  ) 
  { console.log(p1,p2); }
  
  myFunction(
    'arg1',
    'arg2',
  );

  //-----------------------------------------------------------------------

  //Object.getOwnPropertyDescriptors()--->returns an object describing the configuration of a specific property on a given object

  const exampleObj = {a: 1, b: 2, c: 3, d:4};

  let output=Object.getOwnPropertyDescriptors(exampleObj);

  console.log(output);

  //----------------------------------------------------------------------------

  //SharedArrayBuffer-->SharedArrayBuffer is a fixed-length raw binary data buffer, similar to ArrayBuffer.

  const sab = new SharedArrayBuffer(20);
  console.log(sab);

//----------------------------------------------------------------------------

//Atomics object-->

//Atomics object, which provides a set of static methods to perform atomic operations on SharedArrayBuffer.


// const buffer = new SharedArrayBuffer(16);
// const uint8 = new Uint8Array(buffer);
// uint8[0] = 7;

// // 7 + 2 = 9
// console.log(Atomics.add(uint8, 0, 2));
// // Expected output: 7

// console.log(Atomics.load(uint8, 0));