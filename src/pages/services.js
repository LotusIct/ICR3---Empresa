import React from 'react';
import '../styles/services.css';

// Importe das imagens
import qualityVideo from '../assets/qualidadeicr3.mp4';
import treinamentoVideo from '../assets/treinamentoicr3.mp4';
import metrologyImage from '../assets/meterologia.jpeg';
import teamImage from '../assets/equipe.jpeg';
import buildingImage from '../assets/sede.jpeg';

export default function AboutPage() {
  return (
    <div className="aboutpage">

    {/* Hero Section */}
<section className="hero-section-services">
  <div className="overlay"></div>
  <div className="hero-content-services">
    <h1>Serviços</h1>
    <p>Oferecemos soluções completas e personalizadas em tecnologia e inovação científica para impulsionar o seu negócio.</p>
  </div>
</section>


    

      {/* Política de Qualidade */}
      <section className="about-section-services">
        <div className="about-container-services">
          <div className="about-text-services">
            <h2>Política de Qualidade</h2>
            <p>
             A ICR3 Científica tem como objetivo o aprimoramento constante da relação com o cliente, se mantendo sempre imparcial de julgamento e integridade no que diz respeito as atividades exercidas dentro do laboratório.
Nossa política da qualidade foca integralmente o bem estar no ambiente de trabalho, bem como o comprometimento do pessoal em todos os níveis com o sistema de gestão e a boa relação com fornecedores como meta para atingirmos o mais alto grau de satisfação do cliente.

            </p>
            <p>
             A Gerência do laboratório se compromete a prover recursos necessários para o atendimento com qualidade à norma
ABNT NBR ISO/IEC 17025, promovendo a melhoria contínua dentro da organização e de suas atividades contando sempre com um corpo técnico capacitado e qualificado compartilham de informações e melhoria dos processos a fim de obter a eficácia nos resultados.
            </p>
          </div>
          <video width="100%" height="auto"  autoPlay muted loop playsInline>
            <source src={qualityVideo} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </section>

      {/* Metrologia */}
      <section className="about-section-services">
        <div className="about-container-services reverse">
          <img src={metrologyImage} alt="Metrologia" />
          <div className="about-text-services">
            <h2>Metrologia</h2>
            <p>
              A ICR3 Científica possui laboratórios acreditados pela CGCRE/INMETRO, de acordo com os requisitos da norma ABNT NBR ISO/IEC 17025:2017. 
              Estamos inscritos sob o número de acreditação 537 e trabalhamos com as seguintes grandezas: temperatura, massa, massa específica e viscosidade.
            </p>
            <p>
              Nossos laboratórios são equipados com tecnologia avançada, garantindo precisão e confiança nos resultados dos serviços de calibração que prestamos aos nossos clientes.
            </p>
          </div>
        </div>
      </section>

     
      {/* Treinamentos */}
      <section className="about-section-services">
        <div className="about-container-services reverse">
        
          <div className="about-text-services">
            <h2>Treinamentos Técnicos</h2>
            <p>
             Na ICR3, a qualidade do suporte começa com a capacitação do nosso time. Nossos técnicos são treinados continuamente para oferecer um serviço altamente qualificado, tanto na calibração quanto na manutenção preventiva e corretiva dos equipamentos que representamos.
            </p>
            <p>
             Todos os treinamentos seguem os padrões e recomendações dos fabricantes, garantindo total conformidade com as especificações técnicas e exigências regulatórias. Nosso compromisso é assegurar que cada equipamento atenda ao seu desempenho ideal, com precisão, segurança e confiabilidade.
            </p>
            <p>
              Além da capacitação inicial, mantemos uma rotina de atualizações técnicas e reciclagens periódicas, acompanhando as evoluções tecnológicas do setor. Isso nos permite atuar com agilidade e excelência em campo, oferecendo soluções precisas e suporte técnico especializado em todas as etapas do ciclo de vida dos equipamentos.
            </p>
            <p>
              Na ICR3, investir em conhecimento é parte essencial do nosso compromisso com a qualidade.
            </p>
          </div>
           <video width="100%" height="auto"  autoPlay muted loop playsInline>
            <source src={treinamentoVideo} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </section>

    

    </div>
  );
}
