// src/tests/ProductListing.test.js
import { render, screen, waitFor } from '@testing-library/react';
import ProductListing from '../components/Product/ProductListing';
import '@testing-library/jest-dom';
import { fetchProducts } from '../utils/fetchProducts';

// Mocking the fetchProducts utility
jest.mock('../utils/fetchProducts');

describe('ProductListing', () => {
  it('should display products fetched from API', async () => {
    // Mock the API response
    fetchProducts.mockResolvedValue([
      { id: 1, title: 'Product 1', price: 50, image: 'image_url_1' },
      { id: 2, title: 'Product 2', price: 100, image: 'image_url_2' },
    ]);

    render(<ProductListing />);
    await waitFor(() => screen.getByText('Product 1'));

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$50')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should show loading text when fetching', () => {
    render(<ProductListing />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should handle API error gracefully', async () => {
    fetchProducts.mockRejectedValueOnce(new Error('API error'));

    render(<ProductListing />);
    await waitFor(() => screen.getByText('Failed to fetch products'));
    expect(screen.getByText('Failed to fetch products')).toBeInTheDocument();
  });
});
