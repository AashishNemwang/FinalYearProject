import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TravHome from './pages/TravHome';
import TAdashboard from './pages/TAdashboard';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Traveler Home */}
        <Route path="/travhome" element={<TravHome />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Travel Agency Dashboard */}
        {/* <Route path="/agency" element={<TAdashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
