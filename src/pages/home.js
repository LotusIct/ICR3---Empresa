import React from 'react';
import '../styles/home.css';
import videoHome from '../assets/icr3-optimized.mp4';
import { useNavigate } from 'react-router-dom';

import logo1 from '../assets/logos/Logo aro .png';
import logo4 from '../assets/logos/Logo huazheng.png';
import logo5 from '../assets/logos/Logo IQT - cfr.png';
import logo7 from '../assets/logos/Logo Kem Kyoto.png';
import logo8 from '../assets/logos/Logo Tanaka .png';
import logo9 from '../assets/logos/Logo yateks .png';
import logo10 from '../assets/logos/Logo zahm .png';
import logo11 from '../assets/logos/hanon.jpeg';
import logo12 from '../assets/logos/sineo.jpeg';
import logo13 from '../assets/logos/roget.jpeg';
const logos = [
  logo1,
  '/logos/cannon-logo.jpg',
  logo4,
  logo5,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  '/logos/scion-logo.jpg',
  '/logos/ckic-logo.jpg'
];

export default function HomePage() {
  const navigate = useNavigate();

const handleSaibaMaisClick = () => {
  navigate("/sobre");
};

  const handleContatoClick = () => {
    navigate('/fale-conosco');
  };
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero-section">
       <video
  src={videoHome}
  className="background-video"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  Seu navegador não suporta o elemento de vídeo.
</video>

        <div className="overlay"></div>
        <div className="hero-content">
          <span className="hero-kicker">Ciência • Metrologia • Tecnologia</span>
          <h1>Bem-vindo à ICR3 Científica</h1>
          <p>Tecnologia, precisão e suporte especializado a serviço da ciência.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/marcas')}>Conheça nossas marcas</button>
            <button className="btn-ghost" onClick={handleSaibaMaisClick}>Nossa história</button>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="about-section">
        <div className="about-container">
         {/* <img src={about} alt="Sobre nós" className='logo-about'/> */}
          <div className="about-text">
            <span className="section-kicker">Quem somos</span>
            <h2>Sobre a ICR3</h2>
            <p>A ICR3 Científica entrega soluções para laboratórios e indústrias que exigem precisão, confiabilidade e suporte especializado.</p>
            <p>Há mais de 30 anos, conectamos equipamentos científicos, serviços metrológicos e materiais de referência certificados às necessidades de cada cliente.</p>
            <button className="btn-primary" onClick={handleSaibaMaisClick}>Nossa História</button>
          </div>
          <div className="about-highlights" aria-label="Diferenciais da ICR3">
            <div><strong>30+</strong><span>anos de experiência</span></div>
            <div><strong>Brasil</strong><span>atendimento nacional</span></div>
            <div><strong>360°</strong><span>venda, suporte e pós-venda</span></div>
          </div>
        </div>
      </section>

      {/* Serviços */}
     {/*  <section className="services-section">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Oferecemos soluções especializadas para o seu negócio.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section> */}
{/* Parceiros */}
<section className="partners-section">
  <div className="section-header">
    <span className="section-kicker">Excelência internacional</span>
    <h2>Nossos Parceiros Comerciais</h2>
    <p>Marcas reconhecidas mundialmente, selecionadas com rigor técnico.</p>
  </div>

  <div className="marquee-container">
    <div className="marquee-track">
      {[...logos, ...logos].map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`Parceiro ${idx + 1}`}
          className="partner-logo"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  </div>
</section>



      {/* Contato */}
      <section className="contact-section">
        <div><span className="section-kicker">Atendimento especializado</span><h2>Vamos encontrar a solução certa?</h2>
        <p>Conte com nossa equipe técnica para orientar sua próxima escolha.</p></div>
        <button className="btn-secondary" onClick={handleContatoClick}>Fale com um especialista</button>
      </section>

    </div>
  );
}
