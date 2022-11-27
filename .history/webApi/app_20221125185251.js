let btn = document.getElementById("btn");
let output = document.getElementById("response");

console.log("app.js file has run!");

/* // fetching data from external ".txt" file
function dataFetch(arg) {
  let url = "./test.txt";
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      output.innerHTML = data;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
} */

function dataFetch(arg) {
  let url = "test.json";
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      let json = JSON.parse(data);
      output.innerText = json.name;
      output.innerText = `${json.url}`;
      output.innerText = json.;
      output.innerText = json.name;
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
}

btn.addEventListener("click", dataFetch);