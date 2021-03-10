import React, { useEffect, useRef, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import MainLayout from '../../components/hos';
import CardContainer from '../../components/card/CardContainer';
import {changeFavorite, getAllPeoples} from '../../redux/people/action/fetchDataAction';
import './peoples.scss';
const Peoples=()=>{
  const peoples=useSelector(state=>state.peoples);
  const dispatch = useDispatch();

  const like=(ID,ISFAVORITE)=>{  
    dispatch(changeFavorite(ID,ISFAVORITE));
  };



  // tracking on which page we currently are
  const [page, setPage] = useState(1);
  // add loader refrence 
  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

  }, []);


  useEffect(() => {
    // here we simulate adding new posts to List
    dispatch(getAllPeoples(page));
  }, [page]);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {   
      setPage((page) => page + 1);
    }
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
        {/*<!-- Add Ref to Load More div -->*/}
        
      </div>
      <div className="loading" ref={loader}>
        <h2>Load More</h2>
      </div>
    </MainLayout>
  );
};
export default Peoples;