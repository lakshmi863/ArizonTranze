import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../utils/fetchProducts';
import { useCart } from '../Cart/CartContext';
import './index.css'; // Custom CSS for styles

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Price Low to High');
  const [sortByDate, setSortByDate] = useState('Newest First');
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);  // State to hold selected product for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Electronics', "Men's Clothing", "Women's Clothing", 'jewelery'];

  const filteredProducts = products.filter((product) => {
    const productCategory = product.category ? product.category.toLowerCase() : '';
    const searchTermLower = searchTerm.toLowerCase();

    if (category === 'All') {
      return product.title.toLowerCase().includes(searchTermLower);
    }
    return productCategory === category.toLowerCase() && product.title.toLowerCase().includes(searchTermLower);
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'Price Low to High') {
      return a.price - b.price;
    } else if (sortBy === 'Price High to Low') {
      return b.price - a.price;
    } else if (sortByDate === 'Newest First') {
      return new Date(b.date_added) - new Date(a.date_added); // Newest first
    } else if (sortByDate === 'Oldest First') {
      return new Date(a.date_added) - new Date(b.date_added); // Oldest first
    }
    return 0;
  });

  // Function to handle product click and open the modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);  // Open modal when product is clicked
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="product-listing-container">
      {/* Filter Bar */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="Price Low to High">Price Low to High</option>
          <option value="Price High to Low">Price High to Low</option>
        </select>
        <select
          value={sortByDate}
          onChange={(e) => setSortByDate(e.target.value)}
          className="filter-select"
        >
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
        </select>
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <div className="product-list-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} onClick={handleProductClick} />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      )}

      {/* Modal to show the selected product's image */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProduct.title}</h3>
              <button className="close-modal" onClick={closeModal}>X</button>
            </div>
            <div className="modal-body">
              <div className="product-image-views">
                <div className="top-view">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="view-image" />
                </div>
                <div className="left-view">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="view-image" />
                </div>
                <div className="right-view">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="view-image" />
                </div>
                <div className="bottom-view">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="view-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
