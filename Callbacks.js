// callbacks
// Example 1
function test1(a,b){
    console.log(a-b);
}

function test2(a,b,cb){
    console.log(a/b);
    cb;
}
test2(5,2,test1(6,2))

// Example 2
function test3(a,b){
    setTimeout(() => {
        console.log(a*b);
    }, 5000); 
}

function test4(a,b,cb){
    console.log(a+b);
    cb;
}

test4(3,2,test4(2,3))

// Example 3
function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "Successful!";
      callback(response);
    },3000);
  }
  
  function getResults(results){
    console.log("Fetching from the server: " + results);
  }
  
  serverRequest("Data fetched ", getResults);

