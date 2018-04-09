import { createStore, combineReducers, applyMiddleware } from 'redux'

import apiFetcher from './middlewares/apiFetcher'

const apiUrl = 'http://localhost:4000'

const ENTRIES_GET = 'ENTRIES_GET'
const ENTRY_GET = 'ENTRY_GET'

export function getEntries() {
  return {
    type: ENTRIES_GET,
    api: {
      url: `${apiUrl}/posts`
    }
  }
}

export function getEntry(id) {
  return {
    type: ENTRY_GET,
    api: {
      url: `${apiUrl}/posts/${id}`
    }
  }
}

const rootReducer = combineReducers({
  entryList: function(state = [], action) {
    switch (action.type) {
      case ENTRIES_GET:
        return action.data
      default:
        return state
    }
  },
  entryDetail: function(state = {}, action) {
    switch (action.type) {
      case ENTRY_GET:
        return action.data
      default:
        return state
    }
  }
})

const enhancer = applyMiddleware(apiFetcher)

export default createStore(rootReducer, enhancer)
