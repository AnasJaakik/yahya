import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const faqs = [
    {
      question: 'Comment se déroule la première séance ?',
      answer: 'La première séance est une évaluation diagnostique gratuite. Le tuteur évalue le niveau de l\'élève, identifie les points forts et les difficultés, puis définit un programme personnalisé adapté aux objectifs.'
    },
    {
      question: 'Quel est le format des cours ?',
      answer: 'Les cours peuvent se dérouler en ligne via notre plateforme interactive avec tableau blanc digital, ou en présentiel selon vos préférences. Chaque séance dure généralement 1h30 et est adaptée au rythme de l\'élève.'
    },
    {
      question: 'Comment sont sélectionnés les tuteurs ?',
      answer: 'Nos tuteurs sont sélectionnés selon des critères stricts : expertise académique vérifiée, compétences pédagogiques testées, passion pour l\'enseignement et engagement envers la réussite des élèves. Ils suivent également une formation continue.'
    },
    {
      question: 'Puis-je changer de tuteur si besoin ?',
      answer: 'Oui, absolument. Si la relation pédagogique ne convient pas ou si vous souhaitez un autre profil, nous vous proposons un autre tuteur sans frais supplémentaires. Votre satisfaction est notre priorité.'
    },
    {
      question: 'Quels sont les moyens de paiement ?',
      answer: 'Nous acceptons les paiements par carte bancaire, virement bancaire, ou chèque. Les paiements peuvent être effectués mensuellement ou par pack. Des facilités de paiement sont disponibles sur demande.'
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: 'Quelle approche vous convient le mieux ?',
      options: [
        { value: 'theory', label: 'Théorie approfondie' },
        { value: 'practice', label: 'Pratique intensive' }
      ]
    },
    {
      id: 2,
      question: 'Préférez-vous travailler ?',
      options: [
        { value: 'group', label: 'En groupe' },
        { value: 'individual', label: 'En tête-à-tête' }
      ]
    },
    {
      id: 3,
      question: 'Quel est votre objectif principal ?',
      options: [
        { value: 'improve', label: 'Améliorer mes notes' },
        { value: 'exam', label: 'Réussir un examen spécifique' }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleQuizAnswer = (questionId, value) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: value });
  };

  const calculateResult = () => {
    const answers = Object.values(quizAnswers);
    if (answers.length < 3) {
      alert('Veuillez répondre à toutes les questions');
      return;
    }

    // Logique simple pour déterminer le pack recommandé
    const practiceCount = answers.filter(a => a === 'practice').length;
    const individualCount = answers.filter(a => a === 'individual').length;
    const examCount = answers.filter(a => a === 'exam').length;

    let recommendedPack = 'Bronze';
    if (examCount > 0 || (practiceCount > 0 && individualCount > 0)) {
      recommendedPack = 'Or';
    } else if (practiceCount > 0 || individualCount > 0) {
      recommendedPack = 'Argent';
    }

    setShowResult(true);
    return recommendedPack;
  };

  const recommendedPack = showResult ? calculateResult() : null;

  return (
    <div className="faq-page">
      <section className="faq-hero section">
        <div className="container">
          <h1>FAQ & Quiz Diagnostic</h1>
          <p className="lead-text">
            Trouvez les réponses à vos questions et découvrez le pack qui vous convient
          </p>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quiz-section section">
        <div className="container">
          <div className="quiz-container">
            <h2>Quiz Diagnostic</h2>
            <p className="quiz-intro">Répondez à ces 3 questions pour découvrir le pack qui vous convient le mieux</p>
            
            {!showResult ? (
              <div className="quiz-questions">
                {quizQuestions.map((q) => (
                  <div key={q.id} className="quiz-question">
                    <h3>{q.question}</h3>
                    <div className="quiz-options">
                      {q.options.map((option) => (
                        <label key={option.value} className="quiz-option">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option.value}
                            checked={quizAnswers[q.id] === option.value}
                            onChange={() => handleQuizAnswer(q.id, option.value)}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={calculateResult} className="btn btn-accent">
                  Voir ma recommandation
                </button>
              </div>
            ) : (
              <div className="quiz-result">
                <div className="result-icon">🎯</div>
                <h3>Pack recommandé : {recommendedPack}</h3>
                <p>
                  {recommendedPack === 'Or' && 'Avec vos objectifs, le Pack Or vous permettra une préparation intensive et personnalisée pour maximiser vos chances de réussite.'}
                  {recommendedPack === 'Argent' && 'Le Pack Argent est idéal pour vous accompagner dans vos progrès avec un suivi régulier et des contenus adaptés.'}
                  {recommendedPack === 'Bronze' && 'Le Pack Bronze vous permettra de consolider vos bases et de progresser à votre rythme.'}
                </p>
                <Link to="/contact" className="btn btn-accent">
                  Réservez votre pack
                </Link>
                <button onClick={() => { setShowResult(false); setQuizAnswers({}); }} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Refaire le quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

