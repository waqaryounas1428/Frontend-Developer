import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Hero.css';

// Hero background images - 3 images for rotation
const heroImages = [
  '/images/hero.jpg',
  '/images/IMG-20260502-WA0149.jpg',  // Second hero background (replaced)
  '/images/about1.jpg'  // Third hero background image
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { t, language } = useLanguage();

  // Preload images for smooth transitions
  useEffect(() => {
    const imagePromises = heroImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => {
        console.error('Error preloading images:', err);
        setImagesLoaded(true); // Continue anyway
      });
  }, []);

  // Auto rotate images every 5 seconds with ultra smooth transition
  // 5 seconds = 3s fade + 2s display (quick rotation)
  useEffect(() => {
    if (!imagesLoaded) return; // Wait for images to load

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds for faster rotation

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section id="home" className="hero">
      {/* Background Images with Rotation */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background-image ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      {/* Transparent Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated Pattern */}
      <div className="hero-pattern"></div>

      {/* Content */}
      <div className={`hero-content ${language === 'urdu' ? 'urdu-text' : ''}`}>
        <h1 className="hero-title">
          <span className="hero-title-gradient">{t.heroTitle}</span>
          <br />
          <span>{t.heroSubtitle}</span>
        </h1>
        <p className="hero-subtitle">
          {t.heroTagline}
        </p>
        <p className="hero-description">
          {t.heroDescription}
        </p>
        <div className="hero-buttons">
          <a href="#services" className="hero-btn-primary">
            {t.heroBtn1}
          </a>
          <a href="#contact" className="hero-btn-secondary">
            {t.heroBtn2}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <FaChevronDown size={32} />
      </a>

      {/* Image Indicators */}
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
