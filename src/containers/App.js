import React from 'react'
import { connect } from 'react-redux'
import { DrizzleContext } from 'drizzle-react'

import Table from 'react-bootstrap/Table'

const mapStateToProps = state => ({...state})

class AppContainer extends React.Component {
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

    let value = 0

    if (data && data.value) {
      value = parseInt(data.value)
    }

    if (isNaN(value)) {
      value = 0
    }

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Text</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(value)].map((e, i) =>
              <Bar key={i} nr={i} drizzle={drizzle} drizzleState={drizzleState}/>
            )}
          </tbody>
        </Table>
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

    if (!data) { return <tr></tr> }

    const value = data.value

    return (
      <tr>
        <td>{value.applicant}</td>
        <td>{value.text}</td>
        <td>{value.response}</td>
      </tr>
    )
  }
}

export default connect(mapStateToProps)(AppContainer)
