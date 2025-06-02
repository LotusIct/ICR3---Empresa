import React from 'react';
import '../styles/footer.css';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/Logo-removebg-preview.png';


export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-columns">
          {/* Coluna 1: Logo e endereço */}
          <div className="footer-section">
             <div className="logotransparent">
                      <img src={logo} alt="Logo ICR3 Científica" />
                    </div>
            <h4>Sua empresa precisa</h4>
            <p>CNPJ: 00.000.000/0000-00</p>
            <p>Rua Exemplo, 123<br />São Paulo - SP, 01234-567</p>
          </div>

          {/* Coluna 2: Informações legais */}
          <div className="footer-section footer-itens">
            <h4>Informações Legais</h4>
            <a href="#termos">Termos de Uso</a>
            <a href="#privacidade">Política de Privacidade</a>
          </div>

          {/* Coluna 3: Páginas */}
          <div className="footer-section footer-itens">
            <h4>Páginas</h4>
            <a href="#home">Home</a>
            <a href="#sobre-nos">Sobre Nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#marcas">Marcas</a>
            <a href="#fale-conosco">Fale Conosco</a>
          </div>

          {/* Coluna 4: Redes sociais */}
        

<div className="footer-section footer-itens">
  <h4>Siga a ICR3</h4>
  <div className="social-icons">
    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram size={24} />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
      <FaLinkedin size={24} />
    </a>
  </div>
</div>

        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} ICR3. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
