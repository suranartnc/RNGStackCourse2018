import React from 'react'
import styles from './ToDoStyles'

function ToDoItem({ todo, deleteTodo, checkTodo }) {
  return (
    <li style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.todoItemCheckBox}
        onChange={checkTodo(todo.id)}
        checked={todo.checked}
      />
      <span>{todo.name}</span>
      <button style={styles.todoItemDelete} onClick={deleteTodo(todo.id)}>
        X
      </button>
    </li>
  )
}

export default function ToDoList({
  todos,
  deleteTodo,
  checkTodo,
  filter,
  isTodoInFilter
}) {
  return (
    <ul>
      {todos.filter(isTodoInFilter).map(function(todo) {
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        )
      })}
    </ul>
  )
}
