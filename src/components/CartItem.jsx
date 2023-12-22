import React, { useContext } from "react";
import { ItemContext } from "../Store/itemContext";

const CartItem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(ItemContext);
  const addAmountHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };

  const removeAmountHandler = () => {
    removeItem(fruit.id);
  };
  return (
    <>
      <div className="cart-body">
        <section className="cart">
          <div className="cart-left">
            <h4 className="cart-title">{fruit.name}</h4>
            <p className="cart-price">$ {fruit.price}</p>
          </div>

          <div className="cart-right">
            <div className="list">
              <span>{fruit.amount}</span>
            </div>

            <div className="button">
              <button className="plusBtn" onClick={addAmountHandler}>
                +
              </button>
              <button className="minusBtn" onClick={removeAmountHandler}>
                -
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartItem;
