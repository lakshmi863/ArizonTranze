// src/tests/MiniCart.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import MiniCart from '../components/Cart/MiniCart';
import { CartProvider } from '../components/Cart/CartContext';
import '@testing-library/jest-dom';

describe('MiniCart', () => {
  it('should display added products', () => {
    render(
      <CartProvider>
        <MiniCart />
      </CartProvider>
    );
    fireEvent.click(screen.getByText(/Add to Cart/i)); // Simulating adding a product
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('should calculate subtotal correctly', () => {
    render(
      <CartProvider>
        <MiniCart />
      </CartProvider>
    );
    fireEvent.click(screen.getByText(/Add to Cart/i)); // Simulating adding a product
    expect(screen.getByText('$100')).toBeInTheDocument(); // Checking subtotal
  });

  it('should open mini cart when clicked', () => {
    render(
      <CartProvider>
        <MiniCart />
      </CartProvider>
    );
    fireEvent.click(screen.getByText(/Add to Cart/i)); // Simulating adding product
    fireEvent.click(screen.getByText(/View Cart/i)); // Simulating mini cart toggle
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
