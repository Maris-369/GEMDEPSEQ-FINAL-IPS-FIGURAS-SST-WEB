import React, { useState, useEffect } from 'react';

const PDFViewer = ({ 
  pdfUrl = "/estado-financiero.pdf", 
  title = "Estados Financieros",
  width = "100%",
  height = "600px"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfExists, setPdfExists] = useState(false);

  useEffect(() => {
    // Verificar si el PDF existe
    const checkPdfExists = async () => {
      try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        if (response.ok) {
          setPdfExists(true);
        } else {
          setError('El archivo PDF no se encontró');
        }
      } catch (err) {
        setError('Error al cargar el archivo PDF');
      } finally {
        setIsLoading(false);
      }
    };

    checkPdfExists();
  }, [pdfUrl]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Error al cargar el visor PDF');
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: height,
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 10px'
          }}></div>
          <p>Cargando PDF...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: height,
        border: '1px solid #e74c3c',
        borderRadius: '8px',
        backgroundColor: '#fdf2f2',
        color: '#e74c3c',
        padding: '20px'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>📄</div>
        <h3 style={{ margin: '0 0 10px 0', color: '#e74c3c' }}>Error al cargar el PDF</h3>
        <p style={{ margin: '0 0 15px 0', textAlign: 'center' }}>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      width: width, 
      height: height,
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {/* Cabecera del visor */}
      <div style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '10px 15px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>{title}</span>
        <div>
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '15px',
              fontSize: '14px'
            }}
          >
            📖 Abrir en nueva pestaña
          </a>
          <a 
            href={pdfUrl}
            download
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            📥 Descargar
          </a>
        </div>
      </div>

      {/* Visor PDF */}
      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
        width="100%"
        height={`calc(${height} - 50px)`}
        style={{ border: 'none' }}
        title={title}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />

      {/* Estilos CSS para la animación */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PDFViewer;
