import React from 'react'

import { Route, Link } from 'react-router-dom'

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
    light: {
      color: 'grey',
      textDecoration: 'none'
    },
    dark: {
      color: 'black',
      textDecoration: 'none'
    }
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

const defaultTheme = {
  color: 'light'
}

const ThemeContext = React.createContext(defaultTheme)

class BlogApp extends React.Component {
  toggleColor = () => {
    this.setState({
      color: this.state.color === 'light' ? 'dark' : 'light'
    })
  }

  state = {
    ...defaultTheme,
    toggleColor: this.toggleColor
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div style={styles.wrapper}>
          <div style={styles.logo}>
            <ThemeContext.Consumer>
              {({ color }) => (
                <Link to="/" style={styles.logoLink[color]}>
                  My Blog App
                </Link>
              )}
            </ThemeContext.Consumer>
          </div>

          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
            <Link to="/about" style={styles.navLink}>
              About
            </Link>
          </nav>

          <ThemeContext.Consumer>
            {({ toggleColor }) => (
              <div>
                <button onClick={toggleColor}>Switch Theme</button>
              </div>
            )}
          </ThemeContext.Consumer>

          <div style={styles.main}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/entry/:id" component={EntryPage} />
            <Route exact path="/about" component={AboutPage} />
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default BlogApp
