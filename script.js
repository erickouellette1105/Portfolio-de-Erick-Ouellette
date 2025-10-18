const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


function show() {
  const show = document.getElementById("hidden");
  show.style.display = "block"
}