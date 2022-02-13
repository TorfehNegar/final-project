import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import './hoc.scss';
import Footer from "./footer/index";

const PageHOC = ({ children }) => {
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
PageHOC.propTypes = {
  children: PropTypes.any,
};
export default PageHOC;
