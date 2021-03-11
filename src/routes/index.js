import React from "react";
import { Route ,   BrowserRouter as Router, } from "react-router-dom";
import Peoples from "../pages/peoples";
import Favorites from "../pages/favorites";
import People from "../pages/people";


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
      <Route path="/people/:id" component={People} />
    </Router>
  );
};

export default Routes;
