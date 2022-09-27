// function secondFunction() {
//   console.log("secondFunction!");
// }
// function firstFunction(callback) {
//   console.log("First function");
//   callback();
// }

// firstFunction(secondFunction);

// function firstFunction(callback) {
//   console.log("First function");
//   callback();
// }
// function secondFunction() {
//   console.log("secondFunction!");
// }

// secondFunction(firstFunction);

/* var is the most commonly used variable in JavaScript. 
It can be initialized to a value, redeclared and its value can be reassigned, 
but only inside the context of a function. It can be function scoped or globally scoped.*/
/*
// Example of "var"

// You can redeclare using var, or you can do reassigned a value

// var myName = "Khalid Hossain Badhon";

// console.log(myName); // Output: Khalid Hossain Badhon 

// var myName = "Khalid Hossain";

// console.log(myName); // output: Khalid Hossain
*/

// Example of "let"

/*let in JavaScript is similar to var only difference lies in the scope. var is function scoped, let is block scoped. It cannot be redeclared but can be reassigned a value.*/

// You Can't redecler the variable, but you can reassigned a value!

// let myName = "Khalid Hossain Badhon";

// // let myName = "Khalid Hossain";

// console.log(myName); // Output: SyntaxError: Identifier 'myName' has already been declared

// myName = "Khalid Hossain";

// console.log(myName); // output: Khalid Hossain

/*const in JavaScript is used to declare a fixed value that cannot be changed over time once declared. They can neither be redeclared nor be reassigned. They cannot be hoisted either.*/

// constant variable means constant value, you can't reassigned nor redeclare

// const age = 22;

// console.log(age); // Output: 22

// let age = 23;

// console.log(age); // SyntaxError: Identifier 'age' has already been declared

// age = 24; // TypeError: Assignment to constant variable.

// console.log(age);

//=======================
