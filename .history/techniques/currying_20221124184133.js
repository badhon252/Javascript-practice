// curry function

// curry :: ((a, b) -> c) -> a -> b -> c
// function curry using arrow function
const curry = (f) => (a) => (b) => f(a, b);
