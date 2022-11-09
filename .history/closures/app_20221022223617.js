/**
 *! Closure
 * @param {string} name
 * @returns {function}
 *
 * write a functions that returns a function (closure)
 */
function closureFunction(name) {
  let greet = "Hello";
  return function greetFunction() {
    console.log(greet);
  };
}
const myName = closureFunction("Khalid");
myName();
greetFunction(); // ReferenceError: greetFunction is not defined
// console.log(myName);
