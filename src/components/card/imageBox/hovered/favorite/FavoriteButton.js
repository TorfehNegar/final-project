import React from 'react';
import PropTypes from 'prop-types';

const FavoriteButton = ({like, isFavorite, id}) => {

  return (
    <button className="action-button" onClick={(isFavorite) => like(id,isFavorite)}>
      { 
        isFavorite ? 
          <img 
            src="https://img.icons8.com/fluent/25/000000/star.png" 
            alt="add to favs" 
          /> : 
          <img 
            src="https://img.icons8.com/color/25/000000/star--v1.png" 
            alt="remove from favs" 
          /> 
      }
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  like: PropTypes.func,
  id: PropTypes.number
};

export default FavoriteButton;
