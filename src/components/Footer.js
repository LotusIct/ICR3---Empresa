import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
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
  
  <p className="footer-tagline">Tecnologia e precisão a serviço da ciência.</p>
  <p>CNPJ: 68.715.226/0001-02</p>
  
  <p>
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Rua+Flack,+163,+Rio+de+Janeiro+-+RJ,+20960-150" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="footer-address"
    >
      Rua Flack, 163<br />Rio de Janeiro - RJ, 20960-150
    </a>
  </p>
  
  <a href="tel:+552131727755" className="footer-phone">
    <FaPhoneAlt style={{ marginRight: '8px' }} />
    (21) 3172-7755
  </a>
  
  <a href="mailto:comercial@icr3.com.br" className="footer-contact">
    <FaEnvelope style={{ marginRight: '8px' }} />
    comercial@icr3.com.br
  </a>
</div>


          {/* Coluna 2: Informações legais */}
          <div className="footer-section footer-itens">
            <h4>Informações Legais</h4>
            <Link to="/termos">Termos de Uso</Link>
            <Link to="/privacidade">Política de Privacidade</Link>
          </div>

          {/* Coluna 3: Páginas */}
          <div className="footer-section footer-itens">
            <h4>Páginas</h4>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/serviços">Serviços</Link>
            <Link to="/marcas">Marcas</Link>
            <Link to="/fale-conosco">Fale Conosco</Link>
          </div>

          {/* Coluna 4: Redes sociais */}
        

<div className="footer-section footer-itens">
  <h4>Siga a ICR3</h4>
  <div className="social-icons">
    <a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <FaWhatsapp size={24}  />
      </a>
    <a href="https://www.instagram.com/icr3cientifica/" target="_blank" rel="noreferrer" aria-label="Instagram">
      <FaInstagram size={24} />
    </a>
    <a href="https://br.linkedin.com/company/icr3-cientifica" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
