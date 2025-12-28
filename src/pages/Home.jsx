import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Section Héros */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Visez plus haut avec Étudium</h1>
              <p className="hero-subtitle">Cours particuliers expertisés – Maths, Physique & Sciences</p>
              <p className="hero-description">
                Depuis 2025, Étudium connecte élèves et tuteurs passionnés, experts en sciences, 
                pour retrouver le goût de la réussite.
              </p>
              <Link to="/contact" className="btn btn-accent">
                Demandez une consultation gratuite
              </Link>
            </div>
            <div className="hero-image">
              <div className="hero-placeholder">
                <span>Binôme élève–tuteur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C'est quoi Étudium */}
      <section className="about-preview section">
        <div className="container">
          <h2>C'est quoi Étudium ?</h2>
          <div className="about-content">
            <p>
              Depuis 2025, Étudium connecte élèves et tuteurs passionnés, experts en sciences, 
              pour retrouver le goût de la réussite. Face aux réformes scolaires et au manque de soutien, 
              nous proposons un accompagnement sur-mesure, en ligne ou en présentiel.
            </p>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>Viser l'objectif à chaque séance</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💙</div>
                <h3>Bienveillance</h3>
                <p>Suivi humain et rassurant</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>Dynamisme</h3>
                <p>Méthodes interactives</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Outils numériques de dernière génération</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Aperçu des services */}
      <section className="services-preview section">
        <div className="container">
          <h2>Nos expertises pédagogiques</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3>Maths Collège & Lycée</h3>
              <p>Renforcement des fondamentaux et préparation aux examens</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚗️</div>
              <h3>Physique–Chimie</h3>
              <p>Compréhension approfondie des concepts scientifiques</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Accompagnement Concours & Examens</h3>
              <p>Préparation intensive pour réussir vos objectifs</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Préparation Bac & Brevet</h3>
              <p>Stratégies et méthodes pour exceller aux examens</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-outline">
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire de consultation */}
      <section className="consultation-form section">
        <div className="container">
          <div className="form-container">
            <h2>Réservez votre diagnostic gratuit</h2>
            <p>Remplissez le formulaire et nous vous contacterons dans les plus brefs délais</p>
            <form className="consultation-form-content">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nom">Nom *</label>
                  <input type="text" id="nom" name="nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">Prénom *</label>
                  <input type="text" id="prenom" name="prenom" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Téléphone *</label>
                  <input type="tel" id="telephone" name="telephone" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="niveau">Niveau *</label>
                  <select id="niveau" name="niveau" required>
                    <option value="">Sélectionnez un niveau</option>
                    <option value="6eme">6ème</option>
                    <option value="5eme">5ème</option>
                    <option value="4eme">4ème</option>
                    <option value="3eme">3ème</option>
                    <option value="2nde">2nde</option>
                    <option value="1ere">1ère</option>
                    <option value="terminale">Terminale</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="matiere">Matière *</label>
                  <select id="matiere" name="matiere" required>
                    <option value="">Sélectionnez une matière</option>
                    <option value="maths">Mathématiques</option>
                    <option value="physique">Physique-Chimie</option>
                    <option value="sciences">Sciences</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Décrivez vos besoins..."></textarea>
              </div>
              <button type="submit" className="btn btn-accent">
                Je réserve mon diagnostic
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

