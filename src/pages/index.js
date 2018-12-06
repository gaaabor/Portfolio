import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import OnPageBtn from '../components/OnPageBtn'
import OnSiteBtn from '../components/OnSiteBtn'
import OnWebBtn from '../components/OnWebBtn'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero" id="hero">
      <Fade duration={1000}>
        <p className="hero__text--top">Hello, my name is</p>
      </Fade>

      <div className="hero__main">
        <Fade top cascade duration={1000} delay={400}>
          <h1 className="hero__title">Gabor Bencsik</h1>
        </Fade>
      </div>

      <Fade duration={1000}>
        <p className="hero__text--bottom">
          I'm a Front End developer based in Prague.
          <br /> I build and design clean and responsive web apps.
        </p>
      </Fade>
    </section>

    <div className="hero__cta">
      <OnPageBtn to="featured" text="Work" className="hero__cta--text" />
      <div className="hero__cta--line" />
    </div>

    <section className="featured" id="featured">
      <div className="featured__item cel">
        <Fade delay={200}>
          <div className="featured__text">
            <h3>UI/UX Design, Front End development</h3>
            {/* <Fade top cascade delay={400} duration={500}> */}
            <h2>Capoeira Espirito Livre</h2>
            {/* </Fade> */}
            <p>Web application for a sport and cultural association</p>
            <div className="featured__cta">
              <OnWebBtn
                to="https://cel-capoeira.com"
                text="Visit site"
                type="primary"
                className="featured__cta--button"
              />
              <OnSiteBtn
                to="/page-2"
                text="Case Study"
                type="primary"
                className="featured__cta--button"
              />
            </div>
          </div>
        </Fade>
        <Img
          className="featured__img"
          fluid={data.celImage.childImageSharp.fluid}
        />
      </div>

      <div className="featured__item portfolio">
        <Img
          className="featured__img"
          fluid={data.portfolioImage.childImageSharp.fluid}
        />
        <Fade delay={200}>
          <div className="featured__text">
            <h3>UI/UX Design, Front End development</h3>
            <Fade top cascade delay={400} duration={500}>
              <h2>Personal Portfolio</h2>
            </Fade>
            <p>A simple, minimalist site for personal branding</p>
            <div className="featured__cta">
              <OnSiteBtn
                to="featuredWork"
                text="View Project"
                type="primary"
                className="featured__cta--button"
              />
              <OnWebBtn
                to="https://github.com/gaaabor/Portfolio"
                text="Code on Github"
                type="primary"
                className="featured__cta--button"
              />
            </div>
          </div>
        </Fade>
      </div>

      <div className="featured__item fluent">
        <Fade delay={200}>
          <div className="featured__text">
            <h3>UI/UX Design, Front End development</h3>
            <Fade top cascade delay={400} duration={500}>
              <h2>FLUENT ACRHITECT & DESIGN</h2>
            </Fade>
            <p>Landing page for a fictional architect's company</p>
            <div className="featured__cta">
              <OnWebBtn
                to="featuredWork"
                text="Visit site"
                type="primary"
                className="featured__cta--button"
              />
              <OnWebBtn
                to="featuredWork"
                text="Code on Github"
                type="primary"
                className="featured__cta--button"
              />
            </div>
          </div>
        </Fade>
        <Img
          className="featured__img"
          fluid={data.fluentImage.childImageSharp.fluid}
        />
      </div>
    </section>
    <section id="about">
      <h2 className="heading">Skills and Services</h2>
      <div className="skills__table">
        <Fade duration={500} delay={300} fraction={0.9}>
          <div className="skills__col">
            <p className="skills__item">React</p>
            <p className="skills__item">JavaScript</p>
            <p className="skills__item">npm</p>
          </div>
        </Fade>
        <Fade duration={500} delay={800} fraction={0.9}>
          <div className="skills__col">
            <p className="skills__item">SASS</p>
            <p className="skills__item">GatsbyJS</p>
            <p className="skills__item">UI/UX</p>
          </div>
        </Fade>
        <Fade duration={500} delay={1100} fraction={0.9}>
          <div className="skills__col">
            <p className="skills__item">HTML/CSS</p>
            <p className="skills__item">Adobe XD</p>
            <p className="skills__item">BEM</p>
          </div>
        </Fade>
      </div>
      <div className="about">
        <h2 className="heading">About Me</h2>
        <div className="about__container">
          <div className="about__text">
            <Fade delay={300}>
              <p className="about__text-section">
                Main area of my expertise is to develop performant and
                user-friendly web apps whilst maintaining semantic, clean markup
                and SEO friendly code. I’m also interested in design, I have a
                passion for clean aesthetics, minimalism, unusual typography and
                simplistic UX solutions.
              </p>
            </Fade>
            <Fade delay={600}>
              <p className="about__text-section">
                For other CSSGrid and Flexbox layouts, as well as small
                JavaScript apps and games please visit my{' '}
                <OnWebBtn
                  to="https://github.com/gaaabor"
                  text="Github"
                  type="link"
                  className="about__link"
                />
                . If you would like to know more about my education and skills,
                than head over to my{' '}
                <OnWebBtn
                  to="https://www.linkedin.com/in/gabor-bencsik/"
                  text="LinkedIn"
                  type="link"
                  className="about__link"
                />{' '}
                profile, or download my resume.
              </p>
            </Fade>
            <Fade delay={900}>
              <p className="about__text-section">
                In my personal life I'm passionet about capoeira for over 10
                years now, check out my{' '}
                <OnWebBtn
                  to="https://www.instagram.com/faisca_cel/"
                  text="Instagram"
                  type="link"
                  className="about__link"
                />{' '}
                or{' '}
                <OnWebBtn
                  to="https://www.youtube.com/channel/UCwO3SE37HqEjQth3GpWWpBA"
                  text="YouTube"
                  type="link"
                  className="about__link"
                />{' '}
                for some random backflips.
              </p>
            </Fade>
          </div>

          <Img
            className="about__img"
            fluid={data.aboutImage.childImageSharp.fluid}
          />
        </div>
        <OnWebBtn
          to="https://drive.google.com/file/d/1jKlmSWqessZ7W35ZY27Oa7iZemN0rtke/view?usp=sharing"
          text="Download My Resume"
          type="primary"
          className="about__resume-btn"
        />
      </div>
    </section>
    <section className="contact" id="contact">
      <p className="contact__text">
        I'm currently looking for a full-time position in Prague.
        <br />
        If you are interested about my services let's talk, contact me at:
      </p>

      <h3 className="contact__email">
        <Fade top cascade duration={1000} delay={500}>
          <a
            href="mailto:hello@gaborbencsik.me"
            className="contact__email"
            rel="noopener noreferrer"
            target="_blank"
          >
            hello@gaborbencsik.me
          </a>
        </Fade>
      </h3>

      <p className="contact__text">or</p>
      <footer>
        <OnWebBtn
          to="https://www.linkedin.com/in/gabor-bencsik/"
          text="LinkedIn"
          type="link"
          className="contact__link"
        />
        <OnWebBtn
          to="https://github.com/gaaabor"
          text="Github"
          type="link"
          className="contact__link"
        />
      </footer>
    </section>
  </Layout>
)

export default IndexPage

export const homeQuery = graphql`
  query {
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    celImage: file(relativePath: { eq: "cel.jpg" }) {
      ...featuredImage
    }
    portfolioImage: file(relativePath: { eq: "portfolio.png" }) {
      ...featuredImage
    }
    fluentImage: file(relativePath: { eq: "fluent.png" }) {
      ...featuredImage
    }
  }
  fragment featuredImage on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 85) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
