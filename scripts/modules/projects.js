// Scroll-based Projects Transformation
const stickySections = [...document.querySelectorAll('.sticky')];

window.addEventListener('scroll', () => {
  stickySections.forEach(section => {
      transform(section);
  });
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section');
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}
// Modal Video
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const closeModal = document.getElementById("closeModal");
  const iframe = document.getElementById("project-video");
  const videoLinks = document.querySelectorAll("a.fa-brands.fa-youtube");

  videoLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let videoUrl = link.getAttribute("data-video-url").split("?")[0];

      iframe.src = videoUrl;
      modal.style.display = "flex";
      setTimeout(() => modal.classList.add("show"), 10);
      document.body.style.overflow = "hidden";
    });
  });

  function closeModalFunction() {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      iframe.src = "";
      document.body.style.overflow = "";
    }, 500);
  }

  closeModal.addEventListener("click", closeModalFunction);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFunction();
    }
  });
});
