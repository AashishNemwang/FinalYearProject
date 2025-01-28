import React from 'react';
import hero from '../assets/Ilam.jpg';

const LandingPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">TravelTorch</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white"
          style={{
            backgroundImage: `url(${hero})`,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to TravelTorch</h2>
            <p className="text-lg mb-8">
              Are you a traveler looking for exciting travel packages? Or are you an agency ready to showcase amazing destinations? Select your role to get started.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Traveler Button */}
              <a
                href="/travhome"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
              >
                I’m a Traveler
              </a>
              {/* Travel Agency Button */}
              <a
                href="/signup"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
              >
                I’m a Travel Agency
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
