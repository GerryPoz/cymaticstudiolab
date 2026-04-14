document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const links = document.querySelectorAll("#navMenu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});