import React from 'react';
import QRCode from 'qrcode.react';
import './QRPatient.css';

const QRPatient = ({ patient, showLabel = true, size = 80 }) => {
  if (!patient || !patient.id) {
    return null;
  }

  const verificationUrl = `https://verificar.ipsfiguras.com/${patient.id}`;

  return (
    <div className="qr-patient-container">
      <div className="print-qr">
        <QRCode 
          value={verificationUrl} 
          size={size}
          level="M"
          includeMargin={true}
          renderAs="svg"
        />
        {showLabel && (
          <div className="qr-info">
            <p className="qr-label">Código de Verificación</p>
            <p className="qr-url">{verificationUrl}</p>
            <p className="company-name">IPS FIGURAS SST CÚCUTA SAS</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRPatient;