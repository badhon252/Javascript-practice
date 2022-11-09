/**
 *! Closure
 * @param {string} name
 * @returns {function}
 *
 * write a functions that returns a function (closure)
 */
function closureFunction(name) {
  let greet = "Hello";
  function greetFunction() {
    console.log(greet);
  }
  return greetFunction;
}
const myName = closureFunction("Khalid");
myName();
// greetFunction(); // ReferenceError: greetFunction is not defined
greetFunction;
// console.log(myName);
