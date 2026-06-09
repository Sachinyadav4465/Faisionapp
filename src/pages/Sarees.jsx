import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sarees = ({ addToCart, productItems }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ show: false, message: '' });
  
  // States for Filtering inside Sarees
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(60000);

  // Fallback items array agar main state se data na mile
  const itemsToRender = productItems && productItems.length > 0 ? productItems : [
    { id: 1, category: 'Saree', subCategory: 'Zardosi', badge: 'Handcrafted', title: 'Royal Zardosi Saree', price: 12499, oldPrice: '₹18k', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600' },
    { id: 4, category: 'Dupatta', subCategory: 'Banarasi', badge: 'Ethnic', title: 'Banarasi Dupatta', price: 3200, oldPrice: '₹5k', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600' },
    { id: 5, category: 'Saree', subCategory: 'Silk', badge: 'Premium', title: 'Designer Silk Saree', price: 15999, oldPrice: '₹22k', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600' },
  ];

  // 1. CRITICAL: Pehle poore data mein se sirf 'Saree' category wale items ko nikalenge
  const allSarees = itemsToRender.filter(item => item.category === 'Saree' || item.title.toLowerCase().includes('saree'));

  // Saree ke andar ke fabrics/types (Sidebar ke liye)
  const subCategories = ['All', 'Silk', 'Zardosi', 'Banarasi'];

  // 2. Real-time Filter logic for Sidebar inside Saree Page
  const filteredSarees = allSarees.filter((item) => {
    const matchesSubCat = selectedSubCategory === 'All' || item.subCategory === selectedSubCategory || item.title.toLowerCase().includes(selectedSubCategory.toLowerCase());
    const matchesPrice = item.price <= maxPrice;
    return matchesSubCat && matchesPrice;
  });

  const handleAddClick = (e, item) => {
    e.stopPropagation();
    addToCart(item);
    setNotification({ show: true, message: `${item.title} added successfully!` });
    setTimeout(() => setNotification({ show: false, message: '' }), 2500);
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#061711', minHeight: '100vh', color: '#E2C792' }}>
      <div className="container mt-5">
        
        {/* Toast Notification */}
        {notification.show && (
          <div className="alert alert-dark position-fixed start-50 translate-middle-x shadow-lg text-center" style={{ top: '80px', zIndex: 9999, backgroundColor: '#52443f', color: '#fff', border: 'none', borderRadius: '2px' }}>
            ✨ {notification.message}
          </div>
        )}

        {/* Page Header */}
        <div className="text-center mb-5">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', letterSpacing: '0.05em' }}>
            Our Exclusive <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Sarees</span>
          </h2>
          <p style={{ color: 'rgba(226, 199, 146, 0.6)', fontStyle: 'sans-serif', fontSize: '0.9rem' }}>
            Handpicked heritage weaves crafted by finest artisans.
          </p>
        </div>

        <div className="row g-4">
          
          {/* ================= LEFT SIDEBAR: FILTER PANEL ================= */}
          <div className="col-lg-3 col-md-4">
            <div className="p-4" style={{ backgroundColor: 'rgba(226, 199, 146, 0.03)', border: '1px solid rgba(226, 199, 146, 0.15)', borderRadius: '4px' }}>
              
              <h5 className="fw-bold pb-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", borderBottom: '2px solid #E2C792', letterSpacing: '0.05em' }}>
                Filter By
              </h5>

              {/* Saree Type Filters */}
              <div className="mb-5">
                <span className="d-block fw-bold text-uppercase mb-3 tracking-wider" style={{ fontSize: '0.75rem', color: 'rgba(226, 199, 146, 0.6)' }}>
                  Saree Type
                </span>
                <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                  {subCategories.map((sub) => (
                    <li 
                      key={sub}
                      onClick={() => setSelectedSubCategory(sub)}
                      style={{ 
                        cursor: 'pointer', 
                        color: selectedSubCategory === sub ? '#ffffff' : '#E2C792', 
                        fontWeight: selectedSubCategory === sub ? '600' : '400',
                        transition: 'all 0.2s'
                      }}
                      className="category-filter-item"
                    >
                      {selectedSubCategory === sub ? '✦ ' : ''}{sub} {sub !== 'All' ? 'Sarees' : ''}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Slider */}
              <div>
                <span className="d-block fw-bold text-uppercase mb-3 tracking-wider" style={{ fontSize: '0.75rem', color: 'rgba(226, 199, 146, 0.6)' }}>
                  Price Range
                </span>
                <input 
                  type="range" 
                  className="w-100 premium-range-slider" 
                  min="2000" 
                  max="60000" 
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between mt-2 small fw-semibold">
                  <span>Up to ₹{maxPrice.toLocaleString()}</span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE: SAREE GRID ================= */}
          <div className="col-lg-9 col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4 text-muted small">
              <span>Showing {filteredSarees.length} sarees</span>
            </div>

            {filteredSarees.length === 0 ? (
              <div className="text-center py-5">
                <h4 style={{ fontFamily: "'Playfair Display', serif" }}>No sarees match your criteria.</h4>
              </div>
            ) : (
              <div className="row g-4">
                {filteredSarees.map((item) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                    <div className="boutiqueProductCard" style={{ border: '1px solid rgba(226, 199, 146, 0.1)', backgroundColor: 'rgba(226, 199, 146, 0.01)' }}>
                      
                      {/* Image Frame */}
                      <div className="productImageFrame position-relative" onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: 'pointer' }}>
                        <span className="floatingProductBadge">{item.badge}</span>
                        <img src={item.img} alt={item.title} className="boutiqueImg" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />

                        <div className="cartHoverOverlay d-none d-md-flex">
                          <button className="hoverCartBtn btn" onClick={(e) => handleAddClick(e, item)}>
                            ADD TO CART
                          </button>
                        </div>
                      </div>

                      {/* Info Metadata */}
                      <div className="productCardFooter text-center p-3">
                        <h4 className="boutiqueItemTitle" onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: 'pointer', fontSize: '1rem' }}>
                          {item.title}
                        </h4>
                        <div className="boutiquePriceBox d-flex align-items-center justify-content-center gap-2 mt-1 mb-2">
                          <span className="currentPriceText">₹{item.price.toLocaleString()}</span>
                          <span className="oldPriceStrikeThrough" style={{ textDecoration: 'line-through', opacity: 0.4 }}>{item.oldPrice}</span>
                        </div>

                        <div className="mobileButtonContainer d-block d-md-none mt-2">
                          <button className="mobileCartBtn btn w-100" onClick={(e) => handleAddClick(e, item)}>
                            ADD TO CART
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Sarees;