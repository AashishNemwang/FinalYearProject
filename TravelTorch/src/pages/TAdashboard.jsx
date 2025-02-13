import React from 'react';


const TADashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">TravelTorch</h1>
          <nav className="space-x-6 flex">
            <a href="/" className="hover:text-green-300">Home</a>
            <a href="/dashboard" className="hover:text-green-300">Dashboard</a>
            <a href="/logout" className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100">
              Log Out
            </a>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Travel Agency Dashboard</h2>
        <p className="text-center text-gray-700">
          Manage your travel packages, bookings, and more here.
        </p>

        <div className="mt-10">
          {/* Placeholder for dashboard features */}
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <p className="text-gray-600">Dashboard functionalities will appear here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TADashboard;
