import React from 'react';
import '../styles/footer.css';
import { FaInstagram, FaLinkedin, FaYoutube,FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
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
            <a href="/termos">Termos de Uso</a>
            <a href="/privacidade">Política de Privacidade</a>
          </div>

          {/* Coluna 3: Páginas */}
          <div className="footer-section footer-itens">
            <h4>Páginas</h4>
            <a href="/home">Home</a>
            <a href="/sobre">Sobre Nós</a>
            <a href="/serviços">Serviços</a>
            <a href="/marcas/:id">Marcas</a>
            <a href="/fale-conosco">Fale Conosco</a>
          </div>

          {/* Coluna 4: Redes sociais */}
        

<div className="footer-section footer-itens">
  <h4>Siga a ICR3</h4>
  <div className="social-icons">
    <a href="https://wa.me/5521998297321" target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <FaWhatsapp size={24}  />
      </a>
    <a href="https://www.instagram.com/icr3cientifica/" target="_blank" rel="noreferrer">
      <FaInstagram size={24} />
    </a>
    <a href="https://www.linkedin.com/company/icr3-cientifica" target="_blank" rel="noreferrer">
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
