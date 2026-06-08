import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer-section">
        

      <div className="footer-dot"></div>

      <div className="container">
        <div className="row gy-5">

          {/* Column 1 */}
          <div className="col-lg-4 col-md-6 mb-2">
            <h2 className="footer-logo mt-0">
              Posh Heritage
            </h2>

            <p className="footer-description">
              Celebrating the timeless art of ethnic
              wear. From the loom to your heart,
              we curate elegance that defines
              generations.
            </p>

            <div className="social-icons">

              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaTwitter />
              </a>

            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">
              Collections
            </h4>

            <ul className="footer-links">
              <li>Bridal Lehengas</li>
              <li>Silk Sarees</li>
              <li>Hand-woven Suits</li>
              <li>Premium Accessories</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">
              Studio Visit
            </h4>

            <ul className="contact-list">

              <li>
                <FaMapMarkerAlt />
                Delhi Heritage Studio, IN
              </li>

              <li>
                <FaPhoneAlt />
                +91 98765 43210
              </li>

              <li>
                <FaEnvelope />
                care@poshheritage.com
              </li>

            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">
              Join The Legacy
            </h4>

            <p className="footer-description">
              Subscribe for exclusive collection
              drops and heritage stories.
            </p>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Your Email Address"
              />

              <button>
                <FaArrowRight />
              </button>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 AXEPERT EXHIBITS PVT. LTD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;