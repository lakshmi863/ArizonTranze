import React from 'react';
import { useCart } from '../components/Cart/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleIncrease = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Inline Styles
  const emptyCartStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    textAlign: 'center',
    backgroundColor: '#f3f4f6',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cartStyle = {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const removeButtonStyle = {
    color: 'red',
    cursor: 'pointer',
  };

  if (cart.length === 0) {
    return (
      <div style={emptyCartStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          style={{ width: '100px', height: '100px', marginBottom: '20px' }}
        />
        <h2>Your Cart is Empty!</h2>
        <Link to="/products">
          <button style={buttonStyle}>Shop Now</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={cartStyle}>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '20px' }} />
            <div>
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => handleDecrease(item.id)}
              style={{ marginRight: '10px', padding: '5px', backgroundColor: 'gray', color: 'white', cursor: 'pointer' }}
            >
              -
            </button>
            <span>{item.quantity || 1}</span>
            <button
              onClick={() => handleIncrease(item.id)}
              style={{ marginLeft: '10px', padding: '5px', backgroundColor: 'gray', color: 'white', cursor: 'pointer' }}
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              style={removeButtonStyle}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
       
      </div>

      <button
        onClick={clearCart}
        style={{ ...buttonStyle, backgroundColor: '#e74c3c' }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;
