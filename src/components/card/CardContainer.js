import React from "react";
import CardText from "./contentBox";
import CardImage from "./shadowBox/main";

const CardContainer = () => {
  return (
    <div>
      {/* use map method here */}
      <div>
        <div className="image">
          <CardImage />
        </div>
        <div className="text">
          <CardText /> {/* shows people's name and gender */}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;