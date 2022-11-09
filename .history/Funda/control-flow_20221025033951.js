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

//!left Triangle Star Pattern
function starShape(n) {
  for (let i = n; i <= 0; i--) {
    for (let j = n; j <= i - 1; j--) {
      document.write("*" + " ");
    }
    document.write("<br>");
    // document.write(" ");
  }
}
starShape(5);
