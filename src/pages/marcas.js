import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaChevronDown, FaDownload } from 'react-icons/fa';
import categorias from '../data/marcas.json';
import '../styles/marcas.css';

const allBrands = categorias.flatMap(({ categoria, marcas }) => marcas.map((marca) => ({ ...marca, categoria })));

export default function Marcas() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [categoriasAbertas, setCategoriasAbertas] = useState(false);
  const categoryDropdownRef = useRef(null);
  const nomesCategorias = ['Todas', ...categorias.map(({ categoria }) => categoria)];
  const marcasFiltradas = useMemo(() => allBrands.filter((marca) => {
    const termo = busca.trim().toLocaleLowerCase('pt-BR');
    return (!termo || marca.nome.toLocaleLowerCase('pt-BR').includes(termo)) && (categoriaAtiva === 'Todas' || marca.categoria === categoriaAtiva);
  }), [busca, categoriaAtiva]);

  const clearFilters = () => { setBusca(''); setCategoriaAtiva('Todas'); };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (event.key === 'Escape' || (event.type === 'mousedown' && !categoryDropdownRef.current?.contains(event.target))) setCategoriasAbertas(false);
    };
    document.addEventListener('mousedown', closeDropdown);
    document.addEventListener('keydown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
      document.removeEventListener('keydown', closeDropdown);
    };
  }, []);

  return (
    <main className="marcas-section">
      <section className="hero-section-marcas">
        <div className="hero-content-marcas">
          <span className="hero-kicker">Portfólio internacional</span>
          <h1>Marcas que são referência em precisão.</h1>
          <p>Tecnologia selecionada para análises e medições confiáveis.</p>
        </div>
      </section>

      <section className="catalogos-feature">
        <div><span className="section-kicker">Materiais técnicos</span><h2>Catálogos ICR3</h2><p>Consulte nosso portfólio completo de equipamentos e materiais de referência certificados.</p></div>
        <div className="catalogos-actions">
          <a href="/catalogos/equipamentos-2026.pdf" target="_blank" rel="noopener noreferrer">Catálogo de equipamentos <span>↗</span></a>
          <a href="/catalogos/CATÁLOGO MRC - ARO e CANNON.pdf.pdf" target="_blank" rel="noopener noreferrer">Catálogo MRC <span>↗</span></a>
        </div>
      </section>

      <section className="marcas-browser" aria-labelledby="marcas-title">
        <div className="marcas-intro">
          <div><span className="section-kicker">Parceiros ICR3</span><h2 id="marcas-title">Encontre a solução ideal</h2></div>
          <p>Explore as marcas por nome ou área de atuação.</p>
        </div>

        <div className="marcas-filtros">
          <label className="marca-search"><span aria-hidden="true">⌕</span><span className="sr-only">Buscar marca</span><input value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Buscar por marca..." /></label>
          <div className="category-select" ref={categoryDropdownRef}>
            <button className="category-select-trigger" onClick={() => setCategoriasAbertas(!categoriasAbertas)} aria-expanded={categoriasAbertas} aria-haspopup="listbox"><span>{categoriaAtiva}</span><FaChevronDown className={`category-chevron ${categoriasAbertas ? 'open' : ''}`} aria-hidden="true" /></button>
            {categoriasAbertas && <div className="category-options" role="listbox" aria-label="Filtrar por categoria">{nomesCategorias.map((nome) => <button key={nome} role="option" aria-selected={categoriaAtiva === nome} onClick={() => { setCategoriaAtiva(nome); setCategoriasAbertas(false); }}><span>{nome}</span>{categoriaAtiva === nome && <span className="category-check" aria-hidden="true"><FaCheck /></span>}</button>)}</div>}
          </div>
        </div>

        <div className="marcas-results-bar"><span>{marcasFiltradas.length} {marcasFiltradas.length === 1 ? 'marca encontrada' : 'marcas encontradas'}</span>{(busca || categoriaAtiva !== 'Todas') && <button onClick={clearFilters}>Limpar filtros</button>}</div>

        <div className="grid-marcas">
          {marcasFiltradas.map((marca, index) => (
            <article key={marca.id} className="marca-card">
              <span className="marca-index">{String(index + 1).padStart(2, '0')}</span>
              <Link to={`/marcas/${marca.id}`} className="link-marca" aria-label={`Conheça os produtos ${marca.nome}`}>
                <img src={marca.logo || `/logos/${marca.id}-logo.png`} alt={`Logo ${marca.nome}`} className="marca-logo" loading="lazy" decoding="async" />
              </Link>
              <div className="marca-card-info"><div><span>{marca.categoria}</span><h3>{marca.nome}</h3></div></div>
              <div className="marca-card-actions">
                <Link to={`/marcas/${marca.id}`} className="marca-products-link">Ver produtos <span className="product-arrow" aria-hidden="true">↗</span></Link>
                {marca.catalogo && <a href={marca.catalogo} className="botao-catalogo" target="_blank" rel="noopener noreferrer">Baixar catálogo <FaDownload aria-hidden="true" /></a>}
              </div>
            </article>
          ))}
          {marcasFiltradas.length === 0 && <div className="sem-resultados"><strong>Nenhuma marca encontrada</strong><p>Tente outro nome ou remova os filtros.</p><button onClick={clearFilters}>Mostrar todas as marcas</button></div>}
        </div>
      </section>
    </main>
  );
}
