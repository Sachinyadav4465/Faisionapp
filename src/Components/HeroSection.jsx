import React from 'react';



const HeroSection = () => {
  return (
    <div className="heroWrapper">
      <main className="container-fluid position-relative py-5 px-md-5">
        
       
        <button className="carouselArrow arrowLeft d-none d-md-flex">
          ‹
        </button>

     
        <div className="heroCard row g-0 m-auto align-items-center">
          
       
          <div className="col-md-5 p-4 d-flex justify-content-center">
            <div className="imageWrapper">
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600" 
                alt="Indian heritage ensemble" 
                className="heroImage"
              />
            </div>
          </div>

          
          <div className="col-md-7 p-4 d-flex justify-content-center justify-content-md-start">
            <div className="textWrapper text-center text-md-start">                
              <div className="subTitle"> NEW ARRIVALS</div>
              <h1 className="mainTitle">The Royal Heritage</h1>
              <p className="description">
                Experience the fine craftsmanship of Indian heritage ensembles.
              </p>
              <button className="exploreBtn btn mt-4">
                EXPLORE COLLECTION <span className="ms-2">→</span>
              </button>
            </div>
          </div>

        </div>

        
        <button className="carouselArrow arrowRight d-none d-md-flex">
          ›
        </button>

      </main>
    </div>
  );
};

export default HeroSection;