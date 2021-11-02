import React, {  useEffect  } from "react";
import ReactDOM from 'react-dom';

// Use a ternary operator to make sure that the document object is defined
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

const Portal = (props) => {
	const El = typeof document !== `undefined` ? document.createElement('div') : null

  useEffect(()=>{
	  portalRoot.appendChild(El)
	  return()=>{
		  portalRoot.removeChild(El)
	  }
  })

  const { children } = props

    // Check that this.el is not null before using ReactDOM.createPortal
    if (El) {
      return ReactDOM.createPortal(children, El)
    } else {
      return null
    }
};

export default Portal;
