// src/tests/CartContext.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '../components/Cart/CartContext';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <div>
      <button onClick={() => addToCart({ id: 1, title: 'Test Product', price: 100 })}>Add Product</button>
      <button onClick={() => removeFromCart(1)}>Remove Product</button>
      <div>{cart.length} items in cart</div>
    </div>
  );
};

describe('CartContext', () => {
  it('should add product to cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    fireEvent.click(screen.getByText(/Add Product/i));
    expect(screen.getByText(/1 items in cart/i)).toBeInTheDocument();
  });

  it('should remove product from cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    fireEvent.click(screen.getByText(/Add Product/i));
    fireEvent.click(screen.getByText(/Remove Product/i));
    expect(screen.getByText(/0 items in cart/i)).toBeInTheDocument();
  });
});
