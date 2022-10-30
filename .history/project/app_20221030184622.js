/**
 *
 */
function strMethos() {}

strMethos();

document.getElementById("btn").addEventListener("click", function () {
  let tweet = document.getElementById("input").value;
  var limit = tweet.slice(0, 240);
  return (document.getElementById("res").innerHTML = limit);
});
