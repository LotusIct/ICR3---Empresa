import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo.jpeg';
import marcas from '../data/marcas.json';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);  // Estado para abrir/fechar o menu no mobile
  const location = useLocation();

  const getActive = (path) => (location.pathname === path ? 'active' : '');
  const handleLinkClick = () => {
      setMenuOpen(false);
      setDropdownOpen(false);
    };
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo ICR3 Científica" />
        </div>
       <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        
      <ul className="nav-links">
    <li>
      <Link to="/" className={getActive('/')} onClick={handleLinkClick}>Home</Link>
    </li>
    <li>
      <Link to="/sobre" className={getActive('/sobre')} onClick={handleLinkClick}>Sobre Nós</Link>
    </li>
    <li>
      <Link to="/serviços" className={getActive('/serviços')} onClick={handleLinkClick}>Serviços</Link>
    </li>
 <li className="mobile-dropdown">
  <span onClick={() => setDropdownOpen(!isDropdownOpen)} className="nav-link">
    Marcas
  </span>
  {isDropdownOpen && (
    <ul className="mobile-category-list">
      {marcas.map((categoria, index) => (
        <li key={index}>
          <details>
            <summary>{categoria.categoria}</summary>
            <ul>
              {categoria.marcas.map((marca) => (
                <li key={marca.id}>
                  <Link to={`/marcas/${marca.id}`} onClick={handleLinkClick}>
                    {marca.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  )}
</li>

    <li>
      <Link to="/fale-conosco" className={getActive('/fale-conosco')} onClick={handleLinkClick}>Fale Conosco</Link>
    </li>
  </ul>
      </nav>
      </div>

      <div className="social-bar">
        <a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={24}  />
              </a>
        <a href="https://www.instagram.com/sua_empresa" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/sua_empresa" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      {/* Botão de Menu Hamburguer */}
      <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Navbar;
