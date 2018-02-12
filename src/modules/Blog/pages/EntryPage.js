import React from 'react'

const styles = {
  article: {
    padding: '0 0 30px'
  },
  body: {
    paddingTop: '30px'
  }
}

export default function EntryPage() {
  return (
    <article style={styles.article}>
      <h1>Title</h1>
      <p style={styles.body}>This is body.</p>
    </article>
  )
}
