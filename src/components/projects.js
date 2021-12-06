import React, { Component, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import moment from "moment";

const Projects=({ data })=>{
    return (
      <div className="projects-section section" id="Projects">
        <div className="container">
          <div className="section-head">
            <h2>Projects</h2>
          </div>
          <ul
            className={`projects-list ${data.nodes.length < 5 ? "few-projects" : ""}`}
          >
            {data.nodes.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                  	
                    <Link className="link" to={`/${item.slug}`} />

                    {item.featuredImage ? (
                      <GatsbyImage
                        image={item.featuredImage.gatsbyImageData}
                        objectFit="cover"
                        objectPosition="50% 50%" />
                    ) : (
                      <div className="no-image"></div>
                    )}
                   
                  </div>
                   <div className="details">
                      <h3 className="title">{item.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.description.childMarkdownRemark.html}}/>
                    </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Projects
