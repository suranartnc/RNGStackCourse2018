import React from 'react'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles from './ToDoStyles'

export default class ToDoApp extends React.Component {
  state = {
    todos: [],
    filter: 'all'
  }

  addTodo = name => {
    this.setState({
      todos: this.state.todos.concat([
        {
          id: new Date().getTime(),
          name,
          checked: false
        }
      ])
    })
  }

  deleteTodo = id => () => {
    this.setState({
      todos: this.state.todos.filter(function(todo) {
        return todo.id !== id
      })
    })
  }

  checkTodo = id => () => {
    this.setState({
      todos: this.state.todos.map(function(todo) {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(function(todo) {
        return !todo.checked
      })
    })
  }

  isTodoInFilter = todo => {
    if (this.state.filter !== 'all') {
      return this.state.filter === 'completed' ? todo.checked : !todo.checked
    }

    return true
  }

  checkAll = () => {
    const allItemsChecked = this.state.todos
      .filter(this.isTodoInFilter)
      .every(todo => todo.checked)

    this.setState({
      todos: this.state.todos.map(todo => {
        if (this.isTodoInFilter(todo)) {
          todo.checked = !allItemsChecked
        }
        return todo
      })
    })
  }

  setFilter = filter => () => {
    this.setState({ filter })
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.wrapper}>
          <div style={styles.app}>
            <ToDoForm handler={this.addTodo} checkAll={this.checkAll} />
            <ToDoList
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              checkTodo={this.checkTodo}
              filter={this.state.filter}
              isTodoInFilter={this.isTodoInFilter}
            />
            <ToDoFooter
              todos={this.state.todos}
              clearCompleted={this.clearCompleted}
              setFilter={this.setFilter}
            />
          </div>
        </div>
      </div>
    )
  }
}
