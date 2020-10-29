require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  // pathPrefix: "/hho114.github.io",
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: "Xstar",
    siteTitleAlt: `Xstar Solutions`,
    siteHeadline: "Xstar Solutions",
    siteUrl: "https://alexhuyho.com",
    siteDescription: "Develop innovative and creative products and services that provide total communication and information solutions.",
    siteLanguage: "en",
    siteImage: "/banner.png",
    author: "@hho114"

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xstar Solutions`,
        short_name: `Xstar`,
        description: `Develop innovative and creative products and services that provide total communication and information solutions.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    
  ].filter(Boolean),
}
