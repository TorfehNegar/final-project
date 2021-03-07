import React from "react";
import PropTypes from 'prop-types';


const CardText = ({people}) => {
  return (
    <div className="card-text">
      <h1>{people.name}</h1>
      <p>{people.gender}</p>
    </div>
  );
};

CardText.propTypes = {
  people: PropTypes.object
};

export default CardText;