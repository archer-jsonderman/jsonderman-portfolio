import React, { Component } from "react";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";

const CaseStudy = ({data}) =>{
    const projects = data.contentfulBlogs;
    const siteurl = data.contentfulSiteInformation.siteUrl + "/";
   
    return (
      <Layout>
        <SEO
          title={projects.title}
          keywords={[
            `Jason Sonderman`,
            `UX Architect`,
            `User Experience`,
            `${data.title}`
          ]}
        />
        <div className="site-container case-study">
          <div className="container">

            <div className="details">
              <h1 className="title">{projects.title}</h1>
             
              <div
                dangerouslySetInnerHTML={{
                  __html: projects.description.childMarkdownRemark.html
                }}
              />
            </div>
 
          </div>
        </div>
      </Layout>
    );
}

export default CaseStudy;

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulSiteInformation {
      siteUrl
    }
  }
`;
