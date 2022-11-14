const arr = [1, 2, 3, 4];
const arr2 = arr.map((item) => item * 2);
const arr3 = arr.reduce(
  (prevValue, currentValue, index, array) => prevValue + currentValue
);
console.log(arr2); // [2, 4, 6, 8]
