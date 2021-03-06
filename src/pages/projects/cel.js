import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Layout from '../../components/layout'
import OnSiteBtn from '../../components/OnSiteBtn'
import OnWebBtn from '../../components/OnWebBtn'

const celCaseStudy = ({ data }) => (
  <Layout>
    <div className="menu">
      <OnSiteBtn to="/#home" text="home" />
      <OnSiteBtn to="/#featured" text="work" />
      <OnSiteBtn to="/#about" text="about" />
      <OnSiteBtn to="/#contact" text="contact" />
    </div>
    <section className="cel__hero">
      <Fade top cascade duration={800} delay={300}>
        <h1 className="cel__hero-title">Capoeira Espirito Livre</h1>
      </Fade>
      <Fade>
        <p className="cel__hero-text">
          The site was developed using React and GatsbyJS to create a seamless,
          <br />
          native mobile app like front-end that perfectly suited the client
          needs.
          <br />
          Subtle animations and lazy loading images add flair to the entire
          experience.
        </p>
      </Fade>
    </section>
    <Img fluid={data.celLaptopImage.childImageSharp.fluid} />
    <section className="cel__details">
      <div className="cel__details-item">
        <Fade>
          <p className="cel__details-text">
            Based on the researches we did, it was clear that our target
            audience will interact mostly from mobile devices with our website.
            Therefore responsive design, and the same look and feel across every
            screen size was my priority while developing the application.
          </p>
        </Fade>
        <Img
          className="cel__details-img"
          fluid={data.celPhoneOneImage.childImageSharp.fluid}
        />
      </div>

      <div className="cel__details-item">
        <Img
          className="cel__details-img"
          fluid={data.celPhoneTwoImage.childImageSharp.fluid}
        />
        <div className="cel__details-text">
          <Fade>
            <p>
              The other main guideline of the development was speed and
              performance. Since the first sketches of the design we imagined
              big, full screen pictures and with Gatsby's GraphQL queries and
              advanced image loading techniques, this was achievable with no
              picture flickering or compromise in quality.
            </p>
          </Fade>
          <Fade delay={800}>
            <p>
              As a progressive web app it loads instantly, enhanced with Service
              Workers to work offline, either in the browser or as an installed
              application. Take a look at the our Google Audits test below.
            </p>
          </Fade>
          <Img
            className="cel__audits-img"
            fluid={data.celAuditsImage.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="cel__cta">
        <OnWebBtn
          to="https://cel-capoeira.com"
          text="Visit site"
          type="primary"
          className="cel__cta--button"
        />
        <OnWebBtn
          to="https://github.com/gaaabor/CEL"
          text="Code on Github"
          type="primary"
          className="cel__cta--button"
        />
      </div>
      <div className="cel__testimonial">
        <p className="cel__testimonial-text">
          "Entrusting our website to Gabor was one of the best managing choices
          I've ever made. He is focused and determined in every single way
          beyond measure! Not even the smallest detail could escape his notice,
          and he was always willing and able to find the best solution to the
          problems. I think he took perfectionism to a new level, and each time
          it was necessary he was always ready to start things all over again!"
        </p>
        <p className="cel__testimonial-author">Krisztián Oláh</p>
        <p className="cel__testimonial-title">
          Founder, Capoeira Espirito Livre
        </p>
      </div>
      <OnSiteBtn
        to="/#featured"
        text="Back to the homepage"
        type="link"
        className="cel__link"
      />
    </section>
  </Layout>
)

export default celCaseStudy

export const homeQuery = graphql`
  query {
    celLaptopImage: file(relativePath: { eq: "cel-laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    celPhoneOneImage: file(relativePath: { eq: "cel-phone-1.jpg" }) {
      ...phoneImage
    }
    celPhoneTwoImage: file(relativePath: { eq: "cel-phone-2.jpg" }) {
      ...phoneImage
    }
    celAuditsImage: file(relativePath: { eq: "cel-audits.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 80) {
          ...GatsbyImageSharpFluid
        }
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

Fade.defaultProps = {
  fraction: 0.9,
  duration: 1000,
}
