import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Set the wedding date - April 15, 2025
  const weddingDate = new Date('August 15, 2026 15:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Wedding day has arrived!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up on unmount
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="countdown-timer" id="countdown">
      <div className="countdown-container">
        <h2>Counting Down to Our Big Day</h2>
        
        <div className="countdown-display">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
        
        <p className="countdown-message">
          {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
            ? "Today is the day! We can't wait to celebrate with you!"
            : "We can't wait to celebrate with you!"}
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;
