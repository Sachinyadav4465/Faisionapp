import React, { useState } from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail, FiSend } from 'react-icons/fi';

const Testimonial = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out! Our luxury concierge will contact you shortly.");
    setFormData({ fullName: '', emailAddress: '', subject: '', message: '' });
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#061711', color: '#E2C792', minHeight: '100vh', fontFamily: "'Playfair Display', serif" }}>
      <div className="container mt-5 pt-4">
        
        {/* Main Split Row: Info/Form on Left, Map Grid on Right */}
        <div className="row g-5 align-items-stretch">
          
          {/* LEFT SIDE: HEADER, METADATA & LUXURY FORM */}
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <div>
              {/* Header section matching boutique title aesthetics */}
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#E2C792', letterSpacing: '0.02em' }}>
                Contact <span style={{ fontStyle: 'italic', fontWeight: '300', opacity: 0.9 }}>Us.</span>
              </h1>
              <p className="mb-5 lh-lg" style={{ color: 'rgba(226, 199, 146, 0.75)', fontSize: '0.95rem', fontFamily: 'sans-serif' }}>
                Book a bespoke fitting or inquire about our artisanal collections.
              </p>

              {/* Grid System for Info Cards */}
              <div className="row g-4 mb-5" style={{ fontFamily: 'sans-serif' }}>
                {/* Location */}
                <div className="col-md-6 d-flex gap-3 align-items-start">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(226, 199, 146, 0.05)', border: '1px solid rgba(226, 199, 146, 0.15)' }}>
                    <FiMapPin size={20} style={{ color: '#E2C792' }} />
                  </div>
                  <div>
                    <span className="d-block text-uppercase fw-bold tracking-wider mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.6 }}>Location</span>
                    <p className="small lh-base m-0" style={{ color: 'rgba(226, 199, 146, 0.85)' }}>
                      KD-3, KD-Block, 2nd Floor, Pitampura, New Delhi-110034.<br />
                      <span className="fw-semibold" style={{ color: '#E2C792' }}>Near Kohat Enclave Metro Station Gate No.1</span>
                    </p>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="col-md-6 d-flex gap-3 align-items-start">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(226, 199, 146, 0.05)', border: '1px solid rgba(226, 199, 146, 0.15)' }}>
                    <FiClock size={20} style={{ color: '#E2C792' }} />
                  </div>
                  <div>
                    <span className="d-block text-uppercase fw-bold tracking-wider mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.6 }}>Studio Hours</span>
                    <p className="small m-0 fw-semibold" style={{ color: 'rgba(226, 199, 146, 0.85)' }}>11 AM - 8 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6 d-flex gap-3 align-items-start">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(226, 199, 146, 0.05)', border: '1px solid rgba(226, 199, 146, 0.15)' }}>
                    <FiMail size={20} style={{ color: '#E2C792' }} />
                  </div>
                  <div>
                    <span className="d-block text-uppercase fw-bold tracking-wider mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.6 }}>Email</span>
                    <a href="mailto:mail@axepextexhibits.com" className="small text-decoration-none" style={{ color: '#E2C792' }}>
                      mail@axepextexhibits.com
                    </a>
                  </div>
                </div>

                {/* Concierge */}
                <div className="col-md-6 d-flex gap-3 align-items-start">
                  <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(226, 199, 146, 0.05)', border: '1px solid rgba(226, 199, 146, 0.15)' }}>
                    <FiPhone size={20} style={{ color: '#E2C792' }} />
                  </div>
                  <div>
                    <span className="d-block text-uppercase fw-bold tracking-wider mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.6 }}>Concierge</span>
                    <a href="tel:+919876543210" className="small text-decoration-none fw-semibold" style={{ color: '#E2C792' }}>
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Dynamic Interactive Form Panel */}
            <form onSubmit={handleSubmit} style={{ fontFamily: 'sans-serif' }} className="mt-auto">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control premium-input" 
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="fullName">FULL NAME</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input 
                      type="email" 
                      className="form-control premium-input" 
                      id="emailAddress"
                      name="emailAddress"
                      placeholder="Email Address"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="emailAddress">EMAIL ADDRESS</label>
                  </div>
                </div>
              </div>

              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control premium-input" 
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="subject">SUBJECT / INQUIRY TYPE</label>
              </div>

              <div className="form-floating mb-4">
                <textarea 
                  className="form-control premium-input" 
                  id="message"
                  name="message"
                  placeholder="Leave a message here" 
                  style={{ height: '120px' }}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <label htmlFor="message">YOUR MESSAGE</label>
              </div>

              {/* Submit Luxury Button matching Login layout */}
              <button 
                type="submit" 
                className="btn w-100 py-3 text-uppercase fw-bold d-flex align-items-center justify-content-center gap-2 main-submit-btn"
                style={{ 
                  backgroundColor: '#E2C792', 
                  color: '#061711', 
                  borderRadius: '0px', 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.15em',
                  transition: 'all 0.3s'
                }}
              >
                Send Message <FiSend size={15} />
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: PREMIUM IFRAME MAP EMBED CONTAINER */}
          <div className="col-lg-6">
            <div 
              className="h-100 min-vh-50 overflow-hidden position-relative map-gold-frame"
              style={{ 
                border: '1px solid rgba(226, 199, 146, 0.25)', 
                padding: '12px',
                backgroundColor: 'rgba(226, 199, 146, 0.02)'
              }}
            >
              {/* Google Maps Real Location Satellite Embedded Layer */}
              <iframe 
                title="Boutique Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.733076898822!2d77.1378129!3d28.6976371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03b6807ab071%3A0x6bfe7ffbd9bdbeea!2sAxepert%20Exhibits%20Private%20Limited!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '450px', filter: 'grayscale(1) contrast(1.1) invert(0.9)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Testimonial;