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
    const { drizzle, drizzleState } = this.props

    const contract = drizzleState.contracts.Applicaboard

    const data = contract.getApplicationsCount[this.state.dataKey]

    if (!data) { return <div>0</div> }

    const value = parseInt(data.value)

    if (isNaN(value)) { return <div>0</div> }

    return (
      <div>
        <div>{value}</div>
        <div>
          {[...Array(value)].map((e, i) =>
            <Bar key={i} nr={i} drizzle={drizzle} drizzleState={drizzleState}/>
          )}
        </div>
      </div>
    )
  }
}

class Bar extends React.Component {
  state = { dataKey: null }

  componentDidMount() {
    const { drizzle, nr } = this.props

    const contract = drizzle.contracts.Applicaboard

    const dataKey = contract.methods['_applications'].cacheCall(nr)

    this.setState({ dataKey })
  }

  render() {
    const { drizzleState } = this.props

    const contract = drizzleState.contracts.Applicaboard

    const data = contract._applications[this.state.dataKey]

    if (!data) { return <div></div> }

    const value = data.value

    return (
      <div>
        {value.text}
      </div>
    )
  }
}

export default connect(mapStateToProps)(AppContainer)
