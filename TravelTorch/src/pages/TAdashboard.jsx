import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TAdashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch booking details from the backend
    fetch('/api/bookings')
      .then((res) => res.json())
      .then((data) => setBookings(data));

    // Fetch travel packages added by this agency
    fetch('/api/packages')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      fetch(`/api/packages/${id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then(() => {
          setPackages(packages.filter((pkg) => pkg.id !== id));
        });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Travel Agency Dashboard</h2>

      {/* Booking Details */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Booking Details</h3>
        <div className="bg-white p-4 shadow rounded-lg">
          {bookings.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Traveler</th>
                  <th className="p-2 border">Package</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border">
                    <td className="p-2">{booking.traveler_name}</td>
                    <td className="p-2">{booking.package_name}</td>
                    <td className="p-2">{booking.date}</td>
                    <td className="p-2">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No bookings yet.</p>
          )}
        </div>
      </section>

      {/* Payment Details */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Payment Details</h3>
        <div className="bg-white p-4 shadow rounded-lg">
          {bookings.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Traveler</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border">
                    <td className="p-2">{booking.traveler_name}</td>
                    <td className="p-2">${booking.payment_amount}</td>
                    <td className="p-2">{booking.payment_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No payment details available.</p>
          )}
        </div>
      </section>

      {/* Travel Packages Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Manage Your Packages</h3>
        <Link
          to="/add-package"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4 inline-block"
        >
          Add New Package
        </Link>
        <div className="bg-white p-4 shadow rounded-lg">
          {packages.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Package Name</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="border">
                    <td className="p-2">{pkg.name}</td>
                    <td className="p-2">${pkg.price}</td>
                    <td className="p-2 flex gap-2">
                      <Link
                        to={`/edit-package/${pkg.id}`}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(pkg.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No packages added yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TAdashboard;
