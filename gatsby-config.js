/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Yuval Reiss's Personal Site",
    titleTemplate: "%s · The Real Hero",

    description: "Yuval Reiss's Personal Site",
    url: "www.yuvalreiss.com", // No trailing slash allowed!
    image: "src/assets/hero.jpeg", // Path to your image you placed in the 'static' folder
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        // threshold: 100, // Percentage of an element's area that needs to be visible to launch animation
        // once: true, // Defines if animation needs to be launched once
        // disable: false, // Flag for disabling animations
        // // Advanced Options
        // selector: "[data-sal]", // Selector of the elements to be animated
        // animateClassName: "sal-animate", // Class name which triggers animation
        // disabledClassName: "sal-disabled", // Class name which defines the disabled state
        // rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        // enterEventName: "sal:in", // Enter event name
        // exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yuval Reiss's Site`,
        short_name: `YR Site`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/assets/favicon_io/android-chrome-512x512.png",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
  ],
}
