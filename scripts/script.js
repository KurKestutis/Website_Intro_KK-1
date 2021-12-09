const shuttersID = document.getElementById("intro-shuters");
const bottom = document.querySelector(".bottom");

setTimeout(() => {
  bottom.classList.add("blue");
}, 1500);

setTimeout(() => {
  bottom.classList.add("blue");
  bottom.remove();
}, 2700);

setTimeout(() => {
  shuttersID.remove();
}, 3500);
