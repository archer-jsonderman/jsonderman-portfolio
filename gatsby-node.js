var path = require("path");

exports.createPages = ({ actions: { createPage }, graphql }) => {

  return new Promise((resolve, reject) => {
    const projectCaseStudyTemplate = path.resolve("src/templates/project-case-study.js");
    resolve(
      graphql(`
        {
          allContentfulBlogs(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlogs.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: projectCaseStudyTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    );
  });
};
