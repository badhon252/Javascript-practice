let btn = document.getElementById("btn");
btn.addEventListener(
  "click",
  debounce(function () {
    console.log("click");
  })
);

function debounce(fn, delay = 200) {
  let timer = null;
  return function () {
    if (timer) clearInterval(timer);
    timer = setTimeout(fn, delay);
  };
}
