//! Hoisting checkup
console.log(x); // undefined
foo();
bar();
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}
var x = 2;
