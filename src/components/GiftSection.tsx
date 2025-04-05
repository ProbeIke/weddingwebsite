import React from 'react';
import './GiftSection.css';

const GiftSection: React.FC = () => {
  return (
    <section className="gift-section" id="gifts">
      <h2 className="section-title">Gifts</h2>
      <div className="gift-container">
        <div className="gift-message">
          <p>
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
            we've created a small registry to help guide you.
          </p>
        </div>
        
        <div className="gift-options">
          <div className="gift-option">
            <h3>Honeymoon Fund</h3>
            <p>
              We're planning our dream honeymoon to Bali! If you'd like to contribute to our adventure, 
              cash gifts can be given at the reception or through the "Send a Gift" button below.
            </p>
            <button className="gift-button" onClick={() => alert('In a real website, this would link to a payment platform.')}>
              Send a Gift
            </button>
          </div>
          
          <div className="gift-option">
            <h3>Registry</h3>
            <p>
              We've registered a few items to help us begin our new life together. 
              Please don't feel obligated - your presence is enough!
            </p>
            <ul className="gift-list">
              <li>Kitchen appliances</li>
              <li>Bedding and towels</li>
              <li>Dining essentials</li>
              <li>Home decor</li>
            </ul>
            <button className="gift-button" onClick={() => alert('In a real website, this would link to a registry.')}>
              View Registry
            </button>
          </div>
        </div>
        
        <div className="gift-note">
          <p>
            Most importantly, we're looking forward to celebrating with you on our special day. 
            Your love, support, and presence mean the world to us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
