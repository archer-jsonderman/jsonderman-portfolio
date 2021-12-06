import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from '../images/js-logo-mark.svg'

const Header = ({data,header, siteTitle})=> {
	console.log(data)
    const [ menu, setMenu ] = useState(false);
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                <Logo/>
                <span>{data.siteName}, UXC</span>
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                 setMenu(!menu);
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <li key="home">
                    <Link to="/#home">Home</Link>
                  </li>
                 
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="Projects">
                          <Link to={`/#Projects`}>Projects</Link>
                        </li>
                      );
                    })}

                
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li key="Contact">
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
              <div className="menu">
                <ul
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <li key="home">
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="projects">
                          <Link to="/projects">Projects</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
}

export default Header
