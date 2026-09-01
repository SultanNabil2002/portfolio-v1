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
      observer.unobserve(entry.target); // sudah muncul, berhenti dipantau
    }
  });
}, { threshold: 0.1 });

// Masukkan semua selector yang ingin dianimasikan
const hiddenElements = document.querySelectorAll(
  '#profile .section__pic-container, #profile .section__text, #profile #socials-container, #about .section__pic-container, .details-container, .text-container, .project-img, .contact-info-upper-container'
);

hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll('.details-container.color-container').forEach(function (card) {
  const wrap = card.querySelector('.project-description-wrap');
  const btn = card.querySelector('.read-more-btn');
  const label = btn.querySelector('.btn-label');
  const desc = wrap.querySelector('.project-description');

  const lineHeight = parseFloat(getComputedStyle(desc).lineHeight);
  const collapsedHeight = lineHeight * 2; // batasi 2 baris

  if (desc.scrollHeight <= collapsedHeight + 2) {
    btn.classList.add('is-hidden');
    wrap.style.maxHeight = 'none';
    return;
  }

  wrap.style.maxHeight = collapsedHeight + 'px';

  btn.addEventListener('click', function () {
    const isExpanded = btn.classList.contains('expanded');
    wrap.style.maxHeight = isExpanded ? collapsedHeight + 'px' : desc.scrollHeight + 'px';
    btn.classList.toggle('expanded', !isExpanded);
    label.textContent = isExpanded ? 'Baca Selengkapnya' : 'Tutup';
  });
});