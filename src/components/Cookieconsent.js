import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cookieconsent.css';

const CATEGORIES = {
  ESSENTIAL: 'essential',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    [CATEGORIES.ESSENTIAL]: true,  // sempre true e obrigatório
    [CATEGORIES.ANALYTICS]: false,
    [CATEGORIES.MARKETING]: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (!saved) {
      setShowBanner(true);
    } else {
      const prefs = JSON.parse(saved);
      setPreferences({ ...preferences, ...prefs });
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      [CATEGORIES.ESSENTIAL]: true,
      [CATEGORIES.ANALYTICS]: true,
      [CATEGORIES.MARKETING]: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
  };

  const handleToggleCategory = (category) => {
    if (category === CATEGORIES.ESSENTIAL) return; // não pode desativar essenciais
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleShowPreferences = () => {
    setShowBanner(false);
    setShowPreferences(true);
  };

  const handleResetPreferences = () => {
    localStorage.removeItem('cookiePreferences');
    setShowPreferences(false);
    setShowBanner(true);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <div className="cookie-banner">
      {!showPreferences && (
        <>
          <span>
            Usamos cookies para melhorar sua experiência. Leia nossa&nbsp;
            <Link to="/privacidade">Política de Privacidade</Link> e&nbsp;
            <Link to="/termos">Termos de Uso</Link>.
          </span>
          <div className="cookie-buttons">
            <button onClick={handleAcceptAll}>Aceitar</button>
            <button onClick={handleShowPreferences}>Alterar preferências de cookies</button>
          </div>
        </>
      )}

      {showPreferences && (
        <div className="preferences-panel">
          <h2>Configurações de Cookies</h2>
          <form>
            <label>
              <input type="checkbox" checked disabled />
              Cookies Essenciais (obrigatórios)
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences[CATEGORIES.ANALYTICS]}
                onChange={() => handleToggleCategory(CATEGORIES.ANALYTICS)}
              />
              Cookies de Análise
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences[CATEGORIES.MARKETING]}
                onChange={() => handleToggleCategory(CATEGORIES.MARKETING)}
              />
              Cookies de Marketing
            </label>
          </form>
          <div className="cookie-buttons">
            <button onClick={handleSavePreferences}>Salvar preferências</button>
            <button onClick={handleResetPreferences}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
