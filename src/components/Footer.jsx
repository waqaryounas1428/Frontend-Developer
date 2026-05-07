import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaHeart, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: t.navHome, href: '#home' },
    { name: t.navAbout, href: '#about' },
    { name: t.navServices, href: '#services' },
    { name: t.navProjects, href: '#projects' },
    { name: t.navContact, href: '#contact' }
  ];

  const services = [
    t.service1Title,
    t.service2Title,
    t.service3Title,
    t.service4Title
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=61589066824925', label: 'Facebook', brand: 'facebook' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/noormosaicmarble/', label: 'Instagram', brand: 'instagram' },
    { icon: <FaTwitter />, url: 'https://x.com/noormosaic1', label: 'Twitter', brand: 'twitter' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@noor_mosaic_marble', label: 'TikTok', brand: 'tiktok' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/923339946999', label: 'WhatsApp', brand: 'whatsapp' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className={`footer-company ${language === 'urdu' ? 'urdu-text' : ''}`}>
            <h3>{t.footerCompanyName}</h3>
            <p>
              {t.footerCompanyDesc}
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`footer-social-link footer-social-${social.brand}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`footer-section ${language === 'urdu' ? 'urdu-text' : ''}`}>
            <h4>{t.footerQuickLinks}</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    <span className="footer-link-arrow">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`footer-section ${language === 'urdu' ? 'urdu-text' : ''}`}>
            <h4>{t.footerServices}</h4>
            <ul className="footer-services">
              {services.map((service, index) => (
                <li key={index} className="footer-service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`footer-section ${language === 'urdu' ? 'urdu-text' : ''}`}>
            <h4>{t.footerContact}</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{t.footerPhone}</span>
                  <a href="tel:+923339946999" className="footer-contact-link">
                    0333-9946999
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{t.footerEmail}</span>
                  <a href="mailto:noormosaicmarble@gmail.com" className="footer-contact-link">
                    noormosaicmarble@gmail.com
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{t.footerAddress}</span>
                  <span className="footer-contact-text">{t.contactAddressText}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className={`footer-bottom-content ${language === 'urdu' ? 'urdu-text' : ''}`}>
            <p className="footer-copyright">
              © {currentYear} {t.footerCopyright}
            </p>
            <p className="footer-made">
              {t.footerMade} <FaHeart className="footer-heart" /> {t.footerMadeText}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a href="#home" className="scroll-top" aria-label="Scroll to top">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
