import React, { useState, useEffect } from 'react';
import './MarquesSection.css';
import marquesImage1 from '../assets/images/marques.jpg';
import marquesImage2 from '../assets/images/marques_2.png';
import marquesImage3 from '../assets/images/marques_3.png';
import marquesImage4 from '../assets/images/marques_4.png';
import marquesImage5 from '../assets/images/marques_5.png';
import marquesImage6 from '../assets/images/marques_6.png';

const MarquesSection: React.FC = () => {
  const marquesImages = [
    marquesImage1,
    marquesImage2,
    marquesImage3,
    marquesImage4,
    marquesImage5,
    marquesImage6
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');
      
      // After fade out completes, change image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % marquesImages.length);
        setFadeState('fade-in');
      }, 500); // Half a second for fade out
      
    }, 2000); // Change image every 2 seconds
    
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [marquesImages.length]);

  return (
    <section className="marques-section" id="marques">
      <div className="marques-container">
        <h2>Marques Brownlee Appreciation Section</h2>
        
        <div className="marques-content">
          <div className="marques-image-container">
            <img
              src={marquesImages[currentImageIndex]}
              alt={`Marques Brownlee ${currentImageIndex + 1}`}
              className={`marques-image ${fadeState}`}
            />
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
              "I hate android phones, especially the pixel ones."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarquesSection;