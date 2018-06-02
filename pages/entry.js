import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'

const webUrl = 'http://localhost'
const port = 3000

function EntryContent({ entry }) {
  return (
    <article>
      <h1>{entry.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: entry.body }} />
    </article>
  )
}

class EntryPage extends React.Component {
  static async getInitialProps({ reduxStore, query }) {
    const { entryDetail } = reduxStore.getState()

    if (entryDetail.title === undefined) {
      await reduxStore.dispatch({
        type: 'HIGHTLIGHT_DETAIL_FETCH',
        payload: axios.get(`http://localhost:4000/posts/${query.id}`)
      })
    }

    return {}
  }

  render() {
    const { entry } = this.props

    return (
      <div>
        <Head>
          <title>{entry.title}</title>
        </Head>
        <Row>
          <Col span={24} lg={16}>
            <EntryContent entry={entry} />
          </Col>
          <Col span={24} lg={8}>
            Sidebar
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({ entryDetail }) => ({ entry: entryDetail }))(EntryPage)
