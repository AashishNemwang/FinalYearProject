import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TravHome from './pages/TravHome';
import TAdashboard from './pages/TAdashboard';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage'
import PackagePage from './pages/PackagePage';


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

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Travel Agency Dashboard */}
        <Route path="/agency" element={<TAdashboard />} />
        {/* Travel Package Page */}
        <Route path="/package" element={<PackagePage />} />
      </Routes>
        

    </Router>
  );
};

export default App;
