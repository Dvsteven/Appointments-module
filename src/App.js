import React, { useState } from 'react';
import NuevaCitaForm from './Components/NuevaCitaForm';
import CitasList from './Components/CitasList';
import './css/style.css'; // Importa los estilos CSS

const App = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Veterinaria</h1>
        <NuevaCitaForm agregarCita={agregarCita} />
        <CitasList citas={citas} />
      </div>
    </div>
  );
};

export default App;
