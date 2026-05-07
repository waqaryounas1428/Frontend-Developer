import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/SocialMedia.css';
import '../styles/Gradients.css';

const SocialMedia = () => {
  const { t, language } = useLanguage();
  
  const socialLinks = [
    {
      name: t.socialFacebook,
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/profile.php?id=61589066824925',
      gradientClass: 'gradient-facebook',
      description: t.socialFacebookDesc
    },
    {
      name: t.socialInstagram,
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/noormosaicmarble/',
      gradientClass: 'gradient-instagram',
      description: t.socialInstagramDesc
    },
    {
      name: t.socialTwitter,
      icon: <FaTwitter />,
      url: 'https://x.com/noormosaic1',
      gradientClass: 'gradient-twitter',
      description: t.socialTwitterDesc
    },
    {
      name: t.socialTikTok,
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@noor_mosaic_marble',
      gradientClass: 'gradient-tiktok',
      description: t.socialTikTokDesc
    },
    {
      name: t.socialWhatsapp,
      icon: <FaWhatsapp />,
      url: 'https://wa.me/923339946999',
      gradientClass: 'gradient-whatsapp',
      description: t.socialWhatsappDesc
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: t.contactPhone,
      info: '0333-9946999',
      link: 'tel:+923339946999'
    },
    {
      icon: <FaEnvelope />,
      title: t.contactEmail,
      info: 'noormosaicmarble@gmail.com',
      link: 'mailto:noormosaicmarble@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t.contactAddress,
      info: t.contactAddressText,
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Decorative Background Elements */}
      <div className="contact-bg-decoration">
        <div className="contact-bg-circle-1"></div>
        <div className="contact-bg-circle-2"></div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className={`contact-header ${language === 'urdu' ? 'urdu-text' : ''}`}>
          <div>
            <span className="contact-label">{t.contactLabel}</span>
          </div>
          <h2 className="contact-title">
            {t.contactTitle} <span className="text-gradient">{t.contactTitleGradient}</span>
          </h2>
          <p className="contact-description">
            {t.contactDescription}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {contactInfo.map((contact, index) => (
            <a key={index} href={contact.link} className="contact-card">
              <div className="contact-card-gradient gradient-accent"></div>
              
              <div className="contact-card-content">
                <div className="contact-card-icon gradient-accent">
                  <span>{contact.icon}</span>
                </div>
                <h3 className="contact-card-title">
                  {contact.title}
                </h3>
                <p className="contact-card-info">
                  {contact.info}
                </p>
              </div>

              <div className="contact-card-corner"></div>
            </a>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="social-wrapper">
          <div className="social-container">
            <div className="social-pattern"></div>

            <div className="social-content">
              <div className={`social-header ${language === 'urdu' ? 'urdu-text' : ''}`}>
                <h3 className="social-title">
                  {t.socialTitle}
                </h3>
                <p className="social-subtitle">
                  {t.socialSubtitle}
                </p>
              </div>

              {/* Social Media Icons - Simple Footer Style */}
              <div className="social-icons-row">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-link social-icon-${social.gradientClass.replace('gradient-', '')}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className={`whatsapp-cta ${language === 'urdu' ? 'urdu-text' : ''}`}>
          <div>
            <p className="whatsapp-text">
              {t.whatsappText}
            </p>
            <a
              href="https://wa.me/923339946999"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp className="whatsapp-icon" />
              <span>{t.whatsappBtn}</span>
              <svg className="whatsapp-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
