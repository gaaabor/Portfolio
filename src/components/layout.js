import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link as Anchor } from 'react-scroll'
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
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
          <Anchor
            to="contact"
            spy={true}
            smooth={true}
            duration={700}
            onSetActive={() => scroll.scrollToBottom()}
          >
            contact
          </Anchor>
        </div>
        <div className="app__container">{children}</div>
        <div className="arrow-up" onClick={() => scroll.scrollToTop()}>
          <FaChevronUp />
          {/* <svg width="28" height="28" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
          </svg> */}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
