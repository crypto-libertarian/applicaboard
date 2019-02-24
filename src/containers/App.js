import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DrizzleContext } from 'drizzle-react'

const mapStateToProps = state => ({...state})

class AppContainer extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext
          return this.renderContent(drizzle, drizzleState, initialized)
        }}
      </DrizzleContext.Consumer>
    )
  }

  renderContent(drizzle, drizzleState, initialized) {
    if (!initialized) {
      return <p>Loading...</p>
    }

    return <p>Hello, World!</p>
  }
}

export default connect(mapStateToProps)(AppContainer)
