import React, { useState } from 'react';
import '../../styles/main.scss';
import Modal from '../../utils/Modal';

const TestModal = () => {
  const [isModalDisplay, setIsModalDisplay] = useState(false);
  const handleModalDisplay = value => {
    setIsModalDisplay(value);
  };
  return (
    <div className="container">
      <div className="content">
        <button
          type="button"
          onClick={() => {
            handleModalDisplay(true);
          }}
        >
          모달 창 열기
        </button>
        <Modal
          isModalDisplay={isModalDisplay}
          handleModalDisplay={handleModalDisplay}
          message="테스트"
        />
      </div>
    </div>
  );
};

export default TestModal;
