import React from 'react'
import axios from 'axios'

import { Link } from '@router'

function EntryList({ entries }) {
  return (
    <ul>
      {entries.map(function (entry) {
        return (
          <li key={entry.id}>
            <Link route="entry" params={{ id: entry.id }}>
              <a>{entry.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

class HomePage extends React.Component {
  static async getInitialProps() {
    const response = await axios.get('http://localhost:4000/posts')

    return {
      entries: response.data
    }
  }

  render() {
    return (
      <div>
        <EntryList entries={this.props.entries} />
      </div>
    )
  }
}

export default HomePage
