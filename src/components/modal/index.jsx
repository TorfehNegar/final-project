import React from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import { ReactComponent as Telegram } from "../../assets/img/029-telegram.svg";
import { ReactComponent as Twitter } from "../../assets/img/043-twitter.svg";
import { ReactComponent as WhatsApp } from "../../assets/img/035-whatsapp.svg";
import { ReactComponent as FaceBook } from "../../assets/img/021-facebook.svg";
import { ReactComponent as Pin } from "../../assets/img/041-pinterest.svg";
const Modal = ({ isOpen, setIsOpen }) => {
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const links = {
    tw: "https://twitter.com/intent/tweet/?text=",
    tg: "https://telegram.me/share?url=",
    wp: "https://api.whatsapp.com/send?text=",
    pin: "http://pinterest.com/pin/create/link/?url=",
    fb: "https://www.facebook.com/sharer/sharer.php?u=",
  };
  const generateLink = (url) => {
    return url + encodeURIComponent("TorfeNegar Developers Group");
  };

  return (
    <>
      <div
        className={isOpen ? "modal modal__active" : "modal modal__deactive"}
        onClick={closeModal}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal__container"
        >
          <h2>با دوستان خود به اشتراک بگذارید</h2>

          <div className="social-icons">
            <Telegram
              onClick={() => {
                window.open(generateLink(links.tg));
              }}
            />
            <Pin
              onClick={() => {
                window.open(generateLink(links.pin));
              }}
            />
            <Twitter
              onClick={() => {
                window.open(generateLink(links.tw));
              }}
            />
            <WhatsApp
              onClick={() => {
                window.open(generateLink(links.wp));
              }}
            />
            <FaceBook
              onClick={() => {
                window.open(generateLink(links.fb));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Modal;
// https://www.facebook.com/sharer/sharer.php?u=
