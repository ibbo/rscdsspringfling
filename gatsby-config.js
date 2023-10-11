/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://admin.rscdsspringfling2024.co.uk`,
      	accessToken: `5a7d3566f5dab4bfa35343f68ecad7d983c7c8abf009dab72350b0c3fa399d8067d8111e9c1a722e4ed06cb3b2eb4e54dd6598c1d566badfa34fa5983a74c7ea788d2d29bd88b53493f101c2a8ff1d493defc3d977f52bfa50ada783c176ef6c12f3bbb6b23cd21d2eb35d53f00531f071986d765b169e7be6129f50dbcc6e85`, 
        queryLimit: 1000,
        collectionTypes: [`dance-class`],
	      singleTypes: [`homepage`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/images/strapi-uploads/`,
      },
    },
  ],
}
