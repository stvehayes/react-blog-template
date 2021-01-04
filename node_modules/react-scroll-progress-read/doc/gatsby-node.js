const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // construct the page
  await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { slug: { ne: "/" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const pages = result.data.allMdx.edges
    pages.forEach(({ node }, index) => {
      const slug = node.frontmatter.slug
      let component = path.resolve(`./src/templates/Page/index.js`)
      createPage({
        path: slug,
        component,
        context: {
          slug,
          prev: index === 0 ? null : pages[index - 1].node,
          next: index === pages.length - 1 ? null : pages[index + 1].node,
        },
      })
    })
  })
  // construct home
  return graphql(`
    {
      allMdx(filter: { frontmatter: { slug: { eq: "/" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMdx.edges.forEach(({ node }, index) => {
      const slug = node.frontmatter.slug
      component = path.resolve(`./src/templates/Home/index.js`)
      createPage({
        path: slug,
        component,
        context: {
          slug,
        },
      })
    })
  })
}
