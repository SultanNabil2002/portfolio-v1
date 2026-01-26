function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-animate');
    } else {
      entry.target.classList.remove('show-animate');
    }
  });
}, {
  threshold: 0.1 // Berjalan saat sedikit bagian elemen terlihat
});

// Masukkan semua selector yang ingin dianimasikan
const hiddenElements = document.querySelectorAll(
  '#profile .section__pic-container, #profile .section__text, #profile #socials-container, #about .section__pic-container, .details-container, .text-container, .project-img, .contact-info-upper-container'
);

hiddenElements.forEach((el) => observer.observe(el));