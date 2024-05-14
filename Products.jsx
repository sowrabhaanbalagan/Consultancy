// Products.jsx
import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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

  // Define existing hard-coded products
  const existingProducts = [
    
    {
      productName: 'GADA FABRIC',
      price: '120',
      description: 'Used for multiple purpose making kerchief,pillow covers,cleaning cloth,towels and more… Cotton Fabric CARE INSTRUCTIONS - Gentle machine wash, Do not bleach, Dry in shade, Medium to Hot Iron.Indian handmade dress, suit, craft quilt running fabric. Can be used for liningEasy to care - Wash it gently in washing machine',
      image: 'alt.jpg',
    },
    // Add more existing product objects as needed
  ];

  // Merge fetched products with existing products
  const allProducts = [...existingProducts, ...products];

  return (
    <>
      <div class="about-bg">
        <h2>Products</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <br />
        <p className="text">Explore our vibrant yarn collection, perfect for knitting and crafting enthusiasts. From soft pastels to bold hues, find the perfect yarn for your next project!</p>
        <div className='sty'>
        <Link to="/placeorder"> <Button variant="contained" color="primary">Place order</Button></Link>
        </div>
      </div>

      <div className="products-container">
        {allProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
