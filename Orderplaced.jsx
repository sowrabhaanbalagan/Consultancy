import React from 'react';
import "./home.css"

const OrderConfirmation = () => {
  return (
    <>
    <br /><br /><br /><br /><br /><br /><br />
    <div className='cen'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <p>Order placed successfully!</p>
    </div>
    </>
  );
};

export default OrderConfirmation;
