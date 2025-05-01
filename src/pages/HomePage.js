import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundImage: "url('https://www.intellectoutsource.com/blog/images/4971f-inspiring-ecommerce-homepage-designs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay
          padding: "2rem",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Welcome to ShopEase
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            maxWidth: "600px",
          }}
        >
          Your one-stop destination for trendy fashion, gadgets, and more.
          Explore our latest collections and enjoy exclusive deals!
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/products">
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#45A049")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
            >
              Shop Now
            </button>
          </Link>

          <Link to="/about">
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
