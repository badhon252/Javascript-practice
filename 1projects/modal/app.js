(function () {
  const btn = document.querySelector("#modal .open-modal");
  const modal = document.querySelector(".modal-content");
  const closeModal = document.querySelector("#modal .close-modal");
  const overlay = document.querySelector("#overlay");

  btn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
})();
