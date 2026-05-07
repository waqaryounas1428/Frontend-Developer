import React from 'react';
import { FaAward, FaUsers, FaGem, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    { icon: <FaAward />, number: '9+', label: t.aboutYearsLabel },
    { icon: <FaUsers />, number: '500+', label: t.aboutClientsLabel },
    { icon: <FaGem />, number: '1000+', label: t.aboutProjectsLabel },
  ];

  const highlights = language === 'urdu' ? [
    'پریمیم اطالوی اور ترک ماربل',
    'حسب ضرورت موزیک ڈیزائن',
    'ماہر تنصیب کی خدمات',
    'فیکٹری براہ راست قیمتیں',
    'معیار کی ضمانت',
    'وقت پر منصوبے کی فراہمی'
  ] : [
    'Premium Italian & Turkish Marble',
    'Custom Mosaic Designs',
    'Expert Installation Services',
    'Factory Direct Pricing',
    'Quality Assurance Guaranteed',
    'On-Time Project Delivery'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className={`about-header ${language === 'urdu' ? 'urdu-text' : ''}`}>
          <h2 className="about-title">
            {t.aboutLabel} <span className="text-gradient">{t.footerCompanyName}</span>
          </h2>
          <div className="about-divider"></div>
          <p className="about-description">
            {t.aboutDescription}
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="about-main-content">
          <div className={`about-text-section ${language === 'urdu' ? 'urdu-text' : ''}`}>
            <h3 className="about-subtitle">
              {language === 'urdu' ? '2017 سے بہترین کاریگری' : 'Crafting Excellence Since 2017'}
            </h3>
            <p className="about-paragraph">
              {language === 'urdu' 
                ? 'نور موزیک اینڈ ماربل میں، ہم یقین رکھتے ہیں کہ ہر جگہ قدرتی پتھر کی لازوال خوبصورتی کے لمس کی مستحق ہے۔ صنعت میں 9 سال سے زیادہ کی مہارت کے ساتھ، ہم نے ماربل کی تنصیب اور موزیک ڈیزائن کے فن میں مہارت حاصل کی ہے۔'
                : 'At Noor Mosaic & Marble, we believe that every space deserves the touch of natural stone\'s timeless beauty. With over 9 years of expertise in the industry, we\'ve mastered the art of marble installation and mosaic design.'
              }
            </p>
            <p className="about-paragraph">
              {language === 'urdu'
                ? 'ہماری ماہر کاریگروں کی ٹیم غیر معمولی نتائج فراہم کرنے کے لیے روایتی تکنیکوں کو جدید جدت کے ساتھ جوڑتی ہے۔ رہائشی منصوبوں سے لے کر تجارتی تنصیبات تک، ہم آپ کے وژن کو درستگی اور جذبے کے ساتھ زندہ کرتے ہیں۔'
                : 'Our team of skilled craftsmen combines traditional techniques with modern innovation to deliver exceptional results. From residential projects to commercial installations, we bring your vision to life with precision and passion.'
              }
            </p>

            {/* Highlights List */}
            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="about-images">
            <div className="image-grid">
              <div className="image-card image-large">
                <img 
                  src="/images/about1.jpg" 
                  alt="Luxury Marble Installation"
                />
                <div className="image-overlay">
                  <span className="image-label">
                    {language === 'urdu' ? 'پریمیم ماربل' : 'Premium Marble'}
                  </span>
                </div>
              </div>
              <div className="image-card">
                <img 
                  src="/images/about2.jpg" 
                  alt="Mosaic Design"
                />
                <div className="image-overlay">
                  <span className="image-label">
                    {language === 'urdu' ? 'موزیک آرٹ' : 'Mosaic Art'}
                  </span>
                </div>
              </div>
              <div className="image-card">
                <img 
                  src="/images/about3.jpg" 
                  alt="Granite Factory"
                />
                <div className="image-overlay">
                  <span className="image-label">
                    {language === 'urdu' ? 'فیکٹری براہ راست' : 'Factory Direct'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${language === 'urdu' ? 'urdu-text' : ''}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
