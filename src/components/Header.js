import React from 'react'
import logo from '../utils/assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={logo} alt='shop-logo'/></Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"}><li>Products</li></Link>
          <Link to={"/cart"}><li>Cart</li></Link>
          <button className="signin-btn">
            Sign In
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header