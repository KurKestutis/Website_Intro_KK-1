const shuttersID = document.getElementById("intro-shuters");
const header = document.getElementById("headerID");

setTimeout(() => {
  shuttersID.remove();
}, 2500);

setTimeout(() => {
  header.classList.add("header");
}, 2000);
