import React from 'react'
import styles from './ToDoStyles'

export default class ToDoForm extends React.Component {
  state = {
    keyword: ''
  }

  onFormSubmitted = event => {
    event.preventDefault()
    this.props.handler(this.state.keyword)

    this.setState({
      keyword: ''
    })
  }

  onKeywordChanged = event => {
    this.setState({
      keyword: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmitted}>
          <input
            style={styles.todoInput}
            type="text"
            placeholder="Enter your task here..."
            value={this.state.keyword}
            onChange={this.onKeywordChanged}
          />
        </form>
        <button
          style={styles.footerFilters.button}
          onClick={this.props.checkAll}
        >
          Check all
        </button>
      </div>
    )
  }
}
