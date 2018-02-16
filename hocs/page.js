import { compose } from 'recompose'

import withApolloClient from '../apollo/withApolloClient'
import withRedux from '../redux/withRedux'

export default compose(withApolloClient, withRedux)
