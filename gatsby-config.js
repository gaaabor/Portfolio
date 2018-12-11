module.exports = {
  siteMetadata: {
    title: 'Gabor Bencsik - Portfolio',
    siteUrl: `https://gaborbencsik.me`,
    description:
      'I am Front-End developer based in Prague. I build and design clean and responsive web apps',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gabor Bencsik',
        short_name: 'GB',
        start_url: '/',
        background_color: '#f7d708',
        theme_color: '#f7d708',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-130507998-2',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
  ],
}
