import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Import your custom CSS

const MiniCart = () => {
  const { cart, removeFromCart, updateQuantity, toggleCart } = useCart(); 
  const navigate = useNavigate();

  const handleIncrease = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const handleViewCart = () => {
    if (cart.length === 0) {
      navigate('/empty-cart');
    } else {
      navigate('/cart');
    }
    toggleCart(); // Close MiniCart after navigation
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      navigate('/checkout');
      toggleCart(); // Close MiniCart after navigating to checkout
    }
  };

  const handleClose = () => {
    toggleCart(); // Close the MiniCart
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="mini-cart relative bg-white shadow-lg p-4 rounded w-80">
      {/* Close Button */}
      <button 
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        onClick={handleClose}
      >
        &times;
      </button>

      <h3 className="mini-cart-title text-xl font-semibold mb-4">Mini Cart</h3>

      <div className="cart-items max-h-64 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="empty-cart text-gray-500">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item flex mb-4">
              <img src={item.image} alt={item.title} className="item-image w-16 h-16 object-cover rounded" />
              <div className="item-details ml-4 flex-1">
                <p className="item-title font-semibold">{item.title}</p>
                <p className="item-price text-gray-600 text-sm">Price: ${item.price}</p>

                <div className="quantity-controls flex items-center mt-2">
                  <button className="quantity-btn bg-gray-300 px-2 rounded" onClick={() => handleDecrease(item.id)}>-</button>
                  <span className="quantity-number mx-2">{item.quantity || 1}</span>
                  <button className="quantity-btn bg-gray-300 px-2 rounded" onClick={() => handleIncrease(item.id)}>+</button>
                </div>

                <button className="remove-btn text-red-500 text-xs mt-2" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary mt-4">
        <p className="subtotal text-lg font-semibold">
          Subtotal: <strong>${subtotal.toFixed(2)}</strong>
        </p>

        <div className="cart-buttons mt-4 flex flex-col gap-2">
          <button className="view-cart-btn bg-blue-600 hover:bg-blue-700 text-white py-2 rounded" onClick={handleViewCart}>
            View Cart
          </button> 
          <button 
            className="checkout-btn bg-green-600 hover:bg-green-700 text-white py-2 rounded" 
            onClick={handleCheckout} 
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
