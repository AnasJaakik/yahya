import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1>Mission & Valeurs</h1>
          <p className="lead-text">
            Depuis 2025, Étudium connecte élèves et tuteurs passionnés, experts en sciences, 
            pour retrouver le goût de la réussite.
          </p>
        </div>
      </section>

      <section className="mission section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Notre Mission</h2>
              <p>
                Face aux réformes scolaires et au manque de soutien, nous proposons un accompagnement 
                sur-mesure, en ligne ou en présentiel. Notre objectif est de redonner confiance aux élèves 
                et de les accompagner vers la réussite académique.
              </p>
              <p>
                Chaque élève est unique, avec ses propres défis et objectifs. C'est pourquoi nous 
                adaptons notre approche pédagogique à chaque profil, en privilégiant la compréhension 
                profonde plutôt que le simple apprentissage par cœur.
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-placeholder">
                <span>Mission Étudium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Excellence</h3>
              <p>Viser l'objectif à chaque séance. Nous nous engageons à fournir un enseignement 
              de qualité supérieure qui permet à chaque élève d'atteindre son plein potentiel.</p>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Bienveillance</h3>
              <p>Suivi humain et rassurant. Nous créons un environnement sécurisant où chaque élève 
              peut apprendre à son rythme sans pression excessive.</p>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Dynamisme</h3>
              <p>Méthodes interactives. Nos cours sont conçus pour être engageants et stimulants, 
              utilisant des approches pédagogiques modernes et variées.</p>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Innovation</h3>
              <p>Outils numériques de dernière génération. Nous intégrons les technologies les plus 
              récentes pour enrichir l'expérience d'apprentissage et faciliter la compréhension.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach section">
        <div className="container">
          <h2>Notre Approche</h2>
          <div className="approach-steps">
            <div className="step">
              <div className="step-icon">1</div>
              <h3>Évaluation initiale</h3>
              <p>Diagnostic gratuit pour identifier les besoins et définir les objectifs</p>
            </div>
            <div className="step">
              <div className="step-icon">2</div>
              <h3>Programme personnalisé</h3>
              <p>Création d'un parcours adapté au niveau et aux ambitions de l'élève</p>
            </div>
            <div className="step">
              <div className="step-icon">3</div>
              <h3>Accompagnement régulier</h3>
              <p>Suivi continu avec ajustements selon les progrès réalisés</p>
            </div>
            <div className="step">
              <div className="step-icon">4</div>
              <h3>Mesure des résultats</h3>
              <p>Évaluation régulière des progrès et célébration des réussites</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

