import React , {useState, useEffect, useCallback, useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {changeFavorite} from '../../redux/people/action/fetchDataAction';
import CardContainer from '../../components/card/CardContainer';
import MainLayout from '../../components/hos';
import './favorites.scss';

const Favorites=()=>{

  const [users, setUsers] = useState([]);//users show favorite peoples in screen
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false); // if start==true ==> means that users get const favoritePeoples from redux
  const [errorMessage, setErrorMessage] = useState('');

  const peoples=useSelector(state=>state.peoples);

  //this const getting from redux
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

  //*** define prev favorite peoples const ***//
  const prevFavRef = useRef();
  useEffect(() => {
    prevFavRef.current = favoritePeoples;
  });
  const prevFav = prevFavRef.current;

  //*** set component is mounted or not ***//
  const unMounted=useRef(false);
  useEffect(() => {
    return ()=> {unMounted.current = true;};
  },[]);

  useEffect(()=>{
    setErrorMessage('');
    if (favoritePeoples.length===0) setErrorMessage('there is not favorite'); //when we have not any favorites.
    if (users.length===0 && favoritePeoples.length>0) { //when users is empty but favorite peoples are full
      setErrorMessage('');
      if (!start) { //this is first time and users getting favorite peoples data.
        setStart(true);
        setUsers(favoritePeoples);
      }else  /*when search result is null==> error: there is no result */
        setErrorMessage('موردی یافت نشد');
    }
    if (prevFav && (prevFav.length > 0)) { /* when client click unFavorite of the card, we should set new users for display, this can get from new favorite peoples - users */
      if (!objectsAreSame(prevFav,favoritePeoples)){
        setUsers(users.filter(item =>{ return  !!favoritePeoples.includes(item);}));
      }
    }
  },[favoritePeoples,peoples]);

  const objectsAreSame = (x, y) =>{
    let objectsAreSame = true;
    for(let propertyName in x) {
      if(x[propertyName] !== y[propertyName]) {
        objectsAreSame = false;
        break;
      }
    }
    return objectsAreSame;
  };

  const filterArray=(input)=> { /* filtering name users with search input */
    if (!unMounted.current) { /* if component is mounted then filter*/
      setLoading(false);
      /* if client erase all input values=> show all favorite peoples */
      if (input === '') setUsers(favoritePeoples);
      else setUsers(favoritePeoples.filter(people => people.name.toLowerCase().includes(input)));
    }
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
    let input = event.target.value.toLowerCase().trim();
    debouncedSave(input);
  };

  const renderError=()=>{
    return (
      <div className='messageContainer'>
        <div className='messageText'>
          <p>{errorMessage}</p>
        </div>
      </div>
    );
  };

  return(
    <MainLayout>
      {favoritePeoples.length===0? renderError() :
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
            {/*/*when search result is null==> error: there is no result */}
            {errorMessage!=='' && renderError()}
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