import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-logo">
        <img src={import.meta.env.BASE_URL + 'logo.jpg'} alt="Logo" className='logo'/>
        <h1> SANTHOSH YARNS</h1>
      </div>
      <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
        <Link to="/home" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/products" className="navbar-item">Products</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
        <Link to="/login" className="navbar-item">
          <FaUser />
        </Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
