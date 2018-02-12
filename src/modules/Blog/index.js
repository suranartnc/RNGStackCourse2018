import React from 'react'

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
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <a href="/">My Blog App</a>
      </div>

      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>
          Home
        </a>
        <a href="/about" style={styles.navLink}>
          About
        </a>
      </nav>

      <div style={styles.main}>
        <HomePage />
        <EntryPage />
        <AboutPage />
      </div>
    </div>
  )
}

export default BlogApp
