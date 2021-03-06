import React, { Fragment } from "react";
import PropTypes from "prop-types";
//import {useSelector} from  "react-redux";

const MainLayout = ({ children }) => {
  /*const state = useSelector(state => state.peoples)
  console.log(state)*/
  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="peoples">{children}</div>
        </div>
      </main>
    </Fragment>
  );
};
MainLayout.propTypes = {
  children: PropTypes.any,
};
export default MainLayout;
