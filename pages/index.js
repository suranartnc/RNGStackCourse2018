import React from 'react'

import { Link } from '@router'

function EntryList({ entries }) {
  return (
    <ul>
      {entries.map(function(entry) {
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
  render() {
    return (
      <div>
        <EntryList entries={[]} />
      </div>
    )
  }
}

export default HomePage
