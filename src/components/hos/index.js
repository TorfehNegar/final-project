import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./header";




const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
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
