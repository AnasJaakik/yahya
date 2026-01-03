import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="subjects section">
        <div className="container">
          <h2 className="services-title">📘 NOS SERVICES</h2>
          
          <div className="services-content">
            <div className="system-section">
              <h3 className="system-title">I. Système québécois</h3>
              
              <div className="level-section">
                <h4 className="level-title">1. Secondaire</h4>
                <p className="level-description">
                  Nous offrons un accompagnement en mathématiques pour l'ensemble du parcours du secondaire, du début à la fin, avec un soutien adapté au niveau et aux exigences scolaires de chaque école.
                </p>
                <p className="level-description">
                  En physique, l'accompagnement est offert pour le secondaire 5, avec un travail ciblé sur la compréhension des concepts préalables aux cours de cégep.
                </p>
                <div className="subjects-list">
                  <p className="subjects-label">Matières offertes :</p>
                  <ul>
                    <li>Mathématiques (secondaire 1 à 5)</li>
                    <li>Physique (secondaire 5)</li>
                  </ul>
                </div>
              </div>

              <div className="level-section">
                <h4 className="level-title">2. Cégep</h4>
                <p className="level-description">
                  Au niveau collégial, nous accompagnons les étudiants dans les cours fondamentaux de mathématiques, de physique et d'informatique, avec pour objectif d'atteindre la cote R la plus haute possible.
                </p>
                <div className="subjects-details">
                  <div className="subject-detail">
                    <h5>Mathématiques :</h5>
                    <ul>
                      <li>Calcul différentiel</li>
                      <li>Calcul intégral</li>
                      <li>Probabilités et statistiques</li>
                      <li>Algèbre vectorielle</li>
                    </ul>
                  </div>
                  <div className="subject-detail">
                    <h5>Physique :</h5>
                    <ul>
                      <li>Physique mécanique</li>
                      <li>Électricité et magnétisme</li>
                    </ul>
                  </div>
                  <div className="subject-detail">
                    <h5>Informatique :</h5>
                    <ul>
                      <li>Algorithmique et logique de programmation</li>
                      <li>Aide à la compréhension des concepts et des exercices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="system-section">
              <h3 className="system-title">II. Système français</h3>
              
              <div className="level-section">
              <p className="level-description">
                  Accompagnement en mathématiques, physique et informatique, par des tuteurs issus du programme français, avec un soutien axé sur la compréhension du cours, la méthodologie et la rédaction. En présentiel ou en distantiel.
                </p>
                <h4 className="level-title">1. Collège</h4>
               
                <div className="subjects-list">
                  <p className="subjects-label">Matières offertes :</p>
                  <ul className="arrow-list">
                    <li>Mathématiques</li>
                    <li>Physique</li>
                    
                  </ul>
                </div>
              </div>

              <div className="level-section">
                <h4 className="level-title">2. Lycée</h4>
               
                <div className="subjects-details">
                  
                  <div className="subject-detail">
                    <h5>Matières :</h5>
                    <ul className="arrow-list">
                      <li>Mathématiques</li>
                      <li>Physique</li>
                      <li>Informatique (NSI)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

