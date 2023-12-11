import React from 'react';

const CitasList = ({ citas }) => {
  console.log('Lista de citas:', citas);
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            <strong>Dueño:</strong> {cita.nombreDueño} |{' '}
            <strong>Mascota:</strong> {cita.nombreMascota} |{' '}
            <strong>Tipo de Mascota:</strong> {cita.tipoMascota} |{' '}
            <strong>Raza:</strong> {cita.raza} |{' '}
            <strong>Contacto:</strong> {cita.numeroContacto} |{' '}
            <strong>Motivo:</strong> {cita.motivoCita} |{' '}
            <strong>Tipo de Cita:</strong> {cita.tipoCita}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitasList;

//const actualizarCita = async (id, datosActualizados) => {
  //try {
    //const response = await axios.put(`http://localhost:5000/api/citas/${id}`, datosActualizados);
    //console.log('Cita actualizada:', response.data);
    // Actualizar la lista de citas después de la modificación
    //obtenerCitasRegistradas();
  //} catch (error) {
    //console.error('Error al actualizar cita:', error);
  //}
//};

//const eliminarCita = async (id) => {
  //try {
    //const response = await axios.delete(`http://localhost:5000/api/citas/${id}`);
    //console.log('Cita eliminada:', response.data);
    // Actualizar la lista de citas después de la eliminación
    //obtenerCitasRegistradas();
  //} catch (error) {
    //console.error('Error al eliminar cita:', error);
  //}
//};