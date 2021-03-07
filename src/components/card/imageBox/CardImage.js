import React from "react";
import CardActions from "./hovered";

const CardImage = () => {
  return (
    <div>
      <img className="starwars-image" src="https://gamefa.com/wp-content/uploads/2019/12/lucasfilm-releases-a-cool-new-poster-for-star-wars-the-rise-of-skywalker-social.jpg"
        alt="star wars logo" />
      <CardActions />
    </div>
  );
};

export default CardImage;
