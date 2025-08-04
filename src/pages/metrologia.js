import React, { useState } from 'react';
import '../styles/metrology.css';
import {
  MdScale,
  MdThermostat,
  MdOpacity,
  MdOutlineInventory2
} from 'react-icons/md';

import massaImg from '../assets/massa.JPG';
import temperaturaImg from '../assets/temperatura.JPG';
import viscosidadeImg from '../assets/viscosidade.JPG';
import volumeImg from '../assets/volume.JPG';

const metrologyItems = [
  {
    title: 'Massa',
    descrition:'Escopo da Creditação - ABNT NBR ISO/ICE 17025 - Calibração',
    icon: <MdScale size={60} color="#4D504E" />,
    image: massaImg
  },
  {
    title: 'Temperatura e Umidade',
      descrition:'Escopo da Creditação - ABNT NBR ISO/ICE 17025 - Calibração',
    icon: <MdThermostat size={60} color="#4D504E" />,
    image: temperaturaImg
  },
  {
    title: 'Viscosidade', 
     descrition:'Escopo da Creditação - ABNT NBR ISO/ICE 17025 - Calibração',
    icon: <MdOpacity size={60} color="#4D504E" />,
    image: viscosidadeImg
  },
  {
    title: 'Volume e Massa Específica',
    descrition:'Escopo da Creditação - ABNT NBR ISO/ICE 17025 - Calibração',
    icon: <MdOutlineInventory2 size={60} color="#4D504E" />,
    image: volumeImg
  }
];


export default function MetrologyPage() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div className="metrology-page">
      {/* Hero Section */}
      <section className="hero-section-metrology">
        <div className="overlay"></div>
        <div className="hero-content-metrology">
          <h1>Metrologia</h1>
          <p>
            Nossos laboratórios possuem acreditação reconhecida para a
            realização de calibrações em diferentes grandezas, garantindo a
            confiabilidade e a rastreabilidade dos resultados.
            Essa acreditação garante que cada calibração siga os mais altos
            padrões de qualidade, dando a você a tranquilidade de tomar decisões
            seguras e assertivas.
          </p>
        </div>
      </section>

      {/* Metrology Sections */}
      <section className="metrology-section">
        {metrologyItems.map((item, index) => (
          <div
            className={`metrology-container ${index % 2 === 1 ? 'reverse' : ''}`}
            key={index}
          >
            <div className="metrology-icon">{item.icon}</div>
            <div className="metrology-text">
              <h2>{item.title}</h2>
              <p>{item.descrition}<br></br> <button className="saiba-mais-btn" onClick={() => openModal(item.image)}>Saiba mais</button></p>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Escopo de acreditação" />
            <button className="close-button" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}
