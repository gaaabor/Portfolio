import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const celCaseStudy = ({ data }) => (
  <Layout>
    <section className="cel__hero">
      <h1 className="cel__hero-title">Capoeira Espirito Livre</h1>
      <p className="cel__hero-text">
        The site was developed using React and GatsbyJS to create a seamless,
        <br />
        native mobile app like front-end that perfectly suited the client needs.
        <br />
        Subtle animations and lazy loading images add flair to the entire
        experience.
      </p>
    </section>
    <Img fluid={data.celLaptopImage.childImageSharp.fluid} />
    <section className="cel__details">
      <div className="cel__details-item">
        <p className="cel__details-text">
          Based on the researches we did, it was clear that our target audience
          will interact mostly from mobile devices with the website. Therefore
          responsive design, and the same look and feel across every screen size
          was my priority while developing the application.
        </p>
        <Img
          className="cel__details-img"
          fluid={data.celPhoneOneImage.childImageSharp.fluid}
        />
      </div>
    </section>
  </Layout>
)

export default celCaseStudy

export const homeQuery = graphql`
  query {
    celLaptopImage: file(relativePath: { eq: "cel-laptop.png" }) {
      ...wideImage
    }
    celPhoneOneImage: file(relativePath: { eq: "cel-phone-1.jpg" }) {
      ...phoneImage
    }
    celPhoneTwoImage: file(relativePath: { eq: "cel-phone-2.jpg" }) {
      ...phoneImage
    }
    celAuditsImage: file(relativePath: { eq: "cel-audits.png" }) {
      ...wideImage
    }
  }
  fragment wideImage on File {
    childImageSharp {
      fluid(maxWidth: 1400, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment phoneImage on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
