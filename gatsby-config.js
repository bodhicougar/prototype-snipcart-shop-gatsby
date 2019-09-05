require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

var dotenv = require('dotenv')
dotenv.config()

const { spaceId, accessToken, snipcart } = process.env

module.exports = {
  siteMetadata: {
    title: `Shopper-Prototype`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@bodhicougar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oneshopper-logo.png`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART,
        autopop: true,
      },
    },
  ],
}
