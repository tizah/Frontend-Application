import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  title?: string;
  styleProp: {
    modal: React.CSSProperties;
    overlay: React.CSSProperties;
  };
  children: ReactNode;
}

const Modal = ({
  onClose,
  isModalOpen,
  title,
  styleProp,
  children,
}: ModalProps) => {
  const outerStyle: any = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    zIndex: 1,
  };

  // default style
  const style: any = {
    modal: {
      position: "relative",
      width: 500,
      padding: 20,
      boxSizing: "border-box",
      backgroundColor: "#fff",
      margin: "40px auto",
      borderRadius: 3,
      zIndex: 2,
      textAlign: "left",
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
      ...styleProp.modal,
    },
    overlay: {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      ...styleProp.overlay,
    },
  };

  const targetElement = document.getElementById("modal-root");
  const modal = (
    <div
      style={{
        ...outerStyle,
        display: isModalOpen ? "block" : "none",
      }}
    >
      <div style={style.overlay} onClick={onClose} />
      <div onClick={onClose} />
      <div style={style.modal}>{children}</div>
    </div>
  );

  return targetElement ? ReactDOM.createPortal(modal, targetElement) : modal;
};

export default Modal;
