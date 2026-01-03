import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Francis',
      date: '15 décembre 2025',
      text: 'Excellent tuteur! Il a le succès de ses élèves à coeur. Flexible dans ses horaires et ponctuel. Merci!!!',
      rating: 5
    },
    {
      name: 'Geneviève',
      date: '21 septembre 2025',
      text: 'J\'ai rarement rencontré une tutrice aussi patiente. Elle explique bien. Elle a décortiqué tout le cours de physique pour mieux me faire comprendre, elle a pris le temps qu\'il fallait et s\'assure que je comprenne bien, des exercices d\'applications. J\'ai tellement apprécié et je la recommande. Je vous remercie énormément.',
      rating: 5
    },
    {
      name: 'Ricardo Antonio',
      date: '16 juin 2025',
      text: 'Un tuteur exceptionnel que je recommande à 100 % ! Il m\'a énormément aidé à mieux comprendre la matière et à retrouver confiance en moi. Toujours patient, clair dans ses explications et très encourageant, il prend vraiment le temps de s\'assurer qu\'on comprend bien. Merci beaucoup frérot',
      rating: 5
    },
    {
      name: 'Melissa',
      date: '28 mai 2025',
      text: 'Tuteur à l\'écoute, marrant. J\'ai beaucoup progressé. Il rend la matière très intéressante.',
      rating: 5
    },
    {
      name: 'Raza',
      date: '17 mai 2025',
      text: 'Excellent tuteur, maîtrise bien tout ce qu\'il enseigne (math, physique de cégep). Toujours dispo, appelle même pour prendre des nouvelles et est très flexible et professionnel.',
      rating: 5
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

  const averageRating = 4.9;

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
            
            <div className="testimonial-card-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < currentTestimonial.rating ? 'star filled' : 'star'}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{currentTestimonial.text}"</p>
                <div className="testimonial-author">
                  <h3>{currentTestimonial.name}</h3>
                  <p className="testimonial-date">{currentTestimonial.date}</p>
                </div>
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

