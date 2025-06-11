import './Home.css';
import pedroImage from '../assets/pedro.png';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Financing Made Simple</h1>
          <p className="subheadline">Your trusted mortgage advisor — here to help in English & Español.</p>
          <div className="bilingual-toggle">
            <span className="bilingual-text">¿Hablas español? ¡Yo también!</span>
          </div>
          <button className="cta-button">Get Pre-Approved Today</button>
        </div>
        <div className="professional-photo">
          <img src={pedroImage} alt="Professional headshot" className="advisor-photo" />
          <div className="intro-tagline">
            <h3>Meet Your Mortgage Expert</h3>
            <p>With 15+ years of experience, I'm here to guide you through every step of your home financing journey.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Customers Served</p>
        </div>
        <div className="stat-item">
          <h3>Efficient Closings</h3>
          <p></p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Years in Business</p>
        </div>
      </section>

      <section className="loan-programs">
        <div className="container">
          <h2>Loan Programs I Offer</h2>
          <p className="section-subtitle">Find the perfect financing solution tailored to your unique situation</p>

          <div className="loan-grid">
            <div className="loan-card">
              <div className="loan-icon">🏠</div>
              <h3>FHA Loans</h3>
              <p>Low down payment options with flexible credit requirements. Perfect for first-time buyers and those with limited savings.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🏛️</div>
              <h3>Conventional Loans</h3>
              <p>Traditional financing with competitive rates and terms. Great for borrowers with strong credit and stable income.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🇺🇸</div>
              <h3>VA Loans</h3>
              <p>Exclusive benefits for veterans and active military. No down payment required and no private mortgage insurance.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🌾</div>
              <h3>USDA Loans</h3>
              <p>Zero down payment loans for eligible rural and suburban areas. Designed to help families achieve homeownership.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">📄</div>
              <h3>Bank Statement Loans</h3>
              <p>Alternative income verification for self-employed borrowers. Use bank statements instead of traditional tax returns.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">📊</div>
              <h3>DSCR Loans</h3>
              <p>Investment property financing based on rental income potential. No personal income verification required.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🏢</div>
              <h3>Investor Loans</h3>
              <p>Specialized financing for real estate investors. Multiple property financing options with competitive terms.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card">
              <div className="loan-icon">🔑</div>
              <h3>First-Time Home Buyer Programs</h3>
              <p>Special assistance programs with down payment help and educational resources for first-time buyers.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>

            <div className="loan-card featured">
              <div className="loan-icon">✨</div>
              <h3>More Options Available</h3>
              <p>Every situation is unique. Let's discuss custom solutions tailored to your specific financial goals and needs.</p>
              <button className="learn-more-btn primary">Contact Me</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;