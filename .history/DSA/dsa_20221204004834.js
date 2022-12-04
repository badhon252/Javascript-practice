//DSA
/*
var start, end;
function sum(n) {
  return (n / 2) * (n + 1);
}
start = performance.now();
sum(1000000000);
end = performance.now();
console.log(end - start);
*/

/*
 * @Programmer: Khalid Hossain

 *** User will give input with the firstNumber and the last number, if needed, I have to sort the data first!
 *** Then, I have to find the missing number from the input list;
 */

/*
 
let array = [1, 3, 10, 2, 5, 6, 7, 8, 9];
const arr = [];
function inputNumber(num) {
  for (let i = 1; i <= 9; i++) {
    arr.push(Number(prompt("Input here")));
  }
}
inputNumber();
*/
/* 
const arr = [1, 3, 10, 2, 5, 6, 7, 8, 9];
const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = temp;
  }
  return nums;
};
const newArray = insertion_Sort(arr);

console.log("New array 👉", newArray);

let firstNumber = Number(newArray.slice(0, 1));
let lastNumber = Number(newArray.slice(-1));

console.log("FirstNumber 👉 ", firstNumber);
console.log("lastNumber 👉 ", lastNumber); */
/* 

function oldArray(hNum, lNum) {
  const array = [];
  //oldArr, newArr
  let i = hNum;

  console.log("i = ", i);
  for (i; i <= lNum; i++) {
    array.push(i);
    for (let value of arr) {
      // while (value === i) {
      //   console.log("value 👉", value);
      // }
    }
  }
  console.log(array);
}

// missingNum(firstNumber, lastNumber);

oldArray(firstNumber, lastNumber);
 */

/**
 * @param {number[]} nums
 * @return {number}
 * */
var pivotIndex = function (nums) {
  let total = 0;
  let left = 0;

  nums.forEach((el) => (total += el));

  for (let i = 0; i < nums.length; i++) {
    if (total - left - nums[i] === left) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

var pivotIndex = function (nums) {
  let total = 0;
  let left = 0;

  nums.forEach((el) => (total += el));

  (function () {
    return nums.findIndex((val, i) => {
      console.log(nums[i]);
      return total - left - nums[i] === left ? i : (left += nums[i]);
    });
  })();

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
