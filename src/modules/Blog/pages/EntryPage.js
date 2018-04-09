import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getEntry, getEntries } from '../redux/store'

const styles = {
  article: {
    padding: '0 0 30px'
  },
  body: {
    paddingTop: '30px'
  }
}

function EntryPage({ loading, entryDetail, entryList }) {
  if (loading === true) {
    return 'Loading...'
  }

  return (
    <article style={styles.article}>
      <h1>{entryDetail.title}</h1>
      <p
        style={styles.body}
        dangerouslySetInnerHTML={{ __html: entryDetail.body }}
      />
      <MoreStories entryList={entryList} />
    </article>
  )
}

function MoreStories({ entryList }) {
  return (
    <ul>
      {entryList.map(function(entry) {
        return (
          <li key={entry.id}>
            <Link to={`/entry/${entry.id}`}>{entry.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

class EntryPageContainer extends React.Component {
  state = {
    loading: false,
    lastID: null
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.lastId) {
      return {
        loading: true,
        lastId: nextProps.match.params.id
      }
    }

    return null
  }
  fetchEntry(id) {
    this.props.getEntry(id).then(() => {
      this.setState({
        loading: false
      })
    })

    this.props.getEntries()
  }
  componentDidMount() {
    this.fetchEntry(this.props.match.params.id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchEntry(this.props.match.params.id)
    }
  }

  render() {
    return (
      <EntryPage
        loading={this.state.loading}
        entryDetail={this.props.entryDetail}
        entryList={this.props.entryList}
      />
    )
  }
}

function selectStateFromStore(allState) {
  return {
    entryDetail: allState.entryDetail,
    entryList: allState.entryList
  }
}

export default connect(selectStateFromStore, { getEntry, getEntries })(
  EntryPageContainer
)
