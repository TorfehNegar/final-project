import React, { useEffect, useRef, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import MainLayout from '../../components/hos';
import CardContainer from '../../components/card/CardContainer';
import {changeFavorite} from '../../redux/people/action/fetchDataAction';
import './peoples.scss';
import Modal from '../../components/modal';
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

  return(
    <MainLayout>
      <div className='peoplesContainer'>
        {peoples.map((people) =>
          <CardContainer
            key={people.id} 
            people={people} 
            like={() => like(people.id, people.isFavorite)}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />)}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
       {/*<!-- Add Ref to Load More div -->*/}
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
    </MainLayout>
  );
};
export default Peoples;