import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Header = ({ data }) => (
  	<div className="about section" id="About">
    	<div className="container">
			<div className="about-main row">
			
				<div className="about-text-container">
				  <div className="about-details">
				    <span className="name">My Name is {data.name}.</span>
				    <h2 className="sub-position">
				      {data.designation}
				    </h2>
				    <div
				      dangerouslySetInnerHTML={{
				        __html: data.description.childMarkdownRemark.html
				      }}
				    />
				    <div className="socials">
				      <ul>
				        <li>
				          <a
				            className="fab fa-instagram"
				            href={data.instagram}
				            target="_blank"
				            rel="noopener noreferrer"
				          ></a>
				        </li>
				        <li>
				          <a
				            className="fab fa-linkedin-in"
				            href={data.linkdin}
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
	</div>
);

export default Header;
