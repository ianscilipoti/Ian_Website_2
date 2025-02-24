const path = require('path')

exports.onCreateNode = ({node, actions}) => {
  const { createNodeField} = actions

  if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath.includes("/projects")) {
    
    const slug = path.basename(node.fileAbsolutePath, '.md')
    const directory = path.dirname(node.fileAbsolutePath).split(path.sep).slice(-2)[0]
    console.log(directory);
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
    createNodeField({
      node,
      name: 'directory',
      value: directory
    })
  }
}


exports.createPages = async ({graphql, actions}) =>
{
  const {createPage} = actions

  const projectTemplate = path.resolve ('./src/templates/content.js')
  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/projects/"}}
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}