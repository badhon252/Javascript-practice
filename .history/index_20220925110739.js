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

var output;
function num(i) {
  switch (i) {
    case i == null || i == undefined || i == Boolean || i > 1:
      output = "is not a number!";
      break;

    case i % 3 === 0 && i % 5 === 0:
      output = "fizzBuzz";
      break;

    case i % 5 === 0:
      output = "buzz";
      break;

    case i % 3 === 0:
      output = "fizz";
      break;

    default:
      "Input a valid number";

      return output;
  }
  return "input value:", i;
}
console.log(output);
console.log(num(15));
