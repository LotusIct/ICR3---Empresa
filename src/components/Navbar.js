import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo.jpeg';
import marcas from '../data/marcas.json';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

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
    <li
      className="dropdown"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className={`nav-link ${getActive('/marcas')}`}>Marcas</span>
      {isDropdownOpen && (
        <div className="megamenu">
          {marcas.map((categoria, idx) => (
            <div className="megamenu-column" key={idx}>
              <h4>{categoria.categoria}</h4>
              <ul>
                {categoria.marcas.map((marca) => (
                  <li key={marca.id}>
                    <Link to={`/marcas/${marca.id}`} onClick={handleLinkClick}>
                      {marca.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
    <li>
      <Link to="/fale-conosco" className={getActive('/fale-conosco')} onClick={handleLinkClick}>Fale Conosco</Link>
    </li>
  </ul>
      </nav>
      </div>

      <div className="social-bar">
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
