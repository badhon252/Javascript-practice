// curry function

// curry :: ((a, b) -> c) -> a -> b -> c
//? function curry using arrow function
const curry = (f) => (a) => (b) => f(a, b);

//? function curry using normal function
/* function add(x, y) {
  return x + y;
} */
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(add(1)(2)(3)); // 6
