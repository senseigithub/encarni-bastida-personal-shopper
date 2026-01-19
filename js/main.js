// =========================
// ACTIVADOR DE ANIMACIONES AL SCROLL
// =========================

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate, .fade-in');

  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
});
