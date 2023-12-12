import React from "react";

const CartItem = ({ fruit }) => {
  return (
    <>
      <div className="cart-body">
        <section className="cart">
          <div className="cart-left">
            <h4>{fruit.name}</h4>
            <p>{fruit.description}</p>
          </div>

          <div className="cart-right">
            <input type="number" min={1} max={5} />
            <p>$ {fruit.price}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartItem;
