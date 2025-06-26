import React, { useEffect, useState } from 'react';
import { Client } from 'fhirclient';

export default function FhirPatient({ patientId }) {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Client.oauth2.ready()
      .then(client => {
        // Obtener recurso Patient
        client.request(`Patient/${patientId}`)
          .then(data => {
            setPatient(data);
            setLoading(false);
          });
      });
  }, [patientId]);

  if (loading) return <div>Cargando datos del paciente...</div>;

  return (
    <div className="patient-data">
      <h2>{patient.name[0].text}</h2>
      <p>ID: {patient.id}</p>
      <p>Género: {patient.gender}</p>
      <p>Nacimiento: {patient.birthDate}</p>
      
      {/* Historial médico */}
      <FhirObservations patientId={patientId} />
    </div>
  );
}