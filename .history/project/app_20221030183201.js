/**
 *
 */
function strMethos() {
  // const tweet = prompt("");
  const tweet = document.getElementById("input").value;
  // console.log(tweet.length);
  let limit = tweet.slice(0, 240);
  // console.log(limit.length);
  document.getElementById("res").innerHTML = limit;
  // alert(limit);
}

strMethos();
