import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = ({ data }) => (
	  <Layout header="home">
	    <Seo
	      title={data.contentfulAboutMe.designation}
	      keywords={[`Jason Sonderman`]}
	    />
	    	
	    {data.contentfulSiteInformation.menus
	      .filter(item => item === "About")
	      .map(t => {
	        return <About key="About" data={data.contentfulAboutMe}></About>;
	      })}
	
	
	    {data.contentfulSiteInformation.menus
	      .filter(item => item === "Blogs")
	      .map(t => {
	        return <Projects key="Projects" data={data.allContentfulCaseStudy}></Projects>;
	      })}
	    
	    {data.contentfulSiteInformation.menus
	      .filter(item => item === "Contact")
	      .map(t => {
	        return <Contact key="Contact" data={data.contentfulAboutMe.gmail}></Contact>;
	      })}
	  </Layout>
	)


export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        gatsbyImageData
      }
      designation
      id
      instagram
      linkdin
      description {
        childMarkdownRemark {
          html
        }
      }
      
      bannerList
    }

    allContentfulCaseStudy {
      nodes {
        content {
          copy {
	          childMarkdownRemark {
	            html
	          }
	        }
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

    contentfulSiteInformation {
      menus
    }
      }
`;
