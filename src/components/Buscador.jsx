import React, { useState } from 'react';

const Buscador = ({ colaboradores, setColaboradoresFiltrados }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarColaboradores(e.target.value);
  };

  const filtrarColaboradores = (valor) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      const valores = Object.values(colaborador).join(' ').toLowerCase();
      return valores.includes(valor.toLowerCase());
    });
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        id="buscar"
        value={busqueda}
        onChange={handleChange}
        placeholder="Busca un colaborador"
      />
    </div>
  );
};

export default Buscador;