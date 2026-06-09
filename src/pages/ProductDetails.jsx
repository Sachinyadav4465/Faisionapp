import React, { useState, useEffect } from "react";
import { FiHeart, FiShoppingBag, FiShield, FiTruck } from "react-icons/fi";
// useParams import kiya url se id read karne ke liye
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ addToCart, productItems }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const product = productItems?.find((item) => item.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["S", "M", "L", "XL"];

  useEffect(() => {
    if (product) {
      setSelectedImage(product.img);
    }
  }, [product]);

 
  if (!product) {
    return (
      <div className="text-center py-5" style={{ backgroundColor: "#061711", color: "#E2C792", minHeight: "100vh" }}>
        <h3>Product Not Found!</h3>
        <button className="btn mt-3" style={{ backgroundColor: "#E2C792", color: "#061711" }} onClick={() => navigate("/")}>
          Go Back To Shop
        </button>
      </div>
    );
  }

  const handleAddToBag = () => {
    const itemToAdd = {
      ...product,
      img: selectedImage, 
      size: selectedSize,
      color: "Default Color"
    };
    addToCart(itemToAdd);
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#061711", color: "#E2C792", minHeight: "100vh" }}>
      <div className="container mt-5">
        <div className="row g-5">
          
          <div className="col-md-2 col-lg-1 order-2 order-md-1">
            <div className="d-flex flex-row flex-md-column gap-3 justify-content-center justify-content-md-start">
              {/* Main Image fallback thumbnail display */}
              <div 
                onClick={() => setSelectedImage(product.img)}
                className="overflow-hidden thumb-wrapper"
                style={{ 
                  width: "70px", 
                  height: "90px", 
                  border: selectedImage === product.img ? "2px solid #E2C792" : "1px solid rgba(226, 199, 146, 0.2)",
                  cursor: "pointer"
                }}
              >
                <img src={product.img} alt="Thumbnail" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>

          {/* CENTER: MAIN HERO PRODUCT IMAGE */}
          <div className="col-md-5 col-lg-6 order-1 order-md-2 text-center">
            <div 
              className="overflow-hidden main-preview-container" 
              style={{ border: "1px solid rgba(226, 199, 146, 0.15)", backgroundColor: "rgba(226, 199, 146, 0.01)" }}
            >
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="img-fluid object-fit-cover w-100"
                style={{ maxHeight: "650px", transition: "transform 0.3s ease" }}
              />
            </div>
          </div>

          {/* RIGHT SIDE: DETAILED METADATA & ACTIONS */}
          <div className="col-md-5 col-lg-5 order-3">
            <div className="ps-lg-4 d-flex flex-column h-100 justify-content-center">
              
              <span className="text-uppercase fw-bold mb-2 tracking-widest" style={{ color: "#E2C792", fontSize: "0.75rem", letterSpacing: "0.2em", opacity: 0.7 }}>
                {product.tagline || "POSH ETHNICS PREMIUM"}
              </span>
              
              <h1 className="mb-3 fw-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", color: "#E2C792", lineHeight: 1.1 }}>
                {product.title}
              </h1>

              <div className="d-flex align-items-baseline gap-3 mb-4">
                <span className="fs-3 fw-bold" style={{ color: "#E2C792" }}>₹{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-decoration-line-through fs-6" style={{ color: "rgba(226, 199, 146, 0.4)" }}>{product.oldPrice}</span>
                )}
              </div>

              <hr style={{ borderColor: "rgba(226, 199, 146, 0.15)" }} />

              <p className="my-4 lh-lg" style={{ fontSize: "0.9rem", color: "rgba(226, 199, 146, 0.8)", textAlign: "justify" }}>
                {product.description || "A masterpiece of traditional craftsmanship, made with fine detailing for your grand heritage celebrations."}
              </p>

              {/* Size Selection */}
              <div className="mb-4">
                <span className="d-block mb-3 fw-semibold text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>Select Size:</span>
                <div className="d-flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="btn size-selector-btn"
                      style={{
                        backgroundColor: selectedSize === size ? "#E2C792" : "transparent",
                        color: selectedSize === size ? "#061711" : "#E2C792",
                        border: "1px solid #E2C792",
                        borderRadius: "0px",
                        width: "45px",
                        height: "45px",
                        fontSize: "0.85rem",
                        fontWeight: "600"
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Purchase Buttons */}
              <div className="d-flex flex-column gap-3 mt-2">
                <button 
                  onClick={handleAddToBag}
                  className="btn py-3 text-uppercase fw-bold d-flex align-items-center justify-content-center gap-2 main-bag-btn"
                  style={{ borderRadius: "0px", letterSpacing: "0.1em", fontSize: "0.85rem" }}
                >
                  <FiShoppingBag /> ADD TO SHOPPING BAG
                </button>

                <button 
                  className="btn py-3 text-uppercase fw-bold d-flex align-items-center justify-content-center gap-2 wishlist-hollow-btn"
                  style={{ borderRadius: "0px", border: "1px solid rgba(226, 199, 146, 0.3)", color: "#E2C792", letterSpacing: "0.1em", fontSize: "0.85rem" }}
                >
                  <FiHeart /> ADD TO WISHLIST
                </button>
              </div>

              {/* Trust Markers */}
              <div className="d-flex flex-column gap-3 mt-5 pt-4" style={{ borderTop: "1px solid rgba(226, 199, 146, 0.1)", fontSize: "0.8rem", color: "rgba(226, 199, 146, 0.6)" }}>
                <div className="d-flex align-items-center gap-2">
                  <FiShield style={{ color: "#E2C792" }} />
                  <span>100% Certified Handcrafted Quality</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FiTruck style={{ color: "#E2C792" }} />
                  <span>Complimentary Pan-India Home Delivery</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;