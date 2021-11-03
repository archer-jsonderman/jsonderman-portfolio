import React, { Component } from "react";

const Footer = (props) => {

    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>{props.siteName}</span>
        </div>
      </div>
    );

}

export default Footer;
