const express = require('express');
const router = express.Router();
const citaController = require('../Controller/citaController');


module.exports = function () {

    router.post('/citas', citaController.agregarCita);
    router.get('/citas', citaController.obtenerCitas);
    router.put('/citas/:id', citaController.actualizarCita);
    router.delete('/citas/:id', citaController.eliminarCita);
    router.get('/citas', citaController.obtenerTodasLasCitas);

    return router;
}
