import React, { useState } from 'react';
// 1. Redirection ke liye useNavigate ko import kiya
import { useNavigate } from 'react-router-dom';

// 2. data array ab App.jsx se direct prop hokar 'productItems' mein aa raha hai
const Products = ({ addToCart, productItems }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ show: false, message: '' });

  // Agar kisi vajah se App.jsx se data aane mein deri ho, toh crash na ho isliye fallback array
  const itemsToRender = productItems && productItems.length > 0 ? productItems : [
    { id: 1, badge: 'Handcrafted', title: 'Royal Zardosi Saree', price: 12499, oldPrice: '₹18k', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600' },
    { id: 2, badge: 'New', title: 'Bridal Red Lehenga', price: 45000, oldPrice: '₹60k', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600' },
    { id: 3, badge: 'Trending', title: 'Anarkali Suit', price: 8500, oldPrice: '₹12k', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600' },
    { id: 4, badge: 'Ethnic', title: 'Banarasi Dupatta', price: 3200, oldPrice: '₹5k', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600' },
    { id: 5, badge: 'Premium', title: 'Designer Silk Saree', price: 15999, oldPrice: '₹22k', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600' },
    { id: 6, badge: 'Luxury', title: 'Wedding Lehenga', price: 59999, oldPrice: '₹75k', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' },
    { id: 7, badge: 'Best Seller', title: 'Party Wear Suit', price: 9999, oldPrice: '₹15k', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600' },
    { id: 8, badge: 'Exclusive', title: 'Banarasi Silk Dupatta', price: 4200, oldPrice: '₹7k', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600' }
  ];

  const handleAddClick = (e, item) => {
    e.stopPropagation(); // CRITICAL: Yeh Add to Cart dabane par page change hone se rokega!
    addToCart(item); 
    
    setNotification({
      show: true,
      message: `${item.title} added successfully!`
    });

    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 2500);
  };

  // 3. Dynamic route (/product/1) par bhejne ka sahi tareeka
  const handleNavigateToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="productGridWrapper py-5 position-relative">
      <div className="container">

        {/* Floating Custom Notification Banner at top center */}
        {notification.show && (
          <div 
            className="alert alert-dark position-fixed start-50 translate-middle-x shadow-lg text-center" 
            style={{ 
              top: '80px', 
              zIndex: 9999, 
              backgroundColor: '#52443f', 
              color: '#fff',
              border: 'none',
              letterSpacing: '0.05em',
              fontSize: '0.9rem',
              borderRadius: '2px'
            }}
          >
            ✨ {notification.message}
          </div>
        )}

        <div className="row g-4 customProductRow">
          {itemsToRender.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={item.id}>
              <div className="boutiqueProductCard">
                
         
                <div 
                  className="productImageFrame position-relative"
                  onClick={() => handleNavigateToDetails(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="floatingProductBadge">{item.badge}</span>
                  <img src={item.img} alt={item.title} className="boutiqueImg" />

                
                  <div className="cartHoverOverlay d-none d-md-flex">
                    <button
                      className="hoverCartBtn btn"
                      onClick={(e) => handleAddClick(e, item)} 
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>

                <div className="productCardFooter text-center p-3 d-flex flex-column justify-content-between">
                  <div>
                   
                    <h4 
                      className="boutiqueItemTitle"
                      onClick={() => handleNavigateToDetails(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.title}
                    </h4>
                    
                    <div className="boutiquePriceBox d-flex align-items-center justify-content-center gap-2 mt-1 mb-2">
                      <span className="currentPriceText">₹{item.price.toLocaleString()}</span>
                      <span className="oldPriceStrikeThrough">{item.oldPrice}</span>
                    </div>
                  </div>

                  
                  <div className="mobileButtonContainer d-block d-md-none mt-2">
                    <button
                      className="mobileCartBtn btn w-100"
                      onClick={(e) => handleAddClick(e, item)} 
                    >
                      ADD TO CART
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
