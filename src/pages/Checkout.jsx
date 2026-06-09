import React, { useState } from 'react';
import { FiLock, FiTruck, FiRefreshCw, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems = [] }) => {
  
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', pincode: '', phone: ''
  });

  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully! (Integration Ready)");
  };

  return (
    <div className="py-5" style={{ backgroundColor: 'rgb(226, 199, 146);', color: '#E2C792', minHeight: '100vh' }}>
      <div className="container mt-4">
        
  
        <div className="mb-4">
          <Link to="/" className="text-decoration-none d-inline-flex align-items-center gap-2" style={{ color: '#E2C792', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            <FiArrowLeft /> BACK TO SHOPPING
          </Link>
        </div>

        <h2 className="mb-5 fw-bold text-uppercase" style={{ letterSpacing: '0.1em', fontFamily: "'Playfair Display', serif" }}>
          Checkout
        </h2>

        <div className="row g-5">
          
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
              
              <div>
                <h5 className="mb-3 fw-semibold text-uppercase" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>1. Contact Information</h5>
                <input 
                  type="email" name="email" placeholder="Email Address" required
                  className="form-control custom-checkout-input" value={formData.email} onChange={handleChange}
                />
              </div>

              <div>
                <h5 className="mb-3 fw-semibold text-uppercase" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>2. Shipping Address</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" name="firstName" placeholder="First Name" required
                      className="form-control custom-checkout-input" value={formData.firstName} onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="text" name="lastName" placeholder="Last Name" required
                      className="form-control custom-checkout-input" value={formData.lastName} onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="text" name="address" placeholder="Address (House No, Street, Area)" required
                      className="form-control custom-checkout-input" value={formData.address} onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="text" name="city" placeholder="City" required
                      className="form-control custom-checkout-input" value={formData.city} onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="text" name="pincode" placeholder="Postal / Pincode" required
                      className="form-control custom-checkout-input" value={formData.pincode} onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="tel" name="phone" placeholder="Phone Number (For Delivery Updates)" required
                      className="form-control custom-checkout-input" value={formData.phone} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <button type="submit" className="btn w-100 py-3 fw-bold tracking-wider" style={{ backgroundColor: '#E2C792', color: '#061711', borderRadius: '0', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                  PLACE ORDER • ₹{total.toLocaleString()}
                </button>
              </div>

            </form>
          </div>

          
          <div className="col-lg-5">
            <div className="p-4 sticky-top" style={{ backgroundColor: 'rgba(226, 199, 146, 0.02)', border: '1px solid rgba(226, 199, 146, 0.2)', top: '100px' }}>
              <h4 className="mb-4 fw-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem' }}>Order Summary</h4>
              
              
              <div className="checkout-items-preview mb-4 overflow-y-auto" style={{ maxHeight: '240px' }}>
                {cartItems.map(item => (
                  <div key={item.id} className="d-flex gap-3 mb-3 pb-3" style={{ borderBottom: '1px solid rgba(226, 199, 146, 0.1)' }}>
                    <img src={item.image || item.img} alt={item.title} className="object-fit-cover" style={{ width: '55px', height: '70px', border: '1px solid rgba(226, 199, 146, 0.1)' }} />
                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                      <h6 className="m-0 fw-semibold style-title text-truncate" style={{ maxWidth: '220px', fontSize: '0.9rem' }}>{item.title}</h6>
                      <small style={{ color: 'rgba(226, 199, 146, 0.6)', fontSize: '0.75rem' }}>Qty: {item.quantity} | Size: {item.size}</small>
                    </div>
                    <span className="fw-semibold align-self-center" style={{ fontSize: '0.9rem' }}>₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              
              <div className="d-flex justify-content-between align-items-center mb-2" style={{ fontSize: '0.9rem', color: 'rgba(226, 199, 146, 0.7)' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-3" style={{ fontSize: '0.9rem' }}>
                <span style={{ color: 'rgba(226, 199, 146, 0.7)' }}>Estimated Shipping</span>
                <span style={{ color: '#2ec4b6', fontWeight: '500' }}>Complimentary</span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4 pt-3" style={{ borderTop: '1px solid rgba(226, 199, 146, 0.2)' }}>
                <span className="fw-bold fs-5">Total</span>
                <span className="fs-4 fw-bold" style={{ color: '#E2C792' }}>₹{total.toLocaleString()}</span>
              </div>

            
              <div className="d-flex flex-column gap-3 pt-3" style={{ borderTop: '1px solid rgba(226, 199, 146, 0.1)', fontSize: '0.8rem', color: 'rgba(226, 199, 146, 0.7)' }}>
                <div className="d-flex align-items-center gap-2">
                  <FiLock style={{ color: '#E2C792' }} />
                  <span>Secure checkout with SSL Encryption</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FiTruck style={{ color: '#E2C792' }} />
                  <span>Global delivery in 7-10 working days</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FiRefreshCw style={{ color: '#E2C792' }} />
                  <span>14-day heritage exchange policy</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;