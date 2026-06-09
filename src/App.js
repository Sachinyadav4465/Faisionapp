import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout & Static Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Pages & Dynamic Content
import Home from './pages/Home'; 
//import Product from './pages/Products';
//import BestSeller from './pages/BestSeller';
//import Testimonial from './pages/Testimonial';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; 
import Login from './pages/Login'
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Contact from './Components/Contact'
import Sarees from './pages/Sarees';
import Lehengas from './pages/Lehengas';
import './Styles/Styles.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // 1. Data Array ko global kiya taaki Product List aur Product Details dono ise use kar sakein
  const productItems = [
    { id: 1, badge: 'Handcrafted', title: 'Royal Zardosi Saree', price: 12499, oldPrice: '₹18k', tagline: 'POSH ETHNICS PREMIUM', description: 'A masterpiece of traditional craftsmanship, this saree features authentic gold thread Zardosi work on premium mulberry silk.', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600' },
    { id: 2, badge: 'New', title: 'Bridal Red Lehenga', price: 45000, oldPrice: '₹60k', tagline: 'BRIDAL LUXURY', description: 'Exquisite bridal red lehenga with heavy intricate embroidery perfect for heritage celebrations.', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600' },
    { id: 3, badge: 'Trending', title: 'Anarkali Suit', price: 8500, oldPrice: '₹12k', tagline: 'TRENDING COLLECTION', description: 'Elegant Anarkali suit perfect for festive occasions and premium gatherings.', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600' },
    { id: 4, badge: 'Ethnic', title: 'Banarasi Dupatta', price: 3200, oldPrice: '₹5k', tagline: 'ETHNIC ACCESSORIES', description: 'Authentic Banarasi dupatta with rich traditional zari borders.', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600' },
    { id: 5, badge: 'Premium', title: 'Designer Silk Saree', price: 15999, oldPrice: '₹22k', tagline: 'PREMIUM SILK', description: 'Pure mulberry silk saree with designer handloom weaving.', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600' },
    { id: 6, badge: 'Luxury', title: 'Wedding Lehenga', price: 59999, oldPrice: '₹75k', tagline: 'HERITAGE COUTURE', description: 'A heavy designer wedding lehenga adorned with royal silver and gold motifs.', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' },
    { id: 7, badge: 'Best Seller', title: 'Party Wear Suit', price: 9999, oldPrice: '₹15k', tagline: 'ELEGANT PARTY WEAR', description: 'Stylish and modern fusion ethnic wear suit for luxury events.', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600' },
    { id: 8, badge: 'Exclusive', title: 'Banarasi Silk Dupatta', price: 4200, oldPrice: '₹7k', tagline: 'EXCLUSIVE TEXTURES', description: 'Rich heavy silk Banarasi dupatta woven by master artisans.', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600' }
  ];

  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id && item.size === product.size);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, image: product.img || product.image, color: product.color || "Default", size: product.size || "Free Size" }];
    });

    toast.success(`${product.title} added successfully!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "dark",
    });
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#061711', minHeight: '100vh' }}>
        
        <Navbar setShowCart={setShowCart} cartItems={cartItems} />

        <Routes>
        
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/sarees" element={<Sarees addToCart={addToCart} productItems={productItems} />} />
          <Route path="/lehengas" element={<Lehengas addToCart={addToCart} />} />
          {/* <Route path="/contact" element={<Testimonial />} /> */}
          
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} productItems={productItems} />} />
        </Routes>

        <Footer />

        {/* Global Cart Overlay Component */}
        {showCart && (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            setShowCart={setShowCart}
          />
        )}

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;