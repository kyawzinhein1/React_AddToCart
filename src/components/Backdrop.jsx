import React from "react";
import Cart from "./Cart";

const Backdrop = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section className="backdrop" onClick={props.hideCartHandler} />
          <Cart hideCartHandler={props.hideCartHandler} />
        </>
      )}
    </>
  );
};

export default Backdrop;
