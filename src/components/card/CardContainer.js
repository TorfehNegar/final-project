/* eslint-disable no-undef */
import React from "react";
import CardText from "./contentBox";
import CardImage from "./imageBox/CardImage";

/*
 **** requirements **** 
 1. peoples array ( containing objects of star wars characters ) from store 
 2. isFavorite property of each object
 3. id of each object
 4. a function to pass it to FavoriteButton component through props drilling -
    to get the id and isFavorite property of the liked card
*/

const CardContainer = () => {
  return (
    <div>
      {/* use map method here */}
      <div className="card-container">
        <CardImage isFavorite={people.isFavorite} like={() => like(people.id,people.isFavorite)} id={people.id} /> {/* shows the picture of the people */}
        <CardText people={people} /> {/* shows people's name and gender */}
      </div>
    </div>
  );
};

export default CardContainer;