const { createFilePath } = require(`gatsby-source-filesystem`)
 const path = require("path")
const { relative } = require("path")

 exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "Mdx") {
      // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
      const relativeFilePath = createFilePath({
        node,
        getNode,
       //basePath: "src/pages",
      })

      // Creates new query'able field with name of 'slug'
      createNodeField({
        node,
        name: "slugurl",
        value: `${relativeFilePath}`,
      })


    }
  }

  /*exports.createSchemaCustomization = async ({ getNode, getNodesByType, pathPrefix, reporter, cache, actions, schema, store }) => {
    const { createTypes } = actions
  
    const headingsResolver = schema.buildObjectType({
      name: `Mdx`,
      fields: {
        headings: {
          type: `[MdxHeading]`,
          async resolve(mdxNode) {
            const fileNode = getNode(mdxNode.parent)
  
            if (!fileNode) {
              return null
            }
  
            const result = await compileMDXWithCustomOptions(
              {
                source: mdxNode.body,
                absolutePath: fileNode.absolutePath,
              },
              {
                pluginOptions: {},
                customOptions: {
                  mdxOptions: {
                    remarkPlugins: [remarkHeadingsPlugin],
                  },
                },
                getNode,
                getNodesByType,
                pathPrefix,
                reporter,
                cache,
                store,
              }
            )
  
            if (!result) {
              return null
            }
  
            return result.metadata.headings
          }
        }
      }
    })
  
    createTypes([
      `
        type MdxHeading {
          value: String
          depth: Int
        }
      `,
      headingsResolver,
    ])
  }*/

/*exports.createPages = ({ actions: { createPage }, graphql }) => {

  return new Promise((resolve, reject) => {
    const projectCaseStudyTemplate = path.resolve("src/templates/project-case-study.js");
    resolve(
      graphql(`
        {
          allContentfulCaseStudy(limit: 100) {
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
        result.data.allContentfulCaseStudy.edges.forEach(edge => {
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
*/