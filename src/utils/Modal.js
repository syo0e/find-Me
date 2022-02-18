import React from 'react';

const Modal = ({ isModalDisplay, handleModalDisplay, message }) => {
  return (
    <div
      className="modal"
      style={{ display: isModalDisplay ? 'block' : 'none' }}
    >
      <div className="modal_content">
        <p>{message}</p>
        <button
          type="button"
          onClick={() => {
            handleModalDisplay(false);
          }}
        >
          확인
        </button>
      </div>
      <div className="modal_layer" />
    </div>
  );
};
