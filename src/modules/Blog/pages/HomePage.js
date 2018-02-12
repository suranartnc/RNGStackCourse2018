import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <p>This is homepage.</p>
      <p>&nbsp;</p>
      <Link to="/entry/1234">Link to Entry ID: 1234</Link>
    </div>
  )
}
