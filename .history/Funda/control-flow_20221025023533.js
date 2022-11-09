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

function starShape(param) {
  for (let i = 0; i <= param; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(j + "<br>");
    }
  }
}
starShape(5);

/**
 * writing a program that prints star shape in the browser
 * @param {number} param
 */
