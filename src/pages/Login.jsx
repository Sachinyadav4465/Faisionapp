import React, { useState } from "react";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    alert("Logged in successfully!");
    navigate("/"); 
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden" 
      style={{ backgroundColor: "#061711", color: "#E2C792", padding: "40px 15px" }}
    >
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="row g-0 align-items-center" style={{ minHeight: "550px" }}>
          
      
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
              Login <span style={{ color: "#E2C792" }}>.</span>
            </h2>

            <form onSubmit={handleLoginSubmit} className="d-flex flex-column gap-3">
              
              {/* Email Input Field */}
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
                  value={credentials.email}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              {/* Password Input Field */}
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
                  value={credentials.password}
                  onChange={handleChange}
                  className="form-control login-input-field"
                  style={{ paddingLeft: "45px" }}
                />
              </div>

              
              <button 
                type="submit" 
                className="btn w-100 d-flex justify-content-between align-items-center mt-3 login-action-btn"
              >
                <span className="fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.85rem" }}>SIGN IN</span>
                <FiArrowRight size={18} />
              </button>

            </form>

           
            <div className="mt-4 pt-2">
              <Link 
                to="/register" 
                className="text-decoration-none d-inline-flex align-items-center gap-2 register-redirect-link"
              >
                REGISTER NOW <FiArrowRight size={14} />
              </Link>
            </div>
          </div>

        
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
              src='https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600' // Replace with your exact model cut-out image URL asset
              alt="Ayush Couture Traditional Heirloom Model Presentation" 
              className="img-fluid object-fit-contain login-hero-model"
              style={{ maxHeight: "580px", width: "auto" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;