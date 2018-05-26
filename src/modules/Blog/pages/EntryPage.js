import React from 'react'
import { connect } from 'react-redux'

const api = 'http://localhost:4000/posts'

const styles = {
  article: {
    padding: '0 0 30px'
  },
  body: {
    paddingTop: '30px'
  }
}

function EntryContent({ entry, loading }) {
  if (loading) {
    return 'Loading...'
  }
  return (
    <article style={styles.article}>
      <h1>{entry.title}</h1>
      <p style={styles.body} dangerouslySetInnerHTML={{ __html: entry.body }} />
    </article>
  )
}

class EntryPage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'ENTRY_FETCH',
      api: `${api}/${this.props.match.params.id}`
    })
  }

  render() {
    return (
      <div>
        <EntryContent
          entry={this.props.entryDetail}
          loading={this.props.loading}
        />
      </div>
    )
  }
}

export default connect(({ entryDetail, loading }) => ({
  entryDetail,
  loading
}))(EntryPage)
