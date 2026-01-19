// =========================
// TESTIMONIOS CARRUSEL
// =========================

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.testimonials-wrapper');

  // Lista de testimonios (añade más si quieres)
  const testimonials = [
    {
      text: "Gracias a Encarni he aprendido a vestirme con seguridad y coherencia.",
      author: "Laura G."
    },
    {
      text: "Elegante, profesional y muy cercana. La recomiendo sin dudar.",
      author: "Marta S."
    },
    {
      text: "Su asesoramiento me ha ayudado a crear un armario funcional y estiloso.",
      author: "Ana R."
    },
    {
      text: "Cada detalle cuenta, y Encarni lo sabe perfectamente.",
      author: "Claudia P."
    },
    {
      text: "Me siento más segura y consciente de mi estilo gracias a Encarni.",
      author: "Sofía L."
    }
  ];

  let start = 0;
  const visibleCount = 4;

  // Función para renderizar tarjetas
  function renderTestimonials() {
    wrapper.innerHTML = '';

    const end = Math.min(start + visibleCount, testimonials.length);
    for (let i = start; i < end; i++) {
      const card = document.createElement('div');
      card.classList.add('testimonial-card', 'animate');
      card.innerHTML = `
        <p>"${testimonials[i].text}"</p>
        <span>- ${testimonials[i].author}</span>
      `;
      wrapper.appendChild(card);
      // Activar animación
      setTimeout(() => card.classList.add('visible'), 100);
    }
  }

  renderTestimonials();

  // Cambiar cada 15 segundos si hay más testimonios
  if (testimonials.length > visibleCount) {
    setInterval(() => {
      start += visibleCount;
      if (start >= testimonials.length) start = 0;
      renderTestimonials();
    }, 15000);
  }
});
