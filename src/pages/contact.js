import React, { useState } from 'react';
import '../styles/contact.css';

const marcasProdutos = [
  {
    id: "tanaka",
    nome: "Tanaka Scientific Limited",
    produtos: []
  },
  {
    id: "cannon",
    nome: "Cannon Instrument Company",
    produtos: []
  },
  {
    id: "cfr",
    nome: "CFR Engines Inc",
    produtos: []
  },
  {
    id: "kem",
    nome: "KEM Kyoto Electronics Manufacturing Co. Ltd.",
    produtos: []
  },

  // agora as outras marcas que sobraram (removi IQT)
  {
    id: "aro",
    nome: "ARO Scientific",
    produtos: [
      "Manômetro Digital",
      "Calibrador de Pressão",
      "Controlador de Vazão"
    ]
  },
  {
    id: "jofra",
    nome: "JOFRA Calibration",
    produtos: [
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "forza",
    nome: "FORZA International",
    produtos: []
  },
  {
    id: "br",
    nome: "B/R Instrument Corporation",
    produtos: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "zahm",
    nome: "ZAHM & NAGEL Company Incorporated",
    produtos: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "yateks",
    nome: "YATEKS",
    produtos: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "huazheng",
    nome: "HUAZHENG",
    produtos: []
  },
  {
    id: "icr3",
    nome: "ICR3",
    produtos: [
      "ICR BC1"
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

  const produtosDaMarca = formData.marca
    ? marcasProdutos.find(m => m.id === formData.marca)?.produtos || []
    : [];

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Fale Conosco</h2>
        <p>Preencha o formulário abaixo. Responderemos em breve!</p>

        <form onSubmit={handleSubmit} className="modern-form">

          <div className="input-group">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <label htmlFor="nome">Nome Completo</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
            <label htmlFor="telefone">Telefone</label>
          </div>

          <div className="input-group">
            
            <select
              id="marca"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className={formData.marca ? "has-value" : ""}
            >
              <option value="">Selecione a marca</option>
              {marcasProdutos.map(marca => (
                <option key={marca.id} value={marca.id}>
                  {marca.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            
            <select
              id="produto"
              name="produto"
              value={formData.produto}
              onChange={handleChange}
               className={formData.marca ? "has-value" : ""}
              disabled={!formData.marca || produtosDaMarca.length === 0}
            >
              <option value="">Selecione o produto</option>
              {produtosDaMarca.map((produto, i) => (
                <option key={i} value={produto}>
                  {produto || "(Sem nome disponível)"}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group textarea-group">
            <textarea
              id="comentario"
              name="comentario"
              rows="4"
              value={formData.comentario}
              onChange={handleChange}
              required
            />
            <label htmlFor="comentario">Comentário</label>
          </div>

          <button type="submit" className="btn-modern">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
