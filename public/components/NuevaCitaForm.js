import React, { useState } from 'react';

const NuevaCitaForm = ({ agregarCita }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones y lógica para agregar cita
    agregarCita({ nombre, fecha, hora });
    // Limpiar los campos después de agregar la cita
    setNombre('');
    setFecha('');
    setHora('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

      <label>Fecha:</label>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />

      <label>Hora:</label>
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />

      <button type="submit">Agregar Cita</button>
    </form>
  );
};

export default NuevaCitaForm;
