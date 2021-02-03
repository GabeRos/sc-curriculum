// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let name = "Gabe";
let year = 2021;
let daytime = false;
let date = null;
let age;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof name);
console.log(type of year);
console.log(typeof dayTime);
console.log(typeof day);
console.log(typeof age);

// create a variable that references a template literal
// inside the template literal, use two variables
let greeting = `It's finally ${year} and my name is ${name}`;
console.log(greeting);
// reassign the value of the variable that references "null"
date = "February 2nd";

// print the value and its type
console.log(date);
console.log(type of date);

// print a variable that causes a ReferenceError
console.log(age);

// alter the previous line to no longer cause a ReferenceError
let time = 9.15;
console.log(time);
