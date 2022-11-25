// import debuonce from "../techniques/debounce.js";

let btn = document.getElementById("btn");
let output = document.getElementById("response");

console.log(warnin("app.js file has run!"));

/* // fetching data from my external ".txt" file
function getData(arg) {
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

function getData() {
  let url = "test.json";
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      let json = JSON.parse(data);
      output.innerText = json.email;
      console.log(json.name);
      //   output.innerHTML = `<a href="#"> ${json.url}</a> `;
      console.log(json.url);
      //   output.innerText = json.location;
      console.log(json.location);
      //   output.innerText = json.twitter_username;
      console.log(json.twitter_username);
      console.log(json.blog);
    })
    .catch((err) => {
      console.log(err);
    });
}

btn.addEventListener("click", getData);

// debuonce(dataFetch, 1000);
