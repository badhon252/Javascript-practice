/**
 *
 */
function strMethos() {
  const tweet = document.getElementById("input").value;
  let limit = tweet.slice(0, 240);

  document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("res").innerHTML = limit;
  });
}

strMethos();
