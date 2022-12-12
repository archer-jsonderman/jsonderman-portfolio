import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
//filter out non-project pages
const Projects=()=>{
  const pagedata = useStaticQuery(graphql`
    query ProjectListQuery {
      allMdx(
        filter: {frontmatter: {status: {eq: "published"}}, fields: {slugurl: {regex: "/^\\/case-studies\\//"}}}
        sort: {frontmatter: {order: ASC}}
        )  {
        nodes {
          frontmatter {
            title
            excerpt
            description
            featuredImage {
              childrenImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
          fields {
            slugurl
          }
        }
      }
    }
  `  )
  
  const {allMdx:{nodes}} = pagedata; 
    return(
      <section id="projects">
        <ul className="projects-list">
          {nodes.map((item, index) => {
            let featuredImg = getImage(item.frontmatter.featuredImage?.childrenImageSharp[0]?.gatsbyImageData)
            return (
              <li key={index} className="item">
                <div className="inner">
                  
                  <Link className="link" to={`/${item.fields.slugurl}`} />

                  {item.frontmatter.featuredImage ? (
                    <GatsbyImage
                      image={featuredImg}
                      alt="featured image"
                      objectFit="cover"
                      objectPosition="50% 50%" />
                  ) : (
                    <div className="no-image"></div>
                  )}
                
                </div>
                <div className="details">
                    <h3 className="title">
                    <Link className="link" to={`${item.fields.slugurl}`}>{item.frontmatter.excerpt}</Link></h3>
                    <p dangerouslySetInnerHTML={{ __html: item.frontmatter.description}}/>
                  </div>
              </li>
            );
          })}
      </ul>
    </section>
	)}
  export default Projects
