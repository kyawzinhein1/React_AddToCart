import {useContext} from "react";
import { ItemContext } from "../Store/itemContext";

const Nav = (props) => {
  const { items } = useContext(ItemContext);
  const totalCart = items.reduce((currentVal,item)=>{
    return currentVal + item.amount;
  },0);
  return (
    <nav className="nav">
      <h2>My Shop</h2>
      <button onClick={props.showCartHandler}>
        Cart <span>{totalCart}</span>
      </button>
    </nav>
  );
};

export default Nav;
