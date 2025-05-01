// src/components/Header/Header.js
import React from 'react';
import { useCart } from '../Cart/CartContext';
import { Link } from 'react-router-dom';
import MiniCart from '../Cart/MiniCart';
import DarkModeToggle from '../DarkModeToggle'; // Importing DarkModeToggle
import './index.css'; // Import your custom CSS

const Header = () => {
  const { toggleCart, isCartOpen, cartItems } = useCart() || {};

  const totalQuantity = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo with hover effect */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="logo-link">
            <img
              src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-scaled.jpg"
              alt="ArizonTranze Logo"
              className="logo-image"
              style={{ width: '150px', height: 'auto' }}
            />
          </Link>
        </div>

        {/* Navbar */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>

        {/* Right Side: DarkMode & Cart */}
        <div className="header-actions">
          <DarkModeToggle />

          <div className="cart-icon" onClick={toggleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cart-svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
              />
            </svg>

            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </div>
        </div>
      </div>

      {isCartOpen && <MiniCart />}
    </header>
  );
};

export default Header;
