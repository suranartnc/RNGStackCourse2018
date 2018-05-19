import React from 'react'
import styles from './ToDoStyles'

export default function ToDoFooter({ todos, clearCompleted, setFilter }) {
  const itemLeft = todos.filter(function(todo) {
    return !todo.checked
  }).length

  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>{itemLeft} items left</p>
      <ToDoFooterFilters setFilter={setFilter} />
      <button style={styles.footerFilters.button} onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  )
}

function ToDoFooterFilters({ setFilter }) {
  return (
    <div style={styles.footerFilters.container}>
      <button style={styles.footerFilters.button} onClick={setFilter('all')}>
        All
      </button>
      <button style={styles.footerFilters.button} onClick={setFilter('active')}>
        Active
      </button>
      <button
        style={styles.footerFilters.button}
        onClick={setFilter('completed')}
      >
        Completed
      </button>
    </div>
  )
}
