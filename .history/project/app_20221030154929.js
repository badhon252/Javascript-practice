/**
 *
 */
function strMethos() {
  const tweet = prompt("");
  console.log(tweet.length);
  let limit = tweet.slice(0, 180);
  document.getElementById("res").innerHTML = limit;
  // alert(limit);
}

strMethos();
