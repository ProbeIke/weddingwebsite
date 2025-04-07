import React, { useState, useCallback, useEffect, useRef } from 'react';
import './PhotoGallery.css';
import proposal1 from '../assets/images/proposal_1.jpg';
import proposal2 from '../assets/images/proposal_2.jpg';
import proposal3 from '../assets/images/proposal_3.jpg';
import bridgertonImage from '../assets/images/bridgerton.jpg';
import brazilImage from '../assets/images/brazil.jpg';
import halloweenImage from '../assets/images/halloween.jpg';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: proposal1, alt: 'Proposal Photo 1' },
  { id: 2, src: proposal2, alt: 'Proposal Photo 2' },
  { id: 3, src: proposal3, alt: 'Proposal Photo 3' },
  { id: 4, src: bridgertonImage, alt: 'Bridgerton Themed Photo' },
  { id: 5, src: brazilImage, alt: 'Brazil Trip' },
  { id: 6, src: halloweenImage, alt: 'Halloween Together' },
];

const PhotoGallery: React.FC = () => {
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  }, [selectedImage]);

  // Handle keyboard navigation
  useEffect(() => {
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

  // Add intersection observer for fade-in animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Store current refs in a variable to use in cleanup
    const currentRefs = galleryRefs.current;

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const selectedImageData = selectedImage !== null
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

  return (
    <section className="photo-gallery" id="photo-gallery">
      <h2 className="section-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            ref={el => {
              galleryRefs.current[index] = el;
              return undefined;
            }}
            onClick={() => openLightbox(image.id)}
          >
            <div className="gallery-content-wrapper">
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
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
