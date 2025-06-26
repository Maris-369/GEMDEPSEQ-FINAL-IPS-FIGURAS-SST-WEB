// Importación de estilos y polyfills
import 'core-js/stable'; // Polyfills para compatibilidad
import 'regenerator-runtime/runtime'; // Soporte para async/await
import './src/styles/main.css';
import 'lazysizes'; // Lazy loading para imágenes

// Importa el tema de diseño médico
import { MedicalThemeProvider } from './src/theme/MedicalTheme';

// Configuración de analytics (opcional)
export const onClientEntry = () => {
  // Inicialización temprana de Google Tag Manager
  if (typeof window !== 'undefined' && window.GTAG_ID) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', window.GTAG_ID);
  }

  // Verifica si el navegador es compatible
  if (typeof IntersectionObserver === 'undefined') {
    import('intersection-observer'); // Polyfill para lazy loading
  }
};

// Proveedor de contexto global
export const wrapRootElement = ({ element }) => (
  <MedicalThemeProvider>
    {element}
  </MedicalThemeProvider>
);

// Control de scroll para navegación
export const shouldUpdateScroll = ({ routerProps }) => {
  // Evita scroll automático en formularios médicos
  if (routerProps.location.pathname.includes('/formulario')) {
    return false;
  }
  return true;
};

// Manejo de errores global
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'IPS FIGURAS SST ha actualizado su contenido. ¿Desea recargar para ver los cambios?'
  );
  if (answer === true) {
    window.location.reload();
  }
};

// Prefetching de rutas críticas
export const onPrefetchPathname = ({ pathname }) => {
  if (pathname === '/urgencias' || pathname === '/citas') {
    import('./src/components/EmergencyButton');
  }
};