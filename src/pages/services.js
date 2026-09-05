import React from 'react';
import '../styles/services.css';
import { useNavigate } from 'react-router-dom';
import qualityImage from '../assets/politica qualidade.jpeg';
import trainingImage from '../assets/treinamento.jpg';
import metrologyImage from '../assets/metrologia.jpg';

const serviceLinks = [
  { number: '01', title: 'Política de Qualidade', text: 'Processos orientados pela imparcialidade, integridade e melhoria contínua.', anchor: '#qualidade' },
  { number: '02', title: 'Metrologia', text: 'Calibrações acreditadas para resultados precisos e confiáveis.', anchor: '#metrologia' },
  { number: '03', title: 'Treinamentos Técnicos', text: 'Conhecimento especializado para o melhor desempenho dos equipamentos.', anchor: '#treinamentos' },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <main className="services-page">
      <section className="hero-section-services">
        <div className="hero-content-services">
          <span className="hero-kicker">Soluções ICR3</span>
          <h1>Serviços que sustentam resultados confiáveis.</h1>
          <p>Conhecimento técnico, precisão e suporte para laboratórios e indústrias.</p>
        </div>
      </section>

      <section className="services-overview" aria-labelledby="services-title">
        <div className="services-overview-heading">
          <span className="section-kicker">O que fazemos</span>
          <h2 id="services-title">Suporte em todas as etapas</h2>
        </div>
        <div className="services-overview-grid">
          {serviceLinks.map((service) => (
            <a href={service.anchor} key={service.anchor} className="service-summary-card">
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <strong>Conheça o serviço →</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="service-detail" id="qualidade">
        <div className="service-detail-grid">
          <div className="service-copy">
            <span className="service-number">01 / Qualidade</span>
            <h2>Compromisso com a melhoria contínua</h2>
            <p>Nossa política de qualidade fortalece uma relação transparente com clientes e fornecedores, mantendo imparcialidade e integridade nas atividades realizadas pelo laboratório.</p>
            <p>A gestão assegura os recursos, a capacitação e os processos necessários ao atendimento da norma ABNT NBR ISO/IEC 17025.</p>
          </div>
          <figure className="service-image"><img src={qualityImage} alt="Política de qualidade da ICR3" loading="lazy" decoding="async" /></figure>
        </div>
      </section>

      <section className="service-detail service-detail-dark" id="metrologia">
        <div className="service-detail-grid reverse-service">
          <div className="service-copy">
            <span className="service-number">02 / Metrologia</span>
            <h2>Calibração com precisão acreditada</h2>
            <p>Os laboratórios da ICR3 são acreditados pela CGCRE/INMETRO segundo a ABNT NBR ISO/IEC 17025:2017, sob o número 537.</p>
            <p>Atuamos nas grandezas temperatura, massa, massa específica e viscosidade, com tecnologia avançada e rastreabilidade dos resultados.</p>
            <button className="btn-primary" onClick={() => navigate('/metrologia')}>Conheça a metrologia</button>
          </div>
          <figure className="service-image"><img src={metrologyImage} alt="Laboratório de metrologia da ICR3" loading="lazy" decoding="async" /></figure>
        </div>
      </section>

      <section className="service-detail" id="treinamentos">
        <div className="service-detail-grid">
          <div className="service-copy">
            <span className="service-number">03 / Treinamentos</span>
            <h2>Conhecimento que amplia o desempenho</h2>
            <p>Nossos profissionais recebem capacitação contínua para prestar serviços qualificados de calibração, manutenção preventiva e corretiva.</p>
            <p>Os treinamentos seguem as recomendações dos fabricantes e acompanham as evoluções do setor, promovendo segurança, agilidade e maior vida útil dos equipamentos.</p>
          </div>
          <figure className="service-image"><img src={trainingImage} alt="Treinamento técnico da equipe ICR3" loading="lazy" decoding="async" /></figure>
        </div>
      </section>

      <section className="services-cta">
        <div><span className="section-kicker">Atendimento especializado</span><h2>Qual serviço sua operação precisa?</h2><p>Nossa equipe técnica ajuda você a encontrar o atendimento adequado.</p></div>
        <button className="btn-secondary" onClick={() => navigate('/fale-conosco')}>Fale com um especialista</button>
      </section>
    </main>
  );
}
