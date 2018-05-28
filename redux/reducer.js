import { combineReducers } from 'redux'

export const initialState = {
  entryList: [],
  entryDetail: {}
}

export default combineReducers({
  entryList: function(state = initialState.entryList, action) {
    switch (action.type) {
      case 'XXX':
        return state
      default:
        return state
    }
  },
  entryDetail: function(state = initialState.entryDetail, action) {
    switch (action.type) {
      case 'YYY':
        return state
      default:
        return state
    }
  }
})
