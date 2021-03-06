import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer/index";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="peoples">{children}</div>
        </div>
      </main>
      <Footer/>
    </Fragment>
  );
};
MainLayout.propTypes = {
  children: PropTypes.any,
};
export default MainLayout;
