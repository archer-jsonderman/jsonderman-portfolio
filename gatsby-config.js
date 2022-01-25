require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	environment: 'mobileauth'
}

const { spaceId, accessToken, environment } = contentfulConfig

module.exports = {
  siteMetadata: {
    title: `Jason Sonderman - User Experience Professional`,
    description: `Personal Site`,
    author: `jasonsonderman`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
        environment
      }
    },
    {
	  resolve: 'gatsby-plugin-react-svg',
	  options: {
	    rule: {
	      include: /images/
	    }
	  }
	},
	`gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
	    resolve:`gatsby-plugin-sharp`,
	    options:{
		    defaults:{
			    quality:95
		    }
	    }
	},
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Sonderman`,
        short_name: `Jason Sonderman`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png` // This path is relative to the root of the site.
      }
    }, 
     // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          
          `IBM+Plex+Sans\:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
};
