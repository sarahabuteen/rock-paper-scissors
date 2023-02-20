import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import rules from '../../assets/images/rules.svg';
import x from '../../assets/images/x.svg';

function RulesModal({ isModalOpen, toggleModal }) {
  return (
    <Modal centered isOpen={isModalOpen} toggle={toggleModal}>
      <ModalBody>
        <div className="pb-5 d-flex align-items-center justify-content-between">
          <h2 className="text-gray fw-bold text-uppercase mb-0">Rules</h2>
          <img src={x} className="close" alt="close" onClick={() => toggleModal(false)} />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <img src={rules} alt="rules" />
        </div>
      </ModalBody>
    </Modal>
  );
}

export default RulesModal;
