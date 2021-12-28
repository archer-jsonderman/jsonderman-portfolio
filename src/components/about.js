import React from "react";
import { Link } from "gatsby";
import { GatsbyImage,  StaticImage } from "gatsby-plugin-image";
import NNGLogo from '../images/NNG-UX-Cert-Small.svg'

const Header = ({ data }) => (
  	<div className="about section" id="About">
		<div className="container">
		
			<div className="about-text-container">
			  <div className="about-details">
				  <div className="about-intro">
				    <span className="name">My name is {data.name}.</span>
				    <h2 className="sub-position">
				      {data.designation}
				      <span className="certification">
				      	<NNGLogo/>
				      </span>
				    </h2>
				    <div className="about-avatar">
						<GatsbyImage
							image={data.photo.gatsbyImageData}
							objectFit="cover"
							objectPosition="top center" />
						
			        </div>

				 </div>
			    <div
			      dangerouslySetInnerHTML={{
			        __html: data.description.childMarkdownRemark.html
			      }}
			    />
			    <div className="socials">
			      <ul>
			      <li>
			          <a
			            className="resume far fa-file-pdf"
			            href={`JasonSondermanUXC-Resume.pdf`}
			          >
			      		</a>
			        </li>
			      
			        <li>
			          <a
			            className="fab fa-linkedin-in"
			            href={data.linkdin}
			            target="_blank"
			            rel="noopener noreferrer"
			          ></a>
			        </li>
			        <li>
			          <a
			            className="fab fa-instagram"
			            href={data.instagram}
			            target="_blank"
			            rel="noopener noreferrer"
			          ></a>
			        </li>
			       
			      </ul>
			    </div>
			  </div>
			</div>
			<div className="about-image-container">
				<GatsbyImage
					image={data.photo.gatsbyImageData}
					objectFit="cover"
					objectPosition="top center" />
	        </div>
		</div>
	</div>
);

export default Header;
