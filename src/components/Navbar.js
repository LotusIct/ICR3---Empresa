import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo.jpeg';
import marcas from '../data/marcas.json';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 868);
  const [isDesktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const ordemPrioridade = ['tanaka', 'cannon', 'crf', 'kem'];

  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 868);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setDesktopDropdownOpen(false);
  };

  const ordenarMarcas = (marcas) => {
    return [...marcas].sort((a, b) => {
      const indexA = ordemPrioridade.indexOf(a.id.toLowerCase());
      const indexB = ordemPrioridade.indexOf(b.id.toLowerCase());

      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  };

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
              <>
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
                            {ordenarMarcas(categoria.marcas).map((marca) => (
                              <li key={marca.id}>
                                <Link
                                  className="categoria-produto-link"
                                  to={`/marcas/${marca.id}`}
                                  onClick={handleLinkClick}
                                >
                                  {marca.nome.toUpperCase()}
                                </Link>
                              </li>
                            ))}
                            {categoria.categoria.toLowerCase().includes('fabricação') && (
                              <li>
                                <Link
                                  to="/marcas"
                                  onClick={handleLinkClick}
                                  className="todas-as-marcas-link"
                                >
                                  Todas as Marcas
                                </Link>
                              </li>
                            )}
                          </ul>
                        </details>
                      ))}
                    </div>
                  )}
                </li>
              </>
            ) : (
              <li
                className="dropdown"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
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
                          {ordenarMarcas(categoria.marcas).map((marca) => (
                            <li key={marca.id}>
                              <Link to={`/marcas/${marca.id}`} onClick={handleLinkClick}>
                                {marca.nome.toUpperCase()}
                              </Link>
                            </li>
                          ))}
                          {categoria.categoria.toLowerCase().includes('fabricação') && (
                            <li>
                              <Link
                                to="/marcas"
                                onClick={handleLinkClick}
                                className="todas-as-marcas-link"
                              >
                                Todas as Marcas
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            )}
 <li>
              <Link
                to="/metrologia"
                className={getActive('/metrologia')}
                onClick={handleLinkClick}
              >
                Metrologia
              </Link>
            </li>
            <li>
              <Link
                to="/fale-conosco"
                className={getActive('/fale-conosco')}
                onClick={handleLinkClick}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>

          {/* Redes sociais somente no menu mobile */}
          {isMobile && (
            <div className="mobile-social-bar">
              <a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer">
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://www.instagram.com/sua_empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/sua_empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          )}
        </nav>
      </div>

      {/* Ícones fixos no topo (desktop apenas) */}
      {!isMobile && (
        <div className="social-bar">
          <a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.instagram.com/sua_empresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/sua_empresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      )}

      {isMobile && !isMenuOpen && (
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars size={28} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
