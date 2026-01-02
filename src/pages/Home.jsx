import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import mainImage from '../assets/main.png';
import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const phrases = [
    "engagés pour la réussite scolaire.",
    "un tutorat humain et structuré.",
    "des progrès visibles, séance après séance.",
    "des tuteurs qui font la différence.",
    "l'éducation, prise au sérieux."
  ];

  // Text Rotation Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500); // Change phrase every 3.5 seconds
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>L'excellence académique commence par un bon accompagnement</h1>
              
              <div className="hero-subtitle">
                <span className="static-text">Nous sommes </span>
                <div className="rotating-wrapper">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="dynamic-text"
                    >
                      {phrases[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className="hero-description">
              Depuis 2023, Étudium accompagne les élèves dans leur progression scolaire, avec un suivi personnalisé, humain et adapté à chaque parcours.
              </p>
              <Link to="/contact" className="btn btn-accent">
                Demandez une consultation gratuite
              </Link>
            </div>
            <div className="hero-image">
              <img src={mainImage} alt="Binôme élève–tuteur" className="hero-main-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview section">
  <div className="container">
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">🎓</div>
        <div className="stat-text-wrapper">
          <h3>50+ étudiants accompagnés</h3>
          <p>Notre équipe a soutenu plusieurs dizaines d'étudiants dans leur parcours scolaire, en les aidant à consolider leurs bases et à viser l'excellence académique.</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🧠</div>
        <div className="stat-text-wrapper">
          <h3>Tuteurs étudiants en ingénierie</h3>
          <p>Tous nos tuteurs sont des étudiants en ingénierie, spécialisés dans les matières qu'ils enseignent : mathématiques, physique et informatique.</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">📘</div>
        <div className="stat-text-wrapper">
          <h3>Secondaire • Cégep • Université</h3>
          <p>Nous accompagnons des élèves à tous les niveaux, incluant le système québécois et le système français, avec une approche adaptée à chaque parcours.</p>
        </div>
      </div>
    </div>
  </div>
</section>



      <section className="consultation-form section">
        <div className="container">
          <div className="form-container">
            <h2>Demandez votre consultation gratuite</h2>
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
                    <option value="informatique">Informatique</option>
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

