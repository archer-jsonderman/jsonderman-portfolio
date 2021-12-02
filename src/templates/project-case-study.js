import React, { Component } from "react";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"



import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";


const Text = ({ children }) => <p className="align-center">{children}</p>
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
}
const CaseStudy = ({data}) =>{
    const projects = data.contentfulCaseStudy;
    const siteurl = data.contentfulSiteInformation.siteUrl + "/";
	console.log(projects.content)
   const contentSections = projects?.content?.map((item, index) => 
	   {
		   const section = item?.copy?.childMarkdownRemark.html
		   const heading =item.sectionHeading

		   return(
			   <div 
			   key={index}
			   className="content-section">
				   <h2>{heading}</h2>
				   <div dangerouslySetInnerHTML={{ __html: section}}/>
                  {item.sectionImage ? (
                     
              <GatsbyImage
                image={item.sectionImage[0].gatsbyImageData}
                className="feature-img"
                objectFit="cover"
                objectPosition="50% 50%" />
           

                    ) : (
                      <div className="no-image"></div>
                    )}
			   </div>
			)
		 	 
		})
   
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
			  {contentSections}
			 

            </div>
 
          </div>
        </div>
      </Layout>
    );
}

export default CaseStudy;

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      id
      title
      slug
      content {
        copy {
          childMarkdownRemark {
            html
          }
        }
        sectionHeading
        sectionImage {
	        gatsbyImageData
	        fluid{
		        src
		    }
	      }
      }
		conclusion {
	        content {
	         childMarkdownRemark {
	            html
	          }
	        }
	      }
			
    }
    contentfulSiteInformation {
      siteUrl
    }
  }
`;
