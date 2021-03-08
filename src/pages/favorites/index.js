import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {changeFavorite} from '../../redux/people/action/fetchDataAction';
import CardContainer from '../../components/card/CardContainer';
import MainLayout from '../../components/hos';
import './favorites.scss';

const Favorites=()=>{
  const peoples=useSelector(state=>state.peoples);

  const favoritePeoples = peoples.filter(people =>{
    if(people.isFavorite==true){
      return people;
    }
    else{
      return null;
    }} 
  );
  
  const dispatch = useDispatch();

  const like=(ID,ISFAVORITE)=>{  
    dispatch(changeFavorite(ID,ISFAVORITE));
  };

  return(
    <MainLayout>
      {favoritePeoples.length===0?
        <div className='message'>
          <p >
           :) There is not favorite
          </p>
        </div>:
        favoritePeoples.map((people) =>
          <CardContainer
            key={people.id} 
            people={people} 
            like={()=>like(people.id,people.isFavorite)}
          />)} 
    </MainLayout>
  );
};
export default Favorites;