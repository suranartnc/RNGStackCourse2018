import React from 'react'
import { Link } from '../../../lib/router'

export default function HomePage() {
  return (
    <div>
      <p>This is homepage.</p>
      <p>&nbsp;</p>
      <Link to="/entry">Entry page</Link>
    </div>
  )
}
