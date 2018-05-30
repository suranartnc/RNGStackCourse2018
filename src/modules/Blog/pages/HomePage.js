import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const api = 'http://localhost:4000/posts'

function HomePage({ entryList }) {
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

class HomePageContainer extends React.Component {
  componentDidMount() {
    // Do something here...
    if (this.props.entryList.length === 0) {
      this.props.dispatch({
        type: 'ENTRIES_FETCH',
        api
      })
    }
  }
  render() {
    return <HomePage entryList={this.props.entryList} />
  }
}

function selectStateFromStore(allState) {
  return {
    entryList: allState.entryList
  }
}

export default connect(selectStateFromStore)(HomePageContainer)
