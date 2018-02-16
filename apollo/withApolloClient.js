import React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import initClient from './initClient'

export default ComposedComponent => {
  return class WithApolloClient extends React.Component {
    static async getInitialProps(ctx) {
      let serverState = {
        apollo: {
          data: {}
        }
      }

      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Server-Side Only
      if (!process.browser) {
        const apollo = initClient()
        const url = { query: ctx.query, pathname: ctx.pathname }

        try {
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          )
        } catch (err) {
          console.log(err)
        }

        serverState = {
          apollo: {
            data: apollo.cache.extract()
          }
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      this.apollo = initClient(this.props.serverState.apollo.data)
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
