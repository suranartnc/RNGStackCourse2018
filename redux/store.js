import { createStore, combineReducers, applyMiddleware } from 'redux'

import apiFetcher from './middlewares/apiFetcher'

const enhancer = applyMiddleware(apiFetcher)

let reduxStore = null

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

export function initStore(initialState = {}) {
  let store

  if (!process.browser || !reduxStore) {
    store = createStore(rootReducer, initialState, enhancer)
    if (!process.browser) {
      return store
    }
    reduxStore = store
  }

  return reduxStore
}
