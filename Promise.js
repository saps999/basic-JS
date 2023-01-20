// Promise

// example 1
// function func1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error= true;
//             if(!error){
//                 console.log("Promise resolved....")
//                 resolve();
//             } else {
//                 console.log("promise rejected....")
//                 reject()
//             }
//         },2000);
//     })
// }

// func1().then(function(){
//     console.log("move to next function")
// }).catch(function(error){
//     console.log("try to resolve",error)
// })

// Example 2

function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                console.log("1st function");
                resolve();
            } else { reject() }
        }, 2000);
    })

}

function second() {
    console.log("2nd function");
}

function third() {
    console.log("3rd function");
}

first()
    .then(function () { second() })
    .then(function () { third() })
    .catch(function () { console.log("some error occured") })