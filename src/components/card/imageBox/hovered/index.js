import React from "react";
import FavoriteButton from "./favorite/FavoriteButton";
import PropTypes from 'prop-types';

const CardActions = ({like, isFavorite, id}) => {
  return (
    <div>
      <FavoriteButton like={like} isFavorite={isFavorite} id={id} />
      {/*share component goes here*/}
    </div>
  );
};

CardActions.propTypes = {
  isFavorite: PropTypes.bool,
  like: PropTypes.func,
  id: PropTypes.number
};

export default CardActions;
