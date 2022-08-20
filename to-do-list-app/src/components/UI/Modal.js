import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div
      onClick={props.onClose}
      className={`${classes.modal} ${props.children}`}
    >
      <div> {props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
