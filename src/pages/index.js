import React, { useState } from "react";
import Logo3D from "../components/Logo3D/Logo3D";
import "../components/Logo3D/Logo3D.css";
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
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trabajosenalturascucuta.com/" />
    <meta property="og:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral y Humanizada" />
    <meta property="og:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Ofrecemos exámenes médicos, cursos y atención de calidad con un enfoque humano." />
    <meta property="og:image" content="/images/og-image.jpg" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.trabajosenalturascucuta.com/" />
    <meta property="twitter:title" content="IPS FIGURAS SST CÚCUTA SAS | Salud Ocupacional Integral y Humanizada" />
    <meta property="twitter:description" content="Especialistas en salud ocupacional y medicina laboral en Cúcuta. Ofrecemos exámenes médicos, cursos y atención de calidad con un enfoque humano." />
    <meta property="twitter:image" content="/images/og-image.jpg" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

// --- Componente principal de la página de inicio ---
const PaginaDeInicio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
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
          <button className="mobile-menu-close" aria-label="Cerrar menú" onClick={closeMenu}>
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
            <button className="mobile-menu-btn" aria-label="Abrir menú" onClick={toggleMenu}>
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

      {/* Logo 3D */}
      <Logo3D />

      {/* Servicios */}
      {/* <section id="servicios">
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
... (<section id="servicios">
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
r<section id="servicios">
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
e<section id="testimonios" className="testimonials">
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

s <section className="stats">
          <div className="container">
              <div className="stats-grid">
                 <div className="stat-item"><div className="stat-number" id="yearsExp">10+</div><div className="stat-text">Años de Experiencia</div></div>
                 <div className="stat-item"><div className="stat-number" id="happyClients">500+</div><div className="stat-text">Empresas Satisfechas</div></div>
                 <div className="stat-item"><div className="stat-number" id="examsDone">90,000+</div><div className="stat-text">Exámenes Realizados</div></div>
                 <div className="stat-item"><div className="stat-number" id="specialists">20+</div><div className="stat-text">Especialistas Médicos</div></div>
              </div>
            </div>
      </section>

t <section className="stats">
          <div className="container">
              <div className="stats-grid">
                 <div className="stat-item"><div className="stat-number" id="yearsExp">10+</div><div className="stat-text">Años de Experiencia</div></div>
                 <div className="stat-item"><div className="stat-number" id="happyClients">500+</div><div className="stat-text">Empresas Satisfechas</div></div>
                 <div className="stat-item"><div className="stat-number" id="examsDone">90,000+</div><div className="stat-text">Exámenes Realizados</div></div>
                 <div className="stat-item"><div className="stat-number" id="specialists">20+</div><div className="stat-text">Especialistas Médicos</div></div>
              </div>
            </div>
      </section>

 of <section className="cta">
          <div className="container">
              <h2>¿Listo para proteger la salud de tus colaboradores?</h2>
               <p>Contáctanos hoy mismo para obtener más información sobre nuestros servicios y cómo podemos ayudarte a fomentar un ambiente de trabajo seguro y saludable.</p>
               <a href="#contacto" className="btn"><i className="fas fa-phone-alt"></i> Contactar Ahora</a>
            </div>
            </section>
yo{/* Estados Financieros */}
      <ur id="estados-financieros">
        <div className="container">
          <h2>Estados Financieros</h2>
          <DownloadPDF texto="Descargar Estados Financieros" />
        </div>
        </ur>

   {/*import { Send, User, Bot, Calendar, UserCheck, Stethoscope, AlertTriangle, Phone, MapPin, Clock, Heart, Eye, Brain, Ear, TestTube, GraduationCap, Shield, Activity, FileText, Users, Building } from 'lucide-react';

const IPSChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: '¡Hola! Soy el asistente virtual de IPS Figuras SST Cúcuta. ¿En qué puedo ayudarte hoy?\n\n🏥 Consultar especialidades médicas\n📅 Solicitar cita médica\n👨‍⚕️ Conocer nuestros servicios\n📋 Información sobre exámenes\n🎓 Cursos de capacitación\n📍 Ubicación y contacto\n\nEscribe tu consulta o selecciona una opción rápida.',
      timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const specialties = [
    { name: 'Medicina Laboral e Integral', icon: Stethoscope, color: 'text-blue-600' },
    { name: 'Cardiología', icon: Heart, color: 'text-red-600' },
    { name: 'Neurología', icon: Brain, color: 'text-purple-600' },
    { name: 'Odontología Integral', icon: Activity, color: 'text-green-600' },
    { name: 'Oftalmología', icon: Eye, color: 'text-indigo-600' },
    { name: 'Optometría', icon: Eye, color: 'text-teal-600' },
    { name: 'Psicología', icon: Brain, color: 'text-pink-600' },
    { name: 'Audiometría', icon: Ear, color: 'text-orange-600' },
    { name: 'Laboratorio Clínico', icon: TestTube, color: 'text-cyan-600' }
  ];

  // Base de conocimientos gratuita sin API
  const knowledgeBase = {
    // Saludos y despedidas
    greetings: {
      keywords: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos'],
      responses: [
        '¡Hola! Bienvenido a IPS Figuras SST Cúcuta. Estoy aquí para ayudarte con información sobre nuestros servicios médicos. ¿En qué puedo asistirte?',
        '¡Buenos días! Soy el asistente virtual de IPS Figuras SST. ¿Cómo puedo ayudarte hoy?'
      ]
    },
    
    // Información de contacto
    contact: {
      keywords: ['contacto', 'teléfono', 'dirección', 'ubicación', 'dónde están', 'como llegar'],
      responses: [
        '📍 **Nuestra información de contacto:**\n\n🏥 **IPS FIGURAS SST CÚCUTA SAS**\n📍 Dirección: Calle 21A #0B-122, Barrio Blanco, Cúcuta\n📞 Teléfonos: +57 3138914384 | +57 3158525385\n🌐 Web: www.trabajosenalturaipsfigurascucuta.com\n\n¿Necesitas ayuda con algo más?'
      ]
    },

    // Horarios
    schedule: {
      keywords: ['horario', 'horarios', 'que hora', 'abren', 'cierran', 'atienden'],
      responses: [
        '🕐 **Horarios de atención:**\n\n📅 **Lunes a Viernes:** 7:00 AM - 5:00 PM\n📅 **Sábados:** 7:00 AM - 12:00 PM\n📅 **Domingos:** Cerrado\n\n¿Te gustaría programar una cita?'
      ]
    },

    // Citas médicas
    appointments: {
      keywords: ['cita', 'citas', 'agendar', 'programar', 'reservar', 'turno'],
      responses: [
        '📅 **Para agendar tu cita médica:**\n\n1️⃣ Llama a nuestros números:\n   📞 +57 3138914384\n   📞 +57 3158525385\n\n2️⃣ Proporciona la siguiente información:\n   • Nombre completo\n   • Cédula de identidad\n   • Especialidad requerida\n   • Fecha y hora preferida\n   • Motivo de la consulta\n\n⏰ **Horarios de atención:** Lunes a Viernes 7:00 AM - 5:00 PM\n\n¿En qué especialidad necesitas la cita?'
      ]
    },

// Base de conocimiento expandida para patologías ocupacionales
const knowledgeBase = {
  // ... resto de tu conocimiento existente ...

  // Sistema de detección de patologías
  patologias: {
    // Patologías musculoesqueléticas
    'lumbalgia': {
      descripcion: 'Dolor en la región lumbar, común en trabajos que requieren levantar peso o permanecer sentado por períodos prolongados.',
      sinonimos: ['dolor lumbar', 'dolor de espalda baja', 'lumbago'],
      especialistas: ['Fisioterapeuta', 'Médico Ocupacional', 'Ortopedista'],
      recomendaciones: 'Ejercicios de fortalecimiento, ergonomía postural, pausas activas.',
      factores_riesgo: ['Levantamiento de cargas', 'Posturas prolongadas', 'Vibración'],
      examenes_sugeridos: ['Radiografía lumbar', 'Resonancia magnética'],
      prevencion: 'Uso de fajas ergonómicas, técnicas de levantamiento, ejercicios de core'
    },
    
    'tunel carpiano': {
      descripcion: 'Compresión del nervio mediano en la muñeca, frecuente en trabajos repetitivos con las manos.',
      sinonimos: ['síndrome del túnel carpiano', 'neuropatía mediana'],
      especialistas: ['Fisioterapeuta', 'Neurólogo', 'Cirujano de Mano'],
      recomendaciones: 'Ejercicios de estiramiento, uso de férulas, ergonomía en el puesto de trabajo.',
      factores_riesgo: ['Movimientos repetitivos', 'Posturas forzadas de muñeca', 'Vibración'],
      examenes_sugeridos: ['Electromiografía', 'Velocidad de conducción nerviosa'],
      prevencion: 'Pausas frecuentes, ejercicios de muñeca, ajuste ergonómico del puesto'
    },
    
    'cervicalgia': {
      descripcion: 'Dolor cervical asociado con posturas inadecuadas o estrés laboral.',
      sinonimos: ['dolor cervical', 'dolor de cuello', 'tortícolis'],
      especialistas: ['Fisioterapeuta', 'Médico Ocupacional'],
      recomendaciones: 'Ejercicios cervicales, ajuste de monitor, pausas frecuentes.',
      factores_riesgo: ['Posturas estáticas', 'Trabajo con computador', 'Estrés'],
      examenes_sugeridos: ['Radiografía cervical', 'Resonancia magnética'],
      prevencion: 'Ergonomía del puesto, ejercicios de cuello, manejo del estrés'
    },

    // Patologías respiratorias ocupacionales
    'asma ocupacional': {
      descripcion: 'Enfermedad respiratoria causada por la inhalación de sustancias en el lugar de trabajo.',
      sinonimos: ['asma laboral', 'broncoespasmo ocupacional'],
      especialistas: ['Neumólogo', 'Médico Ocupacional'],
      recomendaciones: 'Evitar exposición, uso de EPP respiratorio, tratamiento médico.',
      factores_riesgo: ['Exposición a químicos', 'Polvos industriales', 'Vapores tóxicos'],
      examenes_sugeridos: ['Espirometría', 'Pruebas de alergia', 'Radiografía de tórax'],
      prevencion: 'Sistemas de ventilación, mascarillas, controles de ingeniería'
    },

    'silicosis': {
      descripcion: 'Enfermedad pulmonar causada por la inhalación de polvo de sílice cristalina.',
      sinonimos: ['neumoconiosis por sílice', 'fibrosis pulmonar'],
      especialistas: ['Neumólogo', 'Médico Ocupacional'],
      recomendaciones: 'Cesación de exposición, seguimiento médico, tratamiento sintomático.',
      factores_riesgo: ['Minería', 'Construcción', 'Fundición'],
      examenes_sugeridos: ['Radiografía de tórax', 'TAC pulmonar', 'Espirometría'],
      prevencion: 'Protección respiratoria, ventilación, humidificación del ambiente'
    },

    // Patologías dermatológicas
    'dermatitis de contacto': {
      descripcion: 'Inflamación de la piel por contacto con sustancias irritantes o alérgenos en el trabajo.',
      sinonimos: ['eczema ocupacional', 'dermatitis laboral'],
      especialistas: ['Dermatólogo', 'Médico Ocupacional'],
      recomendaciones: 'Identificar y evitar alérgenos, uso de guantes, cremas protectoras.',
      factores_riesgo: ['Químicos irritantes', 'Metales', 'Látex'],
      examenes_sugeridos: ['Pruebas de parche', 'Biopsia de piel'],
      prevencion: 'Guantes protectores, cremas barrera, higiene de manos'
    },

    // Patologías auditivas
    'hipoacusia ocupacional': {
      descripcion: 'Pérdida auditiva causada por exposición prolongada a ruido en el trabajo.',
      sinonimos: ['sordera ocupacional', 'pérdida auditiva laboral'],
      especialistas: ['Otorrinolaringólogo', 'Audiología'],
      recomendaciones: 'Protección auditiva, control del ruido, seguimiento audiométrico.',
      factores_riesgo: ['Ruido > 85 dB', 'Exposición prolongada', 'Falta de protección'],
      examenes_sugeridos: ['Audiometría', 'Timpanometría'],
      prevencion: 'Protectores auditivos, control de ruido, rotación de personal'
    },

    // Patologías visuales
    'fatiga visual': {
      descripcion: 'Molestias oculares por uso prolongado de pantallas o trabajo visual intenso.',
      sinonimos: ['astenopia', 'síndrome visual informático'],
      especialistas: ['Oftalmólogo', 'Optometrista'],
      recomendaciones: 'Pausas visuales, ajuste de pantalla, iluminación adecuada.',
      factores_riesgo: ['Trabajo con computador', 'Iluminación inadecuada', 'Posturas forzadas'],
      examenes_sugeridos: ['Examen oftalmológico', 'Medición de refracción'],
      prevencion: 'Regla 20-20-20, ergonomía visual, iluminación apropiada'
    },

    // Patologías mentales ocupacionales
    'burnout': {
      descripcion: 'Síndrome de agotamiento físico y mental relacionado con el estrés laboral crónico.',
      sinonimos: ['síndrome de quemarse por el trabajo', 'desgaste profesional'],
      especialistas: ['Psicólogo', 'Psiquiatra'],
      recomendaciones: 'Manejo del estrés, apoyo psicológico, cambios organizacionales.',
      factores_riesgo: ['Sobrecarga laboral', 'Falta de control', 'Ambiente tóxico'],
      examenes_sugeridos: ['Evaluación psicológica', 'Escalas de burnout'],
      prevencion: 'Balance trabajo-vida, apoyo social, gestión del tiempo'
    },

    'estrés laboral': {
      descripcion: 'Respuesta física y emocional a demandas laborales que exceden las capacidades del trabajador.',
      sinonimos: ['estrés ocupacional', 'tensión laboral'],
      especialistas: ['Psicólogo', 'Médico Ocupacional'],
      recomendaciones: 'Técnicas de relajación, reorganización laboral, apoyo psicológico.',
      factores_riesgo: ['Presión temporal', 'Conflictos interpersonales', 'Inseguridad laboral'],
      examenes_sugeridos: ['Evaluación psicológica', 'Escalas de estrés'],
      prevencion: 'Gestión del tiempo, comunicación efectiva, pausas activas'
    }
  },

  // Función mejorada para detectar patologías
  detectarPatologia: function(mensaje) {
    const mensajeLower = mensaje.toLowerCase();
    
    for (const [patologia, datos] of Object.entries(this.patologias)) {
      // Buscar por nombre de patología
      if (mensajeLower.includes(patologia)) {
        return { patologia, datos };
      }
      
      // Buscar por sinónimos
      if (datos.sinonimos && datos.sinonimos.some(sinonimo => 
        mensajeLower.includes(sinonimo.toLowerCase())
      )) {
        return { patologia, datos };
      }
    }
    
    return null;
  },

  // Función para generar respuesta sobre patología
  generarRespuestaPatologia: function(patologia, datos) {
    return `🩺 **${patologia.toUpperCase()}**\n\n` +
           `📋 **Descripción:**\n${datos.descripcion}\n\n` +
           `👨‍⚕️ **Especialistas recomendados:**\n${datos.especialistas.map(e => `• ${e}`).join('\n')}\n\n` +
           `💡 **Recomendaciones:**\n${datos.recomendaciones}\n\n` +
           `⚠️ **Factores de riesgo:**\n${datos.factores_riesgo.map(f => `• ${f}`).join('\n')}\n\n` +
           `🔬 **Exámenes sugeridos:**\n${datos.examenes_sugeridos.map(e => `• ${e}`).join('\n')}\n\n` +
           `🛡️ **Prevención:**\n${datos.prevencion}\n\n` +
           `📞 **¿Necesitas una consulta?** Llama al +57 3138914384`;
  }
};

// Ejemplo de uso en tu función findBestResponse
const findBestResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Primero verificar si se menciona una patología
  const patologiaDetectada = knowledgeBase.detectarPatologia(message);
  if (patologiaDetectada) {
    return knowledgeBase.generarRespuestaPatologia(
      patologiaDetectada.patologia, 
      patologiaDetectada.datos
    );
  }
  
  // Si no es patología, continuar con el resto de tu lógica existente
  let bestMatch = null;
  let maxMatches = 0;
  
  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'patologias' || category === 'detectarPatologia' || category === 'generarRespuestaPatologia') {
      continue; // Saltar las funciones
    }
    
    const matches = data.keywords.filter(keyword => 
      message.includes(keyword.toLowerCase())
    ).length;
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = data;
    }
  }
  
  // Resto de tu lógica existente...
  if (bestMatch && maxMatches > 0) {
    const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
    return bestMatch.responses[randomIndex];
  }
  
  return 'Respuesta genérica...';
};

    // Especialidades médicas
    specialties: {
      keywords: ['especialidades', 'especialista', 'médico', 'doctores', 'servicios médicos'],
      responses: [
        '👨‍⚕️ **Nuestras especialidades médicas:**\n\n🩺 Medicina Laboral e Integral\n❤️ Cardiología\n🧠 Neurología\n🦷 Odontología Integral\n👁️ Oftalmología\n👓 Optometría\n🧠 Psicología\n👂 Audiometría\n🧪 Laboratorio Clínico\n\n¿Sobre cuál especialidad necesitas información específica?'
      ]
    },

    // Medicina laboral
    occupational: {
      keywords: ['medicina laboral', 'ocupacional', 'trabajo', 'empresa', 'empleados', 'sst'],
      responses: [
        '🏭 **Medicina Laboral e Integral:**\n\n✅ Exámenes médicos ocupacionales\n✅ Evaluaciones de ingreso\n✅ Exámenes periódicos\n✅ Evaluaciones de retiro\n✅ Valoraciones de reintegro\n✅ Conceptos de aptitud laboral\n✅ Asesoría en SST\n\n📋 **Incluye:**\n• Examen físico completo\n• Laboratorios específicos\n• Evaluaciones por especialistas\n• Certificados médicos\n\n¿Necesitas información sobre algún examen específico?'
      ]
    },

    // Cardiología
    cardiology: {
      keywords: ['cardiología', 'cardiólogo', 'corazón', 'electrocardiograma', 'ecg'],
      responses: [
        '❤️ **Cardiología:**\n\n🩺 **Servicios disponibles:**\n• Consulta cardiológica\n• Electrocardiograma (ECG)\n• Evaluación de riesgo cardiovascular\n• Control de hipertensión\n• Seguimiento de enfermedades cardíacas\n• Certificados cardiológicos para trabajo\n\n📋 **Exámenes para empresas:**\n• ECG ocupacional\n• Pruebas de esfuerzo\n• Evaluación cardiovascular laboral\n\n📞 **Agenda tu cita:** +57 3138914384'
      ]
    },

    // Laboratorio
    laboratory: {
      keywords: ['laboratorio', 'exámenes', 'análisis', 'sangre', 'orina'],
      responses: [
        '🧪 **Laboratorio Clínico:**\n\n📋 **Exámenes disponibles:**\n• Hemograma completo\n• Química sanguínea\n• Perfil lipídico\n• Glicemia\n• Examen general de orina\n• Coprológico\n• Serología\n\n🏭 **Exámenes ocupacionales:**\n• Perfil pulmonar\n• Audiometría\n• Visiometría\n• Exámenes toxicológicos\n\n⏰ **Preparación:** Ayuno de 8-12 horas para algunos exámenes\n\n📞 **Información:** +57 3138914384'
      ]
    },

    // Cursos y capacitación
    courses: {
      keywords: ['cursos', 'capacitación', 'manipulación', 'alimentos', 'entrenamiento'],
      responses: [
        '🎓 **Cursos de Capacitación:**\n\n🍽️ **Manipulación de Alimentos para Empresas:**\n• Duración: 8 horas\n• Certificado oficial\n• Modalidad presencial\n• Grupos empresariales\n\n🏗️ **Trabajo en Altura:**\n• Capacitación SST\n• Uso de EPP\n• Normatividad vigente\n\n📚 **Otros cursos:**\n• Primeros auxilios\n• Seguridad industrial\n• Prevención de riesgos\n\n💼 **Para empresas:** Cotizaciones especiales\n📞 **Información:** +57 3138914384'
      ]
    },

    // Precios y costos
    prices: {
      keywords: ['precio', 'costo', 'cuánto cuesta', 'valor', 'tarifa'],
      responses: [
        '💰 **Información de precios:**\n\nPara conocer nuestras tarifas actualizadas y planes especiales para empresas, te invitamos a:\n\n📞 **Contactarnos directamente:**\n   • +57 3138914384\n   • +57 3158525385\n\n🏢 **Beneficios empresariales:**\n• Descuentos por volumen\n• Planes corporativos\n• Convenios especiales\n• Facturación empresarial\n\n📍 **Visítanos:** Calle 21A #0B-122, Barrio Blanco'
      ]
    },

    // Emergencias
    emergency: {
      keywords: ['emergencia', 'urgencia', 'ayuda', 'urgente'],
      responses: [
        '🚨 **En caso de emergencia médica:**\n\n⚠️ **Llama inmediatamente:**\n📞 +57 3138914384\n📞 +57 3158525385\n\n🏥 **O dirígete a:**\n📍 Calle 21A #0B-122, Barrio Blanco, Cúcuta\n\n🆘 **Para emergencias graves:**\n• Línea de emergencias: 123\n• Ambulancia: Cruz Roja\n\n⏰ **Horario de atención:**\nLunes a Viernes: 7:00 AM - 5:00 PM'
      ]
    }
  };

  const findBestResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Buscar la mejor coincidencia
    let bestMatch = null;
    let maxMatches = 0;
    
    for (const [category, data] of Object.entries(knowledgeBase)) {
      const matches = data.keywords.filter(keyword => 
        message.includes(keyword.toLowerCase())
      ).length;
      
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = data;
      }
    }
    
    // Si encontró coincidencias, devolver respuesta aleatoria
    if (bestMatch && maxMatches > 0) {
      const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
      return bestMatch.responses[randomIndex];
    }
    
    // Respuestas genéricas cuando no encuentra coincidencias específicas
    const genericResponses = [
      '¡Gracias por tu consulta! Te puedo ayudar con información sobre:\n\n🏥 Especialidades médicas\n📅 Citas médicas\n🧪 Exámenes de laboratorio\n🎓 Cursos de capacitación\n📞 Información de contacto\n\nPuedes ser más específico sobre lo que necesitas, o llamarnos al +57 3138914384',
      
      'Para brindarte la mejor atención, puedes:\n\n📞 **Llamarnos:** +57 3138914384 | +57 3158525385\n📍 **Visitarnos:** Calle 21A #0B-122, Barrio Blanco\n⏰ **Horario:** Lunes a Viernes 7:00 AM - 5:00 PM\n\n¿Hay algo específico en lo que pueda ayudarte?',
      
      'Estoy aquí para ayudarte con información sobre IPS Figuras SST Cúcuta. Puedes preguntarme sobre:\n\n• Especialidades médicas\n• Horarios y citas\n• Exámenes ocupacionales\n• Cursos de capacitación\n• Ubicación y contacto\n\n¿Qué información necesitas?'
    ];
    
    const randomIndex = Math.floor(Math.random() * genericResponses.length);
    return genericResponses[randomIndex];
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse = findBestResponse(inputMessage);
      
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        content: botResponse,
        timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Tiempo aleatorio entre 1-2 segundos
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (actionText) => {
    setInputMessage(actionText);
  };

  const quickActions = [
    { text: 'Solicitar cita médica', icon: Calendar },
    { text: 'Especialidades disponibles', icon: UserCheck },
    { text: 'Ubicación y contacto', icon: MapPin },
    { text: 'Horarios de atención', icon: Clock },
    { text: 'Exámenes ocupacionales', icon: Stethoscope },
    { text: 'Cursos de capacitación', icon: GraduationCap },
    { text: 'Laboratorio clínico', icon: TestTube },
    { text: 'Información de precios', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">IPS FIGURAS SST CÚCUTA</h1>
                <p className="text-sm text-gray-600">Medicina Laboral e Integral</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+57 3138914384 | +57 3158525385</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                <MapPin className="h-4 w-4" />
                <span>Calle 21A #0B-122, Barrio Blanco</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Información */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Especialidades */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-blue-600" />
                Especialidades
              </h3>
              <div className="space-y-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <specialty.icon className={`h-5 w-5 ${specialty.color}`} />
                    <span className="text-sm text-gray-700">{specialty.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Horarios
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes:</span>
                  <span className="font-medium">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados:</span>
                  <span className="font-medium">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos:</span>
                  <span className="font-medium text-red-600">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Contacto rápido */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contacto Directo
              </h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+573138914384" className="flex items-center space-x-2 text-blue-700 hover:text-blue-900">
                  <Phone className="h-4 w-4" />
                  <span>+57 3138914384</span>
                </a>
                <a href="tel:+573158525385" className="flex items-center space-x-2 text-blue-700 hover:text-blue-900">
                  <Phone className="h-4 w-4" />
                  <span>+57 3158525385</span>
                </a>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                <div className="flex items-center space-x-3">
                  <Bot className="h-6 w-6" />
                  <div>
                    <h2 className="text-lg font-semibold">Asistente Virtual IPS Figuras</h2>
                    <p className="text-sm text-blue-100">Información médica y citas • Disponible 24/7</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-800 shadow-md'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 shadow-md px-4 py-3 rounded-xl">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-5 w-5 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-6 py-4 border-t bg-white">
                <p className="text-sm text-gray-600 mb-3">Acciones rápidas:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.text)}
                      className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <action.icon className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700 truncate">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 border-t bg-white">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu consulta aquí..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === '' || isTyping}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                IPS FIGURAS SST
              </h3>
              <p className="text-gray-300 text-sm">
                Institución prestadora de servicios de salud ocupacional comprometida con el bienestar laboral en Cúcuta.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+57 3138914384</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+57 3158525385</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Calle 21A #0B-122, Barrio Blanco</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Servicios</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Medicina Laboral</li>
                <li>• Exámenes Ocupacionales</li>
                <li>• Especialidades Médicas</li>
                <li>• Laboratorio Clínico</li>
                <li>• Capacitación SST</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Horarios</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>Lunes - Viernes</div>
                <div className="font-medium">7:00 AM - 5:00 PM</div>
                <div>Sábados</div>
                <div className="font-medium">8:00 AM - 12:00 PM</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 IPS FIGURAS SST CÚCUTA SAS & Marison-369 - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
       </>
  );
};

export default PaginaDeInicio;