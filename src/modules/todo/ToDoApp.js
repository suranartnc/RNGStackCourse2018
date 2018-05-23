import React from 'react'
import { Provider, connect } from 'react-redux'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles from './ToDoStyles'

import ToDoStore from './store/ToDoStore'

function ToDoApp(props) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <div style={styles.app}>
          <ToDoForm />
          <ToDoList />
          <ToDoFooter />
        </div>
      </div>
    </div>
  )
}

export default function ToDoAppUsingRedux() {
  return (
    <Provider store={ToDoStore}>
      <ToDoApp />
    </Provider>
  )
}
