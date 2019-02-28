import React from 'react'
import { connect } from 'react-redux'
import { DrizzleContext } from 'drizzle-react'

import ApplicationsListComponent from '../components/ApplicationsList'

class AppContainer extends React.Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {this.renderContent}
      </DrizzleContext.Consumer>
    )
  }

  renderContent(drizzleContext) {
    const { drizzle, drizzleState, initialized } = drizzleContext

    if (!initialized) {
      return <p>Loading...</p>
    }

    return (
      <ApplicationsListComponent drizzle={drizzle} drizzleState={drizzleState}/>
    )
  }
}

export default connect()(AppContainer)
