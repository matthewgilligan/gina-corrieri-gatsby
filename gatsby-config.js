module.exports = {
  siteMetadata: {
    title: `Gina Corrieri`,
    titleTemplate: ``,
    description:
      `Gina Corrieri is an independent designer and reworker based in London.`,
    url: `https://www.ginacorrieri.com`, 
    image: `/src/assets/Phenomena/kiara.jpg`,
    twitterUsername: `@gi__1_7`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};