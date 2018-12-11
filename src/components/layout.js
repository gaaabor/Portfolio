import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { animateScroll as scroll } from 'react-scroll'
import { FaChevronUp } from 'react-icons/fa'

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
            {
              name: 'description',
              content:
                'I am Front-End developer based in Prague. I build and design clean and responsive web apps',
            },
            {
              name: 'keywords',
              content:
                'gabor, bencsik, web, web developer, designer, ui, ux, front-end',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="app__container">{children}</div>
        <div className="arrow-up" onClick={() => scroll.scrollToTop()}>
          <FaChevronUp />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
