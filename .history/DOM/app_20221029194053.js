let count = 0;
let res = document.getElementById("res");

function increase() {
  document.getElementById("btn").addEventListener("click", function () {
    let result = !(count < 0) ? ++count : "Value can't be a negetive number";
    res.innerHTML = result;
    console.log(result);
    return result;
  });
}

function decrease() {
  // let count = 0;
  document.getElementById("btn1").addEventListener("click", function () {
    let result = count > 0 ? --count : "Value can't be a negetive number";
    res.innerText = result;
    console.log(`${result}`);
    console.log(typeof result);
    return result;
  });
}

increase(() => typeof result);

decrease(() => typeof result);

// function x() {
//   console.log(typeof result);
// }
