import React from 'react';
import './MarquesSection.css';
import marquesImage from '../assets/images/marques.jpg';

const MarquesSection: React.FC = () => {
  return (
    <section className="marques-section" id="marques">
      <div className="marques-container">
        <h2>Marques Brownlee Appreciation Section</h2>
        
        <div className="marques-content">
          <div className="marques-image-container">
            <img src={marquesImage} alt="Marques Brownlee" className="marques-image" />
          </div>
          
          <div className="marques-text">
            <p>
              We would like to take a moment to appreciate Marques Brownlee, 
              also known as MKBHD, one of the most influential tech reviewers of our time.
            </p>
            <p>
              His detailed reviews, professional cinematography, and honest opinions 
              have helped millions make informed decisions about technology.
            </p>
            <p className="marques-quote">
              "The best tech is the tech that gets out of your way."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarquesSection;