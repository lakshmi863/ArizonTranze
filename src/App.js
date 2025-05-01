import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ONLY Routes and Route (no BrowserRouter here)
import DarkModeToggle from './components/DarkModeToggle';
import ProductListing from './components/Product/ProductListing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/Cart/CartContext';
import CartPage from './pages/CartPage';
import EmptyCartPage from './pages/EmptyCartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';  // <-- ADD THIS LINE

import './App.css';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* <-- FIX: Home route should show HomePage */}
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/empty-cart" element={<EmptyCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4">
          <DarkModeToggle />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
