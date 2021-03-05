import React from "react";
import { Route ,   BrowserRouter as Router, } from "react-router-dom";
import MainLayout from "../components/hos";


const Routes = () => {
  return (
    <Router>
      <Route 
        exact path="/" 
      >
        <MainLayout>
          <h2>طرفه نگار</h2>
        </MainLayout>
      </Route>
    </Router>
  );
};

export default Routes;
