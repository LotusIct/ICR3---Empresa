import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import categorias from '../data/marcas.json';
import '../styles/products.css';

const MarcaDetalhes = () => {
  const [cardAtivo, setCardAtivo] = useState(null);
  const [imagemModal, setImagemModal] = useState(null); // Modal da imagem de descrição

  const { id } = useParams();

  // Procura pela marca
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
      <div className="marca-detalhes marca-detalhes-com-imagem">
        <h2>Marca não encontrada</h2>
      </div>
    );
  }

  return (
    <div className="marca-detalhes marca-detalhes-com-imagem">
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
                  {produto.descricaoImagem && (
                    <div
                      className="descricao-imagem-preview"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagemModal(produto.descricaoImagem);
                      }}
                    >
                      <img
                        src={produto.descricaoImagem}
                        alt={`Descrição de ${produto.nome}`}
                        className="descricao-imagem"
                      />
                      <p className="descricao-hover-text">Clique para ampliar</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="nenhum-produto">Nenhum produto cadastrado para esta marca.</p>
        )}
      </div>

      {/* Modal de imagem */}
      {imagemModal && (
        <div className="modal-overlay" onClick={() => setImagemModal(null)}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <img src={imagemModal} alt="Descrição ampliada" />
            <button className="fechar-modal" onClick={() => setImagemModal(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarcaDetalhes;
