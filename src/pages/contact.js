import React, { useState } from 'react';
import '../styles/contact.css';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui pode ir para uma API
  };

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Fale Conosco</h2>
        <p>Preencha o formulário abaixo. Responderemos em breve!</p>

        <form onSubmit={handleSubmit} className="modern-form">
          {[
            { id: "nome", label: "Nome Completo" },
            { id: "email", label: "E-mail", type: "email" },
            { id: "telefone", label: "Telefone", type: "tel" },
            { id: "marca", label: "Marca" },
            { id: "produto", label: "Produto" },
          ].map(({ id, label, type = "text" }) => (
            <div className="input-group" key={id}>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required={id !== "marca" && id !== "produto"}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}

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
