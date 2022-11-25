/**
 *! Closure
 * @param {string} name
 * @returns {function}
 *
 *! write a functions that returns a function (closure)
 */
/*
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
*/

/**
 *! makes an closures alongs with the number that takes to print output, output and the delay time to print should be same
 *? lets assume that, i have to print 1 to 10 numbers, but i have to print 1 after 1 second, 2 after 2 second, 3 after 3 second and so on

function makeClosure(number) {
  for (var i = 1; i <= number; i++) {
    setTimeout(function (i) {
      console.log(i);
    }, 1000 * i, i);
  }
}
 */

// function makeClosure() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function (i) {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// makeClosure();

// function makeClosure() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// makeClosure();

// function makeClosure() {
//   for (let i = 1; i <= 5; i++) {
//     // let time = i * 1000;
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// makeClosure();

/*
* //! Practicing Scopes
* //? Scope is the area where the variable is accessible

function scope() {
  const global_scope = "hello, Global Scope!";
  let function_scope = "Hello, Function scope!";
  function x() {
    if (true) {
      const block_scope = "Hello, Block Scope!";
      console.log(block_scope);
    }
    // console.log(block_scope)
    console.log(function_scope);
  }
  x();

  console.log(global_scope);
  // console.log(block_scope); //? ReferenceError: block_scope is not defined
}
scope();
*/

// Create an anonymous function expression that gets invoked immediately,
// and assign its *return value* to a variable. This approach "cuts out the
// middleman" of the named `makeWhatever` function reference.
//
// As explained in the above "important note," even though parens are not
// required around this function expression, they should still be used as a
// matter of convention to help clarify that the variable is being set to
// the function's *result* and not the function itself.
/*
var counter = (function () {
  var i = 0;

  return {
    get: function () {
      return i;
    },
    set: function (val) {
      i = val;
    },
    increment: function () {
      return ++i;
    },
  };
})();

// `counter` is an object with properties, which in this case happen to be
// methods.

console.log(counter.get()); // 0
console.log(counter.set(3)); // undefined
console.log(counter.increment()); // 4
console.log(counter.increment()); // 5

console.log(counter.i); // undefined (`i` is not a property of the returned object)
// console.log(i); // ReferenceError: i is not defined (it only exists inside the closure)
*/

//? Closure
let x = "Hello ";
function closure() {
  console.log(x);
}

function closure1() {
  let x = "Hello Clouser!-1";
  console.log(x);
  closure();
}

closure1();
