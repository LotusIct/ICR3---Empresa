import React from 'react';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer'; // 👈 Importando o Footer
import './styles/global.css';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Suas páginas ou seções entram aqui */}

      <Footer /> {/* 👈 Footer adicionado aqui */}
    </div>
  );
}

export default App;
