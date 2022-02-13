import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import PageHOC from "../../components/PageHOC";
import { useSelector } from "react-redux";
import axios from "axios";


function People() {
  const history = useHistory();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []);
  const peoples = useSelector(state => state.peoples);

  const fetchItem = async () => {
    const id = history.location.pathname.split("/")[2];
    const {data} = await axios.get(`https://swapi.dev/api/people/${id}/`);
    setItem(data);
  };

  var fav;
  peoples.filter(people => {
    if (people.isFavorite === true) {
      if (people.id == history.location.pathname.split("/")[2]) {
        fav = "Favorite";
      }
    } else {
      return null;
    }
  });

  return (
    <>
      <PageHOC>
        <main>
          <p className="headName">{item.name}</p>
          <div className="d-detail-section">
            <div className="d-grid-item">
              <img className="d_img_character" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"/>
              <span className="details">
                <ul>
                  <li>Full Name : {item.name}</li>
                  <li>Weight : {item.mass}</li>
                  <li>Height : {item.height} inches</li>
                  <li>Birth Year : {item.birth_year}</li>
                  <li>Skin Color : {item.skin_color}</li>
                  <li>Eye color : {item.eye_color}</li>
                  <li>Gender : {item.gender}</li>
                  <li>Vehicles : {item.vehicles}</li>
                  <li className="fav">{fav}</li>
                </ul>
              </span>
            </div>
          </div>
        </main>
      </PageHOC>
    </>
  );
}
export default People;
