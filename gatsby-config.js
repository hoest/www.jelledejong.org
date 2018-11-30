module.exports = {
  siteMetadata: {
    title: "www.jelledejong.org",
    description:
      "Dit is de persoonlijke pagina van Jelle de Jong uit Soest, een Nederlandse (web)software ontwikkelaar.",
    keywords:
      "jelle, de jong, jelle de jong, Soest, Nederland, web, internet, software, C#, csharp, net, dotnet, api, rest, graphql, javascript, typescript"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "www.jelledejong.org",
        short_name: "jelledejong.org",
        start_url: "/",
        display: "minimal-ui"
      }
    }
  ]
};
