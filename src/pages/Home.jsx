import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import mainImage from '../assets/main.png';
import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      nom: formData.get('nom'),
      prenom: formData.get('prenom'),
      email: formData.get('email'),
      telephone: formData.get('telephone'),
      niveau: formData.get('niveau'),
      matiere: formData.get('matiere'),
      message: formData.get('message')
    };

    try {
      console.log('Données du formulaire:', data);
      setFormStatus({
        type: 'success',
        message: 'Merci ! Votre demande a été envoyée. Nous vous contacterons dans les plus brefs délais.'
      });
      e.target.reset();
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
      });
    }
  };

  const phrases = [
    "engagés pour la réussite scolaire.",
    "un tutorat personnalisé et structuré.",
    "des progrès visibles.",
    "des tuteurs qui font la différence.",
    "l'enseignement, pris au sérieux.",
    "le chemin vers l'apprentissage"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>L'excellence&nbsp;académique commence par un bon accompagnement</h1>
              <div className="hero-subtitle">
                <span className="static-text">Nous sommes&nbsp;</span>
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
                <p>Notre équipe accompagne des dizaines d’élèves dans leur parcours scolaire, en les aidant à consolider leurs bases et à progresser avec méthode et confiance.</p>
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
                <p>Nous accompagnons des élèves à tous les niveaux, dans le système québécois comme dans le système français, avec un suivi adapté à chaque parcours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REPLICATED GRID SECTION --- */}
      <section className="benefits section">
        <div className="container">
          <h2 className="benefits-subtitle">Ce qui attend l'élève dès la première séance</h2>
          <div className="benefits-grid">
            <div className="benefit-card tall">
              <h3>Nos tuteurs assurent la clarté sur les sujets difficiles</h3>
              <p>Notre approche encourage les élèves à demander "Pourquoi" avant de demander "Comment", en s'assurant qu'ils comprennent les procédures dans chaque sujet et la raison pour laquelle ces étapes sont utilisées. Cette méthode s'est avérée très efficace et donne de meilleurs résultats.</p>
              <div className="card-decoration">💡</div>
            </div>
            <div className="benefit-card wide">
              <h3>Plan éducatif personnalisé pour votre enfant</h3>
              <p>Obtenez la meilleure aide avec notre approche d'apprentissage personnalisée, notre programme reconnu et notre soutien aux devoirs. Nous nous adapterons aux besoins de votre enfant pour améliorer significativement ses performances académiques.</p>
            </div>
            <div className="benefit-card">
              <h3>Tutorat individuel dans un environnement bienveillant</h3>
              <p>Aucune distraction, communication en tête-à-tête avec le tuteur en ligne. Le tutorat permet aux élèves de se concentrer sur l'apprentissage grâce à des exercices interactifs en sciences et informatique.</p>
            </div>
            <div className="benefit-card">
              <h3>Tuteur personnel et plateforme pour les cours</h3>
              <p>Classes interactives basées sur un programme engageant, sélectionné selon l'âge, les objectifs et les intérêts de votre élève.</p>
              <div className="card-decoration-bottom">✨</div>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-form section">
        <div className="container">
          <div className="form-container">
            <h2>Demandez votre consultation gratuite</h2>
            <p>Remplissez le formulaire et nous vous contacterons dans les plus brefs délais</p>
            <form className="consultation-form-content" onSubmit={handleFormSubmit}>
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
              {formStatus.message && (
                <div className={`form-message ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
              <button type="submit" className="btn btn-accent">
                Je réserve ma consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

