import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'

import { Link } from '@router'
import LoadingIndicator from './LoadingIndicator'

injectGlobal`
  body {
    font-size: 16px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const Logo = styled.div`
  padding: 20px 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  a {
    color: #666;
    text-decoration: none;
  }
`

const Nav = styled.nav`
  display: flex;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  a {
    padding: 10px 15px;
    color: #666;
    text-decoration: none;
  }
`

const Main = styled.main`
  margin-top: 50px;
  padding: 0px 15px;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <LoadingIndicator />

      <Logo>
        <Link route="home">
          <a>My Blog App</a>
        </Link>
      </Logo>

      <Nav>
        <Link route="home">
          <a>Home</a>
        </Link>
        <Link route="about">
          <a>About</a>
        </Link>
      </Nav>

      <Main>{children}</Main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
