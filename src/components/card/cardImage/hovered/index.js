import React from "react";
import FavoriteButton from "./favoriteBtn";
import PropTypes from 'prop-types';
import ShareButton from "./shareBtn";

const CardActions = ({like, isFavorite, id ,setIsOpen}) => {
  return (
    <div className="card-actions">
      <FavoriteButton 
        like={like} 
        isFavorite={isFavorite} 
        id={id} />
      <ShareButton setIsOpen={setIsOpen} />
    </div>
  );
};

CardActions.propTypes = {
  isFavorite: PropTypes.bool,
  like: PropTypes.func,
  id: PropTypes.number,
  setIsOpen:PropTypes.func
};

export default CardActions;
