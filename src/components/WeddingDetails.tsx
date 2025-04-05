import React from 'react';
import './WeddingDetails.css';
// We'll use a placeholder for the PDF file
const directionsFile = '#';

const WeddingDetails: React.FC = () => {
  return (
    <section className="wedding-details" id="wedding-details">
      <h2 className="section-title">Wedding Details</h2>
      <div className="details-container">
        <div className="detail-card ceremony">
          <h3>Ceremony</h3>
          <p className="detail-time">April 15, 2025 • 3:00 PM</p>
          <p className="detail-location">St. Mary's Cathedral</p>
          <p className="detail-address">123 Church Street, New York, NY</p>
          <p className="detail-info">
            The ceremony will begin promptly at 3:00 PM. Please arrive at least 30 minutes early to be seated.
          </p>
        </div>
        
        <div className="detail-card reception">
          <h3>Reception</h3>
          <p className="detail-time">April 15, 2025 • 5:30 PM</p>
          <p className="detail-location">The Grand Ballroom</p>
          <p className="detail-address">456 Celebration Avenue, New York, NY</p>
          <p className="detail-info">
            Cocktail hour begins at 5:30 PM, followed by dinner and dancing until midnight.
          </p>
        </div>
      </div>
      
      <div className="directions-section">
        <h3>Directions & Accommodations</h3>
        <p>
          For detailed directions to both venues and information about recommended hotels in the area, 
          please download our information packet.
        </p>
        <a href={directionsFile} download className="download-button">
          Download Information PDF
        </a>
      </div>
    </section>
  );
};

export default WeddingDetails;
