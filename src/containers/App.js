import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppContainer extends Component {
  render() {
    return <p>Hello, World!</p>
  }
}

export default connect()(AppContainer)
