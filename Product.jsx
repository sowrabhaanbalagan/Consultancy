import React from 'react';
import './Products.css';
import { Grid, Button } from '@mui/material';

import  { useState, useEffect } from 'react';

const Product = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      // Fetch products from the backend when the component mounts
      const fetchProducts = async () => {
          try {
              const response = await fetch('http://localhost:5000/api/products');
              if (!response.ok) {
                  throw new Error('Failed to fetch products');
              }
              const data = await response.json();
              setProducts(data);
          } catch (error) {
              console.error('Error fetching products:', error.message);
          }
      };
      fetchProducts();
  }, []);
  return (
    <>
    <Grid item xs={12} sm={6} md={4} className="product-container">
      <img src={product.image} alt={product.productName} className="product-image" />
      <div className="product-details">
        <h2>{product.productName}</h2>
        <p>Rs-{product.price}/kg</p><br />
        <h6>{product.description}</h6>
        
      </div>
    </Grid>
    
    </>
  );
};

export default Product;
