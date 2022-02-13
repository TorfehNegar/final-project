import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CardButton = ({people}) => {
  return (
    <Link to={{pathname:"/people/" + people.id}}>
      <button 
        className="link-button">
        More info
      </button>
    </Link>
  );
};

CardButton.propTypes = {
  people: PropTypes.object
};

export default CardButton;
