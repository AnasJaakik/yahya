import yahya from '../assets/yahya.png';
import aymen from '../assets/aymen.png';
import nea from '../assets/nea.png';
import ju from '../assets/ju.png';
import edmondo from '../assets/edmondo.png';
import './Team.css';

const Team = () => {
  const tutors = [
    {
      id: 1,
      name: 'Yahya',
      specialty: 'Mathématiques & Physique',
      bio: 'Étudiant en génie aérospatial',
      image: yahya
    },
    {
      id: 2,
      name: 'Aymen',
      specialty: 'Mathématiques & informatique',
      bio: 'Étudiant en génie logiciel',
      image: aymen
    },
    {
      id: 3,
      name: 'Nea',
      specialty: 'Mathématiques & Physique',
      bio: 'Étudiante en génie mécanique',
      image: nea
    },
    {
      id: 4,
      name: 'Jules',
      specialty: 'Mathématiques & Physique',
      bio: 'Étudiant en génie aérospatial',
      image: ju
    },
    {
      id: 5,
      name: 'Edmondo',
      specialty: 'Mathématiques & Physique',
      bio: 'Étudiant en génie aérospatial',
      image: edmondo
    }
  ];

  return (
    <div className="team-page">
      <section className="team-hero section">
        <div className="container">
          <h1>Des tuteurs passionnés à votre écoute</h1>
          <p className="lead-text">
            Experts sélectionnés pour leur pédagogie et leur engagement
          </p>
        </div>
      </section>

      <section className="tutors section">
        <div className="container">
          <div className="tutors-grid">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="tutor-card">
                <div className="tutor-image">
                  <img src={tutor.image} alt={tutor.name} />
                </div>
                <div className="tutor-info">
                  <h3>{tutor.name}</h3>
                  <p className="tutor-specialty">{tutor.specialty}</p>
                  <p className="tutor-bio">{tutor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="selection-process section">
        <div className="container">
          <h2>Notre processus de sélection</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Validation académique</h3>
              <p>Contrôles des diplômes et des spécialités enseignés</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Évaluation pédagogique structurée</h3>
              <p>Analyse des capacités d'enseignement via des mises en situation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Validation après le premier cours</h3>
              <p>Période test auprès d'élèves et analyse des retours.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Passion et engagement</h3>
              <p>Revue régulière de la qualité et mise à jour des méthodes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

