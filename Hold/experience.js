import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Experience =({ data })=> {
    return (
      <Layout
      	header="experience">
        <Seo
          title="Professional Experience"
          keywords={[`Jason Sonderman`]}
        />
        <div className="site-container experience-page" id="Experience">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading">My Professional Experience</h1>
            </div>
            <div
              className={`experience-list`}
            >
              {data.allContentfulExperience.nodes[0].content.map((item, index) => {
                return (
                    <div className="details" key={index}>
                        <h2 className="title">{item.sectionTitle}</h2>
                        <h3 className="company">{item.companyName}</h3>
                        <ul className="dates">
                        	<li className="startDate">{item.startDate}</li>
                        	
                        	<li className="endDate">{item.current?'Current':item.endDate}</li>
                        </ul>
                        <div className="skills-list pills" dangerouslySetInnerHTML={{ __html:item?.skills?.childMarkdownRemark.html}}/>	
                        <div className="content" dangerouslySetInnerHTML={{ __html: item?.copy?.childMarkdownRemark.html}}/>
                    </div>
                );
              })}
            </div>
            <h4>For my complete my professional experience history, please visit <Link to="https://www.linkedin.com/in/jasonsonderman/details/experience/" target="_blank">my LinkedIn page</Link></h4>
          </div>
        </div>
      </Layout>
    );
}
export default Experience;
export const expPageQuery = graphql`
  query ExperienceQuery  {
    allContentfulExperience {
      nodes {
        content {
          sectionTitle
          companyName
          startDate(formatString: "MMMM YYYY")
          current
          endDate(formatString: "MMMM YYYY")
          skills {
            childMarkdownRemark {
              html
            }
          }
          copy {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

  }
`;
