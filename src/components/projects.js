import React, { Component, useRef } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";
import Modal from "./modal";

const Projects=(props)=>{
    const { data } = props;
    const modalRef1 = useRef();
    return (
      <div className="projects-section section" id="Projects">
        <div className="container">
          <div className="section-head">
            <h2>Projects</h2>
          </div>
          <ul
            className={`projects-list ${data.edges.length < 5 ? "few-projects" : ""}`}
          >
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                  	
                    <Link className="link" to={`/${item.node.slug}`} />

                    {item.node.featureImage ? (
                      <Img
                        fluid={item.node.featureImage.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    ) : (
                      <div className="no-image"></div>
                    )}
                    <div className="details">
                      <h3 className="title">{item.node.title}</h3>
                      
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
    /*<section>
            <button className="btn" onClick={() => modalRef1.current.openModal()}>Open modal</button>
            <Modal ref={modalRef1}>
                <h3>Modal title 1</h3>
            </Modal>
        </section>
          <div className="see-more">
            <Link to="/projects">
              <span>More Projects</span>
            </Link>
          </div>*/
  }
  
  export default Projects
