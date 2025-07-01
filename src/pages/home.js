import React, { useState, useEffect } from 'react';
import { FaBalanceScale, FaThermometerHalf, FaVial, FaOilCan } from 'react-icons/fa';
import '../styles/home.css';
import videoHome from '../assets/videohome.mp4'; 
import { useNavigate } from 'react-router-dom';
// import about from '../assets/'
// Importando as imagens dos logos
import logo1 from '../assets/logos/Logo aro .png';
import logo2 from '../assets/logos/Logo Bri .jpeg';
import logo3 from '../assets/logos/Logo cannon.png';
import logo4 from '../assets/logos/Logo huazheng.png';
import logo5 from '../assets/logos/Logo IQT - cfr.png';
import logo6 from '../assets/logos/Logo jofra .jpeg';
import logo7 from '../assets/logos/Logo Kem Kyoto.png';
import logo8 from '../assets/logos/Logo Tanaka .png';
import logo9 from '../assets/logos/Logo yateks .png';
import logo10 from '../assets/logos/Logo zahm .png';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const services = [
  { icon: <FaBalanceScale size={40} />, title: 'Balanças', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: <FaThermometerHalf size={40} />, title: 'Temperatura', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: <FaVial size={40} />, title: 'Massa Específica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: <FaOilCan size={40} />, title: 'Viscosidade Cinemática', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function HomePage() {
 const [currentIndex, setCurrentIndex] = useState(0);

const handleSaibaMaisClick = () => {
  navigate("/sobre");
};
  // Função para avançar para o próximo logo
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length); // Vai para o próximo logo, e reinicia quando chega no final
  };

  // Slide automático a cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);
    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
  }, []);

  // Cria a lista de logos que serão exibidos (5 logos por vez)
  const displayedLogos = [
    logos[(currentIndex + 0) % logos.length],
    logos[(currentIndex + 1) % logos.length],
    logos[(currentIndex + 2) % logos.length],
    logos[(currentIndex + 3) % logos.length],
    logos[(currentIndex + 4) % logos.length],
  ];
 const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate('/contato');
  };
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoHome} type="video/mp4" /> {/* Usando a importação do vídeo */}
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Bem-vindo à ICR3 Científica</h1>
          <p>Tecnologia e precisão a serviço da ciência.</p>
          <button className="btn-primary" onClick={handleSaibaMaisClick}>Saiba Mais</button>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="about-section">
        <div className="about-container">
         {/* <img src={about} alt="Sobre nós" className='logo-about'/> */}
          <div className="about-text">
            <h2>Sobre a ICR3</h2>
            <p>A ICR3 Científica é uma empresa especializada em soluções para laboratórios e indústrias que exigem qualidade, precisão e confiabilidade em seus processos analíticos e metrológicos.

Com mais de 30 anos de experiência no mercado, atuamos na venda de equipamentos científicos, metrológicos e materiais de referência certificados (MRC), além de oferecer suporte técnico qualificado, e treinamentos especializados.

Representamos marcas reconhecidas mundialmente, prezando sempre pela excelência e inovação em cada produto e serviço disponibilizado aos nossos clientes.

Nosso compromisso é entregar resultados que fortalecem a confiança em cada análise realizada, contribuindo para a segurança, desenvolvimento tecnológico e avanço científico no Brasil.</p>
            <button className="btn-primary" onClick={handleSaibaMaisClick}>Nossa História</button>
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
          <h2>Nossos Parceiros Comerciais</h2>
          <p>Empresas que confiam na ICR3.</p>
        </div>

        <div className="partners-carousel">
          <div className="carousel-container">
            {/* Exibe 5 logos por vez */}
            {displayedLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Parceiro ${idx + 1}`}
                className="partner-logo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contact-section">
        <h2>Entre em Contato</h2>
        <p>Fale com nossa equipe e saiba mais sobre os nossos serviços.</p>
        <button className="btn-secondary" onClick={handleContatoClick}>
      Fale Conosco
    </button>
      </section>

    </div>
  );
}
