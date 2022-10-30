/**
 *
 */
function strMethos() {}

strMethos();
let tweet = document.getElementById("input").value;
var limit = tweet.slice(0, 240);

document.getElementById("btn").addEventListener("click", function () {
  return (document.getElementById("res").innerHTML = limit);
});
