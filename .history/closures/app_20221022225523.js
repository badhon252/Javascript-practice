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
  console.log(name);
}
const myName = closureFunction("Khalid");
myName();
// greetFunction(); // ReferenceError: greetFunction is not defined
closureFunction("Khalid")();
// console.log(myName);
