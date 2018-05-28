import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { default as reducer, initialState } from './reducer'

const enhancer = applyMiddleware(promiseMiddleware())

export function initializeStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState, enhancer)
}
