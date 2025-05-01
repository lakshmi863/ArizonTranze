import React from 'react';
import './index.css'; // Importing custom CSS for footer styles

const Footer = () => {
  return (
    <footer className="footer-bg text-gray-300 py-10 mt-16">
      <div className="container mx-auto text-center">
        <p className="footer-description text-sm mb-4">
          Subscribe to get the latest updates and offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input w-full sm:w-64 p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="footer-btn bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Arizon Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
