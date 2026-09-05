import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaSearch } from 'react-icons/fa';
import categorias from '../data/marcas.json';
import '../styles/products.css';

export default function MarcaDetalhes() {
  const { id } = useParams();
  const [busca, setBusca] = useState('');
  const [produtoAtivo, setProdutoAtivo] = useState(null);
  const [zoom, setZoom] = useState(0.85);

  const marca = useMemo(() => {
    for (const grupo of categorias) {
      const encontrada = grupo.marcas.find((item) => item.id === id);
      if (encontrada) return { ...encontrada, categoria: grupo.categoria };
    }
    return null;
  }, [id]);

  const produtos = useMemo(() => {
    if (!marca) return [];
    const termo = busca.trim().toLocaleLowerCase('pt-BR');
    return marca.produtos.filter((produto) => !termo || produto.nome.toLocaleLowerCase('pt-BR').includes(termo));
  }, [busca, marca]);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setProdutoAtivo(null);
    window.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = produtoAtivo ? 'hidden' : '';
    return () => { window.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = ''; };
  }, [produtoAtivo]);

  if (!marca) return <main className="product-not-found"><span>Marca não encontrada</span><h1>Não encontramos esta página.</h1><Link to="/marcas"><FaArrowLeft /> Voltar para marcas</Link></main>;

  const openProduct = (produto) => { setZoom(0.85); setProdutoAtivo(produto); };

  return (
    <main className="brand-products-page">
      <section className="brand-products-hero">
        <div className="brand-products-hero-inner">
          <div className="brand-products-copy">
            <Link to="/marcas" className="back-to-brands"><FaArrowLeft /> Todas as marcas</Link>
            <span className="brand-category">{marca.categoria}</span>
            <h1>{marca.nome}</h1>
            <p>Conheça os equipamentos e soluções disponíveis desta marca.</p>
            {marca.catalogo && <a href={marca.catalogo} className="brand-catalog" target="_blank" rel="noopener noreferrer">Baixar catálogo <FaDownload /></a>}
          </div>
          <div className="brand-logo-panel"><img src={marca.logo || `/logos/${marca.id}-logo.png`} alt={`Logo ${marca.nome}`} decoding="async" /></div>
        </div>
      </section>

      <section className="products-browser" aria-labelledby="products-title">
        <div className="products-heading"><div><span className="section-kicker">Portfólio de produtos</span><h2 id="products-title">Soluções disponíveis</h2></div><p>{marca.produtos.length} {marca.produtos.length === 1 ? 'produto cadastrado' : 'produtos cadastrados'}</p></div>
        <label className="products-search"><FaSearch aria-hidden="true" /><span className="sr-only">Buscar produto</span><input value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Buscar produto por nome..." /></label>
        <div className="products-result-count">{produtos.length} {produtos.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}</div>

        <div className="produtos-container">
          {produtos.map((produto, index) => (
            <article className="produto-card" key={`${produto.nome}-${index}`}>
              <span className="produto-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="produto-image-wrap"><img src={produto.imagem} alt={produto.nome} className="produto-imagem" loading="lazy" decoding="async" /></div>
              <div className="produto-card-body"><h3>{produto.nome}</h3>{produto.descricaoImagem ? <button className="ver-detalhes" onClick={() => openProduct(produto)}>Ver especificações <span>↗</span></button> : <span className="produto-sem-detalhes">Consulte nossa equipe</span>}</div>
            </article>
          ))}
          {produtos.length === 0 && <div className="products-empty"><strong>Nenhum produto encontrado</strong><p>Tente buscar usando outro termo.</p><button onClick={() => setBusca('')}>Limpar busca</button></div>}
        </div>
      </section>

      <section className="products-support"><div><span className="section-kicker">Suporte ICR3</span><h2>Precisa de ajuda para escolher?</h2><p>Nossa equipe técnica pode orientar a solução mais adequada à sua aplicação.</p></div><Link to="/fale-conosco">Fale com um especialista</Link></section>

      {produtoAtivo && <div className="product-modal-overlay" onClick={() => setProdutoAtivo(null)} role="presentation"><div className="product-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Especificações de ${produtoAtivo.nome}`}>
        <div className="product-modal-header"><div><span>Especificações</span><h2>{produtoAtivo.nome}</h2></div><div className="product-zoom-controls" aria-label="Controles de zoom"><button onClick={() => setZoom((value) => Math.max(.65, value - .15))} aria-label="Diminuir zoom">−</button><button onClick={() => setZoom(.85)} aria-label="Restaurar zoom">{Math.round(zoom * 100)}%</button><button onClick={() => setZoom((value) => Math.min(2.5, value + .15))} aria-label="Aumentar zoom">+</button></div><button className="product-modal-close" onClick={() => setProdutoAtivo(null)} aria-label="Fechar">×</button></div>
        <div className="product-modal-viewport"><img src={produtoAtivo.descricaoImagem} alt={`Especificações de ${produtoAtivo.nome}`} style={{ width: `${zoom * 100}%` }} decoding="async" /></div>
      </div></div>}
    </main>
  );
}
