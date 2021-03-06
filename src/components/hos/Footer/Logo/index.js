import React from 'react';
import Logo from '../../../../assets/img/logo.png';
import "./Logo.scss";

const TorfehLogo = () => {
  return (
    <div className="footer__logo">
      <img src={Logo}/>     
    </div>
  );
};

export default TorfehLogo;
