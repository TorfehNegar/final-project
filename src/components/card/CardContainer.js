import React from "react";
import CardText from "./contentBox";
import CardImage from "./imageBox/CardImage";
import CardButton from "./cardButton";
import PropTypes from 'prop-types';
import "./cardStyles.scss";

const CardContainer = ({people, like}) => {
  return (
    <div className="card-container">
      <CardImage 
        isFavorite={people.isFavorite} 
        like={like} 
        id={people.id} 
      />
      <CardText 
        people={people} 
      />
      <CardButton />
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.object,
  like: PropTypes.func
};

export default CardContainer;