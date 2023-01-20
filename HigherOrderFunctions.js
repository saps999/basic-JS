// 1. map
// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = birthYear.map(year => 2018 - year);
// console.log(ages);

// console.log("---------------------------------------------------------------------------")

// const num = [1, 2, 3, 4, 5]
// const add = num.map(add => 1 + add)
// console.log(add)

// 2. foreach
// let arr = [1, 2, 3, 4, 5, 6]
// arr.forEach((value, index) => {
//     console.log("value: " + value + ", index: " + index)
// })

// 3. filter
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const even = arr.filter(arr => arr % 2 == 0)
// console.log(even)

// 4. reduce
// without initial value provided accumulator will be 1st element and current value will be 2nd element
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum);

console.log("---------------------------------------------------------------------------")

// if initial value provided accumulator will be initial value and current value will be 1st element
const arr1 = [5, 7, 1, 8, 4];
const sum1 = arr1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);

console.log(sum1);