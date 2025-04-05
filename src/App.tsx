import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import PhotoGallery from './components/PhotoGallery';
import RSVP from './components/RSVP';
import GiftSection from './components/GiftSection';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OurStory />
      <WeddingDetails />
      <PhotoGallery />
      <RSVP />
      <GiftSection />
      <CountdownTimer />
      <Footer />
    </div>
  );
}

export default App;
