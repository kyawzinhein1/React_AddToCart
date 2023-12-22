import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Backdrop from "../components/Backdrop";

const Control = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Header showCartHandler={showCartHandler} />
      <Body hideCartHandler={hideCartHandler} />
      <Backdrop showCart={showCart} hideCartHandler={hideCartHandler} />
    </div>
  );
};

export default Control;
