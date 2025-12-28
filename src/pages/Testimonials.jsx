import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Léa',
      class: 'Terminale S',
      text: 'Grâce à Étudium, j\'ai gagné 4 points de moyenne en mathématiques. Mon tuteur a su m\'expliquer les concepts de manière claire et m\'a redonné confiance.',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas',
      class: '1ère',
      text: 'Excellent accompagnement ! Les cours sont bien structurés et adaptés à mon niveau. Je recommande vivement.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophie',
      class: '3ème',
      text: 'Mon fils a fait d\'énormes progrès depuis qu\'il suit les cours avec Étudium. L\'approche pédagogique est vraiment efficace.',
      rating: 5
    },
    {
      id: 4,
      name: 'Marc',
      class: 'Terminale',
      text: 'La préparation au bac était parfaite. J\'ai réussi mon examen grâce au soutien de mon tuteur. Merci Étudium !',
      rating: 5
    },
    {
      id: 5,
      name: 'Emma',
      class: '2nde',
      text: 'Les cours en ligne sont très pratiques et le tableau blanc digital est génial. Je comprends beaucoup mieux maintenant.',
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const averageRating = 4.8;

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
                <span key={i} className={i < Math.floor(averageRating) ? 'star filled' : 'star'}>
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
            
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{currentTestimonial.text}</p>
              <div className="testimonial-author">
                <h3>{currentTestimonial.name}</h3>
                <p className="testimonial-class">{currentTestimonial.class}</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < currentTestimonial.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Suivant">
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
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

