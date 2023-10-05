/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ian Scilipoti Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic image
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              // showCaptions: true,
              // markdownCaptions: true,
              wrapperStyle: 'margin-top:20px; margin-bottom:20px;'
              
            }
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src`,
      },
    },
  ]
};