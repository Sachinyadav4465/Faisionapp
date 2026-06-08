import React from "react";


const Banner = () => {
  return (
    <section className="artisan-banner mt-0">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-section">
            <div className="content-wrapper">

              <span className="subtitle">
                ARTISAN CRAFTED
              </span>

              <h1 className="main-title">
                Legacy of
                <span className="italic-title">
                  Pure Grace.
                </span>
              </h1>

              <div className="description-wrapper">
                <p className="description-text">
                  Experience the unrefined luxury of Desert Rose silk.
                  A collection curated for the modern heirloom, woven
                  with ancient patience.
                </p>
              </div>

              <button className="cta-button">
                VIEW THE EXHIBIT
                <span className="arrow">→</span>
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 image-section">

            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80"
                alt="Fashion"
                className="banner-image"
              />
            </div>

            {/* TOP BADGE */}
            <div className="badge-floating badge-handloomed">
               HAND-LOOMED
            </div>

            {/* BOTTOM BADGE */}
            <div className="badge-floating badge-certified">
               CERTIFIED PURE
            </div>

            {/* TEXT NOTES */}
            <div className="note-left">
              The sweet details on this blouse
              and skirt
            </div>

            <div className="note-right">
              add a captivating feminine touch.
              <br />
              <br />
              Simple yet still standout
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;