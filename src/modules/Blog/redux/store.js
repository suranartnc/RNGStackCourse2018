import { createStore, combineReducers, applyMiddleware } from 'redux'

import apiFetcher from './middlewares/apiFetcher'

const initialEntryDetail = {}

const rootReducer = combineReducers({
  entryList: function(state = [], action) {
    switch (action.type) {
      case 'ENTRIES_FETCH_FULFILLED':
        return action.data
      default:
        return state
    }
  },
  entryDetail: function(state = initialEntryDetail, action) {
    switch (action.type) {
      case 'ENTRY_FETCH_PENDING':
        return initialEntryDetail
      case 'ENTRY_FETCH_FULFILLED':
        return action.data
      default:
        return state
    }
  },
  loading: function(state, action) {
    return action.type.indexOf('_PENDING') !== -1 ? true : false
  }
})

const enhancer = applyMiddleware(apiFetcher)

export default createStore(rootReducer, enhancer)
