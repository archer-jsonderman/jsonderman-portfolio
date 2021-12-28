import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, keywords, title, data }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.contentfulSiteInformation.siteName}`}
            meta={[
              {
                name: `description`,
                content: data.contentfulSiteInformation.siteDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: data.contentfulSiteInformation.siteDescription
              },
              {
                property: `og:type`,
                content: `website`
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    contentfulSiteInformation {
      siteName
      siteDescription
    }
  }
`;
