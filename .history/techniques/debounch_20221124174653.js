let btn = document.getElementById("btn");
btn.addEventListener("click", debounce);

function debounce(fn, delay) {
  console.log("debounce");
}
