import { createStore, combineReducers } from 'redux'

const initialToDos = []

const rootReducer = combineReducers({
  todos: todosReducer

  // Add more state keys here
  // ...
})

function todosReducer(state = initialToDos, action) {
  // Update state of todos here...
  return state
}

const store = createStore(rootReducer)

export default store
