import React from "react";
import Projects from "components/projectsList";
import Layout from "components/layout";

const CaseStudy = () =>{
    return(
    <Layout id="case-studies">
      <section className="contentHeader">
        <h1>Case Studies</h1>
      </section>
      <Projects/>
	  </Layout>
	)};
export default CaseStudy;