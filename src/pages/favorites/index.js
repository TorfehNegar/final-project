/* eslint-disable */
import React , {useState, useEffect, useCallback} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {changeFavorite} from '../../redux/people/action/fetchDataAction';
import CardContainer from '../../components/card/CardContainer';
import MainLayout from '../../components/hos';
import './favorites.scss';

const Favorites=()=>{

  const [users, setUsers] = useState([]);
  const [displayPeoples, setDisplayPeoples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const peoples=useSelector(state=>state.peoples);

  const favoritePeoples = peoples.filter(people =>{
    if(people.isFavorite===true){
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


  useEffect(()=>{
    if (favoritePeoples.length===0) setErrorMessage('there is not favorite');
    if (users.length===0 && favoritePeoples.length>0) {
      setErrorMessage('')
      if (!start) {
        setStart(true)
        setUsers(favoritePeoples);
        setDisplayPeoples(favoritePeoples);
      }else {
        setErrorMessage('موردی یافت نشد')
      }
    }
    else if (favoritePeoples.length<users.length){
      setUsers(favoritePeoples);
      setDisplayPeoples(favoritePeoples);
    }
  },[favoritePeoples,peoples]);

  const filterArray=(input)=> {
    setLoading(false);
    if (input === '') {
      setUsers(displayPeoples);
      setErrorMessage('');
    }
    else setUsers(users.filter(people => people.name.toLowerCase().includes(input)));
  };
  const debounce = (fn,delay) => {
    let inDebounce = null;
    return args => {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => fn(args), delay);
      setLoading(true);
    };
  };

  const debouncedSave = useCallback(debounce((input)=>filterArray(input), 5000),[users]);

  const handleChange = (event) => {
    let input = event.target.value.toLowerCase();
    debouncedSave(input);
  };

  return(
    <MainLayout>
      {favoritePeoples.length===0?
        <div className='messageContainer'>
          <div className='messageText'>
            <p>{errorMessage}</p>
          </div> 
        </div>
        :
        <div>
          <div className='search-bar'>
            <input className="search-input" type="text" placeholder="جستجو کنید..."
              onChange={event => handleChange(event)}/>
            <div className="search"></div>
            {loading === true &&
            <div id="load" className="search-bar-loading">
              <div>G</div><div>N</div><div>I</div><div>D</div><div>A</div><div>O</div><div>L</div>
            </div>
            }
          </div>
          <div className='favoriteContainer'>
            {errorMessage!=='' &&  /*when search result is null==> error: there is no result */
            <div className='messageContainer'>
              <div className='messageText'>
                <p>{errorMessage}</p>
              </div>
            </div>
            }
            { users.map((people) =>
              <CardContainer
                key={people.id}
                people={people}
                like={()=>like(people.id,people.isFavorite)}
              />)}
          </div>
        </div>
      }
    </MainLayout>
  );
};
export default Favorites;