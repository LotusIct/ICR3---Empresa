import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import categorias from '../data/marcas.json';
import '../styles/products.css';

const MarcaDetalhes = () => {
  // Função para destacar partes da descrição
const destacarDescricao = (texto) => {
  if (!texto) return '';
  
  return texto
    .replace(/PADRÕES DE CORES,.*?:/gi, (match) => {
      return `<span class="marcado-verde">${match}</span>`;
    })
    .replace(/PADRÕES DE CORES, GARDNER COLOR/gi, (match) => {
      return `<span class="marcado-verde">${match}</span>`;
    })
    .replace(/\n/g, '<br/>'); // Mantém quebra de linha
};

  const [cardAtivo, setCardAtivo] = useState(null);

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
      {marcaEncontrada.catalogo && (
      <a
        href={marcaEncontrada.catalogo}
        download
        className="catalogo"
        target="_blank"
        rel="noopener noreferrer"
      >
      Baixar Catálogo
      </a>
    )}

      <div className="produtos-container">
     {marcaEncontrada.produtos.length > 0 ? (
  marcaEncontrada.produtos.map((produto, index) => (
    <div
      className={`produto-card ${cardAtivo === index ? 'ativo' : ''}`}
      key={index}
      onClick={() => setCardAtivo(cardAtivo === index ? null : index)}
    >
      <div className="produto-inner">
        <div className="produto-front">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="produto-imagem"
          />
          <p className="produto-nome">{produto.nome}</p>
          <p className="ver-detalhes">Toque para ver as especificações</p>
        </div>
        <div className="produto-back">
         <p
  className="produto-descricao"
  dangerouslySetInnerHTML={{ __html: destacarDescricao(produto.descricao) }}
></p>

        </div>
      </div>
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
