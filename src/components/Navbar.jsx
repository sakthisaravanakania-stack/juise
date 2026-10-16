import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="navbar-content">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/products">Products</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>

      </div>
    </div>
  );
};

export default Navbar;