import React from "react";
import PropTypes from 'prop-types';

const CardText = ({people}) => {
  return (
    <div className="card-text">
      <h3>{people.name}</h3>
      <p><b>gender: </b>{people.gender}</p>
      <p><b>birth: </b>{people.birth_year}</p>
      <p><b>birth: </b>{people.birth_year}</p>
    </div>
  );
};

CardText.propTypes = {
  people: PropTypes.object
};

export default CardText;