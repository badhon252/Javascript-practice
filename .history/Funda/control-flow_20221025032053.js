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
 * function starShape(param) {
  for (let i = 1; i <= param; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*" + " ");
    }
    document.write("<br>");
    // document.write(" ");
  }
}
starShape(5);
 */

function starShape(param) {
  for (let i = 1; i <= param; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*" + " ");
    }
    document.write("<br>");
    // document.write(" ");
  }
}
starShape(5);
