import React from "react";
import FavoriteButton from "./favorite/FavoriteButton";
import PropTypes from 'prop-types';
import ShareButton from "./share/ShareButton";

const CardActions = ({like, isFavorite, id}) => {
  return (
    <div>
      <FavoriteButton like={like} isFavorite={isFavorite} id={id} />
      <ShareButton />
    </div>
  );
};

CardActions.propTypes = {
  isFavorite: PropTypes.bool,
  like: PropTypes.func,
  id: PropTypes.number
};

export default CardActions;
