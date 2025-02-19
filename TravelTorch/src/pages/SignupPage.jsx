import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupImage from '../assets/signup.jpg';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setError('');
    console.log('Form submitted with:', { email, password });

    // Simulate successful signup and redirect to dashboard
    navigate('/agency/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section with Image */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-blue-100">
        <div className="flex justify-center mb-6">
          <img
            src={SignupImage}
            alt="Signup Illustration"
            className="rounded-lg shadow-lg"
            style={{ maxHeight: '600px', width: 'auto' }}
          />
        </div>
      </div>

      {/* Right Section with Signup Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4 border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Sign Up
            </button>
          </form>

          {/* Redirect to Login */}
          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;


