import React from 'react';
import './HeroSection.css';
// Background image is imported in CSS

const HeroSection: React.FC = () => {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById('wedding-details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Shane & Julia</h1>
        <p className="hero-date">August 15, 2026</p>
        <button className="hero-button" onClick={scrollToDetails}>
          Scroll to Details
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
