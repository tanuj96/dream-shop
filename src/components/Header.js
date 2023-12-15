import React from 'react'
import logo from '../utils/assets/logo.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt='shop-logo'/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login">
            Sign In
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header