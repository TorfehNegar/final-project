import React from 'react';
import Socialmedia from './socialMedia/index';
import TorfehLogo from './Logo/index';
import Description from './Description/index';
import './Footer.scss';
import CopyRight from './copyright/index';

const Footer = () => {
  return (
    <div>
      <div className="fooeter">
        <TorfehLogo/>
        <Description/>
        <Socialmedia/>
      </div>
      <div className="footer__copyright">
        <CopyRight/>
      </div>

    </div>
    
  );
};

export default Footer;
