import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiPhone, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Tumhari API / Registration handling yahan aayegi
    alert("Account Created Successfully!");
    navigate("/login"); // Account bante hi login page par bhej do
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden" 
      style={{ backgroundColor: "#061711", color: "#E2C792", padding: "40px 15px" }}
    >
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="row g-0 align-items-center" style={{ minHeight: "600px" }}>
          
          {/* Left Column: Register Form Card */}
          <div 
            className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-center position-relative h-100" 
            style={{ 
              backgroundColor: "rgba(226, 199, 146, 0.03)", 
              border: "1px solid rgba(226, 199, 146, 0.15)",
              backdropFilter: "blur(10px)",
              zIndex: 2
            }}
          >
            <h2 
              className="mb-4 fw-bold" 
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "2.5rem", 
                letterSpacing: "0.02em",
                color: "#E2C792"
              }}
            >
              Register <span style={{ color: "#E2C792" }}>.</span>
            </h2>

            <form onSubmit={handleRegisterSubmit} className="d-flex flex-column gap-3">
              
              {/* Full Name Input */}
              <div className="position-relative">
                <FiUser 
                  className="position-absolute start-0 top-50 translate-middle-y ms-3" 
                  style={{ color: "rgba(226, 199, 146, 0.4)", fontSize: "1.1rem" }} 
                />
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              {/* Email Input */}
              <div className="position-relative">
                <FiMail 
                  className="position-absolute start-0 top-50 translate-middle-y ms-3" 
                  style={{ color: "rgba(226, 199, 146, 0.4)", fontSize: "1.1rem" }} 
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              {/* Phone Input */}
              <div className="position-relative">
                <FiPhone 
                  className="position-absolute start-0 top-50 translate-middle-y ms-3" 
                  style={{ color: "rgba(226, 199, 146, 0.4)", fontSize: "1.1rem" }} 
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              {/* Password Input */}
              <div className="position-relative">
                <FiLock 
                  className="position-absolute start-0 top-50 translate-middle-y ms-3" 
                  style={{ color: "rgba(226, 199, 146, 0.4)", fontSize: "1.1rem" }} 
                />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              {/* Confirm Password Input */}
              <div className="position-relative">
                <FiLock 
                  className="position-absolute start-0 top-50 translate-middle-y ms-3" 
                  style={{ color: "rgba(226, 199, 146, 0.4)", fontSize: "1.1rem" }} 
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="CONFIRM PASSWORD"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              {/* Register Action Button */}
              <button 
                type="submit" 
                className="btn w-100 d-flex justify-content-between align-items-center mt-3 login-action-btn"
              >
                <span className="fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.85rem" }}>CREATE ACCOUNT</span>
                <FiArrowRight size={18} />
              </button>

            </form>

            {/* Back to Login Redirection */}
            <div className="mt-4 pt-2">
              <Link 
                to="/login" 
                className="text-decoration-none d-inline-flex align-items-center gap-2 register-redirect-link"
              >
                ALREADY HAVE AN ACCOUNT? LOGIN <FiArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Model Cut-out Preview Display */}
          <div 
            className="col-lg-7 d-none d-lg-block h-100 position-relative text-center"
            style={{ zIndex: 1 }}
          >
            <div 
              className="position-absolute top-50 start-50 translate-middle rounded-circle"
              style={{ 
                width: "400px", 
                height: "400px", 
                backgroundColor: "rgba(226, 199, 146, 0.04)", 
                filter: "blur(60px)",
                zIndex: -1
              }}
            ></div>
            
            <img 
              src='https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600' // Apni pasand ki image link lagayein yahan
              alt="Ayush Couture Collection Model" 
              className="img-fluid object-fit-contain login-hero-model"
              style={{ maxHeight: "580px", width: "auto" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;