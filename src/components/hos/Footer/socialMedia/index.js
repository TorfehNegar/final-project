import React from 'react';
import "./socialMedia.scss";
import {ReactComponent as Facebook} from "../../../../assets/img/facebook.svg";
import {ReactComponent as Instagram} from "../../../../assets/img/instagram.svg";
import {ReactComponent as Telegram} from "../../../../assets/img/telegram.svg";
import {ReactComponent as Youtube} from "../../../../assets/img/youtube.svg";

const Socialmedia = () => {
  return (
    <div className="footer__social__media">
      <a> <Facebook className="facebook"/> </a>
      <a> <Instagram className="instagram"/> </a>
      <a> <Telegram className="telegram"/> </a> 
      <a> <Youtube className="youtube"/> </a>
    </div>
  );
};

export default Socialmedia;

