// Get our Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build out functions
function handleChange() {
  console.log(this.value);
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Event listener's
video.addEventListener("play", handleChange);
video.addEventListener("click", handleChange);
