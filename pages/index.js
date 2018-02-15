import React from 'react'

import { Link } from '../routes'
import Layout from '../components/Layout'
import page from '../hocs/page'

function HomePage() {
  return (
    <Layout>
      <p>Home Page</p>
      <p>
        <Link route="entry" params={{ id: 1234 }}>
          <a>Go to Entry: 1234</a>
        </Link>
      </p>
    </Layout>
  )
}

export default page(HomePage)
