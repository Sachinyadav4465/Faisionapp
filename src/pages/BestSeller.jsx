import React from 'react';


const Products = () => {
    const productItems = [
  
        {
            id: 1,
            badge: 'Handcrafted',
            title: 'Royal Zardosi Saree',
            price: '₹12,499',
            oldPrice: '₹18k',
            img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 2,
            badge: 'New',
            title: 'Bridal Red Lehenga',
            price: '₹45,000',
            oldPrice: '₹60k',
            img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 3,
            badge: 'Trending',
            title: 'Anarkali Suit',
            price: '₹8,500',
            oldPrice: '₹12k',
            img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 4,
            badge: 'Ethnic',
            title: 'Banarasi Dupatta',
            price: '₹3,200',
            oldPrice: '₹5k',
            img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600'
        }
    ];

    return (
        <div className="productGridWrapper py-5">
            <div className="container">
                <h1 className="text-center mb-5 " style={{ fontSize: '2.5rem', fontWeight: 'bold',color: "#E2C792" }}>Best Sellers</h1>
                <div className="row g-4 customProductRow">
                    {productItems.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={item.id}>
                            <div className="boutiqueProductCard">

                                <div className="productImageFrame position-relative">
                                    <span className="floatingProductBadge">{item.badge}</span>

                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="boutiqueImg"
                                    />


                                    <div className="cartHoverOverlay d-none d-md-flex">
                                        <button className="hoverCartBtn btn">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>


                                <div className="productCardFooter text-center p-3 d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 className="boutiqueItemTitle">{item.title}</h4>
                                        <div className="boutiquePriceBox d-flex align-items-center justify-content-center gap-2 mt-1 mb-2">
                                            <span className="currentPriceText">{item.price}</span>
                                            <span className="oldPriceStrikeThrough">{item.oldPrice}</span>
                                        </div>
                                    </div>


                                    <div className="mobileButtonContainer d-block d-md-none mt-2">
                                        <button className="mobileCartBtn btn w-100">
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