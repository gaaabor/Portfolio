import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link as Anchor } from 'react-scroll'
import { StaticQuery, graphql } from 'gatsby'
import Menu from 'react-responsive-navbar'

import '../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="app">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Menu
          menuOpenButton={<p>MENU</p>}
          menuCloseButton={<p>MENU</p>}
          changeMenuOn="1000px"
          largeMenuClassName="menu__big"
          smallMenuClassName="menu__small"
          menu={
            <div className="menu">
              <Anchor to="hero" spy={true} smooth={true} duration={700}>
                home
              </Anchor>
              <Anchor to="featured" spy={true} smooth={true} duration={700}>
                work
              </Anchor>
              <Anchor to="about" spy={true} smooth={true} duration={700}>
                about
              </Anchor>
              <Anchor to="contact" spy={true} smooth={true} duration={700}>
                contact
              </Anchor>
            </div>
          }
        />
        <div className="app__container">{children}</div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
