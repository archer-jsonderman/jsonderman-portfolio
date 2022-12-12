import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Contact from "components/contact";

const Footer = () => {
const data = useStaticQuery(graphql`
query SiteFooterQuery {
  site {
    siteMetadata {
      title
    }
  }

}
`)
 return (
  <>
                  <Contact/>

      <div className="site-footer" id="footer">
        <div className="container">
          <span>{data.site.siteMetadata.title}</span>
        </div>
      </div>
      </>
    )
}

export default Footer;
