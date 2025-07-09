import React, { useState } from 'react';
import '../styles/contact.css';

const categorias = [
  {
    categoria: "Material de Ref. Certificado",
    marcas: [
      {
        id: "aro",
        nome: "ARO Scientific",
        produtos: [
          { nome: "Matriz de Óleo Mineral" },
          { nome: "Calibrador de Pressão" },
          { nome: "Controlador de Vazão" }
        ]
      }
    ]
  },
  {
    categoria: "Equipamentos",
    marcas: [
      {
        id: "jofra",
        nome: "JOFRA Calibration",
        produtos: [
          { nome: "Calibradores de Temperatura Blocos Secos" },
          { nome: "Calibradores de Pressão" },
          { nome: "Calibradores de Sinal" },
          { nome: "Medidores de Temperatura" },
          { nome: "Sensor de Temperatura" }
        ]
      },
      { id: "forza", nome: "FORZA International", produtos: [] },
      {
        id: "crf",
        nome: "CRF",
        produtos: [
          { nome: "Analisador de Número de Cetano - IQT" }
        ]
      },
      {
        id: "br",
        nome: "B/R Instrument Corporation",
        produtos: [
          { nome: "Destilação Fracionada" },
          { nome: "Recuperação de Solvente" },
          { nome: "Destilação à Vácuo D1160" },
          { nome: "Destilação de Petróleo Bruto" }
        ]
      },
      {
        id: "zahm",
        nome: "ZAHM & NAGEL Company Incorporated",
        produtos: [
          { nome: "Zahm SS-60" },
          { nome: "Perfuração Computadorizada" },
          { nome: "Zahn Series 10000" },
          { nome: "Zahm Modelo DT Penetrante" }
        ]
      },
      {
        id: "kem",
        nome: "KEM Kyoto Electronics Manufacturing Co. Ltd.",
        produtos: [
          { nome: "Titulador Potenciométrico" },
          { nome: "Densímetro Portátil Digital" },
          { nome: "Denímetro Digital" },
          { nome: "Denímetro Digital de Bancada" },
          { nome: "Karl Fisher Columétrico" },
          { nome: "Karl Fisher Volumétrico e Columétrico" },
          { nome: "Karl Fisher Volumétrico" },
          { nome: "Refratômetro Digital" }
        ]
      },
      {
        id: "cannon",
        nome: "Cannon Instrument Company",
        produtos: [
          { nome: "Viscosímetro CAV 4.2" },
          { nome: "Viscosímetro CAV 4.1" },
          { nome: "Cold Cranking Simulator CSS 2100" },
          { nome: "Cold Cranking Simulator CSS 2100LT" },
          { nome: "Viscosímetro Mini Rotativo Semiautomático" },
          { nome: "Mini Rotary" },
          { nome: "Viscosímetro Capilar Multicélula" },
          { nome: "Viscosímetro Cinemático MiniAV-LT" },
          { nome: "Viscosímetro Cinemático MiniAV" },
          { nome: "Viscosímetro Cinemático MiniAV-X" },
          { nome: "Viscosímetro Cinemático MiniAV-HT" },
          { nome: "Viscosímetro de Bancada Automático miniPV-HX" },
          { nome: "Viscosímetro de Bancada Automático miniPV-H" },
          { nome: "Viscosímetro de Bancada Automático miniPV" },
          { nome: "Viscosímetro de Bancada Automático miniPV-X" },
          { nome: "Viscosímetro - óleo usado" },
          { nome: "Viscosímetro Cinemático Automatizado Portátil com Resfriamento Ativo" },
          { nome: "Viscosímetro Cinemático Automatizado Portátil" },
          { nome: "Viscosímetro Rotacional" },
          { nome: "Viscosímetro UltraVis 192" }
        ]
      },
      {
        id: "yateks",
        nome: "YATEKS",
        produtos: [
          { nome: "Analizador Multi-Parâmetro de ÔLEO" },
          { nome: "Contador Portátil de Partículas de Óleo" }
        ]
      },
      {
        id: "huazheng",
        nome: "HUAZHENG",
        produtos: [{ nome: "Rigidez Dielétrica" }]
      },
      {
        id: "tanaka",
        nome: "Tanaka",
        produtos: [
          { nome: "Ponto de Anilina" },
          { nome: "Colorímetro Automático para Produtos de Petróleo" },
          { nome: "Ponto de Fulgor Cleveland" },
          { nome: "Ponto de Fulgor Pensky-Martens" },
          { nome: "Ponto de Fulgor TAF" },
          { nome: "Destilador Atmosférico" },
          { nome: "Analisador de Enxofre edxrf (12 posições)" },
          { nome: "Ponto de Entupimento" },
          { nome: "Ponto de névoa e Fluidez" }
        ]
      }
    ]
  },
  {
    categoria: "Fabricação Própria",
    marcas: [
      {
        id: "icr3",
        nome: "ICR3",
        produtos: [{ nome: "ICR BC1" }]
      }
    ]
  }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    marca: '',
    produto: '',
    comentario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'marca' ? { produto: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  const todasMarcas = categorias.flatMap(cat => cat.marcas);
  const produtosDaMarca = formData.marca
    ? todasMarcas.find(m => m.id === formData.marca)?.produtos || []
    : [];

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Fale Conosco</h2>
        <p>Preencha o formulário abaixo. Responderemos em breve!</p>

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="input-group">
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
            <label htmlFor="nome">Nome Completo</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="input-group">
            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
            <label htmlFor="telefone">Telefone</label>
          </div>

          <div className="input-group">
            <select name="marca" value={formData.marca} onChange={handleChange} className={formData.marca ? "has-value" : ""}>
              <option value="">Selecione a marca</option>
              {todasMarcas.map(marca => (
                <option key={marca.id} value={marca.id}>{marca.nome}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <select
              name="produto"
              value={formData.produto}
              onChange={handleChange}
              disabled={!formData.marca || produtosDaMarca.length === 0}
              className={formData.produto ? "has-value" : ""}
            >
              <option value="">Selecione o produto</option>
              {produtosDaMarca.map((produto, i) => (
                <option key={i} value={produto.nome}>
                  {produto.nome || "(Sem nome disponível)"}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group textarea-group">
            <textarea name="comentario" rows="4" value={formData.comentario} onChange={handleChange} required />
            <label htmlFor="comentario">Comentário</label>
          </div>

          <button type="submit" className="btn-modern">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
