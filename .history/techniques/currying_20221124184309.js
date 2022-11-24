// curry function

// curry :: ((a, b) -> c) -> a -> b -> c
// function curry using arrow function
const curry = (f) => (a) => (b) => f(a, b);

// function to be curried
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));
