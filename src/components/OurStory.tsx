import React, { useEffect, useRef } from 'react';
import './OurStory.css';
import meetingImage from '../assets/images/meeting.jpg';
import tripImage from '../assets/images/trip.jpg';
import proposalImage from '../assets/images/proposal.jpg';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  image: string;
}

const OurStory: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      title: 'How We Met',
      date: 'June 2020',
      description: 'We met at a mutual friend\'s birthday party. Shane spilled his drink on Julia\'s dress, and the rest is history.',
      image: meetingImage
    },
    {
      title: 'Our First Trip',
      date: 'August 2021',
      description: 'We took our first trip together to the mountains. It was during this trip that we realized we were meant for each other.',
      image: tripImage
    },
    {
      title: 'The Proposal',
      date: 'December 2024',
      description: 'Shane proposed during a sunset walk on the beach. Julia said yes before he could even finish asking!',
      image: proposalImage
    }
  ];

  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Store current refs in a variable to use in cleanup
    const currentRefs = timelineRefs.current;

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="our-story" id="our-story">
      <h2 className="section-title">Our Story</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            ref={el => {
              timelineRefs.current[index] = el;
              return undefined;
            }}
          >
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <div className="image-container">
                <img src={event.image} alt={event.title} />
              </div>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
