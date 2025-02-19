import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import ChitwanImg from '../assets/Chitwan.jpg';
import PokharaImg from '../assets/Pokhara.jpg';
import EverestImg from '../assets/MountEverest.jpg';
import HeroImg from '../assets/pakHero.jpg';
import Trending1 from '../assets/trending1.jpg';
import Trending2 from '../assets/trending2.jpg';
import Trending3 from '../assets/trending3.jpg';

const TravHome = () => {
  const [filters, setFilters] = useState({
    destination: '',
    date: '',
    category: '',
  });

  const packages = [
    { id: 1, destination: 'Chitwan National Park', price: '$500', description: 'Explore the rich biodiversity with a 3-day jungle safari.', image: ChitwanImg },
    { id: 2, destination: 'Pokhara', price: '$400', description: 'Enjoy serene lakes and breathtaking mountain views.', image: PokharaImg },
    { id: 3, destination: 'Mount Everest Base Camp', price: '$1000', description: 'Experience the grandeur of the world’s tallest mountain.', image: EverestImg },
  ];

  const trendingDestinations = [
    { id: 1, name: 'Annapurna Base Camp', image: Trending1 },
    { id: 2, name: 'Boudhanath Stupa', image: Trending2 },
    { id: 3, name: 'Phewa Lake', image: Trending3 },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Navbar (Now More Visible) */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white py-4 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">TravelTorch</h1>
          <div className="space-x-6 flex font-semibold text-lg">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/packages" className="hover:text-gray-300">Packages</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search Filter */}
      <section className="relative h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${HeroImg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold">Find Your Perfect Destination</h1>
          <p className="mt-2 text-lg">Discover new places and experiences</p>

          {/* Filter/Search Section */}
          <div className="bg-gray-400 bg-opacity-25 p-6 rounded-lg mt-6 shadow-lg flex flex-wrap justify-center space-x-4 w-full max-w-3xl">
            <input 
              type="text" 
              name="destination" 
              placeholder="Destination" 
              onChange={handleFilterChange} 
              className="border border-gray-500 p-3 rounded w-40 focus:ring-2 focus:ring-green-500 text-gray-900"
            />
            <input 
              type="date" 
              name="date" 
              onChange={handleFilterChange} 
              className="border border-gray-300 p-3 rounded w-40 focus:ring-2 focus:ring-green-500 text-gray-900"
            />
            <select 
              name="category" 
              onChange={handleFilterChange} 
              className="border border-gray-300 p-3 rounded w-40 focus:ring-2 focus:ring-green-500 text-gray-900"
            >
              <option value="adventure">Adventure</option>
              <option value="beach">Trek</option>
              <option value="mountain">Mountain</option>
            </select>
            <button className="bg-gray-600 text-white  px-6 py-3 rounded-xl hover:bg-gray-700">Search</button>
          </div>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingDestinations.map((place) => (
            <div key={place.id} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover"/>
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-3 text-white text-center">
                <h3 className="text-lg font-bold">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Packages Section */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Available Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={pkg.image} alt={pkg.destination} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold">{pkg.destination}</h3>
                <p className="text-gray-700">{pkg.description}</p>
                <p className="text-blue-600 font-bold mt-4">{pkg.price}</p>
                <Link to={`/package/${pkg.id}`} className="block bg-blue-600 text-white text-center py-2 mt-4 rounded hover:bg-blue-700 transition">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 TravelTorch. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/packages" className="hover:text-gray-400">Packages</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravHome;
