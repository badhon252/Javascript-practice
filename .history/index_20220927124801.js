// console.log("Hello World!");

// alert("hello World!");

// var myName = "Khalid Hossain Badhon";
// var num = "22";

// console.log(typeof myName);
// console.log(typeof num);
// var number = Number(num);
// console.log(number);
// console.log(typeof number);

// let calculate = (num1) => {
//   console.log(number - num1);
//   //   console.log(num2 + num);
// };

// calculate(2, 2);

// let isTrue = true;

// let shouldRun = isTrue ? "run" : "stop";
// let shouldStop = !isTrue ? "run" : "stop";

// console.log(shouldRun);
// console.log(shouldStop);

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzBuzz");
//     continue;
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//     continue;
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//     continue;
//   }
//   console.log(i);
// }

/*
function num(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
    // } else if (i == null || i == undefined || i == Boolean || i > 1) {
  } else if (i === NaN || i > 1) {
    console.log(i, "is Not a Number");
  }
  console.log("input value:", i);
}
num(-10);
*/

// Trying while statements for this task!
// function num(i) {
//   while (i == null || i == undefined || i == Boolean || i > 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       return "fizzBuzz";
//     } else if (i % 5 === 0) {
//       return "buzz";
//     } else if (i % 3 === 0) {
//       return "fizz";
//       // } else if (i == null || i == undefined || i == Boolean || i > 1) {
//     } else {
//       return i, "is Not a Number";
//     }
//   }
//   return "input value:", i;
// }

// console.log(num(-10));

// function num(i) {
//   var output;
//   switch (i) {
//     case i == null || i == undefined || i == Boolean || i > 1:
//       return (output = "is not a number!");
//       break;

//     case i % 3 === 0 && i % 5 === 0:
//       return (output = "fizzBuzz");
//       break;

//     case i % 5 === 0:
//       return (output = "buzz");
//       break;

//     case i % 3 === 0:
//       return (output = "fizz");
//       break;

//     default:
//       "Input a valid number";
//   }
//   // return "input value:", i;
// }
// console.log(output);
// console.log(num(15));

// fizzBuzz = function (num) {
//   // write a function that receives a number as its argument;
//   // if the number is divisible by 3, the function should return 'fizz';
//   // if the number is divisible by 5, the function should return 'buzz';
//   // if the number is divisible by 3 and 5, the function should return
//   // 'fizzbuzz';
//   //
//   // otherwise the function should return the number, or false if no number
//   // was provided or the value provided is not a number
//   if (num === NaN || num === undefined || num === null) {
//     return num + "is not a number";
//   } else if (num % 3 === 0) {
//     return "fizz";
//   } else if (num % 5 === 0) {
//     return "buzz";
//   } else if (num % 15 === 0) {
//     return "fizzbuzz";
//   }
// };

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(150));
// console.log(fizzBuzz(" "));

// var output;
// function num(i) {
//   switch (i) {
//     // case i === null || i === undefined || i === Boolean || i > 1:
//     //   output = "is not a number!";
//     //   break;

//     case i % 3 == 0 && i % 5 == 0:
//       output = "fizzBuzz";
//       break;

//     case i % 3 == 0:
//       output = "fizz";
//       break;

//     case i % 5 == 0:
//       output = "buzz";
//       break;

//     default:
//       false;
//   }
// }

// console.log(num(10));

// I tried ternery operators but some issues are poped up!

// fizzBuzz = function (num) {
//   // write a function that receives a number as its argument;
//   // if the number is divisible by 3, the function should return 'fizz';
//   // if the number is divisible by 5, the function should return 'buzz';
//   // if the number is divisible by 3 and 5, the function should return
//   // 'fizzbuzz';
//   //
//   // otherwise the function should return the number, or false if no number
//   // was provided or the value provided is not a number
//   while (!isNaN(num)) {
//     num % 3 === 0 && num % 5 === 0
//       ? "fizzbuzz"
//       : num % 3 === 0
//       ? "fizz"
//       : num % 5 === 0
//       ? "buzz"
//       : num % 3 !== 0 && num % 5 !== 0 && num % 15 !== 0
//       ? num
//       : num === null || num === undefined || num === Boolean || num > 1
//       ? false
//       : "false";

//     return false;
//   }
// };

// console.log(fizzBuzz(15));

// write a function that receives a number as its argument ?
// function Get(props) {
//    const [params, setParams] = useState({});
//    ...
//    return (
//     <div>{props.children(params)}</div>
//    )
// }

// if the number is divisible by 3, the function should return 'fizz' ?
let n = Math.floor(Math.random() * 1000 + 1);
if (n) {
  var output = "";
  if (n % 3 == 0) output += "Rock";
  if (n % 5 == 0) output += "star";
  prompt(output || n);
}

// SyntaxError: expected expression, got keyword 'var'
