import React from 'react';
import Socialmedia from './socialMedia/index';
import TorfehLogo from './Logo/index';
import Description from './Description/index';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="fooeter__container">
      <TorfehLogo/>
      <Description/>
      <Socialmedia/>
    </div>
  );
};

export default Footer;
