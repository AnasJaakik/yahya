import { Link } from 'react-router-dom';
import yahya from '../assets/yahya.png';
import aymen from '../assets/aymen.png';
import nea from '../assets/nea.png';
import ju from '../assets/ju.png';
import './Team.css';

const Team = () => {
  const tutors = [
    {
      id: 1,
      name: 'Yahya',
      specialty: 'Mathématiques & Physique',
      bio: 'Expert en mathématiques et physique avec plus de 5 ans d\'expérience. Spécialisé dans la préparation aux examens et concours.',
      image: yahya
    },
    {
      id: 2,
      name: 'Aymen',
      specialty: 'Mathématiques & informatique',
      bio: 'Passionné de mathématiques, j\'aide les élèves à surmonter leurs difficultés avec des méthodes pédagogiques innovantes.',
      image: aymen
    },
    {
      id: 3,
      name: 'Nea',
      specialty: 'Mathématiques & Physique',
      bio: 'Spécialiste en sciences physiques, je rends les concepts complexes accessibles grâce à des explications claires et des exemples concrets.',
      image: nea
    },
    {
      id: 4,
      name: 'Jules',
      specialty: 'Mathématiques & Physique',
      bio: 'Tuteur expérimenté en mathématiques et sciences, je m\'adapte à chaque élève pour maximiser son potentiel.',
      image: ju
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
                  <Link to="/contact" className="btn btn-primary">
                    Contacter ce tuteur
                  </Link>
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
              <h3>Expertise académique</h3>
              <p>Diplômes et compétences vérifiés dans leur domaine</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Pédagogie testée</h3>
              <p>Évaluation des capacités d'enseignement et de communication</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Passion & Engagement</h3>
              <p>Motivation et dévouement pour la réussite des élèves</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Formation continue</h3>
              <p>Mise à jour régulière des méthodes pédagogiques</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

