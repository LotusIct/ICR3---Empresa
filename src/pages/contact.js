import React, { useState } from 'react';
import '../styles/contact.css';
import emailjs from 'emailjs-com';


const categorias = [
  {
    categoria: "Material de Ref. Certificado",
    marcas: [
      {
        id: "aro",
        nome: "ARO Scientific",
        produtos: [
          { nome: "Material de Referência Certificado de densidade ASTM D4052" },
          { nome: "Material de Referência Certificado com Ponto de Fulgor(COC) ASTM D92" },
          { nome: "Material de Referência Certificado para Destilação ASTM D86" },
          { nome: "Material de Referência Certificado ASTM D97 D2500" },
          { nome: "Material de Referência Certificado ASTM D1544 D6166" },
          { nome: "Material de Referência Certificado ASTM D6045 D1500" },
          { nome: "Material de Referência Certificado ASTM D6045 D156" }
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
      {
        id: "forza",
        nome: "FORZA International",
        produtos: [
          { nome: "Aparelho Manual para teste de Filtrabilidade de Óleo Hidráulico" },
          { nome: "Aparelho de estabilidade à oxidação Banho Líquido" },
          { nome: "Teste de Separabilidade da Água" }
        ]
      },
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
          { nome: "Densímetro Digital" },
          { nome: "Densímetro Digital de Bancada" },
          { nome: "Karl Fisher Coulométrico" },
          { nome: "Karl Fisher Híbrido - Volumétrico e Columétrico" },
          { nome: "Karl Fisher Volumétrico" },
          { nome: "Refratômetro Digital" }
        ]
      },
      {
        id: "cannon",
        nome: "Cannon Instrument Company",
        produtos: [
          { nome: "Viscosímetro" },
          { nome: "Simulador de Partida Frio" },
          { nome: "Viscosímetro Mini Rotativo Semiautomático" },
          { nome: "Mini Rotary" },
          { nome: "Viscosímetro Capilar Multicélula" },
          { nome: "Viscosímetro Cinemático" },
          { nome: "Viscosímetro de Bancada Automático" },
          { nome: "Viscosímetro - óleo usado" },
          { nome: "Viscosímetro Cinemático Automatizado Portátil com Resfriamento Ativo" },
          { nome: "Viscosímetro Cinemático Automatizado Portátil" },
          { nome: "Viscosímetro Rotacional" }
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
        produtos: [
          { nome: "Rigidez Dielétrica" }
        ]
      },
      {
        id: "tanaka",
        nome: "Tanaka",
        produtos: [
          { nome: "Ponto de Anilina" },
          { nome: "Colorímetro Automático para Produtos de Petróleo" },
          { nome: "Ponto de Fulgor Cleveland" },
          { nome: "Ponto de Fulgor Pensky-Martens" },
          { nome: "Ponto de Fulgor TAG" },
          { nome: "Destilador Atmosférico" },
          { nome: "Analisador de Enxofre SDXRF (12 posições)" },
          { nome: "Ponto de Entupimento" },
          { nome: "Ponto de Névoa e Fluidez" }
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
      <div className="form-container">
        <h2>Fale Conosco</h2>
        <p>Preencha o formulário abaixo. Responderemos em breve!</p>
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

          <button type="submit" className="btn-modern">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}