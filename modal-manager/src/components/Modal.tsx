import { useModalStore } from "../store/modalStore";

import React from 'react'

const Modal = () => {
  const{isOpen,closeModal}=useModalStore();

    if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Hello, I'm a modal!</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;


const overlayStyle = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "8px",
  textAlign: "center" as const,
};