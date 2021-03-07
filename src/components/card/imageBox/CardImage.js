import React from "react";
import CardActions from "./hovered";
import PropTypes from 'prop-types';

const CardImage = ({like, isFavorite, id}) => {
  return (
    <div>
      <img className="starwars-image" src="https://gamefa.com/wp-content/uploads/2019/12/lucasfilm-releases-a-cool-new-poster-for-star-wars-the-rise-of-skywalker-social.jpg"
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
