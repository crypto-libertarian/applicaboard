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

    return <Foo drizzle={drizzle} drizzleState={drizzleState}/>
  }
}

class Foo extends React.Component {
  state = { dataKey: null }

  componentDidMount() {
    const { drizzle } = this.props

    const contract = drizzle.contracts.Applicaboard

    const dataKey = contract.methods['getApplicationsCount'].cacheCall()

    this.setState({ dataKey })
  }

  render() {
    const { drizzleState } = this.props

    const contract = drizzleState.contracts.Applicaboard

    const data = contract.getApplicationsCount[this.state.dataKey]

    if (!data) { return <div>0</div> }

    return <p>{data.value}</p>
  }
}

export default connect(mapStateToProps)(AppContainer)
