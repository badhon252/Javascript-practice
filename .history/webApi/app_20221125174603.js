let btn = document.getElementById("btn");
let output = document.getElementById("response");

function dataFetch(arg) {
  fetch(`https://api.funtranslations.com/translate/${arg}.json`)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      console.log(err);
    });
}
