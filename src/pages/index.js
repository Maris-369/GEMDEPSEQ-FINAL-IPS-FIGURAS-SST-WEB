// /workspaces/ips_fig-cucuta/src/pages/index.js
import React from 'react';
import { Link, Head } from "gatsby"; // Importa Link para enlaces internos y Head

// --- Componente para el contenido del <head> ---
export const PageHead = () => (
  <>
    <title>IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional y Especialidades Médicas</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="IPS FIGURAS SST en Cúcuta - Expertos en salud ocupacional, medicina laboral, exámenes médicos ocupacionales y especialidades como cardiología, odontología y más." />
    <meta name="keywords" content="IPS Cúcuta, salud ocupacional, exámenes médicos, medicina laboral, cardiología Cúcuta, audiometría, oftalmología ocupacional, cursos manipulación alimentos, psicología ocupacional" />
    <meta name="author" content="IPS FIGURAS SST CÚCUTA SAS" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trabajosenalturascucuta.com/" />
    <meta property="og:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral y Humanizada" />
    <meta property="og:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Ofrecemos exámenes médicos, cursos y atención de calidad con un enfoque humano." />
    {/* Asegúrate que esta imagen exista en 'static/images/og-image.jpg' */}
    <meta property="og:image" content="/images/og-image.jpg" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.trabajosenalturascucuta.com/" />
    <meta property="twitter:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral y Humanizada" />
    <meta property="twitter:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Ofrecemos exámenes médicos, cursos y atención de calidad con un enfoque humano." />
    <meta property="twitter:image" content="/images/og-image.jpg" /> {/* Asegúrate que esta imagen exista */}

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

// --- Componente principal de la página de inicio ---
const PaginaDeInicio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir scroll del body cuando el menú está abierto
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
         <div className="mobile-menu-header">
          <Link to="/" className="logo-link" onClick={closeMenu} aria-label="Ir a la página de inicio">
            <div className="logo-text">
              <span className="main">IPS FIGURAS</span>
              <span className="sub">SST CÚCUTA SAS</span>
            </div>
          </Link>
          <button className="mobile-menu-close" id="mobileMenuClose" aria-label="Cerrar menú" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li><a href="#inicio" onClick={closeMenu}><i className="fas fa-home"></i> Inicio</a></li>
            <li><a href="#servicios" onClick={closeMenu}><i className="fas fa-medkit"></i> Servicios</a></li>
            <li><a href="#nosotros" onClick={closeMenu}><i className="fas fa-building"></i> Nosotros</a></li>
            <li><a href="#videos" onClick={closeMenu}><i className="fab fa-youtube"></i> Videos</a></li>
            <li><a href="#testimonios" onClick={closeMenu}><i className="fas fa-comments"></i> Testimonios</a></li>
            <li><a href="#contacto" onClick={closeMenu}><i className="fas fa-envelope"></i> Contacto</a></li>
            <li><a href="#agendar-cita" className="btn btn-sm" style={{color: 'var(--primary)', background: 'white', border: '1px solid var(--primary)', padding: '0.5rem 1rem', marginTop: '1rem', display: 'block', textAlign: 'center'}} onClick={closeMenu}><i className="fas fa-calendar-alt"></i> Agendar Cita</a></li>
          </ul>
        </nav>
      </div>
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} id="overlay" onClick={closeMenu}></div>

      {/* Header */}
      <header>
         <div className="container">
          <div className="header-container">
            <Link to="/" className="logo-link" aria-label="Página de Inicio IPS Figuras SST">
              <div className="logo">
                <img src="/images/logo.png" alt="Logo de IPS FIGURAS SST CÚCUTA SAS" id="logoImg" onError={(e) => {e.target.onerror = null; e.target.src='/images/logo-placeholder.png'}} />
                <div className="logo-text">
                  <span className="main">IPS FIGURAS</span>
                  <span className="sub">SST CÚCUTA SAS</span>
                </div>
              </div>
            </Link>
            <nav className="desktop-nav">
              <ul>
                <li><a href="#inicio"><i className="fas fa-home"></i> Inicio</a></li>
                <li><a href="#servicios"><i className="fas fa-medkit"></i> Servicios</a></li>
                <li><a href="#nosotros"><i className="fas fa-building"></i> Nosotros</a></li>
                <li><a href="#videos"><i className="fab fa-youtube"></i> Videos</a></li>
                <li><a href="#testimonios"><i className="fas fa-comments"></i> Testimonios</a></li>
                <li><a href="#contacto"><i className="fas fa-envelope"></i> Contacto</a></li>
                <li><a href="#agendar-cita" className="btn btn-sm"><i className="fas fa-calendar-alt"></i> Agendar Cita</a></li>
              </ul>
            </nav>
            <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Abrir menú" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
         <div className="container">
              <div className="hero-content">
                <h1>Especialistas en Salud Ocupacional y Medicina Integral</h1>
                <p className="hero-subtitle" style={{fontSize: '1.3rem', fontWeight: '500', marginBottom: '1.5rem', opacity: '0.95'}}>Cuidamos de tu equipo con profesionalismo y calidez humana.</p>
                <p>En IPS FIGURAS SST CÚCUTA SAS nos dedicamos a proteger y mejorar la salud de tus colaboradores con servicios médicos ocupacionales de alta calidad.</p>
                <div className="hero-btns">
                  <a href="#contacto" className="btn"><i className="fas fa-calendar-alt"></i> Agendar Cita</a>
                  <a href="#servicios" className="btn btn-outline"><i className="fas fa-search"></i> Nuestros Servicios</a>
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
          <div className="services-grid" id="servicesContainer">
            <div className="service-card">
              <div className="service-img">
                <img src="/images/medicina-laboral.jpg" alt="Medicina Laboral" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-user-md"></i> Medicina Laboral</h3>
                <p>Exámenes médicos ocupacionales (ingreso, periódicos, egreso), valoración de puesto de trabajo y sistemas de vigilancia epidemiológica.</p>
              </div>
            </div>
             <div className="service-card">
              <div className="service-img">
                <img src="/images/laboratorio-clinico.jpg" alt="Laboratorio Clínico" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-vial"></i> Laboratorio Clínico</h3>
                <p>Análisis clínicos generales y específicos para diagnósticos precisos y oportunos.</p>
              </div>
            </div>
             <div className="service-card">
              <div className="service-img">
                 <img src="/images/odontologia.jpg" alt="Odontología" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-tooth"></i> Odontología</h3>
                <p>Servicios odontológicos generales y especializados para la salud bucal integral.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                 <img src="/images/cardiologia.jpg" alt="Cardiología" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-heartbeat"></i> Cardiología</h3>
                <p>Evaluaciones cardiológicas, electrocardiogramas y pruebas de esfuerzo para la salud del corazón.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                 <img src="/images/oftalmologia.jpg" alt="Oftalmología" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-eye"></i> Oftalmología</h3>
                <p>Exámenes visuales ocupacionales, optometría y diagnóstico de patologías oculares.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                 <img src="/images/psicologia.jpg" alt="Psicología" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-brain"></i> Psicología</h3>
                <p>Evaluaciones psicosociales, manejo de estrés laboral y apoyo psicológico para el bienestar mental.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                 <img src="/images/medicina-integral.jpg" alt="Medicina Integral" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-notes-medical"></i> Medicina Integral</h3>
                <p>Atención médica general y seguimiento para la salud completa y preventiva del trabajador.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                 <img src="/images/cursos-alimentos.jpg" alt="Cursos Manipulación Alimentos" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-servicio.jpg'}}/>
              </div>
              <div className="service-content">
                <h3><i className="fas fa-utensils"></i> Cursos Alimentos</h3>
                <p>Capacitación certificada en manipulación higiénica de alimentos para personal de empresas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="bg-light">
         <div className="container">
          <div className="section-title">
            <h2>Nuestros Videos</h2>
            <p>Explora nuestro contenido audiovisual en YouTube.</p>
          </div>
          <div className="videos-grid">
            <div className="video-wrapper"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vO6GjC8macI?si=3Y3vNM89RRt_tS4z" title="YouTube video player 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
            <div className="video-wrapper"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xq-2KC19w88?si=7BHyBJdcI5k1jEXH" title="YouTube video player 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
            <div className="video-wrapper"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AP6mhNutweg?si=uMXeUs-JtmTR0II2" title="YouTube video player 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
            <div className="video-wrapper"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4V05o45Zxh4?si=e7o4OYjkK-1nQVNV" title="YouTube video player 4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
            <div className="video-wrapper"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XL_5aFMRAK8?si=krfbp_DnSmdrQ8Vi" title="YouTube video player 5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
          </div>
        </div>
      </section>

      <section id="nosotros">
         <div className="container">
              <div className="about-container">
                <div className="about-content">
                  <h3>IPS FIGURAS SST CÚCUTA SAS: Calidad y Atención Humanizada</h3>
                   <p>En IPS FIGURAS SST, nuestra prioridad es el bienestar de cada individuo. Creemos firmemente que la excelencia en servicios de salud se logra combinando profesionalismo de vanguardia con una atención cálida, cercana y profundamente humana. Entendemos que detrás de cada consulta hay una persona, y nos esforzamos por brindar un cuidado integral que respete su dignidad y atienda sus necesidades con empatía.</p>
                  <p>Somos una Institución Prestadora de Servicios de Salud con enfoque en salud ocupacional y medicina integral, comprometidos con la calidad y el bienestar de nuestros pacientes. Contamos con un equipo multidisciplinario de profesionales altamente calificados y tecnología de vanguardia para ofrecer los mejores servicios médicos en Cúcuta y su área metropolitana.</p>
                  <ul className="features-list">
                    <li className="feature-item"><i className="fas fa-check-circle"></i><div><h4>Certificaciones y Calidad</h4><p>Cumplimos con todas las certificaciones requeridas, garantizando servicios de la más alta calidad.</p></div></li>
                    <li className="feature-item"><i className="fas fa-users"></i><div><h4>Equipo Humano Experto</h4><p>Profesionales y médicos especialistas con amplia experiencia y vocación de servicio.</p></div></li>
                    <li className="feature-item"><i className="fas fa-heartbeat"></i><div><h4>Tecnología Avanzada</h4><p>Equipos médicos de última generación para diagnósticos precisos y tratamientos efectivos.</p></div></li>
                  </ul>
                </div>
                <div className="about-img">
                  <img src="/images/equipo-medico.jpg" alt="Equipo médico de IPS FIGURAS" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-general.jpg'}} />
                </div>
              </div>
            </div>
      </section>

      <section id="testimonios" className="testimonials">
         <div className="container">
          <div className="section-title">
            <h2>Lo que dicen nuestros clientes</h2>
            <p>La confianza y satisfacción de quienes nos eligen es nuestro mayor orgullo.</p>
          </div>
          <div className="testimonials-grid" id="testimonialsContainer">
             <div className="testimonial-card">
               <div className="author-img">
                 <img src="/images/testimonio-ingeniera.jpg" alt="Ing. Sofía Vargas" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-persona.jpg'}}/>
               </div>
               <p className="testimonial-text">"El proceso de exámenes ocupacionales fue rápido y muy profesional. El personal es amable y eficiente. ¡Totalmente recomendados!"</p>
               <div className="testimonial-author">
                 <div className="author-name">Ing. Sofía Vargas</div>
                 <div className="author-role">Jefe de Seguridad, Constructora Andina</div>
               </div>
            </div>
             <div className="testimonial-card">
               <div className="author-img">
                 <img src="/images/testimonio-administrativa.jpg" alt="Laura Méndez" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-persona.jpg'}}/>
               </div>
               <p className="testimonial-text">"La atención en cardiología fue excelente. El doctor explicó todo con claridad y las instalaciones son muy modernas. Me sentí muy bien atendida."</p>
               <div className="testimonial-author">
                 <div className="author-name">Laura Méndez</div>
                 <div className="author-role">Coordinadora Administrativa, OfiGlobal</div>
               </div>
            </div>
             <div className="testimonial-card">
               <div className="author-img">
                 <img src="/images/testimonio-operario.jpg" alt="Ricardo Pinto" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-persona.jpg'}}/>
               </div>
               <p className="testimonial-text">"Contratamos los cursos de manipulación de alimentos para nuestro equipo y fueron muy completos y prácticos. IPS Figuras es nuestro aliado en SST."</p>
               <div className="testimonial-author">
                 <div className="author-name">Ricardo Pinto</div>
                 <div className="author-role">Supervisor de Planta, Alimentos Frescos SAS</div>
               </div>
            </div>
             <div className="testimonial-card">
               <div className="author-img">
                 <img src="/images/testimonio-tecnico.jpg" alt="David Correa" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-persona.jpg'}}/>
               </div>
               <p className="testimonial-text">"La valoración psicológica fue muy profesional y me ayudó a gestionar mejor el estrés laboral. Un servicio muy valioso para nuestra empresa."</p>
               <div className="testimonial-author">
                 <div className="author-name">David Correa</div>
                 <div className="author-role">Técnico de Mantenimiento, Redes Eléctricas Ltda.</div>
               </div>
            </div>
             <div className="testimonial-card">
               <div className="author-img">
                 <img src="/images/placeholder-persona-5.jpg" alt="Cliente Satisfecho" onError={(e) => {e.target.onerror = null; e.target.src='/images/placeholder-persona.jpg'}}/>
               </div>
               <p className="testimonial-text">"Resultados de laboratorio rápidos y confiables. El personal de toma de muestras es muy cuidadoso y amable. Excelente servicio general."</p>
               <div className="testimonial-author">
                 <div className="author-name">Andrés Castillo</div>
                 <div className="author-role">Trabajador Independiente</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
          <div className="container">
              <div className="stats-grid">
                 <div className="stat-item"><div className="stat-number" id="yearsExp">10+</div><div className="stat-text">Años de Experiencia</div></div>
                 <div className="stat-item"><div className="stat-number" id="happyClients">500+</div><div className="stat-text">Empresas Satisfechas</div></div>
                 <div className="stat-item"><div className="stat-number" id="examsDone">90,000+</div><div className="stat-text">Exámenes Realizados</div></div>
                 <div className="stat-item"><div className="stat-number" id="specialists">20+</div><div className="stat-text">Especialistas Médicos</div></div>
              </div>
            </div>
      </section>

      <section id="contacto">
          <div className="container">
          <div className="section-title">
            <h2>Contáctanos</h2>
            <p>Estamos aquí para responder todas tus preguntas y brindarte la mejor atención.</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
                <p>Puedes visitarnos en nuestras instalaciones o comunicarte con nosotros por cualquiera de estos medios:</p>
                 <div className="contact-method"><div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div><div className="contact-details"><h4>Dirección</h4><p id="address">Calle 21A #0B-122, Barrio Blanco Cúcuta, Norte de Santander</p></div></div>
                 <div className="contact-method"><div className="contact-icon"><i className="fas fa-phone-alt"></i></div><div className="contact-details"><h4>Teléfonos</h4><p><a href="tel:+573138914384" id="phone1">+57 3138914384</a></p><p><a href="tel:+573158525385" id="phone2">+57 3158525385</a></p></div></div>
                 <div className="contact-method"><div className="contact-icon"><i className="fas fa-envelope"></i></div><div className="contact-details"><h4>Correo Electrónico</h4><p><a href="mailto:admin@trabajosenalturaipsfigurascucuta.com" id="email">admin@trabajosenalturaipsfigurascucuta.com</a></p></div></div>
                 <div className="contact-method"><div className="contact-icon"><i className="fas fa-clock"></i></div><div className="contact-details"><h4>Horario de Atención</h4><p id="schedule">Lunes a Viernes: 6:00 AM - 6:00 PM<br />Sábados: 6:00 AM - 1:00 PM</p></div></div>
            </div>
            <div className="contact-form">
              <form id="contactForm" name="contacto" method="POST" data-netlify="true">
                 <input type="hidden" name="form-name" value="contacto" />
                 <input name="nombre" type="text" placeholder="Nombre Completo" required />
                 <input name="email" type="email" placeholder="Correo Electrónico" required />
                 <input name="telefono" type="tel" placeholder="Teléfono" />
                 <select name="servicio" required>
                   <option value="">Selecciona un servicio</option>
                   <option value="medicina-ocupacional">Medicina Ocupacional</option>
                   <option value="cardiologia">Cardiología</option>
                   <option value="audiometria">Audiometría</option>
                   <option value="odontologia">Odontología</option>
                   <option value="oftalmologia">Oftalmología</option>
                   <option value="cursos">Cursos Manipulación de Alimentos</option>
                   <option value="laboratorio">Laboratorio Clínico</option>
                   <option value="otros">Otros Servicios</option>
                 </select>
                 <textarea name="mensaje" placeholder="Tu Mensaje" required></textarea>
                 <button type="submit" className="btn"><i className="fas fa-paper-plane"></i> Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
         <div className="container">
          <div className="section-title">
            <h2>Empresas que confían en nosotros</h2>
            <p>Hemos trabajado con importantes empresas de la región en la protección de la salud de sus colaboradores.</p>
          </div>
          <div className="clients-grid" id="clientsContainer">
            <p><i>(Logos de clientes se mostrarán aquí)</i></p>
          </div>
        </div>
      </section>

      <section className="cta">
          <div className="container">
              <h2>¿Listo para proteger la salud de tus colaboradores?</h2>
               <p>Contáctanos hoy mismo para obtener más información sobre nuestros servicios y cómo podemos ayudarte a fomentar un ambiente de trabajo seguro y saludable.</p>
               <a href="#contacto" className="btn"><i className="fas fa-phone-alt"></i> Contactar Ahora</a>
            </div>
      </section>

      <footer>
          <div className="container">
              <div className="footer-grid">
                 <div className="footer-col"><h3>IPS Figuras SST</h3><p>Tu aliado en salud ocupacional y bienestar laboral en Cúcuta. Calidad y atención humanizada a tu servicio.</p><div className="social-links"><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></div></div>
                 <div className="footer-col"><h3>Enlaces Rápidos</h3><ul className="footer-links"><li><a href="#inicio"><i className="fas fa-angle-right"></i> Inicio</a></li><li><a href="#servicios"><i className="fas fa-angle-right"></i> Servicios</a></li><li><a href="#nosotros"><i className="fas fa-angle-right"></i> Nosotros</a></li><li><a href="#contacto"><i className="fas fa-angle-right"></i> Contacto</a></li></ul></div>
                 <div className="footer-col"><h3>Contacto</h3><ul className="footer-links"><li><i className="fas fa-map-marker-alt"></i> Calle 21A #0B-122, Barrio Blanco</li><li><a href="tel:+573138914384"><i className="fas fa-phone"></i> +57 3138914384</a></li><li><a href="mailto:admin@trabajosenalturaipsfigurascucuta.com"><i className="fas fa-envelope"></i> admin@trabajosenalt...</a></li></ul></div>
                 <div className="footer-col"><h3>Newsletter</h3><p>Suscríbete para recibir novedades y promociones.</p><form className="newsletter-form" name="newsletter" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="newsletter" /><input name="email_newsletter" type="email" placeholder="Tu Correo" required/><button type="submit"><i className="fas fa-paper-plane"></i></button></form></div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} IPS FIGURAS SST CÚCUTA SAS. Todos los derechos reservados. Diseñado con ❤️ para Cúcuta.</p>
              </div>
            </div>
      </footer>
    </>
  );
};

export default PaginaDeInicio;

// Exporta el componente Head para que Gatsby lo use
export { PageHead as Head };


