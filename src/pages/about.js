import React from 'react';
import '../styles/about.css';
import teamImage from '../assets/equipes (2).jpg';
import headquartersImage from '../assets/sede.jpeg';

export default function AboutPage() {
  return (
    <main className="aboutpage">
      <section className="hero-section-about">
        <div className="hero-content-about">
          <span className="hero-kicker">Conheça a ICR3</span>
          <h1>Precisão que constrói confiança.</h1>
          <p>Experiência, conhecimento técnico e compromisso com cada resultado.</p>
        </div>
      </section>

      <section className="about-section-about about-intro">
        <div className="about-container-about">
          <div className="about-text-about">
            <span className="section-kicker">Sobre a ICR3</span>
            <h2>Ciência e tecnologia com suporte especializado</h2>
            <p>A ICR3 Científica oferece soluções para laboratórios e indústrias que dependem de análises precisas e processos confiáveis.</p>
            <p>Unimos equipamentos científicos, serviços metrológicos e materiais de referência certificados a um atendimento próximo, da escolha da solução ao pós-venda.</p>
            <div className="about-numbers" aria-label="Destaques da ICR3">
              <div><strong>30+</strong><span>anos de experiência</span></div>
              <div><strong>Brasil</strong><span>atendimento nacional</span></div>
              <div><strong>360°</strong><span>venda, suporte e pós-venda</span></div>
            </div>
          </div>
          <figure className="about-feature-image">
            <img src={headquartersImage} alt="Sede da ICR3 Científica" loading="eager" decoding="async" />
            <figcaption>Estrutura preparada para atender clientes e parceiros.</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-values" aria-labelledby="valores-title">
        <div className="values-heading">
          <span className="section-kicker">Como trabalhamos</span>
          <h2 id="valores-title">Valores presentes em cada entrega</h2>
        </div>
        <div className="values-grid">
          <article><span>01</span><h3>Precisão</h3><p>Rigor técnico para apoiar decisões e resultados confiáveis.</p></article>
          <article><span>02</span><h3>Parceria</h3><p>Atendimento próximo e soluções adequadas a cada necessidade.</p></article>
          <article><span>03</span><h3>Evolução</h3><p>Capacitação contínua, tecnologia e melhoria de processos.</p></article>
        </div>
      </section>

      <section className="about-section-about equipe">
        <div className="about-container-about reverse">
          <div className="about-text-about">
            <span className="section-kicker">Nossa equipe</span>
            <h2>Conhecimento técnico que acompanha você</h2>
            <p>Nossa equipe multidisciplinar reúne metrologistas, engenheiros químicos, químicos e técnicos especializados para oferecer orientação clara e atendimento personalizado.</p>
            <p>Investimos continuamente na capacitação dos profissionais para garantir suporte de qualidade durante a venda e no pós-venda.</p>
          </div>
          <div className="image-slider"><img src={teamImage} alt="Equipe da ICR3 Científica" loading="lazy" decoding="async" /></div>
        </div>
      </section>

      <section className="about-headquarters">
        <div><span className="section-kicker">Nossa sede</span><h2>Estrutura para atender com agilidade e segurança</h2></div>
        <p>Contamos com laboratórios para serviços de calibração, áreas técnicas dedicadas à manutenção de equipamentos, sala de treinamento e espaços administrativos integrados. Uma estrutura pensada para manter a qualidade em todas as etapas do atendimento.</p>
      </section>
    </main>
  );
}
