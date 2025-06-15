import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MortgageCalculator from './pages/MortgageCalculator';
import Contact from './pages/Contact';

function App() {
  const companyInfo = {
    name: "Pedro Ontiveros",
    lenderName: "Pedro Ontiveros",
    phone: "(555) 123-4567",
    email: "pedro@thelendingvillage.com"
  };

  return (
    <Router>
      <div className="App">
        <NavBar companyInfo={companyInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;