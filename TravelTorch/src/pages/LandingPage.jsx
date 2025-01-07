import React from 'react';

const LandingPage = () => {
  return (
    <div>
     
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">TravelTorch</h1>
          <nav className="space-x-6 flex">
            <a href="/destinations" className="hover:text-blue-300">Destinations</a>
            <a href="/packages" className="hover:text-blue-300">Travel Packages</a>
            <a href="/agencies" className="hover:text-blue-300">Travel Agencies</a>
            <a href="/signup" className="hover:text-blue-300">Sign Up</a>
            <a href="/login" className="hover:text-blue-300">Log In</a>
          </nav>
        </div>
      </header>

     
      <main>
        <section className="relative bg-blue-100 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Explore the World with Ease</h2>
            <p className="text-gray-700 mb-6">
              Discover top destinations and plan your next trip effortlessly.
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
          <div className="mt-8">
            <img
              src=""
              alt="Chitwan National Park"
              className="mx-auto rounded-lg shadow-lg"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </section>

        
        <section className="py-10 bg-white">
          <div className="container mx-auto max-w-screen-lg px-4">
            <h3 className="text-2xl font-bold mb-6">Find Your Destination</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by location"
                className="border p-3 rounded w-full"
                aria-label="Search by location"
              />
              <select className="border p-3 rounded w-full" aria-label="Select Category">
                <option value="">Select Category</option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="city">City</option>
                <option value="cultural">Cultural</option>
                <option value="adventure">Adventure</option>
              </select>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                aria-label="Search for destinations"
              >
                Search
              </button>
            </div>
          </div>
        </section>

        
        <section className="py-10 bg-gray-100">
          <div className="container mx-auto max-w-screen-lg px-4">
            <h3 className="text-2xl font-bold mb-6">Trending Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow rounded-lg p-4">
                <img
                  src="./assets/Chitwan.jpg"
                  alt="Chitwan"
                  className="rounded-t-lg mb-4"
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />
                <h4 className="text-xl font-bold">Chitwan National Park</h4>
                <p className="text-gray-700">
                  Explore the rich biodiversity of Chitwan with jungle safaris and cultural experiences.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <img
                  src="./assets/MountEverest.jpg"
                  alt="Mount Everest"
                  className="rounded-t-lg mb-4"
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />
                <h4 className="text-xl font-bold">Mount Everest</h4>
                <p className="text-gray-700">
                  Experience the grandeur of the world's tallest mountain with guided treks.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <img
                  src="./assets/Pokhara.jpg"
                  alt="Pokhara"
                  className="rounded-t-lg mb-4"
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />
                <h4 className="text-xl font-bold">Pokhara</h4>
                <p className="text-gray-700">
                  Enjoy serene lakes, breathtaking mountain views, and adventure sports in Pokhara.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
