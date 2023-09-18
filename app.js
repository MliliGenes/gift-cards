const icon = document.querySelector("[data-favicon]");
let cards = [...document.querySelectorAll(".card")];

let iconsArray = [1, 2, 3, 4, 5, 6];
let i = 0;

window.onload = () => {
  setInterval(() => {
    icon.href = "./icons/" + iconsArray[i] + ".png";
    i < 5 ? i++ : (i = 0);
  }, 2000);

  cards.forEach((card) => {
    card.classList.add("show");
  });
};

function updateScrollProgress() {
  const wheel = document.querySelector(".wheel");
  const contentHeight = document.querySelector(".container").scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollableHeight = contentHeight - windowHeight;
  const scrollTop = window.scrollY;

  if (scrollableHeight > 0) {
    const scrollProgressDegrees = (scrollTop / scrollableHeight) * 360;
    wheel.setAttribute("style", "--rotate: " + scrollProgressDegrees);
  }
}

window.addEventListener("scroll", updateScrollProgress);
updateScrollProgress();
