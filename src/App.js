import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  const companyInfo = {
    name: "Pedro Ontiveros",
    lenderName: "John Doe",
    phone: "(555) 123-4567",
    email: "john@thelendingvillage.com"
  };

  return (
    <Router>
      <div className="App">
        <NavBar companyInfo={companyInfo} />
        <Home />
      </div>
    </Router>
  );
}

export default App;