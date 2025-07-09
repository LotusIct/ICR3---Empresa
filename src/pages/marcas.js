import React from 'react';
import { Link } from 'react-router-dom';
import categorias from '../data/marcas.json';
import '../styles/marcas.css';

const Marcas = () => {
  // Extrai todas as marcas de todas as categorias
  const todasMarcas = categorias.flatMap(categoria =>
    categoria.marcas.map(marca => ({
      ...marca,
      categoria: categoria.categoria
    }))
  );

  return (
    <section className="marcas-section">
      <h1 className="titulo-principal">Nossas Marcas</h1>
      <div className="grid-marcas">
        {todasMarcas.map((marca) => (
          <Link to={`/produtos/${marca.id}`} key={marca.id} className="marca-card">
            <img
              src={marca.logo || `/logos/${marca.id}-logo.png`} // fallback se quiser usar logo nomeado por id
              alt={`Logo da ${marca.nome.toUpperCase()}`}
              className="marca-logo"
            />
            <span className="marca-nome">{marca.nome}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Marcas;
