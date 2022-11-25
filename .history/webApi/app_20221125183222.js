let btn = document.getElementById("btn");
let output = document.getElementById("response");

console.log("app.js file has run!");

function dataFetch(arg) {
  let url = "./test.txt";
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      //   output.innerHTML = data;
      console.log(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
}

/* function dataFetch(arg) {
  //   fetch(`https://api.funtranslations.com/translate/${arg}.json`)
  //   let url = "./test.txt";
  let url = "https://api.funtranslations.com/translate/";
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      output.innerHTML = data.contents.translated;
      //   output.innerHTML = data;
      console.log(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
} */

btn.addEventListener("click", dataFetch);
