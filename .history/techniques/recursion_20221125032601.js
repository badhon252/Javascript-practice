function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));

let sum = function (arr) {
  sum(arr + 1);
};
sum([1, 2, 3, 4]);

console.log(sum);
