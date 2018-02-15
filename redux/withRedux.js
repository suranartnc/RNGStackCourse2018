import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from './store'

export default ComposedComponent => {
  return class WithRedux extends React.Component {
    static async getInitialProps(ctx) {
      const store = initStore()

      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        const ctxWithStore = {
          ...ctx,
          store
        }
        composedInitialProps = await ComposedComponent.getInitialProps(
          ctxWithStore
        )
      }

      const initialState = store.getState()

      return {
        initialState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      this.store = initStore(this.props.initialState)
    }

    render() {
      return (
        <Provider store={this.store}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
}
