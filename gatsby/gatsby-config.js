module.exports = {
  siteMetadata: {
    title: 'Floria Consulting',
    author: 'Sylvain Savajols',
    description: "Floria consulting - Formation professionnel dans l'IT",
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Floria consulting',
        short_name: 'floria',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
