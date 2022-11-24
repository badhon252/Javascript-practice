let btn = document.getElementById("btn");
btn.addEventListener(
  "click",
  debounce(function () {
    console.log("click");
  }, 500)
);

function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(fn, delay);
  };
}
