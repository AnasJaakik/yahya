import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Étudium</h3>
            <p>Depuis 2025, nous connectons élèves et tuteurs passionnés pour retrouver le goût de la réussite.</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/equipe">L'Équipe</Link></li>
              <li><Link to="/temoignages">Témoignages</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Maths Collège & Lycée</li>
              <li>Physique–Chimie</li>
              <li>Accompagnement Concours</li>
              <li>Préparation Bac & Brevet</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@etudium.fr</p>
            <p>Téléphone: +33 X XX XX XX XX</p>
            <Link to="/contact" className="btn btn-accent">Consultation gratuite</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Étudium. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

