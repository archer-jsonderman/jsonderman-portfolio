import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Projects =({ data })=> {

    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`Jason Sonderman`]}
        />
        <div className="site-container projects-page" id="Projects">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Projects</h1>
            </div>
            <ul
              className={`projects-list ${
                data.allContentfulBlogs.edges.length < 5 ? "few-projects" : ""
              }`}
            >
              {data.allContentfulBlogs.edges.map((item, index) => {
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
      </Layout>
    );
}
export default Projects;
export const pageQuery = graphql`
  query BlogsQuery {
    allContentfulBlogs(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 1500) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
  }
`;
