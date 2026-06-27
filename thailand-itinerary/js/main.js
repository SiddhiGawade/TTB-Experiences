/* === Main JavaScript === */
/* Minimal vanilla JS for progressive enhancement */

document.addEventListener('DOMContentLoaded', function () {

  // === Skip Link Smooth Scroll ===
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // === Image Load Error Fallback ===
  const images = document.querySelectorAll('.day-section__img');
  images.forEach(function (img) {
    img.addEventListener('error', function () {
      this.style.backgroundColor = '#FAF8F5';
      this.style.minHeight = '200px';
      this.alt = this.alt || 'Image could not be loaded';
    });
  });

});
