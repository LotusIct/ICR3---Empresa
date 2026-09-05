import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo.jpeg';
import marcas from '../data/marcas.json';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes, FaChevronDown, FaChevronRight, FaArrowLeft } from 'react-icons/fa';

const priority = ['tanaka', 'cannon', 'cfr', 'kem'];
const sortBrands = (brands) => [...brands].sort((a, b) => {
  const aIndex = priority.indexOf(a.id.toLowerCase());
  const bIndex = priority.indexOf(b.id.toLowerCase());
  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [desktopBrandsOpen, setDesktopBrandsOpen] = useState(false);
  const [mobileView, setMobileView] = useState('main');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
  const lockedScrollRef = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 920);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    lockedScrollRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, lockedScrollRef.current);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setDesktopBrandsOpen(false);
    setMobileView('main');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  const closeAll = () => {
    setMenuOpen(false);
    setDesktopBrandsOpen(false);
    setMobileView('main');
  };
  const active = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <header className="navbar">
        <Link className="navbar-logo" to="/" onClick={closeAll}><img src={logo} alt="ICR3 Científica" /></Link>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} aria-label="Navegação principal">
          {isMobile && <div className={`mobile-menu-heading ${mobileView === 'brands' ? 'brands-heading' : ''}`}>
            {mobileView === 'brands' && <button className="mobile-back" onClick={() => setMobileView('main')} aria-label="Voltar ao menu"><FaArrowLeft /></button>}
            <div><span>ICR3 Científica</span><strong>{mobileView === 'brands' ? 'Marcas' : 'Menu'}</strong></div>
            <button className="mobile-close" onClick={closeAll} aria-label="Fechar menu"><FaTimes /></button>
          </div>}
          {(!isMobile || mobileView === 'main') && <ul className="nav-links">
            <li><Link to="/" className={active('/')} onClick={closeAll}>Home</Link></li>
            <li><Link to="/sobre" className={active('/sobre')} onClick={closeAll}>Sobre Nós</Link></li>
            <li><Link to="/serviços" className={active('/serviços')} onClick={closeAll}>Serviços</Link></li>
            {isMobile ? (
              <li><button className="mobile-brands-entry" onClick={() => setMobileView('brands')}>Marcas <FaChevronRight aria-hidden="true" /></button></li>
            ) : (
              <li className="dropdown" onMouseEnter={() => setDesktopBrandsOpen(true)} onMouseLeave={() => setDesktopBrandsOpen(false)}>
                <button className="desktop-brands-toggle" onClick={() => setDesktopBrandsOpen(!desktopBrandsOpen)} aria-expanded={desktopBrandsOpen}>Marcas <FaChevronDown /></button>
                {desktopBrandsOpen && <div className="megamenu"><div className="megamenu-top"><span>Marcas parceiras</span><Link to="/marcas" onClick={closeAll}>Ver todas →</Link></div><div className="megamenu-grid">{marcas.map((category) => <div className="megamenu-column" key={category.categoria}><h4>{category.categoria}</h4><ul>{sortBrands(category.marcas).map((brand) => <li key={brand.id}><Link to={`/marcas/${brand.id}`} onClick={closeAll}>{brand.nome}</Link></li>)}</ul></div>)}</div></div>}
              </li>
            )}
            <li><Link to="/metrologia" className={active('/metrologia')} onClick={closeAll}>Metrologia</Link></li>
            <li><Link to="/fale-conosco" className={`${active('/fale-conosco')} nav-cta`} onClick={closeAll}><span>Fale Conosco</span><span className="nav-cta-arrow" aria-hidden="true">↗</span></Link></li>
          </ul>}

          {isMobile && mobileView === 'brands' && <div className="mobile-brands-view">
            <Link className="mobile-all-brands" to="/marcas" onClick={closeAll}>Ver todas as marcas <span aria-hidden="true">↗</span></Link>
            {marcas.map((category) => <section key={category.categoria} className="mobile-brand-category">
              <h3>{category.categoria}</h3>
              <ul>{sortBrands(category.marcas).map((brand) => <li key={brand.id}><Link to={`/marcas/${brand.id}`} onClick={closeAll}>{brand.nome}<FaChevronRight aria-hidden="true" /></Link></li>)}</ul>
            </section>)}
          </div>}

          {isMobile && mobileView === 'main' && <div className="mobile-menu-footer"><p>Fale com a ICR3</p><div className="mobile-social-bar"><a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /><span>WhatsApp</span></a><a href="https://www.instagram.com/icr3cientifica/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /><span>Instagram</span></a><a href="https://br.linkedin.com/company/icr3-cientifica" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></div></div>}
        </nav>

        <div className="navbar-actions">
          {!isMobile && <div className="social-bar"><a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a><a href="https://www.instagram.com/icr3cientifica/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href="https://br.linkedin.com/company/icr3-cientifica" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div>}
          {isMobile && <button className="hamburger" onClick={() => { setMobileView('main'); setMenuOpen(true); }} aria-label="Abrir menu" aria-expanded={isMenuOpen}><FaBars /></button>}
        </div>
      </header>
      {isMobile && <button className={`menu-backdrop ${isMenuOpen ? 'visible' : ''}`} onClick={closeAll} aria-label="Fechar menu" tabIndex={isMenuOpen ? 0 : -1} />}
    </>
  );
}
