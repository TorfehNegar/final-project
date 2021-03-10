import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import MainLayout from '../../components/hos';
import CardContainer from '../../components/card/CardContainer';
import {changeFavorite} from '../../redux/people/action/fetchDataAction';
import './peoples.scss';
const Peoples=()=>{
  const peoples=useSelector(state=>state.peoples);
  const dispatch = useDispatch();

  const like=(ID,ISFAVORITE)=>{  
    dispatch(changeFavorite(ID,ISFAVORITE));
  };

  return(
    <MainLayout>
      
      <div className='peoplesContainer'>
        
        {peoples.map((people) =>
          <CardContainer
            key={people.id} 
            people={people} 
            like={()=>like(people.id,people.isFavorite)}
          />)}
      </div>
   
    </MainLayout>
  );
};
export default Peoples;