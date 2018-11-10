import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Button from '../components/Button'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="hero">
      <p className="hero__text--first">Hello, my name is</p>

      <div className="hero__header">
        <div className="hero__main">
          <Img
            className="hero__img"
            fluid={data.heroImage.childImageSharp.fluid}
          />

          <h1 className="hero__title">Gabor Bencsik</h1>
        </div>
      </div>

      <p className="hero__text--second">
        I'm a Front End developer based in Prague.
        <br />I build and design clean and responsive web apps.
      </p>

      <Button
        to="featuredWork"
        text="Take a look at my work"
        btn="hero__button"
      />
    </div>
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
  }
`
