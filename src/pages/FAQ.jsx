import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
   
    {
      question: 'Quel est le format des cours ?',
      answer: 'Les cours peuvent se dérouler en ligne via notre plateforme interactive avec tableau blanc digital, ou en présentiel selon vos préférences. Chaque séance dure généralement 2h et est adaptée au rythme de l\'élève.'
    },
    {
      question: 'Comment sont sélectionnés les tuteurs ?',
      answer: 'Nos tuteurs sont sélectionnés selon des critères stricts : expertise académique vérifiée, compétences pédagogiques testées, passion pour l\'enseignement et engagement envers la réussite des élèves. Ils suivent également une formation continue.'
    },
    {
      question: 'Puis-je changer de tuteur si besoin ?',
      answer: 'Oui, absolument. Si la relation pédagogique ne convient pas ou si vous souhaitez un autre profil, nous vous proposons un autre tuteur sans frais supplémentaires. Votre satisfaction est notre priorité.'
    },
   
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      

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

    </div>
  );
};

export default FAQ;

