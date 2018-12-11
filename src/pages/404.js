import React from 'react'
import Layout from '../components/layout'
import OnSiteBtn from '../components/OnSiteBtn'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        textAlign: 'center',
        fontSize: '1.7rem',
        padding: '25% 0',
        height: '100vh',
      }}
    >
      <h1>NOT FOUND</h1>
      <p style={{ marginBottom: '3rem' }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <OnSiteBtn
        to="/"
        text="Back to the homepage"
        type="link"
        className="cel__link"
      />
    </div>
  </Layout>
)

export default NotFoundPage
