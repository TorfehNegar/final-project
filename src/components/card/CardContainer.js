import React from "react";
import CardText from "./contentBox";
import CardImage from "./imageBox/CardImage";
import CardButton from "./cardButton";
import PropTypes from 'prop-types';
import "./cardStyles.scss";

const CardContainer = ({people, like,setIsOpen}) => {
  return (
    <div className="card-container">
      <CardImage 
        isFavorite={people.isFavorite} 
        like={like} 
        id={people.id}
        setIsOpen={setIsOpen}
      />

      <CardText 
        people={people} 
      />
      <CardButton 
        people={people}  />
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.object,
  like: PropTypes.func,
  // isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
};

export default CardContainer;