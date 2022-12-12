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
    title: `Jason Sonderman, UXMC - User Experience Professional`,
    siteName: `Jason Sonderman, UXMC`,
    description: `Personal Site`,
    author: `jasonsonderman`,
    url: `https://jason.sonderman.info`,
    menuLinks: [
      { 
        name: "Home",
        link: '/'
      },
      { 
          name: "Case Studies",
          link: '/case-studies'
        },
        {
          name:'Experience',
          link: '/experience'
        },
        {
          name:"Contact",
          link:"#Contact"
        },
       
      ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options:{
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: `transparent`,
              withWebp: true,
              markdownCaptions:`false`

            },
          },           
        ]
      },  
    },   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case study images`,
        path: `${__dirname}/src/pages/case-study-images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
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
        icon: `src/assets/images/fev_icon.png` // This path is relative to the root of the site.
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
        assets: path.join(__dirname, "src","assets"),
        content: path.join(__dirname, "src","content")
      },
    }
  ]
};
