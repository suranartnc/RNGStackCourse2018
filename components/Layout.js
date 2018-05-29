import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@router'
import LoadingIndicator from './LoadingIndicator'

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <LoadingIndicator />

      <div className="logo">
        <Link route="home">
          <a>My Blog App</a>
        </Link>
      </div>

      <nav>
        <Link route="home">
          <a>Home</a>
        </Link>
        <Link route="about">
          <a>About</a>
        </Link>
      </nav>

      <main>{children}</main>

      <style jsx global>{`
        body { 
          margin: 0;
          font-family: Arial, 'sans-serif';
        }
      `}</style>

      <style jsx>{`
        .wrapper {
          max-width: 1024px;
          margin: 0 auto;
        }
        .logo {
          padding: 20px 15px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        .logo a {
          color: #666;
          text-decoration: none;
        }
        nav {
          display: flex;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
        nav a {
          padding: 10px 15px;
          color: #666;
          text-decoration: none;
        }
        main {
          margin-top: 50px;
          padding: 0px 15px;
        }
      `}</style>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
