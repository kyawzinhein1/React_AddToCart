import React from "react";

const Card = ({ fruit }) => {
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
            <input type="number" min={1} max={5} />
            <button>+ ADD</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
