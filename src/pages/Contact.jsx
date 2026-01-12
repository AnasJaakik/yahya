import { useState } from 'react';
import './Contact.css';
import { sendEmail, formatFormData } from '../utils/emailService';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

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

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables (only in development)
    if (import.meta.env.DEV) {
      console.log('EmailJS Config Check:', {
        serviceId: serviceId ? `${serviceId.substring(0, 10)}...` : 'missing',
        templateId: templateId ? `${templateId.substring(0, 10)}...` : 'missing',
        publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'missing'
      });
    }

    // Check if credentials are configured
    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' || 
        templateId === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      const isProduction = import.meta.env.PROD;
      setFormStatus({
        type: 'error',
        message: isProduction 
          ? 'Configuration EmailJS manquante. Veuillez configurer les variables d\'environnement sur votre plateforme d\'hébergement (Vercel/Netlify).'
          : 'Configuration EmailJS manquante. Veuillez configurer les identifiants dans le fichier .env'
      });
      setIsSubmitting(false);
      return;
    }

    // Format data for EmailJS template
    const templateParams = formatFormData(data);

    // Send email
    const result = await sendEmail(serviceId, templateId, templateParams, publicKey);

    if (result.success) {
      setFormStatus({
        type: 'success',
        message: 'Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.'
      });
      e.target.reset();
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    } else {
      console.error('EmailJS Error:', result.error);
      const errorMessage = result.error?.message || 'Une erreur est survenue lors de l\'envoi.';
      setFormStatus({
        type: 'error',
        message: `Erreur: ${errorMessage}. Veuillez réessayer ou nous contacter directement.`
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1>Contactez-nous!</h1>
          <p className="lead-text">
            Réservez votre consultation gratuite et découvrez comment nous pouvons vous aider
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <h3>Coordonnées</h3>
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <strong>Email</strong>
                    <p>info.etudium@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <strong>Téléphone</strong>
                    <p>+1 (514) 704-3716</p>
                  </div>
                </div>
              </div>
            </div>

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
                {formStatus.message && (
                  <div className={`form-message ${formStatus.type}`}>
                    {formStatus.message}
                  </div>
                )}
                <button 
                  type="submit" 
                  className="btn btn-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

