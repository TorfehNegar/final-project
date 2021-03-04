import React, { Fragment } from "react";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
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
