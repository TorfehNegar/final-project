import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CardContent = ({people}) => {
  return (
    <div className="card-text">
      <Link to={`people/${people.id}`}>
        <h3>{people.name}</h3>
      </Link>
      <p><b>gender: </b>{people.gender}</p>
      <p><b>birth: </b>{people.birth_year}</p>
    </div>
  );
};

CardContent.propTypes = {
  people: PropTypes.object
};

export default CardContent;