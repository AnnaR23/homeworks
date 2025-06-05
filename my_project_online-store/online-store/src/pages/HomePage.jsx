import React  from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Our Online Store!</h1>
      <p>Browse through a variety of products at great prices!</p>
      <Link to="/products" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color:'white', textDecoration: 'none'}}>
        Go to Products
      </Link>
    </div>
  );
};

export default HomePage;