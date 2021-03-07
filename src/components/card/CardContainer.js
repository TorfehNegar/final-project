/* eslint-disable no-undef */
import React from "react";
import CardText from "./contentBox";
import CardImage from "./imageBox/CardImage";

const CardContainer = () => {
  return (
    <div>
      {/* use map method here */}
      <div>
        <CardImage isFavorite={people.isFavorite} like={() => like(people.id,people.isFavorite)} id={people.id} /> {/* shows the picture of the people */}
        <CardText people={people} /> {/* shows people's name and gender */}
      </div>
    </div>
  );
};

export default CardContainer;