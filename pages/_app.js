import React from 'react'
import App, { Container } from 'next/app'
import { compose } from 'redux'
import { Provider } from 'react-redux'

import { withRouter } from 'next/router'
import withRedux from '../redux/withRedux'

import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} url={this.props.router} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default compose(withRouter, withRedux)(MyApp)
