import React from "react";
import CartItem from "./CartItem";

const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 10.5,
    description: "Best Organic Apple",
    quantity: 5,
  },
  {
    id: 2,
    name: "Mango",
    price: 8.5,
    description: "Best Organic Mango",
    quantity: 3,
  },
  {
    id: 3,
    name: "Pineapple",
    price: 13.5,
    description: "Best Organic Pineapple",
  },
];

const Cart = () => {
  return (
    <>
      <div className="cart-box">
        <span>Order Lists</span>
        {fruits.map((fruit) => (
          <CartItem key={fruit.id} fruit={fruit} />
        ))}

        <div className="cart-total">
          <h3>Total price</h3>
          <p>$ 1000</p>
        </div>

        <div className="btn">
          <button className="cancelBtn">Cancel</button>
          <button className="orderBtn">Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
