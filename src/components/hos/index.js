import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import './hoc.scss';


import Footer from "./Footer/index";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          {children}
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
