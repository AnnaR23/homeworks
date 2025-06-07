import React  from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Online Store!</h1>
      <p>Browse through a variety of products at great prices!</p>
      <Link to="/products" className="home-button">
        Go to Products
      </Link>
    </div>
  );
};

export default HomePage;