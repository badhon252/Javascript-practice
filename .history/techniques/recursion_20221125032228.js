function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr + sum(n + 1);
  }
};
