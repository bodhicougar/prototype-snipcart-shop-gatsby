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
        spaceId: '8qtymz1hsr9w',
        accessToken: '7gaFj0lbH3iZXf1TmKGIJd5WclIupTBFXxG1hz_O-Tg',
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey:
          'MTJjNGQyY2EtMTNlZS00YzAyLWFlNDQtMDNlM2UxYzMxMjE3NjM3MDA3MDczMzM5NDAyMzQ3',
        autopop: true,
        // js: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        // jquery:
        //   'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
        // styles: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
      },
    },
  ],
}
