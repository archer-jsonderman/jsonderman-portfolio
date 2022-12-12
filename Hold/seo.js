import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, keywords, title, data }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <>
            <title>{title}</title>
         </>
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
