import React, { useState,forwardRef, useImperativeHandle  } from "react";
import Portal from "./portal";

// Use a ternary operator to make sure that the document object is defined
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

const Modal = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
      }
    }
  )

  const handleOpen = () => {
    setDisplay(true);
  }

  const handleClose = () => {
    setDisplay(false);
  }

  if (display) {
    return (
      <Portal>
          <div className="modal-backdrop"></div>
          <div className="modal-container">
            {props.children}
            <button onClick={handleClose}>close</button>
          </div>
      </Portal>
    )
  }

  return null
})

export default Modal;
