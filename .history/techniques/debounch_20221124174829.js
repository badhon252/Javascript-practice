let btn = document.getElementById("btn");
btn.addEventListener(
  "click",
  debounce(function () {
    console.log("click");
  }, 2000)
);

function debounce(fn, delay) {
  return function () {
    setTimeout(fn, delay);
  };
}
