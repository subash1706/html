const share = document.querySelector(".share");
const overlay = document.querySelector(".info-and-share");

share.addEventListener("click", () => {
  if (overlay.classList.contains("hidden")) {
    overlay.classList.add("active");
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
    overlay.classList.remove("active");
  }
});
