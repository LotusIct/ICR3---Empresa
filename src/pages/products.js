import React from 'react';
import { useParams } from 'react-router-dom';
import categorias from '../data/marcas.json';
import '../styles/products.css';

const MarcaDetalhes = () => {
  const { id } = useParams();

  // Procura pela marca em todas as categorias
  let marcaEncontrada = null;

  for (const categoria of categorias) {
    const marca = categoria.marcas.find((m) => m.id === id);
    if (marca) {
      marcaEncontrada = { ...marca, categoria: categoria.categoria };
      break;
    }
  }

  if (!marcaEncontrada) {
    return (
      <div className="marca-detalhes">
        <h2>Marca não encontrada</h2>
      </div>
    );
  }

  return (
    <div className="marca-detalhes">
      <h2>{marcaEncontrada.nome}</h2>
      <p className="categoria-titulo">Categoria: {marcaEncontrada.categoria}</p>

      <div className="produtos-container">
        {marcaEncontrada.produtos.length > 0 ? (
          marcaEncontrada.produtos.map((produto, index) => (
            <div className="produto-card" key={index}>
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="produto-imagem"
              />
             <p className="produto-nome">{produto.nome}</p>
             <p className="produto-descricao">{produto.descricao}</p> 

            </div>
          ))
        ) : (
          <p className="nenhum-produto">Nenhum produto cadastrado para esta marca.</p>
        )}
      </div>
    </div>
  );
};

export default MarcaDetalhes;
