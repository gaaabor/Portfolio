import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Menu from 'react-responsive-navbar'
import { ParallaxProvider } from 'react-scroll-parallax'

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
      <ParallaxProvider>
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
                <a>home</a>
                <a>work</a>
                <a>about</a>
                <a>contact</a>
              </div>
            }
          />
          <div className="app__container">{children}</div>
        </div>
      </ParallaxProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
