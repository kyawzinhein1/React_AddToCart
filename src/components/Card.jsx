import { useContext, useState } from "react";
import { ItemContext } from "../Store/itemContext";

const Card = ({ fruit }) => {
  const { id, name, description, price } = fruit;
  const { addItem } = useContext(ItemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 5) {
      alert("Please enter a valid amount !!!");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };

  return (
    <>
      <div className="card-body">
        <section className="card">
          <div className="card-left">
            <h4>{fruit.name}</h4>
            <p>{fruit.description}</p>
            <p>$ {fruit.price}</p>
          </div>

          <div className="card-right">
            <input
              type="number"
              min={1}
              max={5}
              value={currentAmount}
              onChange={(e) => {
                setCurrentAmount(e.target.value);
              }}
            />
            <button onClick={addToCartHandler}>+ ADD</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
