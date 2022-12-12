import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";

const Projects =({ data })=> {

    return (
      <Layout
      	header="projects">
        <div className="site-container projects-page" id="Projects">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Projects</h1>
            </div>
            <ul
              className="projects-list few-projects" 
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
                      
                    </div>
                    <div className="details">
                        <h3 className="title"><Link to={`/${item.slug}`}>{item.title}</Link></h3>
                        <p dangerouslySetInnerHTML={{ __html: item.description.childMarkdownRemark.html}}/>
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
        description{
	        childMarkdownRemark {
	          html
	        }
        }
        featuredImage {
          gatsbyImageData
        }
        conclusion {
          content {
            childMarkdownRemark {
	            html
	          }

          }
        }
        slug
        title
      }
    }
  }
`;
