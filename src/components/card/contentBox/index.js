import React from "react";
import PropTypes from 'prop-types';

const CardText = ({people}) => {
  return (
    <div className="card-text">
      <h3>{people.name}</h3>
      <p>{people.gender}</p>
    </div>
  );
};

CardText.propTypes = {
  people: PropTypes.object
};

export default CardText;