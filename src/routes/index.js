import React from "react";
import { Route ,   BrowserRouter as Router, } from "react-router-dom";
import Peoples from "../pages/peoples";


const Routes = () => {
  return (
    <Router>
      <Route 
        exact path="/" 
      >
        <Peoples/>
      </Route>
    </Router>
  );
};

export default Routes;
