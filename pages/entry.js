import React from 'react'

function EntryContent({ entry }) {
  return (
    <article>
      <h1>{entry.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: entry.body }} />
    </article>
  )
}

class EntryPage extends React.Component {
  render() {
    return (
      <div>
        <EntryContent entry={{}} />
      </div>
    )
  }
}

export default EntryPage
