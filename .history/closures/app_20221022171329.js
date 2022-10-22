/**
 * Closure
 * @param {string} name
 * @returns {function}
 *
 * write a functions that returns a function (closure)
 */

function closure(name) {
  return function () {
    console.log(name);
  };
}

const myName = closure("Khalid");

myName();

console.log(myName);
