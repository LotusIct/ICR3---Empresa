import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo.jpeg';
import marcas from '../data/marcas.json';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Mobile marcas dropdown
  const [isMenuOpen, setMenuOpen] = useState(false); // Mobile menu geral
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDesktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // Desktop megamenu marcas

  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha menu mobile e dropdown mobile
  const handleLinkClick = () => {
  setMenuOpen(false);
  setDropdownOpen(false);
  setDesktopDropdownOpen(false);
};


  // Fecha megamenu desktop clicando fora
  useEffect(() => {
    function handleClickOutside(event) {
      const dropdown = document.getElementById('desktop-dropdown-menu');
      if (dropdown && !dropdown.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    }
    if (isDesktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktopDropdownOpen]);

  const getActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo ICR3 Científica" />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {isMobile && (
            <div className="close-button" onClick={() => setMenuOpen(false)}>
              <FaTimes size={28} />
            </div>
          )}

          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={`${getActive('/')} ${isMobile ? 'highlight-home' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/sobre" className={getActive('/sobre')} onClick={handleLinkClick}>
                Sobre Nós
              </Link>
            </li>

            <li>
              <Link to="/serviços" className={getActive('/serviços')} onClick={handleLinkClick}>
                Serviços
              </Link>
            </li>

            {isMobile ? (
              <li className="mobile-dropdown">
                <span onClick={() => setDropdownOpen(!isDropdownOpen)} className="nav-link">
                  Marcas
                </span>
                {isDropdownOpen && (
                  <div className="mobile-category-scroll">
                    {marcas.map((categoria, index) => (
                      <details key={index} className="mobile-category-item">
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
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li
                className="dropdown"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
              >
                <span
                  className="nav-link"
                  onClick={() => setDesktopDropdownOpen(!isDesktopDropdownOpen)}
                  style={{ cursor: 'pointer' }}
                >
                  Marcas
                </span>
                {isDesktopDropdownOpen && (
                  <div id="desktop-dropdown-menu" className="megamenu">
                    {marcas.map((categoria, index) => (
                      <div key={index} className="megamenu-column">
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
            )}

            <li>
              <Link to="/fale-conosco" className={getActive('/fale-conosco')} onClick={handleLinkClick}>
                Fale Conosco
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="social-bar">
        <a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://www.instagram.com/sua_empresa" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/sua_empresa" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      {isMobile && !isMenuOpen && (
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars size={28} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
