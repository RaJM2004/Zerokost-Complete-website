import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RequestAccessModal from './components/RequestAccessModal';

// Pages
import Home from './pages/Home';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Customers from './pages/Customers';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-white w-full overflow-x-hidden">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
        <Footer />
        <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
