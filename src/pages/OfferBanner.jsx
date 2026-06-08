import React from "react";
import "../Styles/Styles.css";

const OfferBanner = () => {
  return (
    <section className="fashionBanner">
     
      <div className="bannerDiagonal"></div>

      <div className="bannerQuote">
        <p>
          "Style is a way to say who you are
          <br />
          without having to speak."
        </p>
      </div>

    
      <button className="shopNowBtn">
        SHOP NOW
      </button>

     
      <div className="bannerCenter">
  <div className="imageFrame">
    <img
    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600"
      alt="Fashion Model"
      className="fashionModel"
    />
  </div>
</div>

    
      <div className="bannerContent">
        <div className="discountBox">
          <span>UP TO</span>
          <h2>70%</h2>
          <span>OFF</span>
        </div>

        <h5>FLAUNT YOUR CONFIDENCE WITH</h5>

        <h1>Stylish</h1>

        <h4>CLOTHES</h4>
      </div>
    </section>
  );
};

export default OfferBanner;