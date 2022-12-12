import { graphql, Link } from "gatsby";
import * as React from "react";

import Layout from 'components/layout.js';
import { MDXProvider } from "@mdx-js/react";
import 'styles/style.scss'

const shortcodes = {}// GridTable, ContentCard, ElevateColorBlock, CodeCard };

export default function PageTemplate({ data,children }) {
  return (
    <MDXProvider components={shortcodes}>
          <Layout 
            id={data.mdx.parent.relativeDirectory || 'standardContent'}
            >
              <p id="backLink"><Link to="/case-studies">Back to Case Studies</Link></p>
              <section className="details">
                <section className="contentHeader">
                  <h1>{data.mdx.frontmatter.title}</h1>
                </section>
                {children}
              </section>

            </Layout> 
    </MDXProvider>
  );
}

export const Head = ({data:{mdx}}) => {
    //const { title } = useSiteMetadataQuery();
  
    const pageTitle = mdx.frontmatter.title;
  
    return(
      <title>{pageTitle}</title>
    )
    }

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        featuredImage {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      fields {
        slugurl
      }
      parent {
        ... on File {
          relativeDirectory
        }
      }
    }
      site {
        siteMetadata {
          title
          siteName
          description
          menuLinks {
            link
            name
          }
        }
      }
    
  }
`;