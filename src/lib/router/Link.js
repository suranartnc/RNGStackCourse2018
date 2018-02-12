import React from 'react'
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  render() {
    const { to, children, ...restProps } = this.props

    return (
      <a href={to} onClick={this.context.transitionTo(to)} {...restProps}>
        {children}
      </a>
    )
  }
}

Link.contextTypes = {
  transitionTo: PropTypes.func
}
