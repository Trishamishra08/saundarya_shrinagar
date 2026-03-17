import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-light">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutSection />} />
            {/* You can add more routes here as you build more pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
