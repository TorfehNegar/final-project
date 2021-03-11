import React, { useEffect, useRef, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import PageHOC from '../../components/PageHOC';
import Card from '../../components/card';
import {changeFavorite, getAllPeoples} from '../../redux/people/action/fetchDataAction';
import './peoples.scss';

const Peoples=()=>{
  const peoples=useSelector(state=>state.peoples);
  const dispatch = useDispatch();

  const [isOpen,setIsOpen]=useState(false);

  const like=(ID,ISFAVORITE)=>{  
    dispatch(changeFavorite(ID,ISFAVORITE));
  };
  // tracking on which page we currently are
  const [page, setPage] = useState(2);
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
    if (page <= 9) {
    // here we simulate adding new posts to List
      dispatch(getAllPeoples(page));
    }
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
    <PageHOC>
      <div className='peoplesContainer'>
        {peoples.map((people) =>
          <Card
            key={people.id} 
            people={people} 
            like={() => like(people.id, people.isFavorite)}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />)}
      </div>{/*<!-- Add Ref to Load More div -->*/}
      {
        page<=9 ? 
          <div 
            className="loading" 
            ref={loader}>
            <h2>Load More</h2>
          </div> 
          : 
          <></> 
      }
    </PageHOC>
  );
};
export default Peoples;