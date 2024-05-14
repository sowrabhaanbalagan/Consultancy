import React, { useState } from 'react';
import "./place.css"; // Import the CSS file
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PlaceOrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    selectedProduct: '', // Track selected product
    price: 0, // Initialize price to 0
    quantity: 1 // Initialize quantity to 1
  });

  // Sample product data (replace with actual product data from the database)
  const products = [
    { name: 'GADA FABRIC', price: 120 },
    { name: '100% COTTON CONE YARN', price: 420 },
    { name: 'DYED COTTON YARN', price: 235 },
    { name: 'POLYESTER YARN', price: 130 },
    { name: 'RECYCLED COLOUR YARNS', price: 160 }
    // Add more products as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'selectedProduct') {
      // Find the selected product and update the price
      const selectedProduct = products.find(product => product.name === value);
      if (selectedProduct) {
        const price = selectedProduct.price * formData.quantity;
        setFormData({ ...formData, [name]: value, price });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    const selectedProduct = products.find(product => product.name === formData.selectedProduct);
    if (selectedProduct) {
      const price = selectedProduct.price * quantity;
      setFormData({ ...formData, quantity, price });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Order placed successfully!');
       
        setFormData({ name: '', email: '', address: '', selectedProduct: '', price: 0, quantity: 1 });
      } else {
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='bground'>
        <br /><br /><br /><br /><br />
        <div className="place-form-container"> {/* Apply container class */}
          <h2 className="place-form-header">Place Order</h2> {/* Apply header class */}
          <form onSubmit={handleSubmit}>
            <div className="place-form-field"> {/* Apply field class */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="place-form-field"> {/* Apply field class */}
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="place-form-field"> {/* Apply field class */}
              <label htmlFor="address">Address:</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="place-form-field"> {/* Apply field class */}
              <label htmlFor="selectedProduct">Product:</label>
              <select id="selectedProduct" name="selectedProduct" value={formData.selectedProduct} onChange={handleChange} required>
                <option value="">Select a product</option>
                {products.map(product => (
                  <option key={product.name} value={product.name}>{product.name}</option>
                ))}
              </select>
            </div>
            <div className="place-form-field"> {/* Apply field class */}
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" value={formData.price} readOnly />
            </div>
            <div className="place-form-field"> {/* Apply field class */}
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleQuantityChange} min="1" required />
            </div>
            <Button type="submit" variant='contained' color='primary'><Link to="/confirmation">Place Order</Link></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderForm;
