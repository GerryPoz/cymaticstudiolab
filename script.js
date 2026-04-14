// anno footer
document.getElementById("year").textContent = new Date().getFullYear();

// menu toggle
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

// chiusura click link
const links = document.querySelectorAll("#navMenu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("active");
  });
});

// click fuori
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }
});

// animazioni scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});