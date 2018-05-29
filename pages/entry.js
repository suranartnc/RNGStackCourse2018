import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { Row, Col } from 'antd'

function EntryContent({ entry }) {
  return (
    <article>
      <Head>
        <title>{entry.title}</title>
      </Head>
      <h1>{entry.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: entry.body }} />
    </article>
  )
}

class EntryPage extends React.Component {
  static async getInitialProps(ctx) {
    const response = await axios.get(
      `http://localhost:4000/posts/${ctx.query.id}`
    )

    return {
      entry: response.data
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={24} lg={16}>
            <EntryContent entry={this.props.entry} />
          </Col>
          <Col xs={24} lg={8}>
            Sidebar
          </Col>
        </Row>
      </div>
    )
  }
}

export default EntryPage
