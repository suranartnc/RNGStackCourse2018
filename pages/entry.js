import React from 'react'

function EntryPage(props) {
  return (
    <div>
      <p>Entry Page</p>
      <p>ID: {props.url.query.id}</p>
    </div>
  )
}

export default EntryPage
