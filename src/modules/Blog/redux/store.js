import { createStore, combineReducers, applyMiddleware } from 'redux'

import apiFetcher from './middlewares/apiFetcher'

const rootReducer = combineReducers({
  entryList: function(state = [], action) {
    switch (action.type) {
      case 'XXX':
        return state
      default:
        return state
    }
  },
  entryDetail: function(state = {}, action) {
    switch (action.type) {
      case 'YYY':
        return state
      default:
        return state
    }
  }
})

const enhancer = applyMiddleware(apiFetcher)

export default createStore(rootReducer, enhancer)
