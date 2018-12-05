import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={({ site: { siteMetadata } = {} }) => (
      <Fragment>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: "description", content: siteMetadata.description },
            { name: "keywords", content: siteMetadata.keywords },
            {
              name: "google-site-verification",
              content: siteMetadata.googleSiteVerification
            },
            { name: "author", content: "Jelle de Jong" }
          ]}
        >
          <html lang="nl-NL" />
          <link
            type="text/css"
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Open+Sans|Roboto:400,300,100,500,700"
          />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>{`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-2308542917989831",
            enable_page_level_ads: true
            });
          `}</script>
          <script type="text/javascript">{`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r; i[r]=i[r]||function(){
              (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-188573-2', 'auto');
            ga('send', 'pageview');
          `}</script>
        </Helmet>
        <Header siteTitle={siteMetadata.title} />
        {children}
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
