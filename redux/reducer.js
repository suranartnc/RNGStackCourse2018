import { combineReducers } from 'redux'

export const initialState = {
  entryList: [],
  entryDetail: {}
}

export default combineReducers({
  entryList: function(state = initialState.entryList, action) {
    switch (action.type) {
      case 'HIGHTLIGHT_FETCH_FULFILLED':
        return action.payload.data
      default:
        return state
    }
  },
  entryDetail: function(state = initialState.entryDetail, action) {
    switch (action.type) {
      case 'HIGHTLIGHT_DETAIL_FETCH_FULFILLED':
        return action.payload.data
      default:
        return state
    }
  }
})
