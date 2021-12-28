import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from '../images/js-logo-mark.svg'

const Header = ({data, header, siteTitle})=> {
    const [ menu, setMenu ] = useState(false);
    console.log(header)
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
              <div className="menu">
                <ul
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <li key="home">
                    <Link to="/" activeClassName="active">Home</Link>
                  </li>
                 
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="projects">
                          <Link to="/projects" activeClassName="active">Projects</Link>
                        </li>
                      );
                    })
                    }
                     <li key="experience" >
                    	<Link to="/experience" activeClassName="active">Experience</Link>
                    </li>

                
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
            
          </div>
        </div>
      </header>
    );
}

export default Header
