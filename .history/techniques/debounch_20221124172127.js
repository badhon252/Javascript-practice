let btn = document.getElementsByClassName(".btn");

btn.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  })
);
