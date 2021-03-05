import React from 'react';
import { ReactComponent as Heart } from '../../../../assets/svg/heart.svg';
import './Favorite.scss'

function Favorite() {
  return (
    <div className="favorite">
      <p> 2 </p>
      <a> <Heart/> </a>
    </div>
  );
}

export default Favorite;
