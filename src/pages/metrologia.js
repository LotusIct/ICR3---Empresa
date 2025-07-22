import React from 'react';
import '../styles/metrology.css';
// Ícones Material Design, mais modernos
import { MdScale, MdThermostat, MdOpacity, MdOutlineInventory2, MdFitnessCenter } from 'react-icons/md';

export default function MetrologyPage() {
  return (
    <div className="metrology-page">

      {/* Hero Section */}
      <section className="hero-section-metrology">
        <div className="overlay"></div>
        <div className="hero-content-metrology">
          <h1>Metrologia</h1>
          <p>Nossos laboratórios acreditados oferecem precisão e confiabilidade em medições das principais grandezas físicas, de acordo com os escopos do Inmetro.</p>
        </div>
      </section>

      {/* Massa / Temperatura */}
      <section className="metrology-section">
        <div className="metrology-container">
          <div className="metrology-icon"><MdScale size={60} color="#4D504E" /></div>
          <div className="metrology-text">
            <h2>Massa</h2>
            <p>Calibração conforme ISO/IEC 17025, utilizando blocos rastreáveis ao Inmetro com incertezas certificadas.</p>
            <p className="rtac">RTAC: Padrões rastreáveis a massa primária, com certificados contendo incerteza e validade.</p>
          </div>
        </div>
        <div className="metrology-container reverse">
          <div className="metrology-icon"><MdThermostat size={60} color="#4D504E" /></div>
          <div className="metrology-text">
            <h2>Temperatura e Umidade</h2>
            <p>Calibração de termômetros e RTDs, em câmara controlada, com monitoramento de temperatura, umidade e pressão.</p>
            <p className="rtac">RTAC: Ensaios rastreáveis, com relatório documentando ambiente e incerteza. Através de métodos padronizados com incerteza específica, conforme acreditação CGCRE.</p>
          </div>
        </div>
      </section>

      <section className="metrology-section">
        <div className="metrology-container reverse">
           <div className="metrology-icon"><MdOpacity size={60} color="#4D504E" /></div>
          <div className="metrology-text">
            <h2>Viscosidade</h2>
            <p>
              Calibração de viscosímetro capilar (0,003 a 30 mm²/s, incerteza 0,3–0,7 %) e tipo copo (20–100 s), rastreado pelo Inmetro.
            </p>
            <p className="rtac">RTAC: Escopo RBC inclui métodos comparativos com fluido padrão certificado.</p>
          </div>
         
        </div>
        <div className="metrology-container">
           <div className="metrology-icon"><MdOutlineInventory2 size={60} color="#4D504E" /></div>
          <div className="metrology-text">
            <h2>Volume e Massa Específica</h2>
            <p>Calibração de vidrarias (pipetas, buretas, provetas) por comparação com padrões rastreáveis ao Inmetro.</p>
            <p className="rtac">RTAC: Certificado com valores medidos, incerteza e ambiente de calibração.</p>
          </div>
          
        </div>
      </section>

    </div>
  );
}
