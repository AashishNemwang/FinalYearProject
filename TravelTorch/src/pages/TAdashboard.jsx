import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: 'Chitwan National Park', price: '$500', bookings: 12 },
    { id: 2, name: 'Pokhara Tour', price: '$400', bookings: 18 },
    { id: 3, name: 'Everest Base Camp', price: '$1000', bookings: 9 },
  ]);

  const bookingData = packages.map(pkg => ({ name: pkg.name, bookings: pkg.bookings }));

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Travel Agency Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block px-4 py-2 bg-gray-700 rounded">Dashboard</Link>
          <Link to="/add-package" className="block px-4 py-2 hover:bg-gray-700 rounded">Add Package</Link>
          <Link to="/manage-packages" className="block px-4 py-2 hover:bg-gray-700 rounded">Manage Packages</Link>
          <Link to="/logout" className="block px-4 py-2 hover:bg-gray-700 rounded">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome, Travel Agency</h1>

        {/* Stats & Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-2">Total Packages</h2>
            <p className="text-3xl">{packages.length}</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-2">Total Bookings</h2>
            <p className="text-3xl">{packages.reduce((sum, pkg) => sum + pkg.bookings, 0)}</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded mb-6">
          <h2 className="text-xl font-bold mb-2">Booking Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#4a90e2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Package List */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Your Packages</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Bookings</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map(pkg => (
                <tr key={pkg.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{pkg.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{pkg.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{pkg.bookings}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
