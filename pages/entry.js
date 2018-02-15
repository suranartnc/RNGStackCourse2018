import React from 'react'
import Layout from '../components/Layout'

export default function HomePage(props) {
  return (
    <Layout>
      <p>Entry Page</p>
      <p>ID: {props.url.query.id}</p>
    </Layout>
  )
}
