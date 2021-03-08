/* eslint-disable no-undef */
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const CardText = ({people, pageId}) => {
  return (
    <div className="card-text">
      <Link to={{pathname:"/people/" + people.id, pageId: pageId}}>
        <h1>{people.name}</h1>
      </Link>
      <p>{people.gender}</p>
    </div>
  );
};

CardText.propTypes = {
  people: PropTypes.object,
  pageId: PropTypes.number
};

export default CardText;