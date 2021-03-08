import React from "react";
import { Route ,   BrowserRouter as Router, } from "react-router-dom";
import Peoples from "../pages/peoples";
import Favorites from "../pages/favorites";


const Routes = () => {
  return (
    <Router>
      <Route 
        exact path="/" 
      >
        <Peoples/>
      </Route>
      
      <Route path='/favorites'>
        <Favorites/>
      </Route>
    </Router>
  );
};

export default Routes;
