import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AboutContent from "content/about-me.mdx"
import NNGLogo from 'assets/images/NNG-UX-Cert-Small.svg'

const Header = () => {
	return(
  	<section className="about section" id="about">
		<div className="container">
		
			<div className="about-text-container">
			  <div className="about-details">
				  <div className="about-intro">
				    <span className="name">My name is Jason Sonderman.</span>
				    <h2 className="sub-position">
				      User Experience Professional
				      <span className="certification">
				      	<NNGLogo/>
				      </span>
				    </h2>
				    <div className="about-avatar">
					<StaticImage
						src="../assets/images/Selfshot.jpg"
						alt="Photo of Jason Sonderman"
						placeholder="blurred"
						/>
						
			        </div>

				 </div>
			    <AboutContent/>
			    <div className="socials">
			      <ul>
			      <li>
			          <a
			            className="resume"
			            href={`Resume-JasonSonderman.pdf`}
						target='_blank'
						rel="noopener noreferrer"
						aria-label="Resume link"
			          >
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"/>
						</svg>
					</a>
			        </li>
			      
			        <li>
						<a
						href='https://www.linkedin.com/in/jasonsonderman'
						target="_blank"
						rel="noopener noreferrer"
						role="button"
						aria-label="LinkedIn Link"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
							</svg>
						</a>
			        </li>
			        <li>
						<a
						href='https://www.instagram.com/sondermanjason'
						target="_blank"
						rel="noopener noreferrer"
						role="button"
						aria-label="Instagram Link"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
							</svg>
						</a>
			        </li>
			       
			      </ul>
			    </div>
			  </div>
			</div>
			<div className="about-image-container">
				<StaticImage
					src="../assets/images/Selfshot.jpg"
					alt="Photo of Jason Sonderman"
					placeholder="blurred"
					/>
	        </div>
		</div>
	</section>
)};

export default Header;
