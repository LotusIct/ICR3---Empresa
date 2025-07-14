import React from 'react';
import '../styles/metrology.css';

// Importando os ícones
import { FaBalanceScale, FaThermometerHalf, FaTint, FaBoxOpen, FaWeightHanging } from 'react-icons/fa';

export default function MetrologyPage() {
  return (
    <div className="metrology-page">

      {/* Hero Section */}
      <section className="hero-section-metrology">
        <div className="overlay"></div>
        <div className="hero-content-metrology">
          <h1>Metrologia</h1>
          <p>
            Nossos laboratórios acreditados oferecem precisão e confiabilidade em medições das principais grandezas físicas.
          </p>
        </div>
      </section>

      {/* Massa / Temperatura */}
      <section className="metrology-section">
        <div className="metrology-container">
          <div className="metrology-icon">
            <FaBalanceScale size={60} color="#4D504E" />
          </div>
          <div className="metrology-text">
            <h2>Massa</h2>
            <p>
              Realizamos calibrações precisas em balanças e sistemas de medição de massa, garantindo conformidade com as normas internacionais.
            </p>
          </div>
        </div>
        <div className="metrology-container reverse">
          <div className="metrology-icon">
            <FaThermometerHalf size={60} color="#4D504E" />
          </div>
          <div className="metrology-text">
            <h2>Temperatura</h2>
            <p>
              Nossa calibração de termômetros e outros dispositivos de medição de temperatura assegura a máxima precisão nas condições controladas.
            </p>
          </div>
        </div>
      </section>

      {/* Umidade / Viscosidade */}
      <section className="metrology-section">
        <div className="metrology-container">
          <div className="metrology-icon">
            <FaTint size={60} color="#4D504E" />
          </div>
          <div className="metrology-text">
            <h2>Umidade</h2>
            <p>
              Medições de umidade em ambientes controlados e sistemas específicos são realizadas com equipamentos de alta precisão.
            </p>
          </div>
        </div>
        <div className="metrology-container reverse">
          <div className="metrology-icon">
            <FaTint size={60} color="#4D504E" /> {/* Substituímos FaDroplet por FaTint */}
          </div>
          <div className="metrology-text">
            <h2>Viscosidade</h2>
            <p>
              Oferecemos calibração de viscosímetros, garantindo medições precisas para diversos tipos de líquidos.
            </p>
          </div>
        </div>
      </section>

      {/* Volume / Massa Específica */}
      <section className="metrology-section">
        <div className="metrology-container">
          <div className="metrology-icon">
            <FaBoxOpen size={60} color="#4D504E" />
          </div>
          <div className="metrology-text">
            <h2>Volume</h2>
            <p>
              Calibramos equipamentos volumétricos com precisão, garantindo resultados confiáveis em medições de líquidos e sólidos.
            </p>
          </div>
        </div>
        <div className="metrology-container reverse">
          <div className="metrology-icon">
            <FaWeightHanging size={60} color="#4D504E" />
          </div>
          <div className="metrology-text">
            <h2>Massa Específica</h2>
            <p>
              A calibração de equipamentos para medição de massa específica assegura a qualidade e confiabilidade dos seus resultados.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
