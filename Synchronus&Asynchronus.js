// Synchronus Programming
function add(a,b){
    console.log(a+b);
}
add(6,4);

function sub(a,b){
    console.log(a-b);
}
sub(6,4);

// Asynchronus Programming
setTimeout(function(){
    console.log("Asynchronus Function");
},3000);

function multi(a,b){
    console.log(a*b);
}
multi(6,4);