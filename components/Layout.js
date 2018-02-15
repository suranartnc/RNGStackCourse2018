import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../routes'

const styles = {
  wrapper: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  logo: {
    padding: '20px 15px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  logoLink: {
    color: '#666',
    textDecoration: 'none'
  },
  nav: {
    display: 'flex',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee'
  },
  navLink: {
    padding: '10px 15px',
    color: '#666',
    textDecoration: 'none'
  },
  main: {
    marginTop: '50px',
    padding: '0px 15px'
  }
}

export default function Layout({ children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <Link to="home">
          <a>My Blog App</a>
        </Link>
      </div>

      <nav style={styles.nav}>
        <Link to="home">
          <a style={styles.navLink}>Home</a>
        </Link>
        <Link to="about">
          <a style={styles.navLink}>About</a>
        </Link>
      </nav>

      <div style={styles.main}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
