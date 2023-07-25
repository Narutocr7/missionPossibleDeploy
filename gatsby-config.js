/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.development`,
})
console.log(process.env)
module.exports = {
  siteMetadata: {
    title: `CourseSelect Ecommerce project`,
    description: `Website where you can buy courses.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [`gatsby-plugin-sharp`,`gatsby-plugin-image`,`gatsby-transformer-sharp`,{
    resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
  },
},
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    // Learn about environment variables: https://gatsby.dev/env-vars
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
},
// {
// 			resolve: 'gatsby-plugin-snipcart',
// 			options: {
// 				apiKey: process.env.SNIPCART_KEY,
//         autopop: true,
// 			}
// 		},
{
  resolve: `gatsby-plugin-snipcart-advanced`,
  options: {
    version: "3.0.29",
    publicApiKey: "#####", // use public api key here or in environment variable
    defaultLang: "fr",
    currency: "eur",
    openCartOnAdd: false,
    useSideCart: true,
    // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
    locales: {
      fr: {
        actions: {
          checkout: "Valider le panier",
        },
      },
    },
    templatesUrl:
      "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
    // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
    innerHTML: `
        <billing section="bottom">
            <!-- Customization goes here -->
        </billing>`,
  },
},`gatsby-plugin-netlify`,
],
}
