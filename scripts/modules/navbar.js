// Menu Toggle
const toggle = document.querySelector(".toggle");
const menu = document.getElementById("menu");
const close = document.getElementById("xmark");
const navLinks = document.querySelectorAll(".nav a");

toggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("open");
});

close.addEventListener("click", () => {
  menu.classList.remove("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
      menu.classList.remove("open");
  });
});
// Scroll Indicator
document.addEventListener("DOMContentLoaded", function () {
  const scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      scrollIndicator.style.width = `${scrollPercentage}%`;
  });
});
