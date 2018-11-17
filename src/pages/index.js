import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'

import Layout from '../components/layout'
import OnPageBtn from '../components/OnPageBtn'
import OnSiteBtn from '../components/OnSiteBtn'
import OnWebBtn from '../components/OnWebBtn'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero">
      <p className="hero__text--top">Hello, my name is</p>

      <div className="hero__main">
        <div className="hero__main-container">
          <Img
            className="hero__img"
            fluid={data.heroImage.childImageSharp.fluid}
          />

          <h1 className="hero__title">Gabor Bencsik</h1>
        </div>
      </div>

      <Parallax
        className="hero__text--bottom"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
      >
        <p className="hero__text--bottom">
          I'm a Front End developer based in Prague.
          <br />I build and design clean and responsive web apps.
        </p>
      </Parallax>
    </section>
    <div className="hero__cta">
      <OnPageBtn to="featuredWork" text="Scroll" block="hero" />
      <div className="hero__cta--line" />
    </div>

    <section className="featured">
      <div className="featured__item cel">
        <div className="featured__text">
          <h3>UI/UX Design, Front End development</h3>
          <h2>Capoeira Espirito Livre</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
          <div className="featured__cta">
            <OnWebBtn to="featuredWork" text="Visit site" />
            <OnSiteBtn to="featuredWork" text="Case Study" />
          </div>
        </div>
        <Img
          className="featured__img"
          fluid={data.celImage.childImageSharp.fluid}
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const homeQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    celImage: file(relativePath: { eq: "cel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
