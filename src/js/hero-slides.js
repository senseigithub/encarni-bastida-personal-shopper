// =========================
// HERO SLIDER
// =========================

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.hero-slider');

  // Lista de imágenes (añade más si quieres)
  const images = [
    '/public/assets/images/hero/hero-01.jpg',
    '/public/assets/images/hero/hero-02.jpg',
    '/public/assets/images/hero/hero-03.jpg'
  ];

  let current = 0;

  // Crear imágenes en el DOM
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    if (index === 0) img.classList.add('active');
    sliderContainer.appendChild(img);
  });

  const slides = sliderContainer.querySelectorAll('img');

  // Función para cambiar slide
  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  // Cambiar cada 6 segundos
  setInterval(nextSlide, 6000);
});
