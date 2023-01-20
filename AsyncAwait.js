function first(){
    console.log("1st function")
}

function second() {
    console.log("2nd function");
}

function third() {
    console.log("3rd function");
}

async function main(){
    try{
        var response = await first();
        console.log(response);
        var response = await second();
        console.log(response);
        var response = await third();
        console.log(response); 
    }
    catch(error){
        console.log(error);
    }
}

main()