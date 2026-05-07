import React, { useState } from 'react';
import { FaHammer, FaPuzzlePiece, FaCut, FaIndustry } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Services.css';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const { t, language } = useLanguage();

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      icon: <FaHammer />,
      title: t.service1Title,
      description: t.service1Desc,
      features: [t.service1Feature1, t.service1Feature2, t.service1Feature3, t.service1Feature4]
    },
    {
      icon: <FaPuzzlePiece />,
      title: t.service2Title,
      description: t.service2Desc,
      features: [t.service2Feature1, t.service2Feature2, t.service2Feature3, t.service2Feature4]
    },
    {
      icon: <FaCut />,
      title: t.service3Title,
      description: t.service3Desc,
      features: [t.service3Feature1, t.service3Feature2, t.service3Feature3, t.service3Feature4]
    },
    {
      icon: <FaIndustry />,
      title: t.service4Title,
      description: t.service4Desc,
      features: [t.service4Feature1, t.service4Feature2, t.service4Feature3, t.service4Feature4]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className={`services-header ${language === 'urdu' ? 'urdu-text' : ''}`}>
          <h2 className="services-title">
            {t.servicesTitle} <span className="text-gradient">{t.servicesTitleGradient}</span>
          </h2>
          <div className="services-divider"></div>
          <p className="services-description">
            {t.servicesDescription}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${expandedCards[index] ? 'expanded' : ''} ${language === 'urdu' ? 'urdu-text' : ''}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <div className="service-content-wrapper">
                <p className="service-description">
                  {service.description}
                </p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                className="service-read-more"
                onClick={() => toggleCard(index)}
              >
                {expandedCards[index] ? t.servicesReadLess : t.servicesReadMore}
              </button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#contact" className="services-btn">
            {t.servicesBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
