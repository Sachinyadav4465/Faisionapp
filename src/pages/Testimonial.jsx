import React from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";


const Testimonial = () => {
  return (
    <section className="testimonial-section ">
      <div className="container">
<h1 className="testimonial-heading text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold',color: "#E2C792" }}>
          Testimonials
        </h1>
      

        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-5 col-md-12">
            <div className="testimonial-image-wrapper">

              <div className="image-border"></div>

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900"
                alt="Fashion Model"
                className="testimonial-image"
              />

            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7 col-md-12">

            <div className="testimonial-content">

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <h2 className="testimonial-text">
                "This collection hits that perfect
                balance of heritage and
                contemporary style."
              </h2>

              <h4 className="author">
                Priya Verma
              </h4>

              <p className="designation">
                FASHION BLOGGER
              </p>

              <div className="testimonial-buttons">

                <button className="nav-btn">
                  <FaArrowLeft />
                </button>

                <button className="nav-btn">
                  <FaArrowRight />
                </button>

              </div>

            </div>

          </div>

        </div>

        <div className="top-dot"></div>

      </div>
    </section>
  );
};

export default Testimonial;