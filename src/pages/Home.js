import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Expert guidance through every step of your home buying journey</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Families Helped</p>
        </div>
        <div className="stat-item">
          <h3>$200M+</h3>
          <p>Loans Funded</p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      <section className="services">
        <h2>How I Can Help</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Purchase Loans</h3>
            <p>Find the perfect loan for your new home purchase</p>
          </div>
          <div className="service-card">
            <h3>Refinancing</h3>
            <p>Lower your monthly payments or get cash from your equity</p>
          </div>
          <div className="service-card">
            <h3>First-Time Buyers</h3>
            <p>Special programs and guidance for first-time homebuyers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;