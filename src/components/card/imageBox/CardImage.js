import React from "react";
import CardActions from "./hovered";
import PropTypes from 'prop-types';

const CardImage = ({like, isFavorite, id}) => {
  return (
    <div className="card-image">
      <img src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
        alt="star wars logo" />
      <CardActions isFavorite={isFavorite} like={like} id={id} />
    </div>
  );
};

CardImage.propTypes = {
  like: PropTypes.func,
  isFavorite: PropTypes.bool,
  id: PropTypes.number
};

export default CardImage;
