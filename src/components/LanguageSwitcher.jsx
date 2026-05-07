import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-switcher" 
      onClick={toggleLanguage}
      aria-label="Switch Language"
    >
      <span className={`lang-option ${language === 'english' ? 'active' : ''}`}>
        EN
      </span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${language === 'urdu' ? 'active' : ''}`}>
        اردو
      </span>
    </button>
  );
};

export default LanguageSwitcher;
