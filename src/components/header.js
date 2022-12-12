import {useStaticQuery, graphql,Link } from "gatsby";
import React, { useState } from "react";
import Logo from 'assets/images/js-logo-mark.svg'

const Header = ()=> {
    const [ menu, setMenu ] = useState(false);
    const data = useStaticQuery(graphql`
    query SiteHeadQuery {
      site {
        siteMetadata {
          siteName
          menuLinks {
            link
            name
          }
        }
      }
    
    }
  `)
  //const {site:{siteMetadata:{title, menuLinks}}} = data;
      return(
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                <Logo/>
                <span>{data.site.siteMetadata.siteName}</span>
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
                   {data.site.siteMetadata.menuLinks.map(link => (
                <li
                  key={link.name}
                >
                  <Link to={link.link} activeClassName="active">
                    {link.name}
                  </Link>
                </li>
              ))}
                  
                </ul>
              </div>
            
          </div>
        </div>
      </header>
    )
}

export default Header
