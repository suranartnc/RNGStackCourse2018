import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getEntries } from '../redux/store'

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
    this.props.getEntries()
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

export default connect(selectStateFromStore, { getEntries })(HomePageContainer)
