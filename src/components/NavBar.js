import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

const NavBar = ({ companyInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {companyInfo.name}
        </Link>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/mortgage-calculator" onClick={() => setIsOpen(false)}>Mortgage Calculator</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
            <a
              href="https://thelendingvillage.my1003app.com/2167513/register"
              className="apply-now-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;