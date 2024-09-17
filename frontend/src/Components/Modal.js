import React from "react";


const Modal = ({ showModal, onClose, children }) => {
  if (!showModal) {
    return null; 
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
