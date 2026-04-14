document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});