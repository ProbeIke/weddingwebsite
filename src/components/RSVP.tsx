import React, { useState, useEffect } from 'react';
import './RSVP.css';

interface RSVPFormData {
  name: string;
  email: string;
  attending: string;
  guests: number;
  mealPreference: string;
  message: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attending: 'yes',
    guests: 0,
    mealPreference: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<RSVPFormData>>({});

  // Check if there's saved RSVP data in local storage
  useEffect(() => {
    const savedRSVP = localStorage.getItem('weddingRSVP');
    if (savedRSVP) {
      try {
        const parsedData = JSON.parse(savedRSVP);
        setFormData(parsedData);
        setSubmitted(true);
      } catch (error) {
        console.error('Error parsing saved RSVP data:', error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle number inputs
    if (name === 'guests') {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when field is edited
    if (errors[name as keyof RSVPFormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RSVPFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store in local storage (in a real app, this would be sent to a server)
      localStorage.setItem('weddingRSVP', JSON.stringify(formData));
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('weddingRSVP');
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guests: 0,
      mealPreference: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section className="rsvp" id="rsvp">
      <h2 className="section-title">RSVP</h2>
      <div className="rsvp-container">
        {!submitted ? (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="attending">Will you be attending?</label>
              <select
                id="attending"
                name="attending"
                value={formData.attending}
                onChange={handleChange}
              >
                <option value="yes">Yes, I will attend</option>
                <option value="no">No, I cannot attend</option>
              </select>
            </div>
            
            {formData.attending === 'yes' && (
              <>
                <div className="form-group">
                  <label htmlFor="guests">Number of additional guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="0"
                    max="5"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mealPreference">Meal Preference</label>
                  <select
                    id="mealPreference"
                    name="mealPreference"
                    value={formData.mealPreference}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="chicken">Chicken</option>
                    <option value="beef">Beef</option>
                    <option value="fish">Fish</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
              </>
            )}
            
            <div className="form-group">
              <label htmlFor="message">Message to the couple (optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              ></textarea>
            </div>
            
            <button type="submit" className="rsvp-button">Submit RSVP</button>
          </form>
        ) : (
          <div className="thank-you">
            <h3>Thank You!</h3>
            <p>Your RSVP has been received. We look forward to celebrating with you!</p>
            <div className="rsvp-summary">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Attending:</strong> {formData.attending === 'yes' ? 'Yes' : 'No'}</p>
              {formData.attending === 'yes' && (
                <>
                  <p><strong>Additional Guests:</strong> {formData.guests}</p>
                  {formData.mealPreference && (
                    <p><strong>Meal Preference:</strong> {formData.mealPreference}</p>
                  )}
                </>
              )}
              {formData.message && (
                <p><strong>Message:</strong> {formData.message}</p>
              )}
            </div>
            <button onClick={handleReset} className="reset-button">Update RSVP</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
