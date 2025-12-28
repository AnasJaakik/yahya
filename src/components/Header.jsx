import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-etudium.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src={logo} alt="Étudium Logo" />
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/a-propos" 
                className={isActive('/a-propos') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={isActive('/services') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/equipe" 
                className={isActive('/equipe') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                L'Équipe
              </Link>
            </li>
            <li>
              <Link 
                to="/temoignages" 
                className={isActive('/temoignages') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={isActive('/faq') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`btn btn-accent ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

