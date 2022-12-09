require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path");

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	environment: 'master'
}

const { spaceId, accessToken } = contentfulConfig

module.exports = {
  siteMetadata: {
    title: `Jason Sonderman - User Experience Professional`,
    description: `Personal Site`,
    author: `jasonsonderman`
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`
      }
    },
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
        accessToken
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
    {
	    resolve:`gatsby-plugin-sharp`,
	    options:{
		    defaults:{
			    quality:95
		    }
	    }
	},
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          
          `IBM+Plex+Sans\:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname,"src","components"),
        styles: path.join(__dirname, "src","css"),
        assets: path.join(__dirname, "src","assets")
      },
    }
  ]
};
