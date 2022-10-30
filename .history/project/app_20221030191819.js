/**
 *! It's a tweeter's tweet box for limit or modify them.
 */

document.getElementById("btn").addEventListener("click", function () {
  let tweet = document.getElementById("input").value;
  var limit = tweet.slice(0, 240);
  document.getElementById("res").innerHTML = `NewsFeed:  ${limit}`;
});
