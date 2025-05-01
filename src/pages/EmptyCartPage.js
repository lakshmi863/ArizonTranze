import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCartPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f9fafb',
        padding: '20px'
      }}
    >
      <img
        src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
        alt="Empty Cart"
        style={{
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          marginBottom: '20px',
        }}
      />
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#1f2937',
        }}
      >
        Your Cart is Empty!
      </h2>
      <button
        onClick={() => navigate('/products')}
        style={{
          backgroundColor: '#3b82f6',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCartPage;
