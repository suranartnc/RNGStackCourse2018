import React from 'react'

import { Router, Route, Link } from '../../lib/router'

import HomePage from '../Blog/pages/HomePage'
import EntryPage from '../Blog/pages/EntryPage'
import AboutPage from '../Blog/pages/AboutPage'

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

function BlogApp() {
  return (
    <Router>
      <div style={styles.wrapper}>
        <div style={styles.logo}>
          <Link to="/">My Blog App</Link>
        </div>

        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </nav>

        <div style={styles.main}>
          <Route path="/" component={HomePage} />
          <Route path="/entry" component={EntryPage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </div>
    </Router>
  )
}

export default BlogApp
