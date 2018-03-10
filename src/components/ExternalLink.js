import React, { Component } from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

class ExternalLink extends Component {
  static propTypes = {
    linkUrl: PropTypes.string.isRequired,
    linkLabel: PropTypes.string.isRequired
  }

  handleBlogClick = (e) => {
    e.preventDefault()
    ReactGA.event({
      category: 'External Links',
      action: 'Link Click',
      label: this.props.linkLabel
    })
    window.location.href = this.props.linkUrl
  }

  render () {
    return (
      <a onClick={this.handleBlogClick} className={'main-link'}>{this.props.linkLabel}</a>
    )
  }
}

export default ExternalLink
