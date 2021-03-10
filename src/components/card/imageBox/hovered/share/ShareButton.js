import React from "react";
import PropTypes from 'prop-types';
const ShareButton = ({setIsOpen}) => {
  return (
    <button className="action-button">
      <img
        src="https://img.icons8.com/bubbles/40/4a90e2/share.png"
        alt="share"
        onClick={() => {
          setIsOpen(true);
        }}
      />
    </button>
  );
};

ShareButton.propTypes = {
  setIsOpen: PropTypes.func
};
export default ShareButton;