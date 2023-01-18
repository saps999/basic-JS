// callbacks
// Example 1
// function test1(a,b){
//     console.log(a-b);
// }

// function test2(a,b,cb){
//     console.log(a/b);
//     cb;
// }
// test2(5,2,test1(6,2))

// // Example 2
// function test3(a,b){
//     setTimeout(() => {
//         console.log(a*b);
//     }, 5000); 
// }

// function test4(a,b,cb){
//     console.log(a+b);
//     cb;
// }

// test4(3,2,test4(2,3))

// Example 3
// function serverRequest(query, callback){
//     setTimeout(function(){
//       var response = query + "Successful!";
//       callback(response);
//     },3000);
//   }
  
//   function getResults(results){
//     console.log("Fetching from the server: " + results);
//   }
  
//   serverRequest("Data fetched ", getResults);

// Example 4
function first(cb){
    console.log("1st function");
    cb();
}

function second(cb){
    console.log("2nd function");
    cb();
}

function third(cb){
    console.log("3rd function");
    cb();
}

first(function(){
    console.log("1st anonymous function");
    second(function(){
    console.log("2nd anonymous function");
        third(function (){
            console.log("3rd anonymous function");
        })
    })
})