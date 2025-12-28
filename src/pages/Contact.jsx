import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p className="lead-text">
            Réservez votre consultation gratuite et découvrez comment nous pouvons vous aider
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Formulaire de contact</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Décrivez vos besoins, vos objectifs ou posez vos questions..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-accent">
                  Envoyer ma demande
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h3>Coordonnées</h3>
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <strong>Email</strong>
                    <p>contact@etudium.fr</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <strong>Téléphone</strong>
                    <p>+33 X XX XX XX XX</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div>
                    <strong>Horaires</strong>
                    <p>Lun - Ven : 9h - 20h<br />Sam : 10h - 18h</p>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Pourquoi nous choisir ?</h3>
                <ul className="benefits-list">
                  <li>✓ Consultation gratuite</li>
                  <li>✓ Tuteurs experts sélectionnés</li>
                  <li>✓ Programme personnalisé</li>
                  <li>✓ Suivi régulier des progrès</li>
                  <li>✓ Flexibilité horaire</li>
                  <li>✓ Cours en ligne ou présentiel</li>
                </ul>
              </div>

              <div className="map-container">
                <h3>Notre localisation</h3>
                <div className="map-placeholder">
                  <p>📍 Carte Google Maps</p>
                  <p className="map-note">Intégrez votre carte Google Maps ici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

