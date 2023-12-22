import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { ItemContext } from "../Store/itemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(ItemContext);
  const totalPrice = `$${totalAmount.toFixed(2)}`;

  return (
    <>
      <div className="cart-box">
        {items.length < 1 ? (
          <div className="noDataCart">
            <h2>No Items in your cart !!!</h2>
            {/* <div className="closeBtn">
              <button className="cancelBtn" onClick={props.hideCartHandler}>
                Close
              </button>
            </div> */}
          </div>
        ) : (
          <>
            <span>Your cart items are here...</span>
            <section className="overflowCtr">
              {items.map((fruit) => (
                <CartItem key={fruit.id} fruit={fruit} />
              ))}
            </section>

            <div className="cart-total">
              <h3>Total price</h3>
              <p>{totalPrice}</p>
            </div>

            <div className="btn">
              <button className="cancelBtn" onClick={props.hideCartHandler}>
                Cancel
              </button>
              <button
                className="orderBtn"
                onClick={() => {
                  alert("Ordered !!");
                }}
              >
                Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
