import React from 'react';

const CitasList = ({ citas }) => {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            <strong>{cita.nombre}</strong> - {cita.fecha} {cita.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitasList;
