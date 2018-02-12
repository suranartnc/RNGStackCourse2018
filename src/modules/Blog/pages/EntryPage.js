import React from 'react'

const styles = {
  article: {
    padding: '0 0 30px'
  },
  body: {
    paddingTop: '30px'
  }
}

export default function EntryPage(props) {
  return (
    <article style={styles.article}>
      <h1>Title of Entry ID: {props.match.params.id}</h1>
      <p style={styles.body}>
        This is body of Entry ID: {props.match.params.id}
      </p>
    </article>
  )
}
