import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1>Nos expertises pédagogiques</h1>
          <p className="lead-text">
            Nos programmes s'ajustent à vos ambitions et à votre rythme
          </p>
        </div>
      </section>

      <section className="packs section">
        <div className="container">
          <h2>Offres modulables</h2>
          <div className="packs-grid">
            <div className="pack-card bronze">
              <div className="pack-header">
                <h3>Pack Bronze</h3>
                <div className="pack-price">4 séances/mois</div>
              </div>
              <div className="pack-content">
                <p className="pack-description">Consolidation des fondamentaux</p>
                <ul className="pack-features">
                  <li>✓ 4 séances par mois</li>
                  <li>✓ Évaluation diagnostique</li>
                  <li>✓ Suivi des progrès</li>
                  <li>✓ Support par email</li>
                </ul>
                <Link to="/contact" className="btn btn-outline">
                  Choisir ce pack
                </Link>
              </div>
            </div>

            <div className="pack-card silver featured">
              <div className="pack-badge">Populaire</div>
              <div className="pack-header">
                <h3>Pack Argent</h3>
                <div className="pack-price">8 séances/mois</div>
              </div>
              <div className="pack-content">
                <p className="pack-description">Progrès rapides</p>
                <ul className="pack-features">
                  <li>✓ 8 séances par mois</li>
                  <li>✓ Évaluation diagnostique</li>
                  <li>✓ Contenus personnalisés</li>
                  <li>✓ Suivi des progrès en ligne</li>
                  <li>✓ Support prioritaire</li>
                </ul>
                <Link to="/contact" className="btn btn-accent">
                  Choisir ce pack
                </Link>
              </div>
            </div>

            <div className="pack-card gold">
              <div className="pack-header">
                <h3>Pack Or</h3>
                <div className="pack-price">12 séances/mois</div>
              </div>
              <div className="pack-content">
                <p className="pack-description">Préparation intensive</p>
                <ul className="pack-features">
                  <li>✓ 12 séances par mois</li>
                  <li>✓ Évaluation diagnostique</li>
                  <li>✓ Contenus personnalisés</li>
                  <li>✓ Plateforme interactive</li>
                  <li>✓ Tableau blanc digital</li>
                  <li>✓ Support 24/7</li>
                </ul>
                <Link to="/contact" className="btn btn-outline">
                  Choisir ce pack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology section">
        <div className="container">
          <h2>Méthodologie & Outils</h2>
          <div className="methodology-grid">
            <div className="methodology-item">
              <div className="methodology-icon">📊</div>
              <h3>Évaluation diagnostique offerte</h3>
              <p>Premier rendez-vous gratuit pour identifier vos besoins et définir un parcours personnalisé</p>
            </div>
            <div className="methodology-item">
              <div className="methodology-icon">📝</div>
              <h3>Contenus personnalisés</h3>
              <p>Chaque cours est adapté à votre niveau, vos objectifs et votre style d'apprentissage</p>
            </div>
            <div className="methodology-item">
              <div className="methodology-icon">💻</div>
              <h3>Plateforme interactive & tableau blanc digital</h3>
              <p>Outils modernes pour un apprentissage engageant et efficace, en ligne ou en présentiel</p>
            </div>
            <div className="methodology-item">
              <div className="methodology-icon">📈</div>
              <h3>Suivi des progrès en ligne</h3>
              <p>Tableau de bord pour suivre vos améliorations et visualiser votre progression</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subjects section">
        <div className="container">
          <h2>Matières proposées</h2>
          <div className="subjects-grid">
            <div className="subject-card">
              <h3>Mathématiques</h3>
              <p className="subject-level">Collège & Lycée</p>
              <ul>
                <li>Algèbre</li>
                <li>Géométrie</li>
                <li>Analyse</li>
                <li>Probabilités</li>
                <li>Statistiques</li>
              </ul>
            </div>
            <div className="subject-card">
              <h3>Physique-Chimie</h3>
              <p className="subject-level">Collège & Lycée</p>
              <ul>
                <li>Mécanique</li>
                <li>Électricité</li>
                <li>Thermodynamique</li>
                <li>Chimie organique</li>
                <li>Chimie inorganique</li>
              </ul>
            </div>
            <div className="subject-card">
              <h3>Préparation Examens</h3>
              <p className="subject-level">Brevet & Bac</p>
              <ul>
                <li>Révision intensive</li>
                <li>Annales corrigées</li>
                <li>Stratégies d'examen</li>
                <li>Gestion du stress</li>
                <li>Simulations d'épreuves</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

