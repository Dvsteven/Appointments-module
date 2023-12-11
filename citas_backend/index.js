// Crea el archivo index.js en la carpeta "backend"
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('strictQuery', true);


const port = 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/citas_vet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Rutas
app.use('/', routes());


app.listen(5000);