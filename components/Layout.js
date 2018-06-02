import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Breadcrumb } from 'antd'

import { Link } from '@router'
import LoadingIndicator from './LoadingIndicator'

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

const Main = styled.main`
  margin-top: 50px;
  padding: 0px 15px;
`

const StyledNavigation = styled(Navigation)`
  a {
    color: gray;
    font-size: 16px;
  }
`

function Navigation({ className }) {
  return (
    <Breadcrumb className={className} separator=">">
      <Breadcrumb.Item>
        <Link route="home">
          <a>Home</a>
        </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item>
        <Link route="about">
          <a>About</a>
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default function Layout({ children }) {
  return (
    <Wrapper>
      <LoadingIndicator />

      <Logo>
        <Link route="home">
          <a>
            <img src="/static/images/react.svg" width="100" />
          </a>
        </Link>
      </Logo>

      <StyledNavigation />

      <Main>{children}</Main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
