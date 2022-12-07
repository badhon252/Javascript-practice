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
  video[video.paused ? "play" : "pause"]();
  updateButton();
}
function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}
function onChange(e) {
  console.log(e.value);
}
function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(this);
  switch (this) {
    case value:
      break;

    default:
      break;
  }
}
// Event listener's
toggle.addEventListener("click", handleChange);
video.addEventListener("click", handleChange);

progress.addEventListener("change", onChange);
skipButtons.forEach((toggle) => {
  toggle.addEventListener("click", skip);
  toggle.addEventListener("keydown", skip);
});
