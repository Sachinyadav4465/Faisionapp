import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Styles.css";

import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";


const Navbar = ({ setShowCart, cartItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navWrapper">
      {/* Top Bar */}
      <div className="topBar d-flex justify-content-between align-items-center px-3 px-md-4 py-2">
        <div className="locations">MUMBAI • DELHI • LONDON</div>
        <div className="shippingNotice d-none d-sm-block">
          COMPLIMENTARY WORLDWIDE SHIPPING ON ALL ORDERS
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar navbar-expand-lg navbar-dark bg-transparent px-3 px-md-4 py-3 border-bottom border-light border-opacity-10">
        <div className="container-fluid d-flex justify-content-between align-items-center position-relative">
          
          {/* Mobile Hamburger */}
          <button
            className="hamburgerBtn d-lg-none btn p-0 border-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`bar ${isMenuOpen ? "bar1" : ""}`}></div>
            <div
              className={`bar ${isMenuOpen ? "bar2" : ""}`}
              style={{ opacity: isMenuOpen ? 0 : 1 }}
            ></div>
            <div className={`bar ${isMenuOpen ? "bar3" : ""}`}></div>
          </button>

          <nav className="d-none d-lg-flex gap-4">
            <Link to="/" className="navLink">HOME</Link>
            <Link to="/sarees" className="navLink">SAREES</Link>
            <Link to="/lehengas" className="navLink">LEHENGAS</Link>
            <Link to="/contact" className="navLink">CONTACT</Link>
          </nav>

          <div className="logo text-center">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              AYUSH COUTURE
            </Link>
          </div>

          
          <div className="d-flex align-items-center gap-3 gap-md-4 main-nav-icons">
         
            <button className="iconBtn btn p-0 d-flex align-items-center" aria-label="Search">
              <FiSearch className="nav-react-icon" />
            </button>

            
            <Link to="/login">
            <button className="iconBtn btn p-0 d-flex align-items-center" aria-label="Account">
              <FiUser className="nav-react-icon" />
            </button>
            </Link>

          
            <button
              className="iconBtn btn p-0 position-relative d-flex align-items-center"
              onClick={() => setShowCart(true)}
              aria-label="Cart"
            >
              <FiShoppingBag className="nav-react-icon" />
              {cartCount > 0 && (
                <span className="position-absolute cart-badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          
          <div className={`mobileMenu ${isMenuOpen ? "mobileMenuOpen" : ""}`}>
            <Link to="/" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/sarees" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>SAREES</Link>
            <Link to="/lehengas" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>LEHENGAS</Link>
            <Link to="/contact" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Navbar;