import React from 'react';

const TravHome = () => {
  const packages = [
    {
      id: 1,
      destination: 'Chitwan National Park',
      price: '$500',
      description: 'Explore the rich biodiversity with a 3-day jungle safari.',
      image: './assets/Chitwan.jpg',
    },
    {
      id: 2,
      destination: 'Pokhara',
      price: '$400',
      description: 'Enjoy serene lakes and breathtaking mountain views.',
      image: './assets/Pokhara.jpg',
    },
    {
      id: 3,
      destination: 'Mount Everest Base Camp',
      price: '$1000',
      description: 'Experience the grandeur of the world’s tallest mountain.',
      image: './assets/MountEverest.jpg',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">TravelTorch</h1>
          <nav className="space-x-6 flex">
            <a href="/" className="hover:text-blue-300">Home</a>
            <a href="/packages" className="hover:text-blue-300">Packages</a>
            <a href="/contact" className="hover:text-blue-300">Contact</a>
            <a href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Packages Section */}
      <main className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Available Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.destination}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{pkg.destination}</h3>
                <p className="text-gray-700">{pkg.description}</p>
                <p className="text-blue-600 font-bold mt-4">{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TravHome;
