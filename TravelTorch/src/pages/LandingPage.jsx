import React, { useState, useEffect } from 'react';
import hero1 from '../assets/Ilam.jpg';
import hero2 from '../assets/Lhotse.jpg';
import hero3 from '../assets/Bardiya.jpg';
import Package1 from '../assets/package1.jpg';
import Package2 from '../assets/package2.jpg';
import Package3 from '../assets/package3.jpg';

const images = [hero1, hero2, hero3];

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Slideshow Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0  text-white py-4 z-10">
        <div className="container mx-auto flex justify-between items-center px-9 py-4">
          <h1 className="text-2xl font-bold">TravelTorch</h1>
          <nav className="space-x-6 flex">
            <a href="/destinations" className="hover:text-blue-300">Destinations</a>
            <a href="/travhome" className="hover:text-blue-300">Travel Packages</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex min-h-screen items-center px-10">
        {/* Left Side - Welcome & Signup */}
        <div className="w-1/2 text-white p-10">
          <h2 className="text-5xl font-bold mb-6">Welcome to TravelTorch</h2>
          <p className="text-lg mb-8">
            Are you a traveler looking for exciting travel packages? Or are you an agency ready to showcase amazing destinations? Select your role to get started.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/travhome" className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
              I’m a Traveler
            </a>
            <a href="/signup" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
              I’m a Travel Agency
            </a>
          </div>
        </div>

        {/* Right Side - Featured Packages */}
        <div className="w-1/2 bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Featured Travel Packages</h3>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-100 bg-opacity-50 p-4 rounded-lg shadow">
              <img src={Package1} alt="Beach Getaway" className="w-24 h-24 rounded-lg object-cover mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Beach Getaway</h4>
                <p className="text-gray-600 text-sm">Relax on pristine beaches with all-inclusive luxury.</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-100 bg-opacity-50 p-4 rounded-lg shadow">
              <img src={Package2} alt="Mountain Adventure" className="w-24 h-24 rounded-lg object-cover mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Mountain Adventure</h4>
                <p className="text-gray-600 text-sm">Experience thrilling hikes and breathtaking views.</p>

              </div>
            </div>

            <div className="flex items-center bg-gray-100 bg-opacity-50 p-4 rounded-lg shadow">
              <img src={Package3} alt="City Explorer" className="w-24 h-24 rounded-lg object-cover mr-4" />
              <div>
                <h4 className="text-lg font-semibold">City Explorer</h4>
                <p className="text-gray-600 text-sm">Discover the best urban spots with expert guides.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
