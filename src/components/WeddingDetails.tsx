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
          <p className="detail-time">August 15, 2025 • 3:00 PM</p>
          <p className="detail-location">Northrop Grumman Mission Systems</p>
          <p className="detail-address">Linthicum, Maryland</p>
          <p className="detail-info">
            No cell phones, apple watches, airpods, allowed!!! No wedding photographer either or bluetooth devices
          </p>
        </div>
        
        <div className="detail-card reception">
          <h3>Reception</h3>
          <p className="detail-time">August 15, 2025 • 5:30 PM</p>
          <p className="detail-location">ARPA-E Headquarters</p>
          <p className="detail-address">Lenfant Plaza</p>
          <p className="detail-info">
            Ya'll are about to find out why they call it BOOZE allen.
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
