import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import ContactForm from './pages/contact';
import HomePage from './pages/home';
import SobreNos from './pages/about';
import Serviços from './pages/services';
import Metrologia from './pages/metrologia';
import MarcaDetalhes from './pages/products';
import CookieConsent from './components/Cookieconsent'; 
import './styles/global.css';
import PoliticaPrivacidade from './pages/privacidade';
import TermosUso from './pages/termos';
import Marcas from './pages/marcas';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/serviços" element={<Serviços />} />
          <Route path="/fale-conosco" element={<ContactForm />} />
          <Route path="/marcas/:id" element={<MarcaDetalhes />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos" element={<TermosUso />} />
          <Route path="/metrologia" element={<Metrologia />} />

        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </Router>
  );
}

export default App;
