import React, { useState } from 'react';
import '../styles/contact.css';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import categorias from '../data/marcas.json';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    marca: '',
    produto: '',
    comentario: ''
  });
 const [sucessoMensagem, setSucessoMensagem] = useState(false);
  const [erroMensagem, setErroMensagem] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'marca' ? { produto: '' } : {})  // Reset produto quando marca for alterada
    }));
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Envia os dados para o EmailJS
    emailjs.send(
      'service_03o26u9',  // Substitua pelo seu Service ID do EmailJS
      'template_swej72s',  // Substitua pelo seu Template ID
      formData,           // Os dados do formulário que você vai enviar
      '_SMJn5Ik1hAxMxVZL'    // Substitua pela sua Public Key do EmailJS
    ).then((result) => {
      console.log('E-mail enviado com sucesso!', result.text);
      setSucessoMensagem(true); // Exibe a mensagem de sucesso
      setErroMensagem(false); // Reseta a mensagem de erro
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        marca: '',
        produto: '',
        comentario: ''
      });
        setTimeout(() => {
      setSucessoMensagem(false);
      setErroMensagem(false);
    }, 5000);

    }).catch((error) => {
      console.error('Erro ao enviar o e-mail:', error);
      setErroMensagem(true); // Exibe a mensagem de erro
      setSucessoMensagem(false); 
      setTimeout(() => {
        setSucessoMensagem(false);
        setErroMensagem(false);
      }, 5000);

    });
  };

  // Encontrar as marcas e produtos
  const todasMarcas = categorias.flatMap(cat => cat.marcas);
  const produtosDaMarca = formData.marca
    ? todasMarcas.find(m => m.id === formData.marca)?.produtos || []
    : [];

  return (
    <section className="contact-form-section">
      <div className="contact-shell">
        <aside className="contact-intro">
          <span className="section-kicker">FALE COM A ICR3</span>
          <h1>Vamos encontrar a solução ideal.</h1>
          <p>Conte o que você precisa. Nossa equipe técnica está pronta para orientar sua escolha e responder com agilidade.</p>

          <div className="contact-quick-links" aria-label="Canais de atendimento">
            <a href="https://wa.me/5521998297321" target="_blank" rel="noopener noreferrer">
              <span><FaWhatsapp /></span>
              <div><small>WhatsApp</small><strong>(21) 99829-7321</strong></div>
            </a>
            <a href="tel:+552131727755">
              <span><FaPhoneAlt /></span>
              <div><small>Telefone</small><strong>(21) 3172-7755</strong></div>
            </a>
            <a href="mailto:comercial@icr3.com.br">
              <span><FaEnvelope /></span>
              <div><small>E-mail</small><strong>comercial@icr3.com.br</strong></div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Flack,+163,+Rio+de+Janeiro+-+RJ,+20960-150" target="_blank" rel="noopener noreferrer">
              <span><FaMapMarkerAlt /></span>
              <div><small>Endereço</small><strong>Rua Flack, 163 — Rio de Janeiro</strong></div>
            </a>
          </div>
        </aside>

        <div className="form-container">
          <span className="section-kicker">ENVIE UMA MENSAGEM</span>
          <h2>Como podemos ajudar?</h2>
          <p>Preencha os dados abaixo e retornaremos em breve.</p>
 {/* Popup de Sucesso */}
        {sucessoMensagem && (
          <div className="popup sucesso">
            <p>Mensagem enviada com sucesso!</p>
          </div>
        )}

        {/* Popup de Erro */}
        {erroMensagem && (
          <div className="popup erro">
            <p>Houve um erro ao enviar a mensagem. Tente novamente mais tarde.</p>
          </div>
        )}
          <form onSubmit={handleSubmit} className="modern-form">
          <div className="input-group">
            <input
              type="text"
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
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
            <label htmlFor="telefone">Telefone</label>
          </div>

          <div className="input-group">
            <select
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className={formData.marca ? "has-value" : ""}
            >
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
            <textarea
              name="comentario"
              rows="4"
              value={formData.comentario}
              onChange={handleChange}
              required
            />
            <label htmlFor="comentario">Comentário</label>
          </div>

            <button type="submit" className="btn-modern">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
