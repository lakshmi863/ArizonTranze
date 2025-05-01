// src/components/Cart/Cart.js
import React from 'react';
import { useCart } from '../Cart/CartContext'; // Correct import: useCart, not CartContext

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // useCart provides access to cart, addToCart, removeFromCart, clearCart

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClear = () => {
    clearCart();
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-500">{item.category}</p>
                    <p className="font-bold">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="font-bold text-lg">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
