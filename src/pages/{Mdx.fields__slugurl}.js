import { graphql } from "gatsby";
import * as React from "react";

import Layout from 'components/layout.js';


import { MDXProvider } from "@mdx-js/react";
//import {GridTable, ContentCard, ElevateColorBlock, CodeCard}  from "components/containers";
//import 'styles/pages.scss';
import 'styles/style.scss'

const shortcodes = {}// GridTable, ContentCard, ElevateColorBlock, CodeCard };

export default function PageTemplate({ data,children }) {
  return (
    <MDXProvider components={shortcodes}>
      <Layout data={data} children={children}/>
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
      }
      fields {
        slugurl
      }
      tableOfContents
      parent {
        ... on File {
          relativeDirectory
        }
      }
    }
  }
`;