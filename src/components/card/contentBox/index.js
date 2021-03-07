/* eslint-disable react/prop-types */
import React from "react";

const CardText = ({people}) => {
  return (
    <div>
      <h1>{people.name}</h1>
      <p>{people.gender}</p>
    </div>
  );
};

export default CardText;