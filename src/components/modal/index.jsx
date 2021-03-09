import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.scss";
const Modal = ({ isOpen, setIsOpen }) => {
  const [text, setText] = useState("");
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const twitterLink =
    "https://twitter.com/intent/tweet/?text=" + encodeURIComponent();
  const whatsAppLink =
    "https://api.whatsapp.com/send?text=" + encodeURIComponent();
  const telegramLink = "https://telegram.me/share?url=" + encodeURIComponent();
  const pinit =
    "http://pinterest.com/pin/create/link/?url=" + encodeURIComponent();
  const fb =
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent();
  return (
    <>
      <div
        className={isOpen ? "modal modal__active" : "modal modal__deactive"}
        onClick={closeModal}
      >
        <div className="modal__container">
          <div className="social-icons">
            <h2>اشتراک گذاری در شبکه های اجتماعی</h2>
            <input
              onChange={(e) => {
                setText(e.target.value);
                // console.log(text);
              }}
              type="text"
              name=""
              id=""
              value={text}
            />
          </div>
          <button
            onClick={() => {
              window.open(twitterLink);
            }}
            className="share"
          >
            share to twitter
          </button>
          <button
            onClick={() => {
              window.open(whatsAppLink);
            }}
            className="share"
          >
            share to whats App
          </button>
          <button
            onClick={() => {
              window.open(telegramLink);
            }}
            className="share"
          >
            share to telegram
          </button>
          <button
            onClick={() => {
              window.open(pinit);
            }}
            className="share"
          >
            pinit
          </button>
          <button
            onClick={() => {
              window.open(fb);
            }}
            className="share"
          >
            FaceBook
          </button>
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
