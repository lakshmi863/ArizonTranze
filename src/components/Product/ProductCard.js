import React from 'react';
import './index.css';  // 👈 import your custom CSS

const ProductCard = ({ product, addToCart, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from triggering onClick in parent
          addToCart(product);
        }}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
