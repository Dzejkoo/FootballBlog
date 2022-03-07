import react, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const PlayerCardModal = () => {
  const [isOpen, setIsOpen] = useState;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return <Modal isOpen={isOpen} onRequestClose={closeModal}></Modal>;
};
