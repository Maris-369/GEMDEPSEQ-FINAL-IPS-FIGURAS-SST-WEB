/**
 * Maneja todas las animaciones y efectos visuales de la página web de IPS FIGURAS SST
 * con técnicas modernas y optimizadas para rendimiento.
 */
document.addEventListener('DOMContentLoaded', () => {
  // --- POLYFILLS Y FUNCIONES DE APOYO ---
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback) => {
      return setTimeout(callback, 16);
    };
  }

  function debounce(func, wait = 15, immediate = false) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  // --- ELEMENTOS DEL DOM ---
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.querySelector('.back-to-top');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links li a');

  if (!navbar || !backToTopBtn || sections.length === 0 || navLinks.length === 0) {
    console.error('No se encontraron algunos elementos requeridos');
    return;
  }

  // --- MANEJO DEL SCROLL ---
  function handleScroll() {
    // Efecto de navbar al hacer scroll
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    
    // Botón "volver arriba"
    backToTopBtn.classList.toggle('active', window.scrollY > 300);
  }

  // Usar debounce para optimizar el rendimiento
  window.addEventListener('scroll', debounce(handleScroll));

  // --- NAVEGACIÓN ACTIVA CON INTERSECTION OBSERVER ---
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle(
            'active', 
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => navObserver.observe(section));

  // --- DESPLAZAMIENTO SUAVE MEJORADO ---
  function smoothScroll(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 80;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress;
      
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = this.getAttribute('href');
      if (target === '#') {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      smoothScroll(target);
    });
  });

  // --- ANIMACIONES AL SCROLL (MEJORADO CON INTERSECTION OBSERVER) ---
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in').forEach(el => {
    animationObserver.observe(el);
  });

  // --- BOTÓN VOLVER ARRIBA ---
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('#inicio', 500);
  });
});