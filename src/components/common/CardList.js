import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div className="flex space-x-2 px-2">
      {cards.map((card) => (
        <Card key={card.ID} card={card} />
      ))}
    </div>
  );
};

export default CardList;
