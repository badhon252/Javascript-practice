function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));

function sum(arr) {
  if (<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    
  </body>
  </html>arr.length === 0) {
    return 1;
  } else {
    return arr[0] + sum(arr[1 + 1]);
  }
}
let x = sum([1, 2, 3, 4]);

console.log(x);
