import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = ({ data }) => (
	  <Layout header="home">
	    <SEO
	      title={data.contentfulAboutMe.designation}
	      keywords={[`Jason Sonderman`]}
	    />
	    <Banner data={data.contentfulAboutMe}></Banner>
	
	    {data.contentfulSiteInformation.menus
	      .filter(item => item === "About")
	      .map(t => {
	        return <About key="About" data={data.contentfulAboutMe}></About>;
	      })}
	
	
	    {data.contentfulSiteInformation.menus
	      .filter(item => item === "Blogs")
	      .map(t => {
	        return <Projects key="Projects" data={data.allContentfulBlogs}></Projects>;
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
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
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
      bannerImage {
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
      bannerList
    }
    allContentfulBlogs( sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
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
    contentfulSiteInformation {
      menus
    }
  }
`;
