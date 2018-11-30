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
            { name: "keywords", content: siteMetadata.keywords }
          ]}
        >
          <html lang="nl-NL" />
        </Helmet>
        <Header siteTitle={siteMetadata.title} />
        <main>{children}</main>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
