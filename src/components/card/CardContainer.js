import React from "react";
import CardText from "./contentBox";
import CardImage from "./shadowBox/main";

const CardContainer = () => {
  return (
    <div>
      {/* use map method here */}
      <div>
        <CardImage /> {/* shows the picture of the people */}
        <CardText /> {/* shows people's name and gender */}
      </div>
    </div>
  );
};

export default CardContainer;