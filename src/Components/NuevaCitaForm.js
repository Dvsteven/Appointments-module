import React, { useState } from 'react';

const NuevaCitaForm = ({ agregarCita }) => {
  const [nombreDueño, setNombreDueño] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [tipoMascota, setTipoMascota] = useState('Perro');
  const [raza, setRaza] = useState('');
  const [numeroContacto, setNumeroContacto] = useState('');
  const [motivoCita, setMotivoCita] = useState('');
  const [tipoCita, setTipoCita] = useState('Medico General');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCita = {
      nombreDueño,
      nombreMascota,
      tipoMascota,
      raza,
      numeroContacto,
      motivoCita,
      tipoCita,
    };
    agregarCita(nuevaCita);
    // Limpiar los campos después de agregar la cita
    setNombreDueño('');
    setNombreMascota('');
    setTipoMascota('Perro');
    setRaza('');
    setNumeroContacto('');
    setMotivoCita('');
    setTipoCita('Medico General');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del Dueño:</label>
      <input
        type="text"
        value={nombreDueño}
        onChange={(e) => setNombreDueño(e.target.value)}
        required
      />

      <label>Nombre de la Mascota:</label>
      <input
        type="text"
        value={nombreMascota}
        onChange={(e) => setNombreMascota(e.target.value)}
        required
      />

      <label>Tipo de Mascota:</label>
      <select value={tipoMascota} onChange={(e) => setTipoMascota(e.target.value)}>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Ave">Ave</option>
        <option value="Otro">Otro</option>
      </select>

      <label>Raza:</label>
      <input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} />

      <label>Número de Contacto:</label>
      <input
        type="tel"
        value={numeroContacto}
        onChange={(e) => setNumeroContacto(e.target.value)}
        required
      />

      <label>Motivo de la Cita:</label>
      <textarea
        value={motivoCita}
        onChange={(e) => setMotivoCita(e.target.value)}
        required
      ></textarea>

      <label>Tipo de Cita:</label>
      <select value={tipoCita} onChange={(e) => setTipoCita(e.target.value)}>
        <option value="Medico General">Medico General</option>
        <option value="Seguimiento">Seguimiento</option>
        <option value="Primera Vez">Primera Vez</option>
        <option value="Procedimiento Quirúrgico">Procedimiento Quirúrgico</option>
        <option value="Cuidado General">Cuidado General</option>
      </select>

      <button type="submit">Agregar Cita</button>
    </form>
  );
};

export default NuevaCitaForm;
