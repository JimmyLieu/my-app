import './Home.css';
import pedroImage from '../assets/pedro.png';
import videoFile from '../assets/IMG_7795.MOV';
import { useState } from 'react';

const translations = {
  en: {
    title: "Financing Made Simple",
    subheadline: "Your trusted mortgage advisor — here to help in English & Español.",
    bilingualText: "¿Hablas español? ¡Yo también!",
    ctaButton: "Get Pre-Approved Today",
    meetExpert: "Meet Your Mortgage Expert",
    expertDescription: "I proudly serve both English and Spanish-speaking clients throughout Texas and beyond.",
    loanPrograms: "Loan Programs I Offer",
    sectionSubtitle: "Find the perfect financing solution tailored to your unique situation",
    fhaLoans: {
      title: "FHA Loans",
      description: "Low down payment options with flexible credit requirements. Perfect for first-time buyers and those with limited savings."
    },
    conventionalLoans: {
      title: "Conventional Loans",
      description: "Traditional financing with competitive rates and terms. Great for borrowers with strong credit and stable income."
    },
    vaLoans: {
      title: "VA Loans",
      description: "Exclusive benefits for veterans and active military. No down payment required and no private mortgage insurance."
    },
    usdaLoans: {
      title: "USDA Loans",
      description: "Zero down payment loans for eligible rural and suburban areas. Designed to help families achieve homeownership."
    },
    bankStatementLoans: {
      title: "Bank Statement Loans",
      description: "Alternative income verification for self-employed borrowers. Use bank statements instead of traditional tax returns."
    },
    dscrLoans: {
      title: "DSCR Loans",
      description: "Investment property financing based on rental income potential. No personal income verification required."
    },
    investorLoans: {
      title: "Investor Loans",
      description: "Specialized financing for real estate investors. Multiple property financing options with competitive terms."
    },
    firstTimeBuyer: {
      title: "First-Time Home Buyer Programs",
      description: "Special assistance programs with down payment help and educational resources for first-time buyers."
    },
    moreOptions: {
      title: "More Options Available",
      description: "Every situation is unique. Let's discuss custom solutions tailored to your specific financial goals and needs.",
      button: "Contact Me"
    }
  },
  es: {
    title: "Financiamiento Simplificado",
    subheadline: "Su asesor hipotecario de confianza — aquí para ayudar en Inglés y Español.",
    bilingualText: "Do you speak English? I do too!",
    ctaButton: "Obtenga Pre-Aprobación Hoy",
    meetExpert: "Conozca a Su Experto Hipotecario",
    expertDescription: "Con orgullo sirvo a clientes de habla inglesa y española en Texas y más allá.",
    loanPrograms: "Programas de Préstamos que Ofrezco",
    sectionSubtitle: "Encuentre la solución de financiamiento perfecta adaptada a su situación única",
    fhaLoans: {
      title: "Préstamos FHA",
      description: "Opciones de pago inicial bajo con requisitos de crédito flexibles. Perfecto para compradores primerizos y aquellos con ahorros limitados."
    },
    conventionalLoans: {
      title: "Préstamos Convencionales",
      description: "Financiamiento tradicional con tasas y términos competitivos. Excelente para prestatarios con buen crédito e ingresos estables."
    },
    vaLoans: {
      title: "Préstamos VA",
      description: "Beneficios exclusivos para veteranos y militares activos. No requiere pago inicial ni seguro hipotecario privado."
    },
    usdaLoans: {
      title: "Préstamos USDA",
      description: "Préstamos sin pago inicial para áreas rurales y suburbanas elegibles. Diseñados para ayudar a las familias a lograr la propiedad de vivienda."
    },
    bankStatementLoans: {
      title: "Préstamos con Estados de Cuenta Bancarios",
      description: "Verificación de ingresos alternativa para prestatarios independientes. Use estados de cuenta bancarios en lugar de declaraciones de impuestos tradicionales."
    },
    dscrLoans: {
      title: "Préstamos DSCR",
      description: "Financiamiento de propiedades de inversión basado en el potencial de ingresos por alquiler. No se requiere verificación de ingresos personales."
    },
    investorLoans: {
      title: "Préstamos para Inversionistas",
      description: "Financiamiento especializado para inversionistas inmobiliarios. Múltiples opciones de financiamiento de propiedades con términos competitivos."
    },
    firstTimeBuyer: {
      title: "Programas para Compradores Primerizos",
      description: "Programas de asistencia especial con ayuda para el pago inicial y recursos educativos para compradores primerizos."
    },
    moreOptions: {
      title: "Más Opciones Disponibles",
      description: "Cada situación es única. Hablemos de soluciones personalizadas adaptadas a sus objetivos y necesidades financieras específicas.",
      button: "Contácteme"
    }
  }
};

const Home = () => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const [showModal, setShowModal] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home">
      {showModal && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <video controls autoPlay style={{ width: '100%', borderRadius: '10px' }}>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.title}</h1>
          <p className="subheadline">{t.subheadline}</p>
          <div className="bilingual-toggle">
            <span className="bilingual-text">{t.bilingualText}</span>
          </div>
          <button className="cta-button">{t.ctaButton}</button>
          <button 
            className="cta-button" 
            onClick={toggleLanguage}
            style={{ marginLeft: '1rem' }}
          >
            {language === 'en' ? 'Español' : 'English'}
          </button>
        </div>
        <div className="professional-photo">
          <img src={pedroImage} alt="Professional Headshot" className="advisor-photo" />
          <div className="intro-tagline">
            <h3>{t.meetExpert}</h3>
            <p>{t.expertDescription}</p>
          </div>
        </div>
      </section>

      <section className="loan-programs">
        <div className="container">
          <h2>{t.loanPrograms}</h2>
          <p className="section-subtitle">{t.sectionSubtitle}</p>

          <div className="loan-grid">
            <div className="loan-card">
              <div className="loan-icon">🏠</div>
              <h3>{t.fhaLoans.title}</h3>
              <p>{t.fhaLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🏛️</div>
              <h3>{t.conventionalLoans.title}</h3>
              <p>{t.conventionalLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🇺🇸</div>
              <h3>{t.vaLoans.title}</h3>
              <p>{t.vaLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🌾</div>
              <h3>{t.usdaLoans.title}</h3>
              <p>{t.usdaLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">📄</div>
              <h3>{t.bankStatementLoans.title}</h3>
              <p>{t.bankStatementLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">📊</div>
              <h3>{t.dscrLoans.title}</h3>
              <p>{t.dscrLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🏢</div>
              <h3>{t.investorLoans.title}</h3>
              <p>{t.investorLoans.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🔑</div>
              <h3>{t.firstTimeBuyer.title}</h3>
              <p>{t.firstTimeBuyer.description}</p>
              <button className="learn-more-btn" onClick={openModal}>Learn More</button>
            </div>

            <div className="loan-card featured">
              <div className="loan-icon">✨</div>
              <h3>{t.moreOptions.title}</h3>
              <p>{t.moreOptions.description}</p>
              <button className="learn-more-btn primary">{t.moreOptions.button}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;