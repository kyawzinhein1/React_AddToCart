import React from "react";
import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 10.5,
    description: "Best Organic Apple",
  },
  {
    id: 2,
    name: "Mango",
    price: 8.5,
    description: "Best Organic Mango",
  },
  {
    id: 3,
    name: "Pineapple",
    price: 13.5,
    description: "Best Organic Pineapple",
  },
  {
    id: 4,
    name: "Grape",
    price: 5,
    description: "Best Organic Grape",
  },
  {
    id: 5,
    name: "Orange",
    price: 2.5,
    description: "Best Organic Orange",
  },
];

const body = () => {
  return (
    <div>
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default body;
