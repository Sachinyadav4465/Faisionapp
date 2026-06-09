import React from 'react';
import HeroSection from '../Components/HeroSection';
import CurationSection from './CurationSection';
import OfferBanner from './OfferBanner';
import Product from './Products';
import Banner from './Banner';
import BestSeller from './BestSeller';
import Testimonial from './Testimonial';


const Home = ({ addToCart }) => {
  return (
    <>
      <HeroSection />
      <CurationSection />
      <OfferBanner />
      <Product addToCart={addToCart} />
      <Banner />
      <BestSeller />
      <Testimonial />
    </>
  );
};

export default Home;