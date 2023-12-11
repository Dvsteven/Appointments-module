const Cita = require('../models/cita');


  // Lógica para agregar una cita a la base de datos
exports.agregarCita = async (req, res) => {
  const cita = new Cita(req.body);

   try{
       //se almacena el registro en la bd
       await cita.save();
       res.json({ mensaje: 'Se agrego un nuevo registro'});
   }catch(error){
       //si hay error, muestre por console.log y next
       console.log(error);
       next();
   }

}
// En citaController.js
exports.actualizarCita = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_dueño, nombre_mascota, tipo_mascota, raza, numero_contacto, motivo_cita, tipo_cita} = req.body;

    // Encuentra la cita por ID y actualiza los campos necesarios
    const citaActualizada = await Cita.findByIdAndUpdate(id, {
      nombre_dueño,
      nombre_mascota,
      tipo_mascota,
      raza,
      numero_contacto,
      motivo_cita,
      tipo_cita
    }, { new: true });

    res.json(citaActualizada);
  } catch (error) {
    console.error('Error al actualizar cita:', error);
    res.status(500).json({ error: 'Error al actualizar cita' });
  }
};

// En citaController.js
exports.eliminarCita = async (req, res) => {
  try {
    const { id } = req.params;

    // Encuentra la cita por ID y elimínala
    await Cita.findByIdAndDelete(id);

    res.json({ message: 'Cita eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar cita:', error);
    res.status(500).json({ error: 'Error al eliminar cita' });
  }
};
