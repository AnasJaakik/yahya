import { useEffect, useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import mainImage from '../assets/main.png';
import './Home.css';

const Home = () => {
  const [init, setInit] = useState(false);
  const [index, setIndex] = useState(0);

  const phrases = [
    "engagés pour la réussite scolaire.",
    "un tutorat humain et structuré.",
    "des progrès visibles, séance après séance.",
    "des tuteurs qui font la différence.",
    "l'éducation, prise au sérieux."
  ];

  // Particle Engine Initialization
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Text Rotation Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500); // Change phrase every 3.5 seconds
    return () => clearInterval(timer);
  }, [phrases.length]);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 25,
          duration: 2,
          opacity: 0.8,
        },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      shape: {
        type: "char",
        options: {
          char: [
            { value: "∫", weight: "400" },
            { value: "Σ", weight: "400" },
            { value: "π", weight: "400" },
            { value: "∞", weight: "400" },
            { value: "√", weight: "400" },
            { value: "Δ", weight: "400" },
            { value: "ln", weight: "400" },
            { value: "eˣ", weight: "400" },
            { value: "dy/dx", weight: "400" }
          ],
          font: "serif",
          style: "italic"
        }
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      size: {
        value: { min: 10, max: 20 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="home">
      <section className="hero">
        {init && (
          <Particles
            id="tsparticles"
            className="hero-particles"
            options={particlesOptions}
          />
        )}
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
                Depuis 2025, Étudium connecte élèves et tuteurs passionnés, experts en sciences, 
                pour retrouver le goût de la réussite.
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

