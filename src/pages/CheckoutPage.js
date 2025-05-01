// src/pages/CheckoutPage.js

import React from 'react';

const CheckoutPage = () => {
  return (
    <div
      style={{
        padding: "3rem",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: "#333",
        }}
      >
        Checkout Successful!
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
        }}
      >
        Thank you for your purchase. Your order is being processed!
      </p>
    </div>
  );
};

export default CheckoutPage;
