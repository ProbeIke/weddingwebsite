import React, { useState } from 'react';
import './PhotoGallery.css';

// In a real application, these would be actual imported images
const placeholderImages = [
  { id: 1, src: 'https://via.placeholder.com/400x300?text=Photo+1', alt: 'Couple Photo 1' },
  { id: 2, src: 'https://via.placeholder.com/400x300?text=Photo+2', alt: 'Couple Photo 2' },
  { id: 3, src: 'https://via.placeholder.com/400x300?text=Photo+3', alt: 'Couple Photo 3' },
  { id: 4, src: 'https://via.placeholder.com/400x300?text=Photo+4', alt: 'Couple Photo 4' },
  { id: 5, src: 'https://via.placeholder.com/400x300?text=Photo+5', alt: 'Couple Photo 5' },
  { id: 6, src: 'https://via.placeholder.com/400x300?text=Photo+6', alt: 'Couple Photo 6' },
  { id: 7, src: 'https://via.placeholder.com/400x300?text=Photo+7', alt: 'Couple Photo 7' },
  { id: 8, src: 'https://via.placeholder.com/400x300?text=Photo+8', alt: 'Couple Photo 8' },
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = placeholderImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : placeholderImages.length - 1;
    } else {
      newIndex = currentIndex < placeholderImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(placeholderImages[newIndex].id);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImage, closeLightbox]);

  const selectedImageData = selectedImage !== null 
    ? placeholderImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <section className="photo-gallery" id="photo-gallery">
      <h2 className="section-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {placeholderImages.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => openLightbox(image.id)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage !== null && selectedImageData && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>‹</button>
            <div className="lightbox-image-container">
              <img src={selectedImageData.src} alt={selectedImageData.alt} />
            </div>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>›</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
