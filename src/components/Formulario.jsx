import React, { useState } from 'react';

const Formulario = ({ setColaboradores, setColaboradoresFiltrados, setMsg, setMsgType }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, correo, edad, cargo, telefono].some((field) => field === '')) {
      setMsg('Completa todos los campos !');
      setMsgType('danger');
      return;
    }

    const nuevoColaborador = {
      id: Date.now().toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    setColaboradores((prevColaboradores) => [
      ...prevColaboradores,
      nuevoColaborador,
    ]);
    setColaboradoresFiltrados((prevColaboradoresFiltrados) => [
      ...prevColaboradoresFiltrados,
      nuevoColaborador,
    ]);

    setMsg('Colaborador agregado !');
    setMsgType('success');

    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <>
    <h1 className="text-center my-4">Agregar colaborador</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
  <input
    type="text"
    className="form-control"
    id="nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    placeholder='Nombre del colaborador'
  />
  <input
    type="email"
    className="form-control"
    id="correo"
    value={correo}
    onChange={(e) => setCorreo(e.target.value)}
    placeholder='Email del colaborador'
  />
  <input
    type="number"
    className="form-control"
    id="edad"
    value={edad}
    onChange={(e) => setEdad(e.target.value)}
    placeholder='Edad del colaborador'
  />
  <input
    type="text"
    className="form-control"
    id="cargo"
    value={cargo}
    onChange={(e) => setCargo(e.target.value)}
    placeholder='Cargo del colaborador'
  />
  <input
    type="number"
    className="form-control"
    id="telefono"
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)}
    placeholder='Teléfono del colaborador'
  />
</div>
<button type="submit" className="btn btn-primary">
  Agregar Colaborador
</button>
    </form>
    </>
  );
};

export default Formulario;