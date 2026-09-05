import React, { useEffect, useState } from 'react';
import '../styles/metrology.css';
import { MdScale, MdThermostat, MdOpacity, MdOutlineInventory2 } from 'react-icons/md';
import massaImg from '../assets/massa-novo.jpg';
import temperaturaImg from '../assets/temperatura.JPG';
import viscosidadeImg from '../assets/viscosidade.JPG';
import volumeImg from '../assets/volume.JPG';

const metrologyItems = [
  { title: 'Massa', description: 'Calibração com rastreabilidade para medições de massa confiáveis.', icon: <MdScale aria-hidden="true" />, image: massaImg },
  { title: 'Temperatura e Umidade', description: 'Controle preciso de condições térmicas e ambientais.', icon: <MdThermostat aria-hidden="true" />, image: temperaturaImg },
  { title: 'Viscosidade', description: 'Medições confiáveis para controle de fluidos e processos.', icon: <MdOpacity aria-hidden="true" />, image: viscosidadeImg },
  { title: 'Volume e Massa Específica', description: 'Calibração especializada para análises volumétricas e de densidade.', icon: <MdOutlineInventory2 aria-hidden="true" />, image: volumeImg },
];

export default function MetrologyPage() {
  const [modalItem, setModalItem] = useState(null);
  const [zoom, setZoom] = useState(0.85);

  const openModal = (item) => {
    setZoom(0.85);
    setModalItem(item);
  };

  useEffect(() => {
    const handleEscape = (event) => event.key === 'Escape' && setModalItem(null);
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <main className="metrology-page">
      <section className="hero-section-metrology">
        <div className="hero-content-metrology">
          <span className="hero-kicker">Laboratório acreditado</span>
          <h1>Metrologia que transforma medição em confiança.</h1>
          <p>Calibrações realizadas com rigor técnico, rastreabilidade e padrões reconhecidos.</p>
        </div>
      </section>

      <section className="metrology-credentials" aria-label="Credenciais de metrologia">
        <div><strong>537</strong><span>Número de acreditação</span></div>
        <div><strong>ISO/IEC 17025</strong><span>Conformidade laboratorial</span></div>
        <div><strong>4</strong><span>grupos de grandezas</span></div>
      </section>

      <section className="metrology-intro">
        <div>
          <span className="section-kicker">Qualidade e confiabilidade</span>
          <h2>Resultados rastreáveis para decisões seguras</h2>
        </div>
        <div className="metrology-intro-copy">
          <p>Nossos laboratórios realizam calibrações em diferentes grandezas, seguindo requisitos técnicos reconhecidos. Cada serviço é conduzido para assegurar precisão, rastreabilidade e confiança nos resultados.</p>
          <p>A acreditação nº 537 abrange serviços em massa, temperatura, umidade, viscosidade, volume e massa específica, apoiados por uma equipe técnica qualificada.</p>
        </div>
      </section>

      <section className="metrology-services" aria-labelledby="grandezas-title">
        <div className="metrology-services-heading">
          <span className="section-kicker">Escopo de atuação</span>
          <h2 id="grandezas-title">Grandezas atendidas</h2>
          <p>Selecione uma grandeza para consultar seu escopo de acreditação.</p>
        </div>
        <div className="metrology-grid">
          {metrologyItems.map((item, index) => (
            <article className="metrology-card" key={item.title}>
              <span className="metrology-card-number">0{index + 1}</span>
              <div className="metrology-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={() => openModal(item)}>Ver escopo <span aria-hidden="true">→</span></button>
            </article>
          ))}
        </div>
      </section>

      <section className="metrology-standard">
        <div><span className="section-kicker">Compromisso técnico</span><h2>ABNT NBR ISO/IEC 17025:2017</h2></div>
        <p>A acreditação demonstra competência técnica e assegura que os processos laboratoriais atendam a critérios internacionais de qualidade e confiabilidade.</p>
      </section>

      {modalItem && (
        <div className="metro-modal-overlay" onClick={() => setModalItem(null)} role="presentation">
          <div className="metro-modal-content" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Escopo de acreditação: ${modalItem.title}`}>
            <div className="metro-modal-header">
              <div><span>Escopo de acreditação</span><h2>{modalItem.title}</h2></div>
              <div className="metro-modal-actions" aria-label="Controles de zoom">
                <button onClick={() => setZoom((value) => Math.max(0.65, value - 0.15))} aria-label="Diminuir zoom">−</button>
                <button className="zoom-value" onClick={() => setZoom(0.85)} aria-label="Restaurar zoom">{Math.round(zoom * 100)}%</button>
                <button onClick={() => setZoom((value) => Math.min(2.5, value + 0.15))} aria-label="Aumentar zoom">+</button>
              </div>
              <button className="metro-modal-close" onClick={() => setModalItem(null)} aria-label="Fechar">×</button>
            </div>
            <div className="metro-image-viewport">
              <img src={modalItem.image} alt={`Escopo de acreditação para ${modalItem.title}`} decoding="async" style={{ width: `${zoom * 100}%` }} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
