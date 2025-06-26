import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";

// --- Componente para el contenido del <head> ---
export const Head = () => (
  <>
    <title>IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional y Especialidades Médicas</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="IPS FIGURAS SST en Cúcuta - Expertos en salud ocupacional, medicina laboral, exámenes médicos ocupacionales y especialidades como cardiología, odontología y más." />
    <meta name="keywords" content="IPS Cúcuta, salud ocupacional, exámenes médicos, medicina laboral, cardiología Cúcuta, audiometría, oftalmología ocupacional, cursos manipulación alimentos, psicología ocupacional" />
    <meta name="author" content="IPS FIGURAS SST CÚCUTA SAS" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.trabajosenalturaipscucuta.com/" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trabajosenalturaipscucuta.com/" />
    <meta property="og:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral y Humanizada" />
    <meta property="og:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Ofrecemos exámenes médicos, cursos y atención de calidad con un enfoque humano." />
    <meta property="og:image" content="https://www.trabajosenalturaipscucuta.com/images/og-image.jpg" />
    <meta property="og:image:alt" content="IPS FIGURAS SST - Especialistas en Salud Ocupacional" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.trabajosenalturaipscucuta.com/" />
    <meta name="twitter:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral y Humanizada" />
    <meta name="twitter:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Ofrecemos exámenes médicos, cursos y atención de calidad con un enfoque humano." />
    <meta name="twitter:image" content="https://www.trabajosenalturascucuta.com/images/og-image.jpg" />

    {/* Preconnect for performance */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
    
    {/* Fonts */}
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    
    {/* Font Awesome */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    
    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "IPS FIGURAS SST CÚCUTA SAS",
        "description": "Especialistas en salud ocupacional y medicina laboral en Cúcuta",
        "url": "https://www.trabajosenalturascucuta.com/",
        "telephone": "+573138914384",
        "email": "admin@trabajosenalturaipsfigurascucuta.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle 21A #0B-122",
          "addressLocality": "Cúcuta",
          "addressRegion": "Norte de Santander",
          "addressCountry": "CO"
        },
        "openingHours": [
          "Mo-Fr 06:00-18:00",
          "Sa 06:00-13:00"
        ],
        "medicalSpecialty": [
          "Occupational Medicine",
          "Cardiology",
          "Ophthalmology",
          "Dentistry",
          "Psychology"
        ]
      })}
    </script>
  </>
);

// --- Componente principal de la página de inicio ---
const PaginaDeInicio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Efecto para manejar el scroll del body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Función para manejar errores de imágenes
  const handleImageError = (e, fallbackSrc = '/images/placeholder-general.jpg') => {
    if (e.target.src !== fallbackSrc) {
      e.target.src = fallbackSrc;
    }
  };

  // Función para scroll suave
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} role="navigation" aria-label="Menú móvil">
        <div className="mobile-menu-header">
          <Link to="/" className="logo-link" onClick={closeMenu} aria-label="Ir a la página de inicio">
            <div className="logo-text">
              <span className="main">IPS FIGURAS</span>
              <span className="sub">SST CÚCUTA SAS</span>
            </div>
          </Link>
          <button 
            className="mobile-menu-close" 
            aria-label="Cerrar menú" 
            onClick={closeMenu}
            type="button"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li><a href="#inicio" onClick={(e) => handleSmoothScroll(e, '#inicio')}><i className="fas fa-home" aria-hidden="true"></i> Inicio</a></li>
            <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, '#servicios')}><i className="fas fa-medkit" aria-hidden="true"></i> Servicios</a></li>
            <li><a href="#nosotros" onClick={(e) => handleSmoothScroll(e, '#nosotros')}><i className="fas fa-building" aria-hidden="true"></i> Nosotros</a></li>
            <li><a href="#videos" onClick={(e) => handleSmoothScroll(e, '#videos')}><i className="fab fa-youtube" aria-hidden="true"></i> Videos</a></li>
            <li><a href="#testimonios" onClick={(e) => handleSmoothScroll(e, '#testimonios')}><i className="fas fa-comments" aria-hidden="true"></i> Testimonios</a></li>
            <li><a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')}><i className="fas fa-envelope" aria-hidden="true"></i> Contacto</a></li>
            <li>
              <a 
                href="#contacto" 
                className="btn btn-sm" 
                style={{
                  color: 'var(--primary)', 
                  background: 'white', 
                  border: '1px solid var(--primary)', 
                  padding: '0.5rem 1rem', 
                  marginTop: '1rem', 
                  display: 'block', 
                  textAlign: 'center'
                }} 
                onClick={(e) => handleSmoothScroll(e, '#contacto')}
              >
                <i className="fas fa-calendar-alt" aria-hidden="true"></i> Agendar Cita
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay */}
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/* Header */}
      <header role="banner">
        <div className="container">
          <div className="header-container">
            <Link to="/" className="logo-link" aria-label="Página de Inicio IPS Figuras SST">
              <div className="logo">
                <img 
                  src="/images/logo.png" 
                  alt="Logo de IPS FIGURAS SST CÚCUTA SAS" 
                  onError={(e) => handleImageError(e, '/images/logo-placeholder.png')}
                  loading="eager"
                />
                <div className="logo-text">
                  <span className="main">IPS FIGURAS</span>
                  <span className="sub">SST CÚCUTA SAS</span>
                </div>
              </div>
            </Link>
            
            <nav className="desktop-nav" role="navigation" aria-label="Navegación principal">
              <ul>
                <li><a href="#inicio" onClick={(e) => handleSmoothScroll(e, '#inicio')}><i className="fas fa-home" aria-hidden="true"></i> Inicio</a></li>
                <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, '#servicios')}><i className="fas fa-medkit" aria-hidden="true"></i> Servicios</a></li>
                <li><a href="#nosotros" onClick={(e) => handleSmoothScroll(e, '#nosotros')}><i className="fas fa-building" aria-hidden="true"></i> Nosotros</a></li>
                <li><a href="#videos" onClick={(e) => handleSmoothScroll(e, '#videos')}><i className="fab fa-youtube" aria-hidden="true"></i> Videos</a></li>
                <li><a href="#testimonios" onClick={(e) => handleSmoothScroll(e, '#testimonios')}><i className="fas fa-comments" aria-hidden="true"></i> Testimonios</a></li>
                <li><a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')}><i className="fas fa-envelope" aria-hidden="true"></i> Contacto</a></li>
                <li><a href="#contacto" className="btn btn-sm" onClick={(e) => handleSmoothScroll(e, '#contacto')}><i className="fas fa-calendar-alt" aria-hidden="true"></i> Agendar Cita</a></li>
              </ul>
            </nav>
            
            <button 
              className="mobile-menu-btn" 
              aria-label="Abrir menú de navegación" 
              onClick={toggleMenu}
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <i className="fas fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero" id="inicio">
          <div className="container">
            <div className="hero-content">
              <h1>Especialistas en Salud Ocupacional y Medicina Integral</h1>
              <p className="hero-subtitle" style={{fontSize: '1.3rem', fontWeight: '500', marginBottom: '1.5rem', opacity: '0.95'}}>
                Cuidamos de tu equipo con profesionalismo y calidez humana.
              </p>
              <p>En IPS FIGURAS SST CÚCUTA SAS nos dedicamos a proteger y mejorar la salud de tus colaboradores con servicios médicos ocupacionales de alta calidad.</p>
              <div className="hero-btns">
                <a href="#contacto" className="btn" onClick={(e) => handleSmoothScroll(e, '#contacto')}>
                  <i className="fas fa-calendar-alt" aria-hidden="true"></i> Agendar Cita
                </a>
                <a href="#servicios" className="btn btn-outline" onClick={(e) => handleSmoothScroll(e, '#servicios')}>
                  <i className="fas fa-search" aria-hidden="true"></i> Nuestros Servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios">
          <div className="container">
            <div className="section-title">
              <h2>Nuestros Servicios</h2>
              <p>Ofrecemos una amplia gama de servicios médicos ocupacionales y especialidades, brindados con la más alta calidad y un enfoque en el bienestar integral.</p>
            </div>
            <div className="services-grid">
              {[
                {
                  img: '/images/medicina-laboral.jpg',
                  alt: 'Medicina Laboral',
                  icon: 'fas fa-user-md',
                  title: 'Medicina Laboral',
                  description: 'Exámenes médicos ocupacionales (ingreso, periódicos, egreso), valoración de puesto de trabajo y sistemas de vigilancia epidemiológica.'
                },
                {
                  img: '/images/laboratorio-clinico.jpg',
                  alt: 'Laboratorio Clínico',
                  icon: 'fas fa-vial',
                  title: 'Laboratorio Clínico',
                  description: 'Análisis clínicos generales y específicos para diagnósticos precisos y oportunos.'
                },
                {
                  img: '/images/odontologia.jpg',
                  alt: 'Odontología',
                  icon: 'fas fa-tooth',
                  title: 'Odontología',
                  description: 'Servicios odontológicos generales y especializados para la salud bucal integral.'
                },
                {
                  img: '/images/cardiologia.jpg',
                  alt: 'Cardiología',
                  icon: 'fas fa-heartbeat',
                  title: 'Cardiología',
                  description: 'Evaluaciones cardiológicas, electrocardiogramas y pruebas de esfuerzo para la salud del corazón.'
                },
                {
                  img: '/images/oftalmologia.jpg',
                  alt: 'Oftalmología',
                  icon: 'fas fa-eye',
                  title: 'Oftalmología',
                  description: 'Exámenes visuales ocupacionales, optometría y diagnóstico de patologías oculares.'
                },
                {
                  img: '/images/psicologia.jpg',
                  alt: 'Psicología',
                  icon: 'fas fa-brain',
                  title: 'Psicología',
                  description: 'Evaluaciones psicosociales, manejo de estrés laboral y apoyo psicológico para el bienestar mental.'
                },
                {
                  img: '/images/medicina-integral.jpg',
                  alt: 'Medicina Integral',
                  icon: 'fas fa-notes-medical',
                  title: 'Medicina Integral',
                  description: 'Atención médica general y seguimiento para la salud completa y preventiva del trabajador.'
                },
                {
                  img: '/images/cursos-alimentos.jpg',
                  alt: 'Cursos Manipulación Alimentos',
                  icon: 'fas fa-utensils',
                  title: 'Cursos Alimentos',
                  description: 'Capacitación certificada en manipulación higiénica de alimentos para personal de empresas.'
                }
              ].map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-img">
                    <img 
                      src={service.img} 
                      alt={service.alt} 
                      onError={(e) => handleImageError(e, '/images/placeholder-servicio.jpg')}
                      loading="lazy"
                    />
                  </div>
                  <div className="service-content">
                    <h3><i className={service.icon} aria-hidden="true"></i> {service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="bg-light">
          <div className="container">
            <div className="section-title">
              <h2>Nuestros Videos</h2>
              <p>Explora nuestro contenido audiovisual en YouTube.</p>
            </div>
            <div className="videos-grid">
              {[
                { id: 'vO6GjC8macI', title: 'Video institucional IPS Figuras SST' },
                { id: 'xq-2KC19w88', title: 'Servicios de salud ocupacional' },
                { id: 'AP6mhNutweg', title: 'Exámenes médicos ocupacionales' },
                { id: '4V05o45Zxh4', title: 'Cursos de manipulación de alimentos' },
                { id: 'XL_5aFMRAK8', title: 'Especialidades médicas' }
              ].map((video, index) => (
                <div className="video-wrapper" key={index}>
                  <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros">
          <div className="container">
            <div className="about-container">
              <div className="about-content">
                <h2>IPS FIGURAS SST CÚCUTA SAS: Calidad y Atención Humanizada</h2>
                <p>En IPS FIGURAS SST, nuestra prioridad es el bienestar de cada individuo. Creemos firmemente que la excelencia en servicios de salud se logra combinando profesionalismo de vanguardia con una atención cálida, cercana y profundamente humana. Entendemos que detrás de cada consulta hay una persona, y nos esforzamos por brindar un cuidado integral que respete su dignidad y atienda sus necesidades con empatía.</p>
                <p>Somos una Institución Prestadora de Servicios de Salud con enfoque en salud ocupacional y medicina integral, comprometidos con la calidad y el bienestar de nuestros pacientes. Contamos con un equipo multidisciplinario de profesionales altamente calificados y tecnología de vanguardia para ofrecer los mejores servicios médicos en Cúcuta y su área metropolitana.</p>
                <ul className="features-list">
                  <li className="feature-item">
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                    <div>
                      <h3>Certificaciones y Calidad</h3>
                      <p>Cumplimos con todas las certificaciones requeridas, garantizando servicios de la más alta calidad.</p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-users" aria-hidden="true"></i>
                    <div>
                      <h3>Equipo Humano Experto</h3>
                      <p>Profesionales y médicos especialistas con amplia experiencia y vocación de servicio.</p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-heartbeat" aria-hidden="true"></i>
                    <div>
                      <h3>Tecnología Avanzada</h3>
                      <p>Equipos médicos de última generación para diagnósticos precisos y tratamientos efectivos.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-img">
                <img 
                  src="/images/equipo-medico.jpg" 
                  alt="Equipo médico profesional de IPS FIGURAS SST" 
                  onError={(e) => handleImageError(e, '/images/placeholder-general.jpg')}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Lo que dicen nuestros clientes</h2>
              <p>La confianza y satisfacción de quienes nos eligen es nuestro mayor orgullo.</p>
            </div>
            <div className="testimonials-grid">
              {[
                {
                  img: '/images/testimonio-ingeniera.jpg',
                  alt: 'Ing. Sofía Vargas',
                  text: 'El proceso de exámenes ocupacionales fue rápido y muy profesional. El personal es amable y eficiente. ¡Totalmente recomendados!',
                  name: 'Ing. Sofía Vargas',
                  role: 'Jefe de Seguridad, Constructora Andina'
                },
                {
                  img: '/images/testimonio-administrativa.jpg',
                  alt: 'Laura Méndez',
                  text: 'La atención en cardiología fue excelente. El doctor explicó todo con claridad y las instalaciones son muy modernas. Me sentí muy bien atendida.',
                  name: 'Laura Méndez',
                  role: 'Coordinadora Administrativa, OfiGlobal'
                },
                {
                  img: '/images/testimonio-operario.jpg',
                  alt: 'Ricardo Pinto',
                  text: 'Contratamos los cursos de manipulación de alimentos para nuestro equipo y fueron muy completos y prácticos. IPS Figuras es nuestro aliado en SST.',
                  name: 'Ricardo Pinto',
                  role: 'Supervisor de Planta, Alimentos Frescos SAS'
                },
                {
                  img: '/images/testimonio-tecnico.jpg',
                  alt: 'David Correa',
                  text: 'La valoración psicológica fue muy profesional y me ayudó a gestionar mejor el estrés laboral. Un servicio muy valioso para nuestra empresa.',
                  name: 'David Correa',
                  role: 'Técnico de Mantenimiento, Redes Eléctricas Ltda.'
                },
                {
                  img: '/images/placeholder-persona-5.jpg',
                  alt: 'Andrés Castillo',
                  text: 'Resultados de laboratorio rápidos y confiables. El personal de toma de muestras es muy cuidadoso y amable. Excelente servicio general.',
                  name: 'Andrés Castillo',
                  role: 'Trabajador Independiente'
                }
              ].map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="author-img">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.alt} 
                      onError={(e) => handleImageError(e, '/images/placeholder-persona.jpg')}
                      loading="lazy"
                    />
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-text">Años de Experiencia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-text">Empresas Satisfechas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">90,000+</div>
                <div className="stat-text">Exámenes Realizados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-text">Especialistas Médicos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto">
          <div className="container">
            <div className="section-title">
              <h2>Contáctanos</h2>
              <p>Estamos aquí para responder todas tus preguntas y brindarte la mejor atención.</p>
            </div>
            <div className="contact-container">
              <. className="contact-info">
                <h3>Información de Contacto</h3>
                <p>Puedes visitarnos en nuestras instalaciones o comunicarte con nosotros por cualquiera de estos medios:</p>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Dirección</h4>
                    <p>Calle 21A #0B-122, Barrio Blanco Cúcuta, Norte de Santander</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Teléfonos</h4>
                    <p><a href="tel:+573138914384">+57 3138914384</a></p>
                    <p><a href="tel:+573158525385">+57 3158525385</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Correo Electrónico</h4>
                    <p><a href="mailto:admin@trabajosenalturaipsfigurascucuta.com">admin@trabajosenalturaipsfigurascucuta.com</a></p>
                  </div>
                </div>
                
                <. className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-clock" aria-hidden="true"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Horario de Atención</h4>
                    <p>Lunes a viernes: 06:00 am-- 6:00 PM</p>
    <p>Sábados: 9:00 AM - 2:00 PM</p>
    <p>Domingos: Cerrado</p>
  </div>
<.- 6:00 PM</p>
    <p>Sábados: 9:00 AM - 2:00 PM</p>
    <p>Domingos: Cerrado</p>
  </div>
</div>>'/