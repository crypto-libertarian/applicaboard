import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({...state})

class AppContainer extends Component {
  render() {
    return <p>Hello, World!</p>
  }
}

export default connect(mapStateToProps)(AppContainer)
