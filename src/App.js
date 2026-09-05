import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/home';
import CookieConsent from './components/Cookieconsent'; 
import './styles/global.css';

const ContactForm = lazy(() => import('./pages/contact'));
const SobreNos = lazy(() => import('./pages/about'));
const Serviços = lazy(() => import('./pages/services'));
const Metrologia = lazy(() => import('./pages/metrologia'));
const MarcaDetalhes = lazy(() => import('./pages/products'));
const PoliticaPrivacidade = lazy(() => import('./pages/privacidade'));
const TermosUso = lazy(() => import('./pages/termos'));
const Marcas = lazy(() => import('./pages/marcas'));

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Suspense fallback={<div className="page-loading" role="status">Carregando...</div>}>
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
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </Router>
  );
}

export default App;
