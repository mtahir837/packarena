import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/api';

// Hook to fetch all products
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const apiUrl = `${API_BASE_URL}/get-all-products`;
        
        console.log('Fetching products from:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        let productsArray = [];
        
        // Handle response format: { message, products, count }
        if (result.message === 'Products fetched successfully' && Array.isArray(result.products)) {
          productsArray = result.products;
        } else if (Array.isArray(result)) {
          productsArray = result;
        } else if (Array.isArray(result.data)) {
          productsArray = result.data;
        }
        
        if (productsArray.length > 0) {
          setProducts(productsArray);
        } else {
          setError('No products found');
          setProducts([]);
        }
      } catch (err) {
        if (err.message.includes('Failed to fetch')) {
          setError('Cannot connect to backend. Enable CORS in your backend server.');
        } else {
          setError(`Failed to fetch products: ${err.message}`);
        }
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

// Hook to fetch a single product by slug
export const useProductBySlug = (slug) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchProductBySlug = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const apiUrl = `${API_BASE_URL}/get-all-products`;
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        let productsArray = [];
        
        // Handle response format
        if (result.message === 'Products fetched successfully' && Array.isArray(result.products)) {
          productsArray = result.products;
        } else if (Array.isArray(result)) {
          productsArray = result;
        } else if (Array.isArray(result.data)) {
          productsArray = result.data;
        }
        
        // Find product by slug
        const foundProduct = productsArray.find(
          p => p.slug === slug || p.slug === slug.replace(/-/g, ' ') || p._id === slug
        );
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
          setProduct(null);
        }
      } catch (err) {
        setError(`Failed to fetch product: ${err.message}`);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductBySlug();
  }, [slug]);

  return { product, loading, error };
};

