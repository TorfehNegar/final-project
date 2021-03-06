import React from 'react';
import Socialmedia from './socialMedia/index';
import Logo from './Logo/index';
import Description from './Description/index';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="fooeter__container">
      <Socialmedia/>
      <Logo/>
      <Description/>
    </div>
  );
};

export default Footer;
