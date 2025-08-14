import React from 'react';
import { Link } from 'react-router-dom';
import categorias from '../data/marcas.json';
import '../styles/marcas.css';

const Marcas = () => {
  const todasMarcas = categorias.flatMap(categoria =>
    categoria.marcas.map(marca => ({
      ...marca,
      categoria: categoria.categoria
    }))
  );

  return (
    <div className="marcas-section">
      <section className="hero-section-marcas">
        <div className="overlay"></div>
        <div className="hero-content-marcas">
          <h1>Nossas Marcas</h1>
        </div>
      </section>



      {/* Grid com todas as marcas */}
      <div className="grid-marcas">
             {/* Sessão de Catálogo Geral */}
      <div className="marca-card">
         <h2>Catálogos</h2>
  <p>Baixe agora o material completo com nossos produtos.</p>
        <a
          href="/catalogos/equipamentos geral.pdf"
          download
          className="botao-catalogos"
          target="_blank"
          rel="noopener noreferrer"
        >
        Catálogo Geral
        </a>
          <a
          href="/catalogos/mcr.pdf"
          download
          className="botao-catalogos"
          target="_blank"
          rel="noopener noreferrer"
        >
         Catálogo MCR
        </a>
        
      </div>
     
        {todasMarcas.map((marca) => (
          <div key={marca.id} className="marca-card">
            <div className="marca-conteudo">
              <Link to={`/marcas/${marca.id}`} className="link-marca">
                <img
                  src={marca.logo || `/logos/${marca.id}-logo.png`}
                  alt={`Logo da ${marca.nome.toUpperCase()}`}
                  className="marca-logo"
                />
              </Link>
            </div>

            {marca.catalogo && (
              <a
                href={marca.catalogo}
                download
                className="botao-catalogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar Catálogo
              </a>
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Marcas;
