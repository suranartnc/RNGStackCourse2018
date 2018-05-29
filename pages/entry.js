import React from 'react'
import axios from 'axios'
import Head from 'next/head'

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
    const response = await axios.get(`http://localhost:4000/posts/${ctx.query.id}`)

    return {
      entry: response.data
    }
  }

  render() {
    return (
      <div>
        <EntryContent entry={this.props.entry} />
      </div>
    )
  }
}


export default EntryPage
