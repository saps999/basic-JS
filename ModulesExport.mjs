// Exporting Variables:
export const name = "Saptarshi";
export const age = 23;

// export { name };
// export{age};

// Exporting Function:
export const add = (a, b) => {
    return a + b;
}

// Exporting Class:
export class Person{
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
