/**
 *
 */
function strMethos() {
  const tweet = prompt("");
  console.log(tweet.length);
  let limit = tweet.slice(0, 180);
  console.log(limit);
  document.getElementById("res").innerHTML = limit.length;
  // alert(limit);
}

strMethos();
