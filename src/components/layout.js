import React from "react";

import Header from "./header";
import Footer from "./footer";

import "css/style.scss";
import "css/font-awesome.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children,id}) => {

  return(
 
      <>
        <Header/>
          <main>
              <section className="container" id={id}>
              {children}
              </section>
          </main>
        <Footer/>
      </>

)};

export default Layout;
