import React, { useState } from "react";
import CardContent from "./cardContent";
import CardImage from "./cardImage";
import CardButton from "./cardButton";
import PropTypes from 'prop-types';
import "./cardStyles.scss";
import Modal from "./modal";

const CardContainer = ({ people, like }) => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="card-container">
      <CardImage
        isFavorite={people.isFavorite} 
        like={like} 
        id={people.id}
        setIsOpen={setIsOpen}
      />

      <CardContent
        people={people} 
      />
      <CardButton 
        people={people} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} people={people}  />
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.object,
  like: PropTypes.func,
  setIsOpen: PropTypes.func
};

export default CardContainer;