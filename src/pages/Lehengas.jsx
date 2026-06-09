import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lehengas = ({ addToCart, productItems }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ show: false, message: '' });
  
  
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(80000); 

  
  const itemsToRender = productItems && productItems.length > 0 ? productItems : [
    { id: 2, category: 'Lehengas', subCategory: 'Bridal', badge: 'New', title: 'Bridal Red Lehenga', price: 45000, oldPrice: '₹60k', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600' },
    { id: 6, category: 'Lehengas', subCategory: 'Luxury', badge: 'Luxury', title: 'Wedding Lehenga', price: 59999, oldPrice: '₹75k', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' }
  ];

  
  const allLehengas = itemsToRender.filter(
    item => item.category === 'Lehengas' || item.title.toLowerCase().includes('lehenga')
  );

 
  const subCategories = ['All', 'Bridal', 'Luxury', 'Silk', 'Georgette'];

  
  const filteredLehengas = allLehengas.filter((item) => {
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
        
       
        {notification.show && (
          <div className="alert alert-dark position-fixed start-50 translate-middle-x shadow-lg text-center" style={{ top: '80px', zIndex: 9999, backgroundColor: '#52443f', color: '#fff', border: 'none', borderRadius: '2px' }}>
             {notification.message}
          </div>
        )}

     
        <div className="text-center mb-5">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', letterSpacing: '0.05em' }}>
            Imperial <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Lehengas</span>
          </h2>
          <p style={{ color: 'rgba(226, 199, 146, 0.6)', fontStyle: 'sans-serif', fontSize: '0.9rem' }}>
            Royal bridal heirlooms designed for your most unforgettable moments.
          </p>
        </div>

        <div className="row g-4">
          
          
          <div className="col-lg-3 col-md-4">
            <div className="p-4" style={{ backgroundColor: 'rgba(226, 199, 146, 0.03)', border: '1px solid rgba(226, 199, 146, 0.15)', borderRadius: '4px' }}>
              
              <h5 className="fw-bold pb-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", borderBottom: '2px solid #E2C792', letterSpacing: '0.05em' }}>
                Filter By
              </h5>

              
              <div className="mb-5">
                <span className="d-block fw-bold text-uppercase mb-3 tracking-wider" style={{ fontSize: '0.75rem', color: 'rgba(226, 199, 146, 0.6)' }}>
                  Collection Type
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
                      {selectedSubCategory === sub ? '✦ ' : ''}{sub} {sub !== 'All' ? 'Lehengas' : ''}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div>
                <span className="d-block fw-bold text-uppercase mb-3 tracking-wider" style={{ fontSize: '0.75rem', color: 'rgba(226, 199, 146, 0.6)' }}>
                  Price Range
                </span>
                <input 
                  type="range" 
                  className="w-100 premium-range-slider" 
                  min="5000" 
                  max="80000" 
                  step="2000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between mt-2 small fw-semibold">
                  <span>Up to ₹{maxPrice.toLocaleString()}</span>
                </div>
              </div>

            </div>
          </div>

          
          <div className="col-lg-9 col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4 text-muted small">
              <span>Showing {filteredLehengas.length} boutique pieces</span>
            </div>

            {filteredLehengas.length === 0 ? (
              <div className="text-center py-5">
                <h4 style={{ fontFamily: "'Playfair Display', serif" }}>No masterpieces match your selected ranges.</h4>
              </div>
            ) : (
              <div className="row g-4">
                {filteredLehengas.map((item) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                    <div className="boutiqueProductCard" style={{ border: '1px solid rgba(226, 199, 146, 0.1)', backgroundColor: 'rgba(226, 199, 146, 0.01)' }}>
                      
                      
                      <div className="productImageFrame position-relative" onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: 'pointer' }}>
                        <span className="floatingProductBadge">{item.badge}</span>
                        <img src={item.img} alt={item.title} className="boutiqueImg" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />

                        <div className="cartHoverOverlay d-none d-md-flex">
                          <button className="hoverCartBtn btn" onClick={(e) => handleAddClick(e, item)}>
                            ADD TO CART
                          </button>
                        </div>
                      </div>

                      
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

export default Lehengas;