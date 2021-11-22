import React, { Component } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
                data.allContentfulCaseStudy.nodes.length < 5 ? "few-projects" : ""
              }`}
            >
              {data.allContentfulCaseStudy.nodes.map((item, index) => {
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
                      <div className="details">
                        <h3 className="title">{item.title}</h3>
                       
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
  query CasesQuery  {
    allContentfulCaseStudy {
      nodes {
        content {
          sectionHeading
        }
        featuredImage {
          gatsbyImageData
        }
        conclusion {
          content {
            raw
          }
        }
        slug
        title
      }
    }
  }
`;
