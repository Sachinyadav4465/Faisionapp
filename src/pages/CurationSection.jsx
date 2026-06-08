import React from 'react';


const CurationSection = () => {
 
  const curationItems = [
    {
      id: 1,
      title: 'ROYAL SAREES',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      title: 'BRIDAL WEAR',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      title: 'CLASSICS',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section className="curationWrapper py-5">
      <div className="container text-center">
        
        
        <div className="luxeSubtitle">✨ LUXE DIRECTORY</div>
        
        
        <h2 className="curationTitle mb-5">The Curation</h2>

    
        <div className="row g-4 justify-content-center">
          {curationItems.map((item) => (
            <div key={item.id} className="col-10 col-sm-6 col-md-4">
              
              
              <div className="curationCard">
                
                
                <div className="curationImgBox">
                  <img src={item.image} alt={item.title} className="curationImage" />
                </div>
                
                
                <div className="verticalStripe">
                  <span className="stripeText">{item.title}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurationSection;