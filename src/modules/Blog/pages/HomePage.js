import React from 'react'
import { Link } from 'react-router-dom'

const api = 'http://localhost:4000/posts'

export function EntryList({ entries }) {
  return (
    <ul>
      {entries.map(function(entry) {
        return (
          <li key={entry.id}>
            <Link to={`/entry/${entry.id}`}>{entry.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default class HomePage extends React.Component {
  state = {
    entries: []
  }

  componentDidMount() {
    fetch(api)
      .then(res => res.json())
      .then(entries => {
        this.setState({
          entries
        })
      })
  }

  render() {
    return (
      <div>
        <EntryList entries={this.state.entries} />
      </div>
    )
  }
}
