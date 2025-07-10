import React, { useState } from 'react';
import '../styles/about.css';

import buildingImage from '../assets/sede.jpeg';
import teamImage1 from '../assets/equipe2.jpeg';
import buildingImage1 from '../assets/sede2.jpeg';
import buildingImage2 from '../assets/sede3.jpeg';
import videoHome from '../assets/videohomeicr3.mp4';

export default function AboutPage() {

  const teamImages = [ teamImage1];
  const buildingImages = [buildingImage, buildingImage1, buildingImage2 ];

  const [teamIndex, setTeamIndex] = useState(0);
  const [buildingIndex, setBuildingIndex] = useState(0);

  const handleNextTeam = () => {
    setTeamIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
  };

  const handlePrevTeam = () => {
    setTeamIndex((prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length);
  };

  const handleNextBuilding = () => {
    setBuildingIndex((prevIndex) => (prevIndex + 1) % buildingImages.length);
  };

  const handlePrevBuilding = () => {
    setBuildingIndex((prevIndex) => (prevIndex - 1 + buildingImages.length) % buildingImages.length);
  };

  return (
    <div className="aboutpage">

      {/* Hero Section */}
      <section className="hero-section-about">
        <div className="overlay"></div>
        <div className="hero-content-about">
          <h1>Sobre Nós</h1>
          <p>Conheça a essência da ICR3 Científica: excelência, qualidade e tradição.</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="about-section-about">
        <div className="about-container-about">
          <div className="about-text-about">
            <h2>Nosso Propósito</h2>
            <p>
              Somos uma empresa comprometida com a excelência, que acredita no poder da confiança, da inovação e do trabalho bem feito. Atuamos com responsabilidade, profissionalismo e atenção aos detalhes em cada projeto que desenvolvemos, sempre com o objetivo de superar expectativas.
            </p>
            <p>
              Mais do que oferecer produtos ou serviços, buscamos construir parcerias duradouras. Investimos continuamente em tecnologia, capacitação e melhoria de processos para entregar resultados de alta qualidade e atender às necessidades específicas de cada cliente.
            </p>
            <p>
              Nosso time é formado por profissionais apaixonados pelo que fazem, movidos por desafios e guiados por valores como ética, transparência e respeito.
            </p>
            <p>
              Estamos prontos para ajudar você a alcançar seus objetivos com soluções personalizadas, eficientes e sustentáveis. Porque, para nós, cada cliente é único e cada história de sucesso, uma conquista compartilhada.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="about-section-about">
        <div className="about-container-about">
          <div className="about-text-about">
            <h2>Nossa Equipe</h2>
            <p>
              A ICR3 Científica é composta por uma equipe multidisciplinar altamente qualificada. Nosso corpo técnico inclui metrologistas, engenheiros químicos, químicos, e técnicos em diversas áreas, garantindo excelência nos serviços prestados e um atendimento personalizado a cada cliente.
            </p>
            <p>
              Investimos constantemente na capacitação dos nossos colaboradores, buscando sempre a melhoria contínua em todas as áreas da empresa, para garantir que nossos clientes recebam o melhor suporte técnico durante o processo de venda e pós-venda.
            </p>
          </div>
         <div className="image-slider">
  <img src={teamImages[teamIndex]} alt="Equipe ICR3" />
</div>


        </div>
      </section>

      {/* Apresentação da Sede */}
     <section className="about-section-about">
  <div className="about-container-about">
    <div className="about-text-about">
      <h2>Sede da ICR3 Científica</h2>
      <p>
        A sede da ICR3 reflete nosso compromisso com a qualidade, a organização e a excelência no atendimento. Localizada em um ponto estratégico, nossa estrutura foi planejada para oferecer um ambiente moderno, funcional e preparado para atender com eficiência as demandas dos nossos clientes e parceiros.
      </p>
      <p>
        Contamos com laboratórios equipados para serviços de calibração, áreas técnicas dedicadas à manutenção de equipamentos, sala de treinamento para a constante capacitação da equipe, além de espaços administrativos que garantem uma operação ágil e integrada.
      </p>
      <p>
        Nossa infraestrutura nos permite prestar suporte técnico especializado com rapidez e segurança, além de manter um alto padrão de qualidade em todos os serviços oferecidos. A sede também é um espaço de acolhimento, onde clientes são sempre bem-vindos e podem contar com uma equipe pronta para oferecer soluções personalizadas e eficazes.
      </p>
    </div>

    {/* Substituindo o slider por um vídeo */}
   <div className="video-container">
            <video controls width="100%" height="auto" autoPlay muted loop playsInline>
              <source src={videoHome} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
  </div>
</section>


    </div>
  );
}
