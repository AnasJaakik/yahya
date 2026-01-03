import { useState } from 'react';
import avis1 from '../assets/avis1.png';
import avis2 from '../assets/avis2.png';
import avis3 from '../assets/avis3.png';
import avis4 from '../assets/avis4.png';
import avis5 from '../assets/avis5.png';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewImages = [
    avis1,
    avis2,
    avis3,
    avis4,
    avis5
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewImages.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const averageRating = 5;

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero section">
        <div className="container">
          <h1>Ils ont relevé le défi</h1>
          <p className="lead-text">
            Découvrez les témoignages de nos élèves et de leurs parents
          </p>
          <div className="average-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < averageRating ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
            </div>
            <p className="rating-text">Note moyenne : {averageRating}/5</p>
          </div>
        </div>
      </section>

      <section className="testimonials-carousel section">
        <div className="container">
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Précédent">
              ‹
            </button>
            
            <div className="testimonial-image-wrapper">
              <img 
                src={reviewImages[currentIndex]} 
                alt={`Témoignage ${currentIndex + 1}`}
                className="testimonial-image"
              />
            </div>

            <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Suivant">
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {reviewImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="leave-review section">
        <div className="container">
          <div className="review-box">
            <h2>Partagez votre expérience</h2>
            <p>Votre avis nous aide à améliorer nos services</p>
            <a href="/contact" className="btn btn-accent">
              Laissez votre avis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

