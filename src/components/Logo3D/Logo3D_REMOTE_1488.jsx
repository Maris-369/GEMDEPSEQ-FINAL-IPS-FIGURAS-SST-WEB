import React, { useState, useEffect, useRef } from 'react';
import './Logo3D.css';

const Logo3D = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentSpeed, setCurrentSpeed] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const [currentRotationX, setCurrentRotationX] = useState(0);
  const [currentRotationY, setCurrentRotationY] = useState(0);
  
  const cubeRef = useRef(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);

  // Crear partículas flotantes
  const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      particlesContainer.innerHTML = '';
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
      }
    }
  };

  // Control de animación
  const toggleAnimation = () => {
    const newIsAnimating = !isAnimating;
    setIsAnimating(newIsAnimating);
    
    if (cubeRef.current) {
      if (newIsAnimating) {
        cubeRef.current.style.animation = `rotate ${currentSpeed}s infinite linear`;
      } else {
        cubeRef.current.style.animation = 'none';
      }
    }
  };

  // Reiniciar rotación
  const resetRotation = () => {
    if (cubeRef.current) {
      cubeRef.current.style.animation = 'none';
      cubeRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
      setCurrentRotationX(0);
      setCurrentRotationY(0);
      
      setTimeout(() => {
        if (isAnimating && cubeRef.current) {
          cubeRef.current.style.animation = `rotate ${currentSpeed}s infinite linear`;
        }
      }, 100);
    }
  };

  // Cambiar velocidad
  const changeSpeed = () => {
    const speeds = [5, 10, 15, 20, 30];
    const currentIndex = speeds.indexOf(currentSpeed);
    const newSpeed = speeds[(currentIndex + 1) % speeds.length];
    setCurrentSpeed(newSpeed);
    
    if (isAnimating && cubeRef.current) {
      cubeRef.current.style.animation = `rotate ${newSpeed}s infinite linear`;
    }
    
    showNotification(`Velocidad: ${newSpeed}s`);
  };

  // Mostrar notificación
  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 2000);
  };

  // Control manual con mouse/touch
  const startDrag = (e) => {
    setIsDragging(true);
    if (cubeRef.current) {
      cubeRef.current.style.animation = 'none';
    }
    
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    
    startXRef.current = clientX;
    startYRef.current = clientY;
  };

  const drag = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    
    const deltaX = clientX - startXRef.current;
    const deltaY = clientY - startYRef.current;
    
    const newRotationY = currentRotationY + deltaX * 0.5;
    const newRotationX = currentRotationX - deltaY * 0.5;
    
    setCurrentRotationY(newRotationY);
    setCurrentRotationX(newRotationX);
    
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${newRotationX}deg) rotateY(${newRotationY}deg)`;
    }
    
    startXRef.current = clientX;
    startYRef.current = clientY;
  };

  const endDrag = () => {
    setIsDragging(false);
    
    setTimeout(() => {
      if (isAnimating && cubeRef.current) {
        cubeRef.current.style.animation = `rotate ${currentSpeed}s infinite linear`;
      }
    }, 1000);
  };

  // Easter egg: doble click
  const handleDoubleClick = () => {
    if (cubeRef.current) {
      cubeRef.current.style.animation = 'rotate 1s infinite linear, pulse 0.5s ease-in-out';
      setTimeout(() => {
        if (cubeRef.current) {
          cubeRef.current.style.animation = isAnimating ? `rotate ${currentSpeed}s infinite linear` : 'none';
        }
      }, 2000);
      showNotification('¡Efecto especial activado! ✨');
    }
  };

  // Efectos de inicialización
  useEffect(() => {
    createParticles();
    
    // Mostrar bienvenida
    setTimeout(() => {
      showNotification('¡Bienvenido a FIGURAS SST! 🏥');
    }, 1000);

    // Event listeners globales
    const handleMouseMove = drag;
    const handleMouseUp = endDrag;
    const handleTouchMove = drag;
    const handleTouchEnd = endDrag;

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, currentRotationX, currentRotationY, isAnimating, currentSpeed]);

  return (
    <div className="logo3d-container">
      <div className="particles" id="particles"></div>
      <div className="glow-effect"></div>
      
      <div className="controls">
        <button className="control-btn" onClick={toggleAnimation}>
          ⏯️ Pausar/Reanudar
        </button>
        <button className="control-btn" onClick={resetRotation}>
          🔄 Reiniciar
        </button>
        <button className="control-btn" onClick={changeSpeed}>
          ⚡ Velocidad
        </button>
      </div>

      <div className="container">
        <div className="cube-container">
          <div 
            className="cube" 
            ref={cubeRef}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onDoubleClick={handleDoubleClick}
          >
            <div className="face front">
              <div className="logo-container">
                <div className="orbit-container">
                  <div className="orbit"></div>
                  <div className="orbit"></div>
                  <div className="orbit"></div>
                  <div className="center-symbol">⚕️</div>
                </div>
                <div className="logo-main">FIGURAS SST</div>
                <div className="logo-location">CÚCUTA IPS</div>
              </div>
            </div>
            
            <div className="face back">
              <div className="logo-container">
                <div className="medical-symbol">⚕️</div>
                <div className="logo-main">SALUD</div>
                <div className="logo-subtitle">OCUPACIONAL</div>
                <div className="logo-location">CÚCUTA</div>
              </div>
            </div>
            
            <div className="face right">
              <div className="logo-container">
                <div className="worker-icon">👷‍♂️</div>
                <div className="logo-main">SST</div>
                <div className="logo-subtitle">SEGURIDAD</div>
                <div className="logo-location">TRABAJO</div>
              </div>
            </div>
            
            <div className="face left">
              <div className="logo-container">
                <div className="worker-icon">🛡️</div>
                <div className="logo-main">FIGURAS</div>
                <div className="logo-subtitle">PROTECCIÓN</div>
                <div className="logo-location">LABORAL</div>
              </div>
            </div>
            
            <div className="face top">
              <div className="logo-container">
                <div className="worker-icon">🏥</div>
                <div className="logo-main">IPS</div>
                <div className="logo-subtitle">EXCELENCIA</div>
                <div className="logo-location">SERVICIOS</div>
              </div>
            </div>
            
            <div className="face bottom">
              <div className="logo-container">
                <div className="worker-icon">✓</div>
                <div className="logo-main">CALIDAD</div>
                <div className="logo-subtitle">CONFIANZA</div>
                <div className="logo-location">PROFESIONAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-panel">
        <div className="info-title">🏥 FIGURAS SST - CÚCUTA IPS</div>
        <p>Cubo 3D interactivo que representa los servicios de Salud y Seguridad en el Trabajo de nuestra institución.</p>
        <br />
        <p><strong>Servicios:</strong></p>
        <p>• Salud Ocupacional</p>
        <p>• Seguridad y Salud en el Trabajo</p>
        <p>• Protección Laboral</p>
        <br />
        <p><strong>Controles:</strong></p>
        <p>• Haz clic y arrastra para rotar</p>
        <p>• Usa los botones de control</p>
      </div>
    </div>
  );
};

export default Logo3D;S