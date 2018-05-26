import React from 'react'
import { EntryList } from './HomePage'

const api = 'http://localhost:4000/posts'

const styles = {
  article: {
    padding: '0 0 30px'
  },
  body: {
    paddingTop: '30px'
  }
}

function EntryContent({ entry }) {
  return (
    <article style={styles.article}>
      <h1>{entry.title}</h1>
      <p style={styles.body} dangerouslySetInnerHTML={{ __html: entry.body }} />
    </article>
  )
}

export default class EntryPage extends React.Component {
  state = {
    entry: {},
    entries: []
  }

  getEntry(id) {
    fetch(api + '/' + id)
      .then(res => res.json())
      .then(entry => {
        this.setState({
          entry
        })
      })
  }

  componentDidMount() {
    this.getEntry(this.props.match.params.id)

    fetch(api)
      .then(res => res.json())
      .then(entries => {
        this.setState({
          entries
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id
    if (id !== prevProps.match.params.id) {
      this.getEntry(id)
    }
  }

  render() {
    return (
      <div>
        <EntryContent entry={this.state.entry} />
        <EntryList entries={this.state.entries} />
      </div>
    )
  }
}
