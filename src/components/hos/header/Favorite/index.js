import React from 'react';
// import { ReactComponent as Heart } from '../../../../assets/svg/heart.svg';
import './Favorite.scss';
import {useSelector} from 'react-redux';

function Favorite() {
  const peoples=useSelector(state=>state.peoples); 
  let favoriteCounter=peoples.filter(item =>{
    if(item.isFavorite==true){
      return item;
    }} 
  );
  return (
    <div className="favorite">
      <p> <button> <span className="favorite__box"> {favoriteCounter.length} </span> </button> </p>
    </div>
  );
}

export default Favorite;