// function flow(param) {
//   for (let i = 0; i <= param; i++) {
//     if (i % 2 === 0) {
//       document.write(i + " is even" + "<br>");
//     } else {
//       document.write(i + " is odd" + "<br>");
//     }
//   }
// }

// flow(10);

/**
 *! writing a program that prints star shape in the browser
 * @param {number} param
 *
 * function starShape(param) {
  for (let i = 0; i <= param; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
}
starShape(10);
 */

/**
 *! Right Triangle Star Pattern
 
function triangleShape(param) {
  for (let i = 1; i <= param; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*" + " ");
    }
    document.write("<br>");
    // document.write(" ");
  }
}
triangleShape(5);
*/

/**
 * !Square Star Pattern
function starShape(param) {
  for (let i = 1; i <= param; i++) {
    for (let j = 1; j <= param; j++) {
      document.write("*" + " ");
    }
    document.write("<br>");
    // document.write(" ");
  }
}
starShape(10);
 */

/**
 //!left Triangle Star Pattern
 function starShape(n) {
   for (let i = 1; i <= n; i++) {
     for (let j = n; j >= i; j--) {
       document.write("*" + " ");
      }
      document.write("<br>");
      // document.write(" ");
    }
  }
  starShape(5);
  */

/**
 * ! Didn't finished yet ,
 *? Mirrored Right Triangle Star Pattern
 function triangleStar(n) {
   for (let i = 1; i <= n; i++) {
    setTimeout(function () {
      document.write("<br>");
      for (let j = 1; j <= n; j++) {
        document.write(" *");
        for (let k = n; k >= i; k--) {
          document.write(" ");
        }
      }
    }, 200);
  }
}

triangleStar(5);


/**
 *! Write a function that prints Mirrored Right Triangle Star Pattern in the browser.
 */

// function triangleStar1(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//       document.write("  ");
//     }
//     document.write("<br>");
//   }
// }

// triangleStar1(5);

//===================================================
// function triangleStar(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//       document.write("  ");
//     }
//     for (let j = n; j >= 1; j--) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
// }

// triangleStar(5);
let count = 0;
let res = document.getElementById("res");
function increase() {
  document.getElementById("btn").addEventListener("click", function () {
    let result = count > 0 ? count++ : "Value can't be negetive number";
    res.innerText = result;
    console.log(result);
  });
}
function decrease() {
  // let count = 0;
  document.getElementById("btn1").addEventListener("click", function () {
    let result = count > 0 ? --count : "Value can't be negetive number";
    res.innerText = result;
    console.log(`${result}`);
    console.log(typeof result);
  });
}

increase();

decrease();
