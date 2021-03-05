import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "../components/hos";

const Routes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/"  />
      </Switch>
    </MainLayout>
  );
};

export default Routes;
