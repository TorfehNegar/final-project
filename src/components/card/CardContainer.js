import React from "react";
import CardText from "./contentBox";

const CardContainer = () => {
  return (
    <div>
      {/* use map method here */}
      <div>
        <div className="image">
            image goes here
        </div>
        <div className="text">
          <CardText /> {/* shows people's name and gender */}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;