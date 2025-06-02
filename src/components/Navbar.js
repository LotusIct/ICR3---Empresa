import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Logo.jpeg';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleSetActive = (section) => {
    setActive(section);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo ICR3 Científica" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={() => handleSetActive('home')}
                className={active === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={() => handleSetActive('sobre')}
                className={active === 'sobre' ? 'active' : ''}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={() => handleSetActive('servicos')}
                className={active === 'servicos' ? 'active' : ''}
              >
                Serviços
              </a>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="#marcas"
                onClick={() => handleSetActive('marcas')}
                className={active === 'marcas' ? 'active' : ''}
              >
                Marcas
              </a>
              {isDropdownOpen && (
    <ul className="dropdown-menu" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
      <li><a href="#marca1">Marca 1</a></li>
      <li><a href="#marca2">Marca 2</a></li>
      <li><a href="#marca3">Marca 3</a></li>
    </ul>
  )}
            </li>
            <li>
              <a
                href="#contato"
                onClick={() => handleSetActive('contato')}
                className={active === 'contato' ? 'active' : ''}
              >
                Fale Conosco
              </a>
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
    </header>
  );
};

export default Navbar;
