import React from "react";
import CardText from "./contentBox";
import CardImage from "./imageBox/CardImage";
import PropTypes from 'prop-types';
import "./cardStyles.scss";

const CardContainer = ({people, like}) => {
  return (
    <div className="card-container">
      <CardImage 
        isFavorite={people.isFavorite} 
        like={() => like(people.id,people.isFavorite)} 
        id={people.id} 
      />
      <CardText 
        people={people} 
      />
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.object,
  like: PropTypes.func
};

export default CardContainer;