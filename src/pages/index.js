import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import About from "components/about";
import Projects from "components/projectsList";
import Header from "components/header";
import Footer from "components/footer";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteHomeQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            link
            name
          }
        }
      }
    
    }
  `)
  
    return(
      <>
        <Header/>
          <main id="home">
              <section className="container" >
          
                <About meta={data.site.siteMetadata}/>
                  <section className="projects-section section" id="projects">
                    <div className="container">
                      <div className="section-head">
                        <h2>Case Studies</h2>
                      </div>
                      <Projects/>
                      </div>
                  </section>

              </section>
          </main>
      
        <Footer/>
      </>
	)}


export default IndexPage;
