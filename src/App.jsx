import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores);
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('');

  return (
    <div className="container">
      <h1 className="text-center my-4">Lista de colaboradores</h1>
      <Buscador
        colaboradores={colaboradores}
        setColaboradoresFiltrados={setColaboradoresFiltrados}
      />
      <Listado colaboradores={colaboradoresFiltrados} />
      <Formulario
        setColaboradores={setColaboradores}
        setColaboradoresFiltrados={setColaboradoresFiltrados}
        setMsg={setMsg}
        setMsgType={setMsgType}
      />
    <div className='alerta-css'>
      <Alert msg={msg} msgType={msgType} />
      </div>
    </div>
  );
}

export default App;