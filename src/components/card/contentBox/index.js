/* eslint-disable no-undef */
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const CardText = ({people}) => {
  return (
    <div className="card-text">
      <Link to={{pathname:"/people/" + people.id}}>
        <h1>{people.name}</h1>
      </Link>
      <p>جنسیت:{people.gender}</p>
    </div>
  );
};

CardText.propTypes = {
  people: PropTypes.object
};

export default CardText;