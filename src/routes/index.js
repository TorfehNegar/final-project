import React from "react";
import { Route ,   BrowserRouter as Router, } from "react-router-dom";
import MainLayout from "../components/hos";


const Routes = () => {
  return (
<<<<<<< HEAD
    <MainLayout>
      <Switch>
        <Route exact path="/"  />
      </Switch>
    </MainLayout>
=======
    <Router>
      <Route 
        exact path="/" 
      >
        <MainLayout>
          <h2>طرفه نگار</h2>
        </MainLayout>
      </Route>
    </Router>
>>>>>>> 55b0d359240e3269d81d732581534c4d42114e61
  );
};

export default Routes;
