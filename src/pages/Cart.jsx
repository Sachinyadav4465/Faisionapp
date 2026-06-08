import React from "react";
import { toast } from "react-toastify";
// Navigate ko hata diya kyunki uski zaroorat nahi hai, sirf useNavigate kafi hai
import { useNavigate } from "react-router-dom";

const Cart = ({
  cartItems,
  setCartItems,
  setShowCart,
}) => {
  // 1. Hook ko ekdum top par sahi jagah declare kiya
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    const product = cartItems.find(
      (item) => item.id === id
    );

    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.error(
      `${product?.title || product?.name} removed from cart`,
      {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark"
      }
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // 2. Checkout click handle karne ke liye clean function
  const handleCheckout = () => {
    setShowCart(false); // Drawer band hoga
    navigate("/checkout"); // Checkout page par redirect hoga
  };

  return (
    <div
      className="cartOverlay"
      onClick={() => setShowCart(false)}
    >
      <div
        className="cartDrawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cartHeader">
          <div>
            <h2>Shopping Bag</h2>
            <p>{totalItems} ITEMS SELECTED</p>
          </div>

          <button
            className="closeBtn"
            onClick={() => setShowCart(false)}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cartBody">
          {cartItems.length === 0 ? (
            <div className="emptyCart">
              <h4>Your Cart Is Empty 🛒</h4>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="cartItem"
              >
                <img
                  src={item.image || item.img}
                  alt={item.title || item.name}
                />

                <div className="itemDetails">
                  <div className="itemTop">
                    <h4>
                      {item.title || item.name}
                    </h4>

                    <button
                      className="removeBtn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      ✕
                    </button>
                  </div>

                  <p>
                    Color: {item.color || "Default"}
                    <br />
                    Size: {item.size || "Free Size"}
                  </p>

                  <div className="itemBottom">
                    <div className="qtyBox">
                      <button
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <h5>
                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cartFooter">
          <div className="summaryRow">
            <span>Subtotal</span>
            <strong>
              ₹{subtotal.toLocaleString()}
            </strong>
          </div>

          <div className="summaryRow">
            <span>Shipping</span>
            <span className="green">
              Complimentary
            </span>
          </div>

          <div className="summaryRow">
            <span>Total</span>
            <strong>
              ₹{subtotal.toLocaleString()}
            </strong>
          </div>

          {/* 3. onClick par handleCheckout call kiya aur khali cart par disabled lagaya */}
          <button 
            className="checkoutBtn" 
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            PROCEED TO CHECKOUT →
          </button>

          <small>
            SECURE PAYMENT • 14 DAY RETURNS
          </small>
        </div>
      </div>
    </div>
  );
};

export default Cart;