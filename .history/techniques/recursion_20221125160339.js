function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));

function sum(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[0] + sum(arr[1 + 1]);
  }
}
let x = sum([1, 2, 3, 4]);

console.log(x);
