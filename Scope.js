// SCOPES 

// 1. Global Scope 
let x = 2;

function a() {
    // 2. Function Scope 
    let x = 2;

    // 3. Block Scopes 
    {
        let x = 2;
        console.log("Block Scope: ",x);

    }
    console.log("Function Scope: ",x);

}
console.log("Global Scope: ",x);
a()